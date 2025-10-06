import type { Metadata } from 'next'
import { Inter, Bangers, Orbitron } from 'next/font/google'
import { CartProvider } from '@/contexts/CartContext'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const bangers = Bangers({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://maskmetals.com'),
  title: 'Mask Medals - Premium Superhero Merchandise',
  description: 'Premium quality metal decals for your vehicle, laptop, or any surface. Spider-Man, Batman, Transformers and more superhero merchandise.',
  keywords: 'superhero, decals, spiderman, batman, transformers, merchandise, metal decals',
  authors: [{ name: 'Mask Medals' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Mask Medals - Premium Superhero Merchandise',
    description: 'Premium quality metal decals for your vehicle, laptop, or any surface.',
    type: 'website',
    locale: 'en_US',
    url: 'https://maskmetals.com',
    siteName: 'Mask Medals',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mask Medals - Premium Superhero Merchandise',
    description: 'Premium quality metal decals for your vehicle, laptop, or any surface.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bangers.variable} ${orbitron.variable}`}>
      <body className={`${inter.className} bg-dark-bg text-text-primary`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
