'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PARTNERS_LOGOS } from '@/lib/data'

const Partners = () => {
    return (
        <section className="py-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-y border-gray-200 dark:border-gray-800">
            <div className="max-container">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Trusted by Elite Institutions & Partners
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center w-full max-w-4xl opacity-70 hover:opacity-100 transition-opacity">
                        {PARTNERS_LOGOS.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="h-12 w-32 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {partner.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
