'use client'

import { motion } from 'framer-motion'
import {
  Award, BookOpen, Code, Heart, Mail, MapPin,
  Phone, Star, Target, User, Zap, Shield,
  Users, Globe, ExternalLink, Download, FileText, CheckCircle,
  Calendar, Lightbulb, Bot
} from 'lucide-react'
import Image from 'next/image'
import { ABOUT_DATA, CERTIFICATES, PERSONAL_INFO } from '@/lib/data'

export default function About() {
  const { timeline, values } = ABOUT_DATA

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
            Engineering Beyond Code — The Webbuild Story
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-opensans">
            We don't just ship products; we build the digital infrastructure that empowers communities and scales businesses across Uganda and beyond.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Image & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-full blur-3xl"></div>
              <Image
                src="/me.jpg"
                alt="Mwebesa Johnson"
                width={300}
                height={300}
                className="relative z-10 w-64 h-64 mx-auto lg:mx-0 rounded-full object-cover object-top shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-montserrat">
                Mwebesa Johnson
              </h3>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 font-opensans leading-relaxed">
                <p>
                  Honestly, my journey into technology didn't start in a high-tech lab. It began in a small town with a big curiosity about how the digital world could actually solve problems for people I knew. As a final-year Computer Science student at Uganda Martyrs University, I've spent thousands of hours learning that code is just a tool—it's the lives we change that matter.
                </p>
                <p>
                  In addition to my studies, co-founding <strong>Webbuild Systems</strong> was a turning point. We noticed that many local businesses and NGOs were being left behind because professional websites were either too expensive or too generic. Therefore, I made it my mission to bridge that gap by offering high-quality, data-driven solutions that businesses in East Africa can actually afford.
                </p>
                <p>
                  When I'm not deep in a React project or analyzing data patterns, you'll likely find me exploring ways to integrate AI into everyday operations. I believe that technology should be an equalizer, and I'm dedicated to making sure our community gets the very best of it.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="/attachments/MWEBESA JOHNSON CV.pdf"
                  download
                  className="px-8 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-primary-blue rounded-full font-bold hover:bg-primary-blue hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>

              {/* Google AI Impact Section */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 text-left">
                <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3 font-montserrat flex items-center">
                  <Bot className="w-5 h-5 mr-2" />
                  How Google AI Powered This Portfolio
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  This entire portfolio was built using <strong>Google Antigravity</strong> and <strong>Gemini 1.5 Pro</strong>.
                  Antigravity acted as an intelligent pair-programmer, helping me:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 mr-2 text-primary-purple shrink-0 mt-0.5" />
                    <span>Scaffold the React project with lightning speed.</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 mr-2 text-primary-purple shrink-0 mt-0.5" />
                    <span>Debug complex CSS and layout issues in real-time.</span>
                  </li>
                  <li className="flex items-start">
                    <Code className="w-4 h-4 mr-2 text-primary-purple shrink-0 mt-0.5" />
                    <span>Integrate a Gemini-powered chatbot to engage visitors.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
              Professional Journey
            </h3>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-primary-blue mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.projects.map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="px-3 py-1 bg-primary-blue/10 text-primary-blue text-sm rounded-full"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-primary-blue to-primary-purple"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Company Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                About Webbuild Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in 2023, Webbuild Systems is a dynamic digital solutions company based in Kampala, Uganda.
                We specialize in creating innovative web solutions that drive business growth and social impact
                across East Africa.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent-gold" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Focus:</strong> NGO & Institutional Systems
                  </span>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-bold text-gray-400 uppercase mb-4">Core Team</p>
                  <div className="flex gap-4">
                    <div className="text-center group">
                      <div className="relative w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-primary-blue group-hover:scale-110 transition-transform">
                        <Image src="/me.jpg" alt="Mwebesa Johnson" fill className="object-cover" />
                      </div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">Johnson</p>
                      <p className="text-[10px] text-gray-500">Lead Dev</p>
                    </div>
                    <div className="text-center group">
                      <div className="relative w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-primary-purple group-hover:scale-110 transition-transform">
                        <Image src="/ocaya isaac.jpeg" alt="Ocaya Isaac" fill className="object-cover" />
                      </div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">Isaac</p>
                      <p className="text-[10px] text-gray-500">Strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-montserrat">
                Our Core Values
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center mx-auto mb-3">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Life & Work Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
              Impact in Action
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Sneak peek into my professional world - from coding marathons to cybersecurity competitions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-3xl overflow-hidden group shadow-lg">
              <Image src="/mwebesa johnson coding.jpg" alt="Mwebesa Johnson coding" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold">Deep Work</p>
                <p className="text-white/70 text-sm">Building complex logic for East African systems.</p>
              </div>
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden group shadow-lg">
              <Image src="/mwebesa johnson in cyber security.jpg" alt="Cybersecurity training" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold">Cyber Performance</p>
                <p className="text-white/70 text-sm">Securing digital infrastructure at the National Cyber Stars.</p>
              </div>
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden group shadow-lg">
              <Image src="/cyber teammates.jpg" alt="Dev Team" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold">Collaboration</p>
                <p className="text-white/70 text-sm">Working with the brightest minds in tech.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificates Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center font-montserrat">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CERTIFICATES.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-t-4 border-accent-gold transition-all"
              >
                <div className="w-12 h-12 bg-accent-gold/10 text-accent-gold rounded-full flex items-center justify-center mr-6">
                  <cert.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{cert.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  <span className="text-xs text-primary-blue mt-1 inline-block">View Document →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
