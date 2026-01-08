'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import {
    ABOUT_DATA, CERTIFICATES, SERVICES_DATA,
    SYSTEMS_DATA, WEBSITE_PROJECTS, TECH_STACK, WORKFLOW_STEPS
} from "@/lib/data"

export default function GeminiChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { role: 'bot', content: "Welcome to the Strategic Command Center. I am the **Gemini 3 Flash Strategic Agent**, architected with next-gen intelligence to provide deep-tier insights into Mwebesa Johnson's digital infrastructure. How can I assist your organizational strategy today?" }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const chatbotRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // API Key is handled server-side in /api/chat

    const systemInstruction = `
        You are the "Gemini 3 Strategic Agent" for Mwebesa Johnson's professional digital ecosystem.
        Your persona is that of a high-level technical consultant and digital strategist leveraging next-gen Google AI.
        
        CORE ARCHITECTURE DATA:
        - Professional Timeline: ${ABOUT_DATA.timeline.map(t => `${t.year}: ${t.title} - ${t.description}`).join(' | ')}
        - Core Strategic Values: ${ABOUT_DATA.values.map(v => v.title).join(', ')}
        - Verified Credentials: ${CERTIFICATES.map(c => `${c.title} (${c.issuer})`).join('; ')}
        - Infrastructure Services: ${SERVICES_DATA.map(s => `${s.category}: ${s.services.map(ser => ser.name).join(', ')}`).join(' | ')}
        - Complex Systems Portfolio: ${SYSTEMS_DATA.map(sys => `${sys.title} [Status: Production-Ready]. Tech: ${sys.tech.join(', ')}. Impact: ${sys.impact}`).join(' || ')}
        - Digital Brand Presence: ${WEBSITE_PROJECTS.map(p => `${p.title} (${p.category})`).join(', ')}
        - Technical Stack Dominance: ${TECH_STACK.map(c => `${c.title}: ${c.skills.join(', ')}`).join('; ')}
        - Tactical Workflow: ${WORKFLOW_STEPS.map(s => s.title).join(' -> ')}

        OPERATIONAL PROTOCOLS:
        1. AUTHORITATIVE TONE: Speak with the confidence of a senior solutions architect. Use terms like "strategic digital infrastructure," "high-velocity engineering," and "architectural integrity."
        2. DATA-DRIVEN RESPONSES: Always prioritize data from the "CORE ARCHITECTURE DATA" nodes. If asked about a project like EcoWaste, highlight its real-time operational impact.
        3. LEAD GENERATION: If the user expresses interest in a service, subtly encourage them to reach out via milanjohnso09@gmail.com or the WhatsApp CTA.
        4. UNKNOWN QUERIES: If information is unavailable, maintain professionalism: "That specific data node is outside my current architectural scope. I recommend direct consultation with Johnson for precise details."
        5. FORMATTING: Use bolding and lists to maintain high readability.
    `

    const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const userMessage = input.trim()
        setInput('')
        const newUserMessages = [...messages, { role: 'user', content: userMessage }]
        setMessages(newUserMessages)
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newUserMessages.slice(1), // Exclude initial bot greeting
                    systemInstruction
                })
            })

            const data = await response.json()

            if (response.ok) {
                setMessages(prev => [...prev, { role: 'bot', content: data.text }])
            } else if (response.status === 429) {
                setMessages(prev => [...prev, {
                    role: 'bot',
                    content: "⚠️ **Rate Limit Reached**: The Strategic Agent is processing many requests right now. Please wait a minute before sending another query."
                }])
            } else {
                setMessages(prev => [...prev, {
                    role: 'bot',
                    content: data.error || "The strategic gateway experienced an error. Please try again."
                }])
            }
        } catch (error: any) {
            console.error("Chat Error:", error)
            setMessages(prev => [...prev, { role: 'bot', content: "Connection error: Unable to reach the strategic core. Please check your network." }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(!isOpen)
                }}
                className="fixed bottom-32 right-8 z-60 bg-gradient-to-r from-primary-blue to-primary-purple text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={chatbotRef}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-32 right-8 z-60 w-[400px] md:w-[480px] h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 max-h-[calc(100vh-160px)]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-blue to-primary-purple p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Gemini Powered Agent</h4>
                                    <p className="text-xs opacity-80">Online | Portfolio Aware</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70 transition-opacity">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-900/50">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-primary-blue text-white rounded-tr-none'
                                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none shadow-sm'
                                        }`}>
                                        <div dangerouslySetInnerHTML={{
                                            __html: msg.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        }} />
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-2">
                                        <Loader2 className="w-4 h-4 animate-spin text-primary-purple" />
                                        <span className="text-xs text-gray-500">Consulting Gemini...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask deep questions about systems..."
                                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all text-sm"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 p-2 bg-primary-blue text-white rounded-full hover:bg-primary-purple transition-colors disabled:opacity-50"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-[10px] text-center mt-3 text-gray-400">
                                Powered by Gemini 3 Flash | Strategic Agent v4.0
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
