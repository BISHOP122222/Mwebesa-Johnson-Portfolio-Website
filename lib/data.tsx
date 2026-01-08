import {
    Award, BookOpen, Code, Heart, Mail, MapPin,
    Phone, Star, Target, User, Zap, Shield,
    Users, Globe, ExternalLink, Download, FileText, CheckCircle,
    Calendar, Lightbulb, Bot, Smartphone, BarChart3, Server,
    ShieldCheck, Layers, Briefcase, Database, Layout, Settings,
    Search, Palette, CheckCircle2, Rocket, Code2, Cpu, Lock
} from 'lucide-react'

// --- ABOUT SECTION DATA ---

export const PERSONAL_INFO = {
    name: "Mwebesa Johnson",
    subtitle: "High-Impact Digital Solutions",
    location: "Kasese, Western Region, Uganda",
    email: "milanjohnso09@gmail.com",
    phones: ["0780846138", "074480667"],
    linkedin: "https://www.linkedin.com/in/mwebesa-johnson-94a73733b/",
    openTo: ["Data Analyst", "Web Developer", "Systems Developer", "Mobile App Developer", "SEO Specialist", "Graphic Designer"],
    languages: ["English", "Runyankole", "Luganda", "Rutooro", "Rukiga"]
}

export const ABOUT_DATA = {
    timeline: [
        {
            year: 'May 2025 - July 2025 (3 Months)',
            title: 'Remote Internship – Web & Mobile App Developer',
            description: 'JBLabsUg / MME Impact Lab. Full-stack development internship focusing on organizational websites (WordPress/Python) and Flutter UI components under Mr. Muganji Julius.',
            projects: ['JBLabs Website', 'Flutter UI Components'],
            icon: Briefcase
        },
        {
            year: '2023 - 2026',
            title: 'BSc. Computer Science (Final Year)',
            description: 'Uganda Martyrs University. Focused on Mobile App Development, Web Development, and Data Structures.',
            projects: ['Mobile Apps', 'Data Structures'],
            icon: Award
        },
        {
            year: '2023 - Present',
            title: 'Co-founded Webbuild Systems',
            description: 'Establishing a digital solutions company focused on East African markets, specializing in web and app development.',
            projects: ['System Design', 'Service Portfolio'],
            icon: Users
        },
        {
            year: 'Jan 2025 - Present',
            title: 'AI-Powered Excellence Initiative',
            description: 'Integrated Advanced Agentic AI (Gemini 3 Flash) into the development workflow, enabling 10x faster system delivery while maintaining elite code integrity and security.',
            projects: ['AI Systems', 'Next-Gen Architecture'],
            icon: Zap
        },
        {
            year: '2024',
            title: 'Stock Taker | Hima Cement',
            description: 'Managed inventory referencing and troubleshooting, ensuring accurate stock counts during seasonal operations.',
            projects: ['Inventory Tracking', 'Operations'],
            icon: Target
        }
    ],
    values: [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We stay ahead of technology trends to deliver cutting-edge solutions'
        },
        {
            icon: Target,
            title: 'Excellence',
            description: 'Every project is crafted with attention to detail and quality assurance'
        },
        {
            icon: Users,
            title: 'Partnership',
            description: 'We work closely with clients to understand their unique needs and goals'
        },
        {
            icon: Globe,
            title: 'Impact',
            description: 'Our solutions drive real business growth and social impact'
        }
    ]
}

export const CERTIFICATES = [
    {
        title: 'Career Essentials in Data Analysis',
        issuer: 'Microsoft & LinkedIn',
        file: '/attachments/certificates/CertificateOfCompletion_Career Essentials in Data Analysis by Microsoft and LinkedIn.pdf',
        icon: Award
    },
    {
        title: 'National Final Cyber Stars Competition 2025',
        issuer: 'Cyber Stars',
        file: '/attachments/certificates/Certificate CyberSecurity.pdf',
        icon: Shield
    },
    {
        title: 'Soft Skills Zoom Training Uganda Certificate',
        issuer: 'Zoom Training Uganda',
        file: '/attachments/certificates/MWEBESA JOHNSON_Certificate_[5].pdf',
        icon: Users
    },
    {
        title: 'Introduction to Career Skills in Data Analytics',
        issuer: 'LinkedIn',
        file: '/attachments/certificates/Certificate Data Analytics 1.pdf',
        icon: BarChart3
    },
    {
        title: 'Learning Data Analytics (Parts 1 & 2)',
        issuer: 'LinkedIn',
        file: '/attachments/certificates/Certificate Data Analytics 2.pdf',
        icon: BarChart3
    },
    {
        title: 'Cisco Certified Network Associate (CCNA)',
        issuer: 'Cisco',
        file: '/attachments/certificates/Cisco_Certificate.pdf',
        icon: Shield
    }
]

