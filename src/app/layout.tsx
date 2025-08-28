import React from 'react'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import PWAProvider from '@/components/PWAProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  // PWA manifest
  manifest: '/manifest.json',
  // Apple mobile web app configuration
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: SITE_CONFIG.name,
  },
  // Format detection for mobile
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  // Other mobile optimization meta tags
  other: {
    'mobile-web-app-capable': 'yes',
    'theme-color': '#8b5cf6',
    'msapplication-TileColor': '#8b5cf6',
    'msapplication-config': '/browserconfig.xml',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

// Next.js 15 viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#8b5cf6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jakarta.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-inter min-h-screen bg-gray-950 text-white touch-manipulation">
        <PWAProvider>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
        </PWAProvider>
      </body>
    </html>
  )
}
