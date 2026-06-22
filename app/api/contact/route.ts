import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const RECIPIENT_EMAIL = "milanjohnso09@gmail.com";
const MIN_SUBMISSION_MS = 3000;

function clean(value: string): string {
  return value.trim();
}

export async function POST(req: Request) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
    }

    const data = await req.json();

    const required = ["name", "email", "service", "message"];
    const missing = required.filter(
      (field) => !data[field] || String(data[field]).trim() === ""
    );

    if (missing.length > 0) {
      return NextResponse.json(
        { message: "Please complete all required fields.", missing },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 422 }
      );
    }

    const payload = {
      name: clean(data.name),
      email: data.email,
      phone: data.phone ? clean(data.phone) : "",
      company: data.company ? clean(data.company) : "",
      service: clean(data.service),
      message: clean(data.message),
      companyWebsite: data.companyWebsite ? clean(data.companyWebsite) : "",
    };

    if (payload.companyWebsite !== "") {
      return NextResponse.json({}, { status: 204 });
    }

    const timeSpentMs = Number(data.timeSpentMs) || 0;
    if (timeSpentMs > 0 && timeSpentMs < MIN_SUBMISSION_MS) {
      return NextResponse.json(
        { message: "Please wait a moment before submitting." },
        { status: 429 }
      );
    }

    const subject = `New Contact Form Lead - ${payload.service}`;
    const bodyLines = [
      "You have a new inquiry from your portfolio website.",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Company: ${payload.company}`,
      `Service: ${payload.service}`,
      "",
      "Message:",
      payload.message,
      "",
      "----",
      "Sent from the Webbuild Systems portfolio contact form.",
    ];
    const body = bodyLines.join("\r\n");

    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.SMTP_USER}>`,
      replyTo: `"${payload.name}" <${payload.email}>`,
      to: RECIPIENT_EMAIL,
      subject,
      text: body,
    });

    const confirmationSubject = "Thanks for reaching out to Webbuild Systems";
    const confirmationBody = `Hi ${payload.name},\n\nThanks for contacting Webbuild Systems. I've received your message about "${payload.service}" and will get back to you shortly.\n\nIf you need immediate assistance, reply to this email or call +256744806676.\n\nBest regards,\nMwebesa Johnson`;

    await transporter.sendMail({
      from: `"Webbuild Systems" <${process.env.SMTP_USER}>`,
      to: payload.email,
      subject: confirmationSubject,
      text: confirmationBody,
    }).catch(() => {});

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
