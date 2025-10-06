'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import ProductSection from '@/components/ProductSection'
import GallerySection from '@/components/GallerySection'
import OtherProductsSection from '@/components/OtherProductsSection'
import ProductFooter from '@/components/ProductFooter'

export default function IronManPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation variant="iron-man" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange via-accent-red to-black">
          <div className="dots-pattern absolute inset-0"></div>
        </div>
        <HeroBanner 
          image="/images/iron-man/3pc3colorPFP.jpg"
          alt="Iron Man Profile"
        />
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-darker-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bangers text-accent-orange mb-8">
              In Development
            </h2>
            <p className="text-xl text-white mb-8">
              We&apos;re crafting the perfect Iron Man merchandise for you. 
              Our team is working on bringing you the best Tony Stark inspired decals!
            </p>
            <div className="bg-card-bg rounded-lg p-8 border border-accent-orange/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                What to Expect
              </h3>
              <ul className="text-text-secondary space-y-2">
                <li>• Premium metal Iron Man helmet decals</li>
                <li>• Arc reactor designs</li>
                <li>• Various armor mark designs</li>
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
