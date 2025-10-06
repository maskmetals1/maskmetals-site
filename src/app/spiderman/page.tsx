'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import ProductSection from '@/components/ProductSection'
import GallerySection from '@/components/GallerySection'
import OtherProductsSection from '@/components/OtherProductsSection'
import ProductFooter from '@/components/ProductFooter'

const spidermanProducts = [
  {
    id: 1,
    name: 'Spider-Man Logo Decal',
    price: 24.99,
    image: '/images/spiderman/4pcWhiteBG.jpg',
    description: 'High-quality vinyl decals featuring the iconic Spider-Man symbol. Perfect for cars, laptops, helmets, and more.',
    features: [
      'Premium vinyl material',
      'Weather resistant',
      'Easy application',
      'Multiple sizes included',
      'Official Marvel design'
    ],
    colors: ['red', 'black', 'gold', 'silver'],
    gallery: [
      '/images/spiderman/4pcSpidermanDecal.jpg',
      '/images/spiderman/sliverPFP.jpg',
      '/images/spiderman/silverSide.jpg',
      '/images/spiderman/redPFP.jpg',
      '/images/spiderman/goldPFP.jpg',
      '/images/spiderman/goldSide.jpg',
      '/images/spiderman/BlackPFP.jpg',
      '/images/spiderman/blackSide.jpg'
    ]
  }
]

const galleryImages = [
  '/images/spiderman/PS5redSpider.jpg',
  '/images/spiderman/spiderExamples.jpg',
  '/images/spiderman/61ENnnX1MjL._AC_UF894,1000_QL80_.jpg',
  '/images/spiderman/examplesSpider.avif',
  '/images/spiderman/blackspiderTrunk.avif',
  '/images/spiderman/redSpiderGasCapEX.avif'
]

const otherProducts = [
  {
    id: 2,
    name: 'Black Spider Decal',
    price: 24.99,
    image: '/images/spiderman/BlackPFP.avif'
  },
  {
    id: 3,
    name: 'Silver Spider Decal',
    price: 24.99,
    image: '/images/spiderman/sliverPFP.avif'
  },
  {
    id: 4,
    name: 'Gold Spider Decal',
    price: 24.99,
    image: '/images/spiderman/goldPFP.avif'
  },
  {
    id: 5,
    name: 'Classic Red Spider',
    price: 24.99,
    image: '/images/spiderman/redPFP.avif'
  }
]

export default function SpiderManPage() {
  return (
    <main className="min-h-screen bg-gradient-spiderman">
      <Navigation variant="spiderman" />
      
      {/* Hero Banner */}
      <section className="relative spider-banner pt-8">
        <HeroBanner 
          image="/images/spiderman/manpfpbanner.jpg"
          alt="Spider-Man Banner"
        />
      </section>

      {/* Main Product Section */}
      <section id="product" className="py-16">
        <ProductSection 
          products={spidermanProducts}
          theme="spiderman"
        />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-black/50">
        <GallerySection 
          images={galleryImages}
          theme="spiderman"
        />
      </section>

      {/* Other Products Section */}
      <section id="other-products" className="py-16">
        <OtherProductsSection 
          products={otherProducts}
          theme="spiderman"
        />
      </section>

      <ProductFooter />
    </main>
  )
}
