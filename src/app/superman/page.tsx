'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import ProductSection from '@/components/ProductSection'
import GallerySection from '@/components/GallerySection'
import OtherProductsSection from '@/components/OtherProductsSection'
import ProductFooter from '@/components/ProductFooter'

export default function SupermanPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation variant="superman" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-red to-black">
          <div className="dots-pattern absolute inset-0"></div>
        </div>
        <HeroBanner 
          image="/images/superman/pfpRED.jpg"
          alt="Superman Profile"
        />
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-darker-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bangers text-accent-blue mb-8">
              Coming Soon
            </h2>
            <p className="text-xl text-white mb-8">
              We&apos;re working hard to bring you the best Superman merchandise. 
              Stay tuned for updates on our Man of Steel collection!
            </p>
            <div className="bg-card-bg rounded-lg p-8 border border-accent-blue/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                What to Expect
              </h3>
              <ul className="text-text-secondary space-y-2">
                <li>• Premium metal Superman &quot;S&quot; shield decals</li>
                <li>• Various sizes and finishes</li>
                <li>• Car, laptop, and device applications</li>
                <li>• Worldwide shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProductFooter />
    </main>
  )
}
