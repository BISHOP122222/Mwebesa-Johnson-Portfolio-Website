'use client'

import { motion } from 'framer-motion'
import { BookOpen, Bot, Calendar, Star, Quote, GraduationCap, ExternalLink } from 'lucide-react'
import { MOODLE_DATA } from '@/lib/data'

export default function MoodleLMS() {
  const { intro, plugins, learning, reference } = MOODLE_DATA

  return (
    <section id="moodle-lms" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-accent-green font-bold tracking-widest uppercase text-sm mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Moodle LMS Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
            Mastering Moodle Through Real-World Plugin Engineering
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-opensans leading-relaxed">
            {intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plugins.map((plugin, index) => (
            <motion.div
              key={plugin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-green to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <Bot className="w-8 h-8 text-white" />
                  ) : (
                    <Calendar className="w-8 h-8 text-white" />
                  )}
                </div>
                <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                  {plugin.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-montserrat">
                {plugin.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {plugin.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {plugin.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-bold text-gray-500 uppercase mb-3 tracking-wide">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {plugin.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                        <Star className="w-3.5 h-3.5 text-accent-green mt-0.5 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800 shadow-lg mb-8">
            <div className="flex items-start space-x-2 mb-6">
              <BookOpen className="w-5 h-5 text-emerald-600 mt-0.5" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-montserrat">
                Learning Journey
              </h3>
            </div>
            <ul className="space-y-3">
              {learning.map((item, i) => (
                <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-emerald-50 dark:from-amber-900/10 dark:to-emerald-900/10 rounded-2xl p-8 border border-amber-200 dark:border-amber-800 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center shrink-0">
                <Quote className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 uppercase tracking-wider">
                  Mentor & Reference
                </p>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {reference.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {reference.role}, {reference.institution}
                </p>
                <a
                  href={`https://wa.me/${reference.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Contact on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
