'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GallerySectionProps {
  images: string[]
  theme: 'spiderman' | 'batman' | 'transformers'
}

const getThemeStyles = (theme: string) => {
  switch (theme) {
    case 'spiderman':
      return {
        accentColor: 'text-accent-red',
        borderColor: 'border-accent-red'
      }
    case 'batman':
      return {
        accentColor: 'text-primary-gold',
        borderColor: 'border-primary-gold'
      }
    case 'transformers':
      return {
        accentColor: 'text-accent-orange',
        borderColor: 'border-accent-orange'
      }
    default:
      return {
        accentColor: 'text-primary-gold',
        borderColor: 'border-primary-gold'
      }
  }
}

export default function GallerySection({ images, theme }: GallerySectionProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const styles = getThemeStyles(theme)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className={`text-4xl font-bangers ${styles.accentColor} text-center mb-12`}>
          See It In Action
        </h2>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Current Image */}
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg bg-card-bg border border-primary-gold/20"
            >
              <div className="relative h-96 bg-white/5">
                <Image
                  src={images[currentImage]}
                  alt={`Gallery image ${currentImage + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  {currentImage + 1} of {images.length}
                </div>
              </div>
            </motion.div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentImage === index 
                      ? 'bg-primary-gold' 
                      : 'bg-primary-gold/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg bg-card-bg border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-300"
            >
              <div className="relative h-80 bg-white/5">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {index === 0 ? 'Real Examples' : 
                       index === 1 ? 'Premium Quality' : 'Multiple Options'}
                    </h3>
                    <p className="text-text-secondary">
                      {index === 0 ? 'See how our customers use these decals' :
                       index === 1 ? 'Durable and long-lasting' : 'Choose your preferred style'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
