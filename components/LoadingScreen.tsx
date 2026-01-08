'use client'

import { motion } from 'framer-motion'
import { Code, Globe, Smartphone, Palette } from 'lucide-react'

export default function LoadingScreen() {
  const icons = [Code, Globe, Smartphone, Palette]
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-blue via-primary-purple to-blue-600 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat">
            Mwebesa Johnson
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-opensans">
            Transforming Ideas into Digital Reality
          </p>
        </motion.div>
        
        <div className="flex justify-center space-x-4 mb-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Icon className="w-8 h-8 text-white animate-pulse" />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="w-64 h-2 bg-white rounded-full mx-auto"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mt-4 text-lg"
        >
          Loading your digital experience...
        </motion.p>
      </div>
    </div>
  )
}
