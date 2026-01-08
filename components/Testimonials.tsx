'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote, Users, Award, TrendingUp, Heart } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'

export default function Testimonials() {
  const testimonials = TESTIMONIALS

  const stats = [
    { number: '12+', label: 'Projects Completed', icon: Award, color: 'text-primary-blue' },
    { number: '98%', label: 'Client Retention', icon: Heart, color: 'text-primary-purple' },
    { number: '3+', label: 'Years Experience', icon: TrendingUp, color: 'text-accent-green' },
    { number: '24/7', label: 'Support Available', icon: Users, color: 'text-accent-gold' }
  ]

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-blue/5 to-primary-purple/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-blue font-bold tracking-widest uppercase text-sm mb-4 block">Endorsements</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
            Voices of Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-opensans leading-relaxed">
            Don't just take our word for it. We take immense pride in the feedback from the organizations and leaders we've helped transform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl relative border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed text-sm md:text-base flex-grow">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
                <div className="w-12 h-12 relative overflow-hidden bg-primary-blue/10 rounded-full flex items-center justify-center text-primary-blue font-bold text-lg">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    testimonial.name[0]
                  )}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {testimonial.role} | {testimonial.institution}
                  </div>
                </div>
              </div>

              {/* Special Tag for Voluntary Work */}
              {testimonial.name === "Kasozi Brian" && (
                <div className="absolute top-4 right-6">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
                    Voluntary Contribution
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
              Our Journey in Numbers
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              These statistics reflect our commitment to delivering exceptional results and building lasting partnerships for regional growth.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner border border-white dark:border-gray-600`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-montserrat tracking-tight">
                  {stat.number}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
