import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import StructuredData from './structured-data'

export const metadata: Metadata = {
  title: 'Mwebesa Johnson | Software Systems & AI Practitioner',
  description: 'Portfolio of Mwebesa Johnson, a computer science student and lead at Webbuild Systems, building experience in AI-powered systems, machine learning, and technical infrastructure in Uganda.',
  keywords: 'Software Systems Practice, AI Learning, Machine Learning Student Uganda, NLP Exploration, Webbuild Systems, Mwebesa Johnson Portfolio, Technical Development Practice, Professional Software Engineering',
  authors: [{ name: 'Mwebesa Johnson' }],
  creator: 'Mwebesa Johnson',
  publisher: 'Webbuild Systems Uganda',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  metadataBase: new URL('https://mwebesajohnson.xyz'),
  alternates: {
    canonical: 'https://mwebesajohnson.xyz',
  },
  icons: {
    icon: '/me.jpg',
    apple: '/me.jpg',
  },
  openGraph: {
    title: 'Mwebesa Johnson | Software Systems & AI Development',
    description: 'Practicing and mastering AI-powered systems, software engineering, and strategic digital infrastructure for the Ugandan landscape.',
    url: 'https://mwebesajohnson.xyz',
    siteName: 'Mwebesa Johnson Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mwebesa Johnson - Uganda Premier Software & AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mwebesa Johnson | Learning & Practicing AI Engineering',
    description: 'Developing high-performance software systems and exploring AI-driven automation through dedicated technical practice.',
    images: ['/logo.png'],
  },
  other: {
    'geo.region': 'UG',
    'geo.placename': 'Uganda',
    'geo.position': '1.3733;32.2903',
    'ICBM': '1.3733, 32.2903',
    'DC.title': 'Mwebesa Johnson - Dedicated Software & AI Practice',
    'DC.description': 'Focusing on high-quality software development and AI systems for NGOs and businesses in Uganda through iterative practice.',
    'DC.subject': 'Software Development, AI, Machine Learning, Uganda, Kampala, Tech Strategy',
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
        <link rel="icon" href="/me.jpg" />
        <link rel="apple-touch-icon" href="/me.jpg" />
        <StructuredData />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PP4ZYWM7N8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PP4ZYWM7N8');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
