'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Code, CheckCircle2, Rocket } from 'lucide-react'
import { WORKFLOW_STEPS } from '@/lib/data'

export default function Workflow() {
    const steps = WORKFLOW_STEPS

    return (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                        How We Build Success
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-opensans">
                        A proven, transparent process designed to take your idea from concept to reality efficiently.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 -z-10 transform -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg md:bg-transparent md:dark:bg-transparent md:shadow-none md:p-0 text-center group"
                            >
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-montserrat">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
