'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#portfolio' },
    { name: 'Infrastructure', href: '#systems' },
    { name: 'Graphics', href: '#graphics' },
    { name: 'Research', href: '#research' },
    { name: 'Process', href: '#workflow' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/attachments/MWEBESA JOHNSON CV.pdf', isDownload: true },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-custom shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Webbuild Systems Logo"
              width={100}
              height={100}
              className="w-24 h-24"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isDownload ? (
                <motion.a
                  key={item.name}
                  href={item.href}
                  download
                  whileHover={{ y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {item.name}
                </motion.a>
              ) : (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-blue font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.button>
              )
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-gray-900 rounded-lg mt-4 shadow-lg overflow-hidden"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  item.isDownload ? (
                    <a
                      key={item.name}
                      href={item.href}
                      download
                      className="block w-full text-left px-4 py-2 text-primary-blue font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-blue dark:hover:text-primary-blue transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
