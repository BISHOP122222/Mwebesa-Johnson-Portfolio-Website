'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Palette, Mail, Phone, Globe, ArrowUp, Zap } from 'lucide-react'
import Image from 'next/image'
import { PERSONAL_INFO } from '@/lib/data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-dark text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/5">
                <Image
                  src="/logo.png"
                  alt="Webbuild Systems Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter font-montserrat">WEBBUILD<span className="text-primary-blue">.</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Engineering high-performance digital ecosystems and strategic infrastructure for the next generation of African enterprises.
            </p>
          </div>

          {/* Core Pillars (Navigation) */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-blue">Ecosystem</h3>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Digital Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Our Capabilities</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Case Studies</a></li>
              <li><a href="#systems" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Infrastructure</a></li>
              <li><a href="#workflow" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>The Process</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"><span className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Common Queries</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-purple">Solutions</h3>
            <ul className="space-y-3 text-[14px]">
              <li className="text-gray-500 hover:text-gray-300 transition-colors cursor-default">Mobile Engineering</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors cursor-default">Process Automation</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors cursor-default">Data Intelligence</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors cursor-default">Cyber Defense</li>
              <li className="text-gray-500 hover:text-gray-300 transition-colors cursor-default">System Architecture</li>
            </ul>
          </div>

          {/* Strategic Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent-gold">Direct Access</h3>
            <div className="space-y-4 text-[14px]">
              <div className="flex items-start space-x-3 text-gray-400 group">
                <Mail className="w-4 h-4 mt-0.5 text-primary-blue group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">milanjohnso09@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 group">
                <Phone className="w-4 h-4 mt-0.5 text-primary-blue group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">+256 780 846138<br />+256 744 806676</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 group">
                <Globe className="w-4 h-4 mt-0.5 text-primary-blue group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">webbuild.acciorg.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bottom Bar */}
        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-[12px] text-gray-500 font-medium">
                © 2026 WEBBUILD SYSTEMS | KAMPALA, UGANDA
              </p>
              <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center space-x-2 text-[10px] text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                <Zap className="w-3 h-3 text-accent-gold animate-pulse" />
                <span className="tracking-wide">Powered by Gemini 1.5 Flash & Engineered with Google Antigravity</span>
              </div>
            </div>

            {/* Social Intelligence */}
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: PERSONAL_INFO.linkedin, title: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/BISHOP122222', title: 'GitHub' },
                { icon: Palette, href: 'https://behance.net/mwebesa-johnson', title: 'Behance' },
                {
                  icon: () => (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ), href: 'https://x.com/milanjohnso09', title: 'X (Twitter)'
                }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 p-2.5 rounded-xl border border-white/10 hover:border-primary-blue/50 hover:bg-white/10 transition-all duration-300"
                  title={social.title}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-primary-blue/80 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-white/10 hover:bg-primary-blue transition-all duration-300 group z-50"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform" />
        </motion.button>
      </div>
    </footer>
  )
}
