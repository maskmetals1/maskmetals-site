'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface OtherProductsSectionProps {
  products: Product[]
  theme: 'spiderman' | 'batman' | 'transformers'
}

const getThemeStyles = (theme: string) => {
  switch (theme) {
    case 'spiderman':
      return {
        accentColor: 'text-white',
        borderColor: 'border-accent-red',
        hoverColor: 'hover:text-accent-red'
      }
    case 'batman':
      return {
        accentColor: 'text-primary-gold',
        borderColor: 'border-primary-gold',
        hoverColor: 'hover:text-primary-gold'
      }
    case 'transformers':
      return {
        accentColor: 'text-accent-orange',
        borderColor: 'border-accent-orange',
        hoverColor: 'hover:text-accent-orange'
      }
    default:
      return {
        accentColor: 'text-primary-gold',
        borderColor: 'border-primary-gold',
        hoverColor: 'hover:text-primary-gold'
      }
  }
}

export default function OtherProductsSection({ products, theme }: OtherProductsSectionProps) {
  const styles = getThemeStyles(theme)

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
          More {theme === 'spiderman' ? 'Spider-Man' : theme === 'batman' ? 'Batman' : 'Transformers'} Products
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-card-bg rounded-lg overflow-hidden border border-primary-gold/20 hover:border-primary-gold/40 transition-all duration-300 hover:shadow-card">
                <div className="relative h-48 bg-gradient-to-br from-darker-bg to-black">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className={`${styles.accentColor} font-bold text-lg`}>Coming Soon</span>
                    <span className={`text-sm ${styles.accentColor} opacity-75`}>
                      Coming Soon
                    </span>
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
