'use client'

import { motion } from 'framer-motion'
import {
  Code, Globe, Smartphone, Palette, TrendingUp, Users, Shield, Zap,
  Bot, BarChart3, Server, Lock, Layers, FileText, Heart, Terminal,
  Database, Layout, ShieldCheck, Lightbulb, Briefcase, GraduationCap
} from 'lucide-react'
import { SERVICES_DATA, SERVICE_FEATURES } from '@/lib/data'

export default function Services() {
  const services = SERVICES_DATA
  const features = SERVICE_FEATURES

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
            Strategic Digital Excellence & Core Infrastructure
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-opensans leading-relaxed">
            We don't just build websites; we engineer the high-performance digital ecosystems that power modern organizations. Our solutions are designed for those who demand absolute reliability, scalability, and strategic impact.
          </p>
        </motion.div>

        {/* Services Strategic Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="card h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary-blue/30 transition-all duration-300 shadow-xl p-8 relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary-blue/5 to-primary-purple/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                      {(() => {
                        const Icon = category.icon as any
                        return <Icon className="w-6 h-6" />
                      })()}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-montserrat leading-tight">
                      {category.category}
                    </h3>
                  </div>

                  {category.services.map((service, serviceIndex) => (
                    <div key={service.name} className="space-y-4">
                      <div className="flex justify-between items-start border-b border-gray-100 dark:border-gray-700 pb-4 mb-4">
                        <div className="text-sm font-bold text-primary-blue uppercase tracking-wider">
                          {service.price}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-primary-blue rounded-full shrink-0"></div>
                            <span className="text-[13px] leading-tight font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {service.deliverables && (
                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                          <h4 className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-[0.2em] mb-3">
                            Strategic Deliverables
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((d, i) => (
                              <span key={i} className="text-[10px] px-2 py-1 bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded border border-gray-100 dark:border-gray-600">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 font-montserrat">
            Why Choose Webbuild Systems?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
