'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppCTA() {
    const phoneNumber = '256744806676'
    const message = 'Hello Johnson! I saw your portfolio and I am interested in your services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 2 // Show after 2 seconds
            }}
            className="fixed bottom-8 left-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
            aria-label="Contact on WhatsApp"
        >
            <div className="absolute left-full ml-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100 dark:border-gray-700">
                Chat with Johnson
            </div>
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        </motion.a>
    )
}
