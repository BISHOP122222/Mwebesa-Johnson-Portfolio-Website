'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import GeminiChatbot from '@/components/GeminiChatbot'
import TechStack from '@/components/TechStack'
import Workflow from '@/components/Workflow'
import Blog from '@/components/Blog'
import Systems from '@/components/Systems'
import GraphicDesign from '@/components/GraphicDesign'
import ResearchProjects from '@/components/ResearchProjects'
import FAQ from '@/components/FAQ'
import WhatsAppCTA from '@/components/WhatsAppCTA'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-secondary-light via-white to-blue-50 dark:from-secondary-dark dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>
          <Hero />
          <TechStack />
          <Portfolio />
          <Systems />
          <Services />
          <GraphicDesign />
          <ResearchProjects />
          <Workflow />
          <About />
          <Testimonials />
          <FAQ />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <GeminiChatbot />
        <WhatsAppCTA />
      </div>
    </div>
  )
}
