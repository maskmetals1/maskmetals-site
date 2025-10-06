'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import ProductSection from '@/components/ProductSection'
import GallerySection from '@/components/GallerySection'
import OtherProductsSection from '@/components/OtherProductsSection'
import ProductFooter from '@/components/ProductFooter'

const batmanProducts = [
  {
    id: 1,
    name: 'Batman Logo Decal',
    price: 24.99,
    image: '/images/batman/3pcAllColors.avif',
    description: 'High-quality vinyl decals featuring the iconic Batman symbol. Perfect for vehicles, equipment, and any surface that needs the Dark Knight&apos;s touch.',
    features: [
      'Premium vinyl material',
      'Weather resistant',
      'Easy application',
      'Multiple color options',
      'Official DC design'
    ],
    colors: ['gold', 'black', 'silver'],
    gallery: [
      '/images/batman/blackPFP.avif',
      '/images/batman/goldPFP.avif',
      '/images/batman/silverPFP.avif',
      '/images/batman/goldAndSilverBat.avif',
      '/images/batman/examplesAndPFP.avif'
    ]
  }
]

const galleryImages = [
  '/images/batman/goldbatexample.avif',
  '/images/batman/examplesAndPFP.avif',
  '/images/batman/wetCarBlack.avif',
  '/images/batman/wetSilverEx.avif'
]

const otherProducts = [
  {
    id: 2,
    name: 'Gold Batman Decal',
    price: 24.99,
    image: '/images/batman/goldPFP.avif'
  },
  {
    id: 3,
    name: 'Silver Batman Decal',
    price: 24.99,
    image: '/images/batman/silverPFP.avif'
  },
  {
    id: 4,
    name: 'Black Batman Decal',
    price: 24.99,
    image: '/images/batman/blackPFP.avif'
  },
  {
    id: 5,
    name: 'Gold & Silver Set',
    price: 24.99,
    image: '/images/batman/goldAndSilverBat.avif'
  }
]

export default function BatmanPage() {
  return (
    <main className="min-h-screen bg-gradient-batman">
      <Navigation variant="batman" />
      
      {/* Hero Banner */}
      <section className="relative pt-0">
        <HeroBanner 
          image="/images/batman/Batman_Banner.jpg"
          alt="Batman Banner"
        />
      </section>

      {/* Main Product Section */}
      <section id="product" className="py-16">
        <ProductSection 
          products={batmanProducts}
          theme="batman"
        />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-black/50">
        <GallerySection 
          images={galleryImages}
          theme="batman"
        />
      </section>

      {/* Other Products Section */}
      <section id="other-products" className="py-16">
        <OtherProductsSection 
          products={otherProducts}
          theme="batman"
        />
      </section>

      <ProductFooter />
    </main>
  )
}
