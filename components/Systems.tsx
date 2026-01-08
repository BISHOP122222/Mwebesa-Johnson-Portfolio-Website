'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ChevronRight, Layers, Users, Zap, Globe, Expand, Server, Database, Code, CheckCircle, Layout, ShieldCheck, Eye, AlertTriangle, Lightbulb, Cpu } from 'lucide-react'
import Image from 'next/image'
import { SYSTEMS_DATA } from '@/lib/data'

interface SystemProject {
    id: number
    title: string
    description: string
    longDescription?: string
    problemStatement?: string
    solution?: string
    architecture?: string[]
    challenges?: string[]
    image: string
    alt: string
    tech: string[]
    features: string[]
    impact: string
    githubLink?: string | null
    liveLink?: string | null
    videoUrl?: string | null
    category: string
    testimonial?: {
        text: string
        author: string
        role: string
    }
}

export default function Systems() {
    const [selectedSystem, setSelectedSystem] = useState<SystemProject | null>(null)

    const systems = SYSTEMS_DATA

    return (
        <section id="systems" className="section-padding bg-gray-50 dark:bg-gray-900/50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 text-primary-purple font-bold tracking-widest uppercase text-sm mb-4">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Complex Digital Infrastructure</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                        Enterprise Infrastructure & Automation
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        We engineer the invisible engines that power modern organizations. From mission-critical logistics to automated financial workflows, these systems are built for absolute reliability.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {systems.map((system, index) => (
                        <motion.div
                            key={system.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="aspect-[16/9] overflow-hidden relative">
                                <Image
                                    src={system.image}
                                    alt={system.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>

                                {/* Overlay Tags */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    {system.tech.slice(0, 3).map(t => (
                                        <span key={t} className="px-2 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
                                    {system.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {system.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => setSelectedSystem(system as SystemProject)}
                                        className="inline-flex items-center space-x-2 text-sm font-bold text-primary-purple hover:text-primary-blue transition-colors"
                                    >
                                        <span>Analyze Case Study</span>
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <div className="flex items-center text-xs text-gray-400">
                                        <Zap className="w-3 h-3 mr-1 text-amber-400" />
                                        <span>Operational Excellence</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Case Study Modal */}
            <AnimatePresence>
                {selectedSystem && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSystem(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white dark:bg-gray-800 rounded-3xl w-full max-w-6xl max-h-[95vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative h-64 md:h-80 w-full shrink-0">
                                <Image src={selectedSystem.image} alt={selectedSystem.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                                <button
                                    onClick={() => setSelectedSystem(null)}
                                    className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors z-20"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center space-x-2 text-accent-gold mb-2 font-bold tracking-wider uppercase text-xs">
                                        <Server className="w-4 h-4" />
                                        <span>System Architecture Deep Dive</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-montserrat">
                                        {selectedSystem.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedSystem.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 md:p-12 space-y-12">

                                {/* 1. The Challenge & Solution */}
                                <div className="grid lg:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg mr-4 shrink-0">
                                                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Challenge</h4>
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {selectedSystem.problemStatement || "Identifying the core inefficiency in the existing manual process was key. The system needed to handle high data throughput while remaining intuitive for non-technical staff."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4 shrink-0">
                                                <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Solution</h4>
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {selectedSystem.solution || "We engineered a robust digital transformation plan, automating critical workflows and introducing real-time data visualization."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Stats / Impact */}
                                    <div className="bg-gray-50 dark:bg-gray-700/30 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                            <Zap className="w-5 h-5 mr-2 text-accent-gold" />
                                            System Impact
                                        </h4>
                                        <p className="text-gray-700 dark:text-gray-200 text-lg font-medium italic mb-8">
                                            "{selectedSystem.impact}"
                                        </p>

                                        <div className="flex flex-col gap-3">
                                            {selectedSystem.liveLink && (
                                                <a href={selectedSystem.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full flex items-center justify-center p-3 rounded-lg bg-primary-blue text-white hover:bg-blue-600 transition-colors">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    <span>Launch Live System</span>
                                                </a>
                                            )}
                                            {selectedSystem.githubLink && (
                                                <a href={selectedSystem.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full flex items-center justify-center p-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    <span>Examine Codebase</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Section (New) */}
                                {selectedSystem.testimonial && (
                                    <div className="bg-primary-blue/5 dark:bg-primary-blue/10 p-8 rounded-3xl border border-primary-blue/10">
                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                            <div className="shrink-0">
                                                <div className="w-16 h-16 rounded-full bg-primary-blue flex items-center justify-center text-white text-2xl font-bold">
                                                    {selectedSystem.testimonial.author[0]}
                                                </div>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <p className="text-lg text-gray-700 dark:text-gray-200 italic mb-4 leading-relaxed">
                                                    "{selectedSystem.testimonial.text}"
                                                </p>
                                                <div>
                                                    <h5 className="font-bold text-gray-900 dark:text-white">
                                                        {selectedSystem.testimonial.author}
                                                    </h5>
                                                    <p className="text-sm text-primary-blue font-medium">
                                                        {selectedSystem.testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* 1.5. Video Demo (New Section) */}
                                {selectedSystem.videoUrl && (
                                    <div className="space-y-6">
                                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                                            <div className="bg-primary-blue/10 p-2 rounded-lg mr-3">
                                                <Eye className="w-5 h-5 text-primary-blue" />
                                            </div>
                                            Interactive Demonstration
                                        </h4>
                                        <div className="relative group rounded-2xl overflow-hidden bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-xl aspect-video">
                                            <video
                                                src={selectedSystem.videoUrl}
                                                controls
                                                className="w-full h-full"
                                                poster={selectedSystem.image}
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                )}

                                <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

                                {/* 2. Technical Architecture */}
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                                        <Cpu className="w-6 h-6 mr-3 text-primary-purple" />
                                        Technical Architecture & Logic
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                            <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                                <Layers className="w-4 h-4 mr-2 text-blue-500" />
                                                Stack Components
                                            </h5>
                                            <ul className="space-y-3">
                                                {selectedSystem.architecture ? selectedSystem.architecture.map((item, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 shrink-0"></div>
                                                        {item}
                                                    </li>
                                                )) : (
                                                    <p className="text-gray-500 italic">Architecture details loading...</p>
                                                )}
                                            </ul>
                                        </div>

                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                            <h5 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                                <Code className="w-4 h-4 mr-2 text-purple-500" />
                                                Key Challenges Solved
                                            </h5>
                                            <ul className="space-y-3">
                                                {selectedSystem.challenges ? selectedSystem.challenges.map((item, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                                        <CheckCircle className="w-3.5 h-3.5 text-purple-500 mt-1 mr-2 shrink-0" />
                                                        {item}
                                                    </li>
                                                )) : (
                                                    <p className="text-gray-500 italic">Technical challenges loading...</p>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Core Features */}
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Core Functionalities</h4>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {selectedSystem.features.map(f => (
                                            <div key={f} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
                                                <CheckCircle className="w-4 h-4 text-accent-green mr-3 shrink-0" />
                                                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
