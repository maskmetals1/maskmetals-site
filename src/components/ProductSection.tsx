'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart, Check } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { getStripeProductInfo } from '@/lib/stripe-products'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  features: string[]
  colors: string[]
  gallery: string[]
}

interface ProductSectionProps {
  products: Product[]
  theme: 'spiderman' | 'batman' | 'transformers'
}

const getThemeStyles = (theme: string) => {
  switch (theme) {
    case 'spiderman':
      return {
        accentColor: 'text-white',
        borderColor: 'border-accent-red',
        buttonBg: 'bg-gradient-to-r from-accent-red to-accent-blue',
        priceColor: 'text-white'
      }
    case 'batman':
      return {
        accentColor: 'text-primary-gold',
        borderColor: 'border-primary-gold',
        buttonBg: 'bg-gradient-to-r from-primary-gold to-black',
        priceColor: 'text-primary-gold'
      }
    case 'transformers':
      return {
        accentColor: 'text-accent-orange',
        borderColor: 'border-accent-orange',
        buttonBg: 'bg-gradient-to-r from-accent-orange to-black',
        priceColor: 'text-accent-orange'
      }
    default:
      return {
        accentColor: 'text-primary-gold',
        borderColor: 'border-primary-gold',
        buttonBg: 'bg-gradient-to-r from-primary-gold to-black',
        priceColor: 'text-primary-gold'
      }
  }
}

