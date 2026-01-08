import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: Request) {
    try {
        const { messages, systemInstruction } = await req.json();

        if (!apiKey) {
            return NextResponse.json({ error: "API Key is missing" }, { status: 500 });
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview",
            generationConfig: {
                temperature: 0.7,
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 2048,
            },
        });

        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: `CONTEXT_INITIALIZATION: ${systemInstruction}\n\nYou are now initialized. Respond only to user queries.` }]
                },
                {
                    role: 'model',
                    parts: [{ text: "Context initialized. I am Mwebesa Johnson's Strategic AI Assistant." }]
                },
                ...messages.map((msg: any) => ({
                    role: msg.role === 'bot' ? 'model' : 'user',
                    parts: [{ text: msg.content }]
                }))
            ]
        });

        const userMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ text });

    } catch (error: any) {
        console.error("Gemini API Error:", error);

        // Check for 429 Too Many Requests
        if (error.status === 429 || error.message?.includes("429")) {
            return NextResponse.json({
                error: "The AI is currently processing a high volume of strategic queries. Please pause for 60 seconds and try again.",
                isRateLimited: true
            }, { status: 429 });
        }

        return NextResponse.json({ error: "The strategic gateway is experiencing a temporary disruption. Please try again." }, { status: 500 });
    }
}
