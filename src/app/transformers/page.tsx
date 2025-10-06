'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import ProductSection from '@/components/ProductSection'
import GallerySection from '@/components/GallerySection'
import OtherProductsSection from '@/components/OtherProductsSection'
import ProductFooter from '@/components/ProductFooter'

const transformersProducts = [
  {
    id: 1,
    name: 'Autobot Decal',
    price: 24.99,
    image: '/images/transformers/autobotPFP.avif',
    description: 'High-quality vinyl decals featuring the iconic Autobot symbol. Perfect for vehicles, equipment, and any surface that needs the Transformers touch.',
    features: [
      'Premium vinyl material',
      'Weather resistant',
      'Easy application',
      'Autobot faction included',
      'Official Hasbro design'
    ],
    colors: ['autobot', 'decepticon'],
    gallery: [
      '/images/transformers/autobotPFP.avif',
      '/images/transformers/DecepticonsPFP.avif',
      '/images/transformers/autobot&Decepticons.avif',
      '/images/transformers/2pcTapeBoth.jpg',
      '/images/transformers/2pcEX.jpg'
    ]
  },
  {
    id: 2,
    name: 'Decepticon Decal',
    price: 24.99,
    image: '/images/transformers/DecepticonsPFP.avif',
    description: 'High-quality vinyl decals featuring the iconic Decepticon symbol. Perfect for vehicles, equipment, and any surface that needs the Transformers touch.',
    features: [
      'Premium vinyl material',
      'Weather resistant',
      'Easy application',
      'Decepticon faction included',
      'Official Hasbro design'
    ],
    colors: ['autobot', 'decepticon'],
    gallery: [
      '/images/transformers/autobotPFP.avif',
      '/images/transformers/DecepticonsPFP.avif',
      '/images/transformers/autobot&Decepticons.avif',
      '/images/transformers/2pcTapeBoth.jpg',
      '/images/transformers/2pcEX.jpg'
    ]
  }
]

const galleryImages = [
  '/images/transformers/PFPandEX.avif',
  '/images/transformers/autobotEXYellowcar.avif',
  '/images/transformers/truckANDpfp.avif'
]

const otherProducts = [
  {
    id: 2,
    name: 'Black Bumblebee Decal',
    price: 24.99,
    image: '/images/transformers/blackBEE.avif'
  },
  {
    id: 3,
    name: 'Bronze Bumblebee Decal',
    price: 24.99,
    image: '/images/transformers/bronzeBEE.avif'
  },
  {
    id: 4,
    name: 'Red Bumblebee Decal',
    price: 24.99,
    image: '/images/transformers/redBEE.avif'
  },
  {
    id: 5,
    name: '3-Piece Bumblebee Set',
    price: 24.99,
    image: '/images/transformers/3pcBEE.avif'
  }
]

export default function TransformersPage() {
  return (
    <main className="min-h-screen bg-gradient-transformers">
      <Navigation variant="transformers" />
      
      {/* Hero Banner */}
      <section className="relative pt-8">
        <HeroBanner 
          image="/images/transformers/dbl5lu1-528855a2-d961-4e5d-b7eb-b088db142382.jpg"
          alt="Transformers Banner"
        />
      </section>

      {/* Main Product Section */}
      <section id="product" className="py-16">
        <ProductSection 
          products={transformersProducts}
          theme="transformers"
        />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-black/50">
        <GallerySection 
          images={galleryImages}
          theme="transformers"
        />
      </section>

      {/* Other Products Section */}
      <section id="other-products" className="py-16">
        <OtherProductsSection 
          products={otherProducts}
          theme="transformers"
        />
      </section>

      <ProductFooter />
    </main>
  )
}