// --- SERVICES SECTION DATA ---

export const SERVICES_DATA = [
    {
        category: 'Elite Mobile Engineering',
        icon: Smartphone,
        color: 'from-blue-600 to-blue-700',
        services: [
            {
                name: 'Native & Cross-Platform Systems',
                price: 'From 2.5M UGX',
                description: 'High-performance mobile solutions that live in your users\' pockets, engineered for speed and precision.',
                features: [
                    'Android Core Development (Kotlin)',
                    'Multi-platform Reach (Flutter)',
                    'Secure Biometric & Social Auth',
                    'Firebase Real-time Ecosystems',
                    'Interactive Data-driven UI',
                    'Offline-First Functionality'
                ],
                deliverables: [
                    'Production-ready App Store Builds',
                    'Source Code & API Keys',
                    '3 Months Post-Launch Support'
                ]
            }
        ]
    },
    {
        category: 'Intelligent Process Automation',
        icon: Bot,
        color: 'from-purple-600 to-purple-700',
        services: [
            {
                name: 'AI & Operational Efficiency',
                price: 'Custom Quote',
                description: 'We build the intelligent engines that eliminate repetitive tasks and scale your business logic.',
                features: [
                    'Custom LLM & AI Integrations',
                    'Automated Python/Bash Workflows',
                    'Intelligent Server & Health Monitoring',
                    'Strategic Data Processing Pipelines',
                    'Automated Backup & Disaster Recovery',
                    'Custom Enterprise AI Utilities'
                ],
                deliverables: [
                    'Deployment-ready AI Modules',
                    'Automation Audit & Report',
                    'Integrated Dashboard for Monitoring'
                ]
            }
        ]
    },
    {
        category: 'Strategic Data Intelligence',
        icon: BarChart3,
        color: 'from-cyan-600 to-cyan-700',
        services: [
            {
                name: 'Business Insight Ecosystems',
                price: 'Custom Quote',
                description: 'Turning raw digital noise into clear, actionable visual narratives that guide your decision making.',
                features: [
                    'Executive Power BI Dashboards',
                    'Advanced SQL Data Engineering',
                    'Complex Data Transformation & ETL',
                    'Scalable Business Intelligence Systems',
                    'Custom Analytical API Integration',
                    'Strategic Organizational Reporting'
                ],
                deliverables: [
                    'Interactive Data Dashboards',
                    'Comprehensive Data Audit',
                    'Stakeholder Analysis Report'
                ]
            }
        ]
    },
    {
        category: 'Architectural Strategy & Scaling',
        icon: Layers,
        color: 'from-indigo-600 to-indigo-700',
        services: [
            {
                name: 'Infrastructure & Systems Design',
                price: 'Custom Quote',
                description: 'Blueprint for reliability. We plan the structural foundation that allows your digital products to scale.',
                features: [
                    'Enterprise ICT Blueprinting',
                    'Seamless Virtualization & Cloud Migration',
                    'High-Availability Architecture Design',
                    'Disaster Recovery & Business Continuity',
                    'Strategic Infrastructure Health Audits',
                    'Massive-Scale Institutional Planning'
                ],
                deliverables: [
                    'Full Technical Blueprint',
                    'Infrastructure Audit Report',
                    'Scaling Roadmap'
                ]
            }
        ]
    },
    {
        category: 'Mission-Critical Backends',
        icon: Server,
        color: 'from-slate-700 to-slate-800',
        services: [
            {
                name: 'Secure Core Development',
                price: 'Custom Quote',
                description: 'Robust server-side engineering that ensures your data is handled with absolute speed and security.',
                features: [
                    'High-Concurrence Node.js Systems',
                    'Strategic RESTful & GraphQL APIs',
                    'Secure Identity & Access Management',
                    'Optimized Database Architecture',
                    'Automated Communication Pipelines',
                    'Elite Environment Configuration'
                ],
                deliverables: [
                    'Scalable API Documentation',
                    'Secure Database Schema',
                    'Postman Documentation Suite'
                ]
            }
        ]
    },
    {
        category: 'Security & Infrastructure Defense',
        icon: Lock,
        color: 'from-orange-600 to-orange-700',
        services: [
            {
                name: 'Systems & Server Guardianship',
                price: 'Custom Quote',
                description: 'Hardening your digital borders. We protect your most valuable assets through strategic administration.',
                features: [
                    'Elite Linux Administration (Ubuntu/Debian)',
                    'Granular User Access Governance (RBAC)',
                    'Hardened Server Configurations',
                    'Proactive Resource Monitoring',
                    'Continuous Security Integrity Audits',
                    'Automated Threat Response Systems'
                ],
                deliverables: [
                    'Security Audit Summary',
                    'Access Control Matrix',
                    'Infrastructure Health Report'
                ]
            }
        ]
    },
    {
        category: 'High-Fidelity Experience Design',
        icon: Layout,
        color: 'from-pink-600 to-pink-700',
        services: [
            {
                name: 'UI/UX & Product Experience',
                price: 'From 500k UGX',
                description: 'User-centric interfaces that blend aesthetic beauty with psychological precision for maximum engagement.',
                features: [
                    'Interactive Figma Prototypes',
                    'Full-Spectrum Mobile & Web UI',
                    'High-Detail Operational Dashboards',
                    'Conversion-Focused Landing Pages',
                    'Cohesive Digital Brand Identities',
                    'User Journey Mapping & Testing'
                ],
                deliverables: [
                    'Figma Source Files',
                    'High-Res Design Assets',
                    'Design System Documentation'
                ]
            }
        ]
    },
    {
        category: 'Strategic Technical Documentation',
        icon: FileText,
        color: 'from-teal-600 to-teal-700',
        services: [
            {
                name: 'Architecture & Project Narratives',
                price: 'Custom Quote',
                description: 'Professional technical writing that translates complex engineering into clear stakeholder value.',
                features: [
                    'Detailed System User Manuals',
                    'Strategic Academic & Business Proposals',
                    'Comprehensive ICT Impact Reports',
                    'Engineering-Level Documentation',
                    'Client-Facing Technical Summaries',
                    'Technical Internship & Project Reports'
                ],
                deliverables: [
                    'Professional PDF Documents',
                    'Editable Source (Markdown/Word)',
                    'Strategic Implementation Guides'
                ]
            }
        ]
    },
    {
        category: 'Solutions for Social Impact & Governance',
        icon: Heart,
        color: 'from-rose-600 to-rose-700',
        services: [
            {
                name: 'Ecosystems for Good',
                price: 'Custom Quote',
                description: 'Specialized digital infrastructure designed to empower NGOs, schools, and community organizations.',
                features: [
                    'End-to-End Donation Ecosystems',
                    'Interactive Educational Portals',
                    'Strategic Community Hubs',
                    'Non-Profit Digital Transformation',
                    'Automated Institutional Workflows',
                    'Mission-Driven Brand Architecture'
                ],
                deliverables: [
                    'Impact-Driven Digital Platform',
                    'Stakeholder Onboarding Guide',
                    'Success Metrics Dashboard'
                ]
            }
        ]
    },
    {
        category: 'Launch Strategy & Ecosystem Tuning',
        icon: Briefcase,
        color: 'from-emerald-600 to-emerald-700',
        services: [
            {
                name: 'Deployment & Continuity',
                price: 'Strategic Bonus',
                description: 'We don\'t just build; we ensure your transition to stable, production-ready environments is seamless.',
                features: [
                    'Elite Hosting & Server Provisioning',
                    'Zero-Downtime Deployment Workflows',
                    'Scale-Ready Domain Strategy',
                    'Technical Mentorship & Training',
                    'Startup Architecture Consulting',
                    'Legacy-to-Cloud Modernization'
                ],
                deliverables: [
                    'Deployment Certification',
                    'Training Session for Teams',
                    'Post-Launch Optimization Report'
                ]
            }
        ]
    }
]

