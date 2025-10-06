'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import ProductFooter from '@/components/ProductFooter'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const [sessionId, setSessionId] = useState<string | null>(null)

  useEffect(() => {
    const session = searchParams.get('session_id')
    setSessionId(session)
  }, [searchParams])

  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation variant="home" />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
          
          <h1 className="text-4xl font-bangers text-primary-gold mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-lg text-text-secondary mb-8">
            Thank you for your purchase! Your order has been confirmed and you&apos;ll receive an email confirmation shortly.
          </p>
          
          {sessionId && (
            <p className="text-sm text-text-secondary mb-8">
              Session ID: {sessionId}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-gold text-black px-8 py-4 font-semibold text-lg hover:shadow-gold transition-all duration-300 flex items-center gap-2"
              >
                Continue Shopping
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <ProductFooter />
    </main>
  )
}
