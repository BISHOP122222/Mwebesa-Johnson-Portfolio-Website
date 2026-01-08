'use client'

import { motion } from 'framer-motion'
import { Microscope, Code2, AlertCircle, Rocket, BrainCircuit } from 'lucide-react'
import { RESEARCH_PROJECTS } from '@/lib/data'

export default function ResearchProjects() {
    const { hurdles, projects } = RESEARCH_PROJECTS

    return (
        <section id="research" className="section-padding bg-gray-50 dark:bg-gray-800/50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 text-primary-purple font-bold tracking-widest uppercase text-sm mb-4">
                        <Microscope className="w-4 h-4" />
                        <span>Academic Journey & Innovation</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                        Visionary Prototypes & Research
                    </h2>

                    <div className="max-w-3xl mx-auto bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 text-left rounded-r-2xl shadow-sm mb-12">
                        <div className="flex items-start space-x-4">
                            <AlertCircle className="w-6 h-6 text-amber-600 mt-1 shrink-0" />
                            <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                                {hurdles}
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-primary-purple/10 rounded-xl group-hover:scale-110 transition-transform">
                                    <BrainCircuit className="w-6 h-6 text-primary-purple" />
                                </div>
                                <span className="text-[10px] uppercase font-bold text-gray-400 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-gray-50 dark:border-gray-700">
                                    <div className="flex items-center text-xs font-bold text-primary-purple uppercase tracking-tight">
                                        <Rocket className="w-3 h-3 mr-1.5" />
                                        <span>Contribution</span>
                                    </div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200 mt-1 font-medium">
                                        {project.outcome}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