export const SERVICE_FEATURES = [
    { icon: Shield, title: 'Secure Hosting', description: 'Enterprise-grade security' },
    { icon: Zap, title: 'Fast Performance', description: 'Optimized for speed' },
    { icon: Users, title: '24/7 Support', description: 'Always here to help' },
    { icon: Globe, title: 'Global CDN', description: 'Worldwide accessibility' }
]

// --- PROJECTS / SYSTEMS DATA ---

export const SYSTEMS_DATA = [
    {
        id: 1,
        title: 'EcoWaste Management System',
        description: 'A comprehensive operational control center designed for smart campuses and urban areas to manage waste collection in real-time.',
        longDescription: 'EcoWaste is a full-stack IoT-enabled platform that revolutionizes how institutions categorize, track, and dispose of waste. By integrating real-time GPS tracking with a dynamic scheduling engine, the system eliminates overflow issues and optimizes collector routes.',
        problemStatement: 'Urban campuses faced a 35% weekly overflow rate due to static, inefficient collection schedules. Administrators lacked visibility into collector locations.',
        solution: 'We built a reactive system where bin statuses are updated in real-time. The "Smart Scheduler" algorithm auto-assigns collectors based on proximity and vehicle capacity.',
        architecture: [
            'Frontend: React.js with Leaflet Maps',
            'Backend: Node.js (Express) REST API',
            'Database: PostgreSQL (Prisma ORM)',
            'Real-time: Socket.io for live updates'
        ],
        challenges: [
            'Handling concurrent GPS updates from multiple collectors.',
            'Designing a "Heat Map" algorithm for overflow zones.',
            'Optimizing route calculation for university roads.'
        ],
        image: '/attachments/screenshots/my projects/EcoWaste.jpeg',
        alt: 'EcoWaste Management System Dashboard - Real-time waste tracking Uganda',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Google Maps API'],
        features: [
            'Real-time Overflow Monitoring',
            'Automated Collection Scheduling',
            'Collector GPS Tracking',
            'Citizen Complaint Portal',
            'Dynamic Operational Dashboard',
            'Route Optimization'
        ],
        impact: 'Reduced waste collection delays by 35% and improved campus cleanliness ratings.',
        githubLink: 'https://github.com/BISHOP122222',
        liveLink: null,
        videoUrl: null,
        category: 'System'
    },
    {
        id: 2,
        title: 'Trust POS & Inventory',
        description: 'High-performance Point of Sale and Inventory management system for retail businesses, featuring advanced analytics and multi-user support.',
        longDescription: 'TrustPOS is built for speed and accuracy in high-volume retail environments. It handles serialized inventory tracking and provides granular profit/loss reports per cashier session.',
        problemStatement: 'Retailers were losing revenue due to untracked stock shrinkage and inability to trace warranty returns for specific electronic units.',
        solution: 'Implemented a "Double-Ledger" inventory system where every stock movement is recorded with unique identifiers for high-value items.',
        architecture: [
            'Frontend: Next.js (App Router)',
            'State Management: Zustand',
            'Database: PostgreSQL with Prisma',
            'Security: Role-Based Access Control (RBAC)'
        ],
        challenges: [
            'Optimizing search performance for 100,000+ serialized items.',
            'Ensuring offline capabilities for sales processing.',
            'Building a dynamic receipt generator for thermal printers.'
        ],
        image: '/attachments/screenshots/my projects/Trust POS.png',
        alt: 'Trust POS and Inventory management system development Kampala',
        tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Recharts'],
        features: [
            'Serialized Inventory Tracking',
            'Real-time Sales Analytics',
            'Low Stock Alerts',
            'Custom Invoice Generation',
            'Role-based Access Control',
            'Multi-currency Support'
        ],
        impact: 'Streamlined retail operations for 5+ local businesses with 100% inventory accuracy.',
        githubLink: 'https://github.com/BISHOP122222',
        liveLink: null,
        videoUrl: '/attachments/videos/Trust POS_demo.mp4',
        category: 'System'
    },
    {
        id: 3,
        title: 'Church Management System',
        description: 'A dedicated digital platform for modern ministries to manage membership, Tithes, and liturgical events with ease.',
        longDescription: 'A holistic SaaS solution for religious institutions to digitize their administrative workflows, including member spiritual journeys and financial tithe audits.',
        problemStatement: 'Ministries relied on paper records, leading to lost member data and lack of transparency in financial reporting.',
        solution: 'Developed a secure portal where treasurers can input tithes and pastors can track member attendance and engagement with automated notifications.',
        architecture: [
            'Framework: Laravel (PHP)',
            'Database: MySQL',
            'Integrations: SMS API',
            'Frontend: Bootstrap & jQuery'
        ],
        challenges: [
            'Ensuring data privacy for sensitive counseling records.',
            'Designing a "Family Unit" data structure.',
            'Automating financial reports against bank deposits.'
        ],
        image: '/attachments/screenshots/my projects/Church.png',
        alt: 'Church Management System - Digital Tithe and Membership tracking Uganda',
        tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
        features: [
            'Membership Database',
            'Tithe & Contribution Tracking',
            'Event & Calendar Management',
            'Departmental Workflows',
            'Financial Reporting',
            'Sms Notifications'
        ],
        impact: 'Digitized operations for 3+ major ministries, improving financial transparency.',
        githubLink: null,
        liveLink: null,
        videoUrl: null,
        category: 'System'
    },
    {
        id: 4,
        title: 'UMU Requisition System',
        description: 'An institutional procurement and approval workflow system built to streamline requisitioning in educational environments.',
        longDescription: 'The UMU Requisition System digitizes the university procurement paper trail with a multi-stage approval pipeline and budget threshold tracking.',
        problemStatement: 'Requisitions took weeks to process physically. There was no real-time tracking of budget utilization.',
        solution: 'A digital workflow engine that routes requests automatically with email notifications and automated budget locks.',
        architecture: [
            'Frontend: React with Material UI',
            'Backend: Node.js (Express)',
            'Logic: State Machine pattern for approval statuses',
            'Database: PostgreSQL with Audit Logs'
        ],
        challenges: [
            'Mapping complex, non-linear institutional approval hierarchies.',
            'Handling legally binding digital signatures.',
            'Preventing race conditions in budget allocations.'
        ],
        image: '/attachments/screenshots/my projects/umu requisition.png',
        alt: 'Institutional Requisition and Procurement System Uganda Martyrs University',
        tech: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
        features: [
            'Multi-level Approval Workflow',
            'Procurement Tracking',
            'Budget Management',
            'Digital Signatures',
            'Audit Logs',
            'Real-time Notifications'
        ],
        impact: 'Reduced procurement processing time by 50% for institutional departments.',
        githubLink: null,
        liveLink: null,
        videoUrl: null,
        testimonial: {
            text: "Mwebesa voluntarily engineered our institutional requisition system, replacing months of paper-based delays with a digital workflow. His dedication speaks volumes of his character.",
            author: "Kasozi Brian",
            role: "Head of Science Faculty, UMU"
        },
    }
]

