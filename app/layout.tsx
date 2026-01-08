import type { Metadata, Viewport } from 'next'
import './globals.css'
import StructuredData from './structured-data'

export const metadata: Metadata = {
  title: 'Premier Website & Systems Development in Uganda | 2026 Official',
  description: 'Uganda’s leading digital solutions agency. We build professional websites, complex business systems, and AI-powered tools for NGOs and businesses across Kampala, Kasese, and all major Ugandan cities.',
  keywords: 'best website developer uganda, software engineering kampala, uganda tech agency, mobile app development uganda, NGO systems east africa, business automation uganda, mwebesa johnson, webbuild systems, professional web design uganda, kasese tech solutions',
  authors: [{ name: 'Mwebesa Johnson' }],
  creator: 'Mwebesa Johnson',
  publisher: 'Webbuild Systems Uganda',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  metadataBase: new URL('https://webbuild-uganda.vercel.app'),
  alternates: {
    canonical: 'https://webbuild-uganda.vercel.app',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Webbuild Systems Uganda | Leading Digital Solutions & Software Engineering',
    description: 'Transforming businesses across Uganda with premium AI-powered systems, professional web design, and strategic digital infrastructure.',
    url: 'https://webbuild-uganda.vercel.app',
    siteName: 'Webbuild Systems Uganda',
    images: [
      {
        url: '/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Mwebesa Johnson - Uganda Premier Software Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webbuild Systems Uganda | Uganda’s Leading Tech Agency',
    description: 'Empowering Ugandan enterprises with elite software, AI-driven automation, and high-performance web solutions.',
    images: ['/me.jpg'],
  },
  other: {
    'geo.region': 'UG',
    'geo.placename': 'Uganda',
    'geo.position': '1.3733;32.2903',
    'ICBM': '1.3733, 32.2903',
    'DC.title': 'Webbuild Systems Uganda - National Software Excellence',
    'DC.description': 'Top-tier software development and web design services for NGOs and businesses across the Republic of Uganda.',
    'DC.subject': 'Software Development, Web Design, AI, Uganda, Kampala, Tech Agency',
    'DC.creator': 'Mwebesa Johnson',
    'DC.publisher': 'Webbuild Systems Uganda',
    'DC.coverage': 'Uganda, East Africa',
    'DC.language': 'en',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2A5BDB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
