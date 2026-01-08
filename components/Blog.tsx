'use client'

import { motion } from 'framer-motion'
import {
    ArrowRight, BookOpen, Clock, Tag,
    MessageSquare, Share2, Lightbulb
} from 'lucide-react'

const articles = [
    {
        title: "The Mobile Money Revolution: Scaling Local Business in Uganda",
        excerpt: "According to recent World Bank data, mobile money has become the backbone of the Ugandan economy. We explore how integrating these payment gateways can double your sales potential.",
        date: "Dec 15, 2025",
        readTime: "6 min read",
        tag: "Fintech",
        color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
        link: "https://www.worldbank.org/en/country/uganda/overview"
    },
    {
        title: "Digital Inclusion: Why NGOs are Moving to Cloud-Based Systems",
        excerpt: "UNICEF's reports highlight that digital visibility is now a requirement for donor trust. Learn how we built the Broken Chalk portal to reach thousands of students globally.",
        date: "Nov 28, 2025",
        readTime: "8 min read",
        tag: "Social Impact",
        color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
        link: "https://www.unicef.org/uganda/"
    },
    {
        title: "Uganda's 2026 Digital Outlook: Preparing for the Next Big Wave",
        excerpt: "With the increase in internet penetration across the country, businesses in Kampala and Hima must adapt or risk becoming invisible. Here is what's coming next.",
        date: "Nov 10, 2025",
        readTime: "5 min read",
        tag: "Future Tech",
        color: "text-green-500 bg-green-50 dark:bg-green-900/20",
        link: "https://www.monitor.co.ug/uganda/business"
    }
]

export default function Blog() {
    return (
        <section id="blog" className="section-padding bg-white dark:bg-gray-800/50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 text-primary-blue font-bold tracking-widest uppercase text-sm mb-4">
                        <Lightbulb className="w-4 h-4" />
                        <span>Digital Insights & Stories</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                        Insights & Real-World Impact
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Data and code are powerful, but they mean very little without context. Therefore, we share these stories from the field to show how technology is truly transforming the East African landscape.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${article.color}`}>
                                    {article.tag}
                                </span>
                                <div className="flex items-center space-x-2 text-xs text-gray-400">
                                    <Clock className="w-3 h-3" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat leading-tight group-hover:text-primary-blue transition-colors">
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    {article.title}
                                </a>
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                                {article.excerpt}
                            </p>

                            <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                <span className="text-xs text-gray-400 font-medium">{article.date}</span>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 text-primary-blue font-bold text-sm"
                                >
                                    <span>Read Story</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
                    >
                        <BookOpen className="w-5 h-5" />
                        <span>View All Insights</span>
                    </motion.button>
                </div>
            </div>
        </section>
    )
}