export const WEBSITE_PROJECTS = [
    {
        id: 3,
        title: 'ACCI (Apostolic Caring Community Int.)',
        category: 'NGOs',
        description: 'We designed a welcoming digital home for ACCI to help them connect with global donors and showcase the real human impact of their community programs.',
        image: '/acci.png',
        alt: 'Professional NGO website development for Apostolic Caring Community International Uganda',
        tech: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://acciorg.com/',
        githubLink: null,
        features: ['Event Management', 'Resource Library', 'Contact Forms', 'News Updates'],
        impact: 'Enhanced community engagement and information sharing',
        problemStatement: 'ACCI lacked a digital platform to showcase their humanitarian work, leading to missed donor opportunities.',
        solution: 'Developed a visually warm, story-driven website that prioritizes human impact and clear calls to action for donations.',
        architecture: ['Mobile-responsive HTML/CSS', 'Server-side Form Handling', 'SEO-tuned Meta Data'],
        videoUrl: null
    },
    {
        id: 5,
        title: 'Beta Outcome Foundation',
        category: 'NGOs',
        description: 'A storytelling-first platform built to highlight social impact and community development initiatives across East Africa.',
        image: '/beta outcome foundation.png',
        alt: 'Impact-driven NGO web design for Beta Outcome Foundation East Africa',
        tech: ['WordPress', 'PHP', 'Custom Theme'],
        liveLink: 'https://www.betaoutcomefoundation.org/',
        githubLink: null,
        features: ['Impact Stories', 'Program Information', 'Volunteer Portal', 'Donation System'],
        impact: 'Improved donor retention and volunteer recruitment',
        problemStatement: 'The foundation needed a way to organize disparate program data into a cohesive narrative for global stakeholders.',
        solution: 'Built a multi-category program portal using WordPress, allowing easy content management for non-technical staff.',
        architecture: ['WordPress CMS', 'Custom Taxonomy for Programs', 'Interactive Map Integration'],
        videoUrl: null
    },
    {
        id: 1,
        title: 'Broken Chalk (NGO Education)',
        category: 'NGOs',
        description: 'Global educational portal designed to break barriers to quality education through a multi-language accessible platform.',
        image: '/Brocken Chalk.png',
        alt: 'Global education NGO website development Broken Chalk',
        tech: ['WordPress', 'PHP', 'Elementor'],
        liveLink: 'https://brokenchalk.org/',
        githubLink: null,
        features: ['Responsive Design', 'Multi-language Support', 'Donation System', 'Blog Management'],
        impact: 'Increased donor engagement by 40%',
        problemStatement: 'The organization had a fragmented learning portal that was difficult for international students and donors to navigate.',
        solution: 'Developed a unified multi-language education portal with a clean, high-performance architecture and localized content paths.',
        architecture: ['WordPress Multi-site', 'Cloudflare Edge Caching', 'Custom Multilingual Backend'],
        videoUrl: null
    },
    {
        id: 7,
        title: 'Grand Construction Uganda',
        category: 'Business',
        description: 'A robust, professional showcase for a leading construction firm, built to demonstrate structural excellence across Uganda.',
        image: '/Grand Construction Ug.png',
        alt: 'Construction company website development Kampala Uganda - Grand Construction',
        tech: ['WordPress', 'PHP', 'Custom Design'],
        liveLink: 'https://grandug.com/',
        githubLink: null,
        features: ['Project Gallery', 'Service Showcase', 'Quote Requests', 'Contact Management'],
        impact: 'Established professional online presence for business growth',
        problemStatement: 'Potential clients couldn\'t verify the firm\'s portfolio of massive structural projects, slowing down the sales cycle.',
        solution: 'Created a high-resolution project gallery and service showcase that functions as a digital corporate profile.',
        architecture: ['WordPress', 'Advanced Custom Fields', 'CDN Integration for High-Res Images'],
        videoUrl: null
    },
    {
        id: 2,
        title: 'Indo-gas Uganda (Energy Company)',
        category: 'Business',
        description: `Fueling the future of clean energy. We created an e-commerce ready platform for Indo-gas to streamline gas ordering and delivery tracking for thousands of households.`,
        image: '/Indo gas.png',
        alt: 'E-commerce platform development for Indo-gas Uganda energy company',
        tech: ['React', 'Node.js', 'MongoDB'],
        liveLink: 'https://indogasuganda.com/',
        githubLink: null,
        features: ['Product Catalog', 'Online Booking', 'Customer Portal', 'Admin Dashboard'],
        impact: 'Streamlined operations and improved customer experience',
        problemStatement: 'Manual gas ordering processes were slow and prone to human error, specially during peak demand.',
        solution: 'Engineered a real-time ordering dashboard and user portal that handles transactions and logistics tracking.',
        architecture: ['MERN Stack (MongoDB, Express, React, Node)', 'JWT Authentication', 'State-managed Cart Logic'],
        videoUrl: null
    },
    {
        id: 6,
        title: 'Priority Hope Foundation',
        category: 'NGOs',
        description: `Putting health first. Priority Hope's platform was designed to make healthcare resources accessible to vulnerable communities through a user-friendly digital library.`,
        image: '/priority hope foundation.png',
        alt: 'Healthcare NGO website design Priority Hope Foundation Uganda',
        tech: ['WordPress', 'PHP', 'WooCommerce'],
        liveLink: 'https://www.priorityhopefoundation.org/',
        githubLink: null,
        features: ['Health Resources', 'Appointment Booking', 'Online Store', 'Patient Portal'],
        impact: 'Enhanced patient engagement and resource accessibility',
        problemStatement: 'Local communities lacked a central repository for verified health information and appointment logistics.',
        solution: 'Built a resource-rich health portal featuring an integrated booking system and a multi-category health library.',
        architecture: ['WooCommerce for Healthcare Store', 'Booking API Integration', 'Mobile-first PHP/WordPress'],
        videoUrl: null
    },
    {
        id: 4,
        title: 'Turiken Tours (Tourism)',
        category: 'Business',
        description: `Adventure awaits. We built Turiken Tours a dynamic booking system that captures the beauty of East Africa while making itinerary management effortless.`,
        image: '/Turiken Tours.png',
        alt: 'Tourism booking website development Turiken Tours Uganda',
        tech: ['React', 'Firebase', 'Stripe'],
        liveLink: 'https://turikentours.com/',
        githubLink: null,
        features: ['Tour Packages', 'Online Booking', 'Payment Integration', 'Admin Panel'],
        impact: 'Increased online bookings by 60%',
        problemStatement: 'The client was losing international tourists due to the lack of an online booking and payment facility.',
        solution: 'Integrated a secure Stripe payment gateway and a custom itinerary builder to automate the booking pipeline.',
        architecture: ['React.js Frontend', 'Firebase Realtime Database', 'Cloud Functions for Payments'],
        videoUrl: null
    },
    {
        id: 10,
        title: 'Mwebesa Johnson Portfolio',
        category: 'Portfolios',
        description: 'A premium, high-performance portfolio website built to showcase elite software engineering and design capabilities.',
        problemStatement: 'In a crowded market, I needed a way to demonstrate my unique 10x developer value proposition through high-fidelity UI and deep technical evidence.',
        solution: 'Developed a high-performance, SEO-optimized portfolio using Next.js that functions as a high-conversion sales funnel for my development agency.',
        architecture: ['Next.js 15 (App Router)', 'Framer Motion Liquid Animations', 'PostgreSQL Audit Logs (via Systems)'],
        image: '/me.jpg',
        alt: 'Professional developer portfolio Mwebesa Johnson Uganda',
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        liveLink: 'https://webbuild-uganda.vercel.app',
        githubLink: null,
        features: ['Dynamic Animations', 'SEO Optimization', 'Responsive Design', 'Interactive Modals'],
        impact: 'Established a strong personal brand and attracted international leads.',
        videoUrl: null
    }
]

