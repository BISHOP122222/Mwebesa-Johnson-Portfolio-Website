'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye, Palette, BarChart3, ChevronRight, Zap, Target } from 'lucide-react'
import Image from 'next/image'
import { GRAPHIC_DESIGN_PROJECTS } from '@/lib/data'

interface DesignProject {
    id: number
    title: string
    description: string
    image: string
    tech: string[]
    features: string[]
    impact: string
}

export default function GraphicDesign() {
    const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null)

    const projects = GRAPHIC_DESIGN_PROJECTS

    return (
        <section id="graphics" className="section-padding bg-white dark:bg-gray-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 text-primary-blue font-bold tracking-widest uppercase text-sm mb-4">
                        <Palette className="w-4 h-4" />
                        <span>Visual Storytelling & Insights</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                        Visual Identity & Brand Strategy
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        We define the visual heartbeat of your brand. From high-impact marketing collateral to cohesive corporate identities that command attention.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="aspect-square overflow-hidden relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <button
                                        onClick={() => setSelectedProject(project as DesignProject)}
                                        className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-xl"
                                    >
                                        <Eye className="w-4 h-4" />
                                        <span>View Details</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] uppercase font-bold text-primary-blue bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white dark:bg-gray-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-gray-700 rounded-full transition-colors z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-contain bg-gray-50 dark:bg-gray-900" />
                                </div>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-montserrat">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-gray-900 dark:text-white flex items-center">
                                            <Target className="w-5 h-5 mr-2 text-primary-blue" />
                                            Key Deliverables
                                        </h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {selectedProject.features.map(f => (
                                                <div key={f} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                                    <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                                                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-primary-blue/5 dark:bg-primary-blue/10 p-6 rounded-2xl border border-primary-blue/10">
                                        <h4 className="text-sm font-bold text-primary-blue uppercase tracking-widest mb-2 flex items-center">
                                            <Zap className="w-4 h-4 mr-2" />
                                            Impact
                                        </h4>
                                        <p className="text-gray-800 dark:text-gray-200 font-medium italic">
                                            "{selectedProject.impact}"
                                        </p>
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
