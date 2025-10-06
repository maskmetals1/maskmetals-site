'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function AnalyticsWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if we're in production and not blocked by ad blockers
    const isProduction = process.env.NODE_ENV === 'production'
    const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost'
    
    // Only load analytics in production and not on localhost
    if (isProduction && !isLocalhost) {
      // Add a small delay to let the page load first
      const timer = setTimeout(() => {
        setShouldLoad(true)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  // Don't render anything if we shouldn't load analytics
  if (!shouldLoad) {
    return null
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