export const GRAPHIC_DESIGN_PROJECTS = [
    {
        id: 201,
        title: 'Webbuild Boxing Day Campaign',
        description: 'Vibrant promotional posters designed for the Webbuild Systems holiday campaign, focusing on visual hierarchy and brand consistency.',
        image: '/attachments/graphic design projects/boxing day with webbuild systems.jpg',
        tech: ['Adobe Photoshop', 'Branding'],
        features: ['Visual Storytelling', 'Marketing Collateral', 'High Resolution Outputs'],
        impact: 'Increased social media engagement by 25%.'
    },
    {
        id: 202,
        title: 'Muko Supermarket Branding',
        description: 'Premium promotional materials and branding for Muko Supermarket in Hima, emphasizing local market appeal.',
        image: '/attachments/graphic design projects/muko supermarket.jpg',
        tech: ['Adobe Photoshop', 'Branding'],
        features: ['Poster Design', 'Corporate Identity', 'Print-ready Assets'],
        impact: 'Enhanced local brand visibility for Mukora Collins.'
    },
    {
        id: 203,
        title: 'Niam Stationers Marketing',
        description: 'High-quality graphics for Niam Stationers on Nasser Road, designed for high-impact visibility.',
        image: '/attachments/graphic design projects/Niam Stationers.jpg',
        tech: ['Adobe Photoshop', 'Illustrator'],
        features: ['Outdoor Advertising', 'Stationery Branding', 'Vector Graphics'],
        impact: 'Delivered premium designs that stand out in a busy market.'
    },
    {
        id: 204,
        title: 'Webbuild Corporate Identity',
        description: 'A series of professional brand identity concepts including logos and typography for Webbuild Systems and affiliated local startups.',
        image: '/attachments/graphic design projects/webbuild systems.jpg',
        tech: ['Adobe Photoshop', 'Illustrator'],
        features: ['Logo Creation', 'Brand Guidelines', 'Typography Selection'],
        impact: 'Established a consistent and powerful visual presence.'
    },
    {
        id: 206,
        title: 'One Love Gamers Poster',
        description: 'High-energy, vibrant promotional poster for one of Uganda’s most active gaming hubs.',
        image: '/attachments/graphic design projects/One Love Gamers.jpg',
        tech: ['Adobe Photoshop', 'Digital Marketing'],
        features: ['Brand Focused Colors', 'Dynamic Layout', 'Print Ready'],
        impact: 'Directly increased engagement and walk-ins for the gaming center.'
    }
]

