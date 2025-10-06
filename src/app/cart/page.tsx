'use client'

import { useCart } from '@/contexts/CartContext'
import Navigation from '@/components/Navigation'
import ProductFooter from '@/components/ProductFooter'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import getStripe from '@/lib/stripe-client'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      })

      const { sessionId } = await response.json()
      
      const stripe = await getStripe()
      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-dark-bg">
        <Navigation variant="cart" />
        
        <div className="container mx-auto px-4 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <ShoppingBag className="w-20 h-20 sm:w-24 sm:h-24 text-primary-gold mx-auto mb-6 sm:mb-8" />
            <h1 className="text-3xl sm:text-4xl font-bangers text-primary-gold mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-base sm:text-lg text-text-secondary mb-6 sm:mb-8 px-4">
              Looks like you haven&apos;t added any items to your cart yet. Browse our collection to find the perfect decals for your vehicle!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = '/#heroes';
              }}
              className="bg-primary-gold text-black px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg hover:shadow-gold transition-all duration-300 rounded-lg"
            >
              Browse Heroes
            </motion.button>
          </motion.div>
        </div>
        
        <ProductFooter />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation variant="home" />
      
      <div className="container mx-auto px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bangers text-primary-gold mb-8 text-center">
            Your Cart
          </h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card-bg rounded-lg p-4 md:p-6 border border-primary-gold/20"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 truncate">
                          {item.name}
                        </h3>
                        <p className="text-primary-gold font-bold text-lg">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-primary-gold text-black flex items-center justify-center hover:bg-secondary-gold transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="text-white font-semibold text-lg min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-primary-gold text-black flex items-center justify-center hover:bg-secondary-gold transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6">
                <button
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card-bg rounded-lg p-4 md:p-6 border border-primary-gold/20 sticky top-24">
                <h2 className="text-xl md:text-2xl font-bangers text-primary-gold mb-4 md:mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div className="flex justify-between text-white text-sm md:text-base">
                    <span>Subtotal ({items.length} items)</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white text-sm md:text-base">
                    <span>Shipping</span>
                    <span className="text-primary-gold font-semibold">FREE</span>
                  </div>
                  <div className="border-t border-primary-gold/20 pt-3 md:pt-4">
                    <div className="flex justify-between text-lg md:text-xl font-bold text-primary-gold">
                      <span>Total</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-primary-gold text-black py-3 md:py-4 font-semibold text-base md:text-lg rounded-lg hover:shadow-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </motion.button>
                
                <p className="text-xs md:text-sm text-text-secondary mt-3 md:mt-4 text-center">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <ProductFooter />
    </main>
  )
}
