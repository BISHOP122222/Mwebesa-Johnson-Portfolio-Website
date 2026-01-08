'use client'

import { motion } from 'framer-motion'
import {
    Code, Database, Bot, Terminal, Blocks, Cpu, Globe,
    Layout, Settings, Server, GitBranch, Cloud
} from 'lucide-react'
import { TECH_STACK } from '@/lib/data'

export default function TechStack() {
    const skillCategories = TECH_STACK

    return (
        <section id="tech-stack" className="section-padding bg-white dark:bg-gray-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                        My Technical Arsenal
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-opensans">
                        I don't just use tools; I master them. My stack is chosen for speed, scalability, and modern best practices.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-md`}>
                                <category.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