// --- SKILLS / WORKFLOW DATA ---

export const TECH_STACK = [
    {
        title: "Frontend Development",
        icon: Layout,
        color: "from-blue-500 to-cyan-500",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
    },
    {
        title: "Backend & Database",
        icon: Database,
        color: "from-purple-500 to-indigo-500",
        skills: ["Node.js", "PostgreSQL", "MongoDB", "Prisma", "REST APIs", "Firebase"]
    },
    {
        title: "AI & Innovation",
        icon: Bot,
        color: "from-pink-500 to-rose-500",
        skills: ["Gemini AI", "Prompt Engineering", "Python", "Data Analysis", "Automation", "AI Integration"]
    },
    {
        title: "Tools & Deployment",
        icon: Settings,
        color: "from-orange-500 to-amber-500",
        skills: ["Git/GitHub", "Docker", "Bash Scripting", "Linux Admin (Ubuntu)", "Vercel/Cloud Run", "CRM Systems"]
    }
]

export const WORKFLOW_STEPS = [
    {
        title: "Discovery & Strategy",
        description: "Deep dive into your goals, audience, and market to define the optimal roadmap.",
        icon: Search,
        color: "from-blue-500 to-blue-600"
    },
    {
        title: "Design & UX",
        description: "Crafting beautiful, intuitive interfaces that resonate with your brand and users.",
        icon: Palette,
        color: "from-purple-500 to-purple-600"
    },
    {
        title: "Agile Development",
        description: "Building robust, scalable code using modern frameworks and iterative sprints.",
        icon: Code,
        color: "from-pink-500 to-pink-600"
    },
    {
        title: "QA & Optimization",
        description: "Rigorous testing and performance tuning to ensure a flawless user experience.",
        icon: CheckCircle2,
        color: "from-green-500 to-green-600"
    },
    {
        title: "Launch & Support",
        description: "Seamless deployment and ongoing technical assistance for long-term growth.",
        icon: Rocket,
        color: "from-orange-500 to-orange-600"
    }
]

