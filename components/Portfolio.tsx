'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Globe, Users, Heart, X, Play, Target, Lightbulb, Layers } from 'lucide-react'
import Image from 'next/image'
import { WEBSITE_PROJECTS } from '@/lib/data'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  alt?: string
  tech: string[]
  liveLink: string | null
  githubLink: string | null
  features: string[]
  impact: string
  problemStatement?: string
  solution?: string
  architecture?: string[]
  videoUrl?: string | null
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filters = ['All', 'NGOs', 'Business', 'Portfolios']
  const projects = WEBSITE_PROJECTS

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
            Digital Solutions Showcase
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From high-fidelity corporate portals to specialized digital products, we deliver refined experiences that drive engagement across East Africa.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                ? 'bg-primary-blue text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt || project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white text-primary-blue rounded-full hover:scale-110 transition-transform shadow-xl"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-primary-blue rounded-full hover:scale-110 transition-transform shadow-xl"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-bold text-primary-purple bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full mb-4 inline-block">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 px-2 py-1">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              ></motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-white dark:bg-gray-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-primary-blue text-sm font-semibold">
                      <span>{selectedProject.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 font-normal">Web Solution</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Video or Image */}
                  <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-inner">
                    {selectedProject.videoUrl ? (
                      <div className="aspect-video relative group">
                        <video
                          src={selectedProject.videoUrl}
                          controls
                          className="w-full h-full object-cover"
                          poster={selectedProject.image}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div className="aspect-video relative">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Eye className="w-5 h-5 mr-2 text-primary-blue" />
                          Project Overview
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-primary-purple" />
                          Core Features
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {selectedProject.problemStatement && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-red-500" />
                            The Challenge
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                            {selectedProject.problemStatement}
                          </p>
                        </div>
                      )}

                      {selectedProject.solution && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                            The Solution
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                            {selectedProject.solution}
                          </p>
                        </div>
                      )}

                      {selectedProject.architecture && (
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Layers className="w-5 h-5 mr-2 text-green-500" />
                            Architecture
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.architecture.map((item, index) => (
                              <span key={index} className="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/30 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                          Outcome & Impact
                        </h4>
                        <p className="text-gray-800 dark:text-gray-200 text-sm font-medium italic">
                          "{selectedProject.impact}"
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        {selectedProject.liveLink && (
                          <a
                            href={selectedProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-blue text-white p-3 rounded-xl flex items-center justify-center font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            Visit Live Site
                          </a>
                        )}
                        {selectedProject.githubLink && (
                          <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-xl flex items-center justify-center font-bold text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