export default function ProductSection({ products, theme }: ProductSectionProps) {
  const [selectedColor, setSelectedColor] = useState(products[0]?.colors[0] || '')
  const [selectedImage, setSelectedImage] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [showViewCart, setShowViewCart] = useState(false)
  const styles = getThemeStyles(theme)
  const { addToCart } = useCart()

  const product = products[0]

  if (!product) return null

  // Create array of all images (main product image + gallery images)
  const allImages = [product.image, ...product.gallery]

  // Color-based image mapping
  const getColorImage = (color: string) => {
    switch (theme) {
      case 'spiderman':
        switch (color) {
          case 'red':
            return '/images/spiderman/redPFP.jpg'
          case 'gold':
            return '/images/spiderman/goldPFP.jpg'
          case 'silver':
            return '/images/spiderman/sliverPFP.jpg'
          case 'black':
            return '/images/spiderman/BlackPFP.jpg'
          default:
            return product.image
        }
      case 'batman':
        switch (color) {
          case 'gold':
            return product.gallery[1] // goldPFP.avif
          case 'black':
            return product.gallery[0] // blackPFP.avif
          case 'silver':
            return product.gallery[2] // silverPFP.avif
          default:
            return product.image
        }
      case 'transformers':
        switch (color) {
          case 'autobot':
            return product.gallery[0] // First image (autobotPFP.avif)
          case 'decepticon':
            return product.gallery[1] // Second image (DecepticonsPFP.avif)
          default:
            return product.image
        }
      default:
        return product.image
    }
  }

  // Get the current main image based on selected color
  const getCurrentMainImage = () => {
    if (selectedColor && selectedColor !== '') {
      return getColorImage(selectedColor)
    }
    return allImages[selectedImage]
  }

  // Handle color selection - when color is selected, reset thumbnail selection
  const handleColorSelection = (color: string) => {
    setSelectedColor(color)
    setSelectedImage(0) // Reset to first image when color is selected
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Selected Image */}
            <div className="relative">
              <Image
                src={getCurrentMainImage()}
                alt={`${product.name} - ${selectedColor || 'Default'} Color`}
                width={600}
                height={600}
                className="w-full h-96 object-cover rounded-lg border-2 border-primary-gold/20"
              />
              <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Premium Quality
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                {selectedColor ? `${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)} Color` : `${selectedImage + 1} of ${allImages.length}`}
              </div>
            </div>
            
            {/* Thumbnail Gallery - All Images */}
            <div className="grid grid-cols-4 gap-2">
              {allImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-primary-gold shadow-lg' 
                      : 'border-primary-gold/20 hover:border-primary-gold/40'
                  }`}
                  onClick={() => {
                    setSelectedImage(index)
                    setSelectedColor('') // Reset color selection when thumbnail is clicked
                  }}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Thumbnail ${index + 1}`}
                    width={120}
                    height={120}
                    className="w-full h-20 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bangers text-white mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className={`text-3xl font-bold ${styles.priceColor}`}>${product.price}</div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-gold text-primary-gold" />
                  ))}
                  <span className={`ml-2 ${theme === 'spiderman' || theme === 'batman' || theme === 'transformers' ? 'text-white' : 'text-text-secondary'}`}>(127 reviews)</span>
                </div>
              </div>
            </div>

            <p className={`text-lg leading-relaxed ${theme === 'spiderman' || theme === 'batman' || theme === 'transformers' ? 'text-white' : 'text-text-secondary'}`}>
              {product.description}
            </p>

            <div>
              <h3 className={`text-xl font-semibold ${styles.accentColor} mb-3`}>Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className={`flex items-center space-x-3 ${theme === 'spiderman' || theme === 'batman' || theme === 'transformers' ? 'text-white' : 'text-text-secondary'}`}>
                    <div className={`w-2 h-2 rounded-full ${
                      theme === 'batman' ? 'bg-primary-gold' : 
                      theme === 'transformers' ? 'bg-accent-orange' : 
                      theme === 'spiderman' ? 'bg-accent-red' :
                      'bg-accent-orange'
                    }`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color/Faction Selection */}
            <div>
              <label className="block text-lg font-semibold text-white mb-3">
                {theme === 'transformers' ? 'Faction:' : 'Color:'}
              </label>
              {theme === 'transformers' ? (
                <div className="flex space-x-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelection(color)}
                      className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                        selectedColor === color 
                          ? 'bg-primary-gold text-black border-primary-gold' 
                          : 'bg-black/50 text-primary-gold border-primary-gold/50 hover:bg-primary-gold/20'
                      }`}
                    >
                      {color === 'autobot' ? 'Autobots' : 'Decepticons'}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex space-x-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelection(color)}
                      className={`w-12 h-12 rounded-full border-2 ${
                        selectedColor === color 
                          ? styles.borderColor 
                          : 'border-gray-600'
                      } ${
                        color === 'red' ? 'bg-red-500' :
                        color === 'blue' ? 'bg-blue-500' :
                        color === 'black' ? 'bg-black' :
                        color === 'gold' ? 'bg-yellow-500' :
                        color === 'silver' ? 'bg-gray-300' :
                        'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const stripeInfo = getStripeProductInfo(theme, selectedColor)
                    const productName = selectedColor 
                      ? `${product.name} - ${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}`
                      : product.name
                    
                    addToCart({
                      id: stripeInfo?.productId || `${product.id}-${selectedColor}`,
                      name: productName,
                      price: product.price,
                      image: getCurrentMainImage()
                    })
                    
                    // Show notification and View Cart button
                    setShowNotification(true)
                    setShowViewCart(true)
                    
                    // Hide notification after 3 seconds
                    setTimeout(() => setShowNotification(false), 3000)
                  }}
                  className={`${styles.buttonBg} text-white px-10 py-5 rounded-full font-bold text-xl flex items-center space-x-3 hover:shadow-2xl hover:shadow-primary-gold/30 transition-all duration-300 border-2 border-primary-gold/20 hover:border-primary-gold/40`}
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add to Cart</span>
                </motion.button>
                
                {showViewCart && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center"
                  >
                    <Link href="/cart">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-gold text-black px-6 py-3 rounded-full font-semibold text-lg hover:shadow-gold transition-all duration-300 border-2 border-primary-gold"
                      >
                        View Cart
                      </motion.button>
                    </Link>
                  </motion.div>
                )}
              </div>
              
              {/* Notification */}
              {showNotification && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 max-w-md"
                >
                  <Check className="w-5 h-5" />
                  <span>Added to cart successfully!</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