export const TESTIMONIALS = [
    {
        name: "Kasozi Brian",
        role: "Head of Science Faculty",
        institution: "Uganda Martyrs University",
        content: "Mwebesa voluntarily engineered our institutional requisition system, replacing months of paper-based delays with a digital workflow. His dedication to building this for the faculty without any financial motivation speaks volumes of his character and technical leadership.",
        avatar: "/attachments/avatars/kasozi.jpg"
    },
    {
        name: "Beta Outcome Foundation",
        role: "Executive Director",
        institution: "NGO",
        content: "Working with Mwebesa was a game-changer. He understood our mission and created a website that truly represents our impact. Our donor engagement increased significantly thanks to his user-centric design.",
        avatar: null
    },
    {
        name: "Turiken Tours",
        role: "Managing Director",
        institution: "Tourism Company",
        content: "The e-commerce and booking solution Webbuild built for us exceeded all expectations. Our online sales increased by 60% within months. His technical expertise in booking systems is world-class.",
        avatar: null
    },
    {
        name: "Mukora Collins",
        role: "Proprietor",
        institution: "Muko Supermarket, Hima",
        content: "Mwebesa provides the best graphic designs for our supermarket. His attention to detail and ability to capture our brand message in posters is exceptional.",
        avatar: null,
        phone: "+256 760 732143"
    },
    {
        name: "Jupiter",
        role: "Manager",
        institution: "Niam Stationers, Nasser Road",
        content: "Highly impressed with the quality of graphic design work. He delivered premium branding materials that stand out on Nasser Road's competitive market.",
        avatar: null,
        phone: "+256 778 648487"
    },
    {
        name: "Dave",
        role: "Owner",
        institution: "One Love Gamers",
        content: "Mwebesa's design for our One Love Gamers poster was exceptional. He captured the high-energy, vibrant atmosphere of our gaming community perfectly. We saw an immediate uptick in walk-ins after displaying his work. Truly a pro!",
        avatar: null
    }
]

