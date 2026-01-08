'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageCircle, Code, Globe, Smartphone, Zap, Users, Briefcase, Target } from 'lucide-react'
import Image from 'next/image'
import { PERSONAL_INFO, STATS } from '@/lib/data'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-4 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-primary-blue text-xs font-bold uppercase tracking-widest shadow-sm">
                <Zap className="w-3 h-3" />
                <span>Engineered with Google Antigravity</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                Elite Digital Ecosystems & High-Performance Systems
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold gradient-text mb-4">
                Mwebesa Johnson — Scaling Impact Through Technical Excellence
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 font-opensans leading-relaxed"
            >
              Building a high-impact digital presence shouldn't be an uphill battle. As a senior-track CS engineer and founder of Webbuild Systems, I combine technical precision with a deep focus on the East African landscape to deliver secure, scalable, and truly elite digital infrastructure for businesses and NGOs alike.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="btn-primary group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary group"
              >
                Get Free Consultation
                <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-purple">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-green">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 rounded-full blur-3xl"></div>
                <Image
                  src="/me.jpg"
                  alt="Mwebesa Johnson"
                  width={400}
                  height={400}
                  className="relative z-10 w-80 h-80 mx-auto rounded-full object-cover object-top shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
            >
              <Code className="w-6 h-6 text-primary-blue" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-0 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
            >
              <Globe className="w-6 h-6 text-primary-purple" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
            >
              <Smartphone className="w-6 h-6 text-accent-gold" />
            </motion.div>

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-blue to-primary-purple text-white px-6 py-3 rounded-full shadow-lg font-semibold"
            >
              "Transforming Ideas into Digital Reality"
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