export const RESEARCH_PROJECTS = {
    hurdles: "These projects represent my early journey into software engineering. While many were not fully deployed due to technical limitations—such as lack of API funding, limited hardware resources (overheating PC), and testing device failures—they laid the foundation for my current expertise in architecture and problem-solving.",
    projects: [
        {
            title: "Balancing",
            category: "FinTech Concept",
            description: "A mobile application designed for local retailers to automate daily reconciliation of Mobile Money transactions.",
            tech: ["Python", "Kivy", "SQLite"],
            outcome: "Logic proof-of-concept for automated balancing."
        },
        {
            title: "Bamuke Hardware",
            category: "POS Prototype",
            description: "A specialized inventory and sales management system tailored for the unique workflows of East African hardware stores.",
            tech: ["React Native", "Firebase"],
            outcome: "Designed the initial UI/UX and database schema."
        },
        {
            title: "Influencer Intelligence & Reach Analytics",
            category: "Marketing Science",
            description: "A high-fidelity aggregation system performing real-time sentiment analysis and cross-platform reach quantification for digital campaigns.",
            tech: ["React", "Python", "Predictive Analytics"],
            outcome: "Engineered core visual intelligence dashboard for campaign ROI."
        },
        {
            title: "Precision Agri-Analytics & Livestock Stewardship",
            category: "Bio-Infrastructure",
            description: "An end-to-end mobile ecosystem for commercial poultry operations, optimizing feed efficiency, health biometrics, and production cycles.",
            tech: ["Flutter", "Data Science"],
            outcome: "Architected biometric tracking logic and resource optimization."
        },
        {
            title: "Bio-Acoustic Neuromodulation Protocol",
            category: "Neural Wellness Tech",
            description: "A specialized therapeutic media engine delivering precision-calibrated soundscapes designed to mitigate cognitive stress and neural tension.",
            tech: ["Flutter", "DSP Engine"],
            outcome: "Functional prototype for non-pharmacological stress relief."
        },
        {
            title: "Sustainable Material Logistics & Circular Economy",
            category: "Environmental Engineering",
            description: "A smart-city logistics framework connecting decentralized waste sources with industrial recycling nodes to optimize material recovery.",
            tech: ["React Native", "GIS Mapping"],
            outcome: "Developed geospatial material routing and incentivization logic."
        },
        {
            title: "National Digital Sovereignty & Voting Framework",
            category: "Governance Infrastructure",
            description: "A hyper-scalable, cryptographically secure voting infrastructure designed for zero-trust environments from institutional to national scales.",
            tech: ["Next.js", "Distributed Ledger Theory"],
            outcome: "Defined protocols for state-level digital consensus and auditability."
        }
    ]
}

export const STATS = [
    { label: 'Successful Projects', value: '15+', icon: Zap },
    { label: 'Happy Clients', value: '10+', icon: Users },
    { label: 'Years Experience', value: '3+', icon: Briefcase },
    { label: 'Technical Skills', value: '25+', icon: Target }
]

export const FAQS = [
    {
        question: "What is the typical ROI on your digital infrastructure?",
        answer: "We focus on high-performance solutions that pay for themselves through efficiency and scale. Most clients report significant operational speed increases and donor engagement growth within the first quarter of deployment."
    },
    {
        question: "What is your project development lifecycle?",
        answer: "For strategic web portals, we ship in 7-14 days. Mission-critical industrial systems (POS, Logistics, Governance) follow a 4-8 week deep-engineering sprint depending on the complexity of the architecture."
    },
    {
        question: "Are your systems optimized for technical resilience?",
        answer: "Absolutely. We utilize 'Mobile-First' and 'Offline-Ready' architectures, ensuring your systems remain operational even in challenging connectivity environments common across East Africa."
    },
    {
        question: "Can my internal team maintain these systems?",
        answer: "Yes. We empower your team through comprehensive technical handovers and intuitive 'Self-Service' dashboards, reducing long-term dependency on external vendors."
    },
    {
        question: "Do you provide end-to-end ecosystem management?",
        answer: "We handle the entire stack: from SSL-secured hosting and national domain registration (.ug, .com, .org) to enterprise-grade email infrastructure and cloud security."
    }
]
