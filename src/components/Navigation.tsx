'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { ShoppingCart } from 'lucide-react'

interface NavigationProps {
  variant?: 'home' | 'spiderman' | 'batman' | 'transformers' | 'superman' | 'iron-man' | 'cart'
}

export default function Navigation({ variant = 'home' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight - 20
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'spiderman':
        return {
          borderColor: 'border-accent-red',
          textColor: 'text-white',
          hoverColor: 'hover:text-accent-red',
          logoColor: 'text-accent-red',
          backLinkColor: 'text-accent-blue',
          backLinkHover: 'hover:text-accent-red'
        }
      case 'batman':
        return {
          borderColor: 'border-primary-gold',
          textColor: 'text-white',
          hoverColor: 'hover:text-primary-gold',
          logoColor: 'text-primary-gold',
          backLinkColor: 'text-accent-blue',
          backLinkHover: 'hover:text-primary-gold'
        }
      case 'transformers':
        return {
          borderColor: 'border-accent-orange',
          textColor: 'text-white',
          hoverColor: 'hover:text-accent-orange',
          logoColor: 'text-accent-orange',
          backLinkColor: 'text-accent-blue',
          backLinkHover: 'hover:text-accent-orange'
        }
      case 'superman':
        return {
          borderColor: 'border-accent-blue',
          textColor: 'text-white',
          hoverColor: 'hover:text-accent-blue',
          logoColor: 'text-accent-blue',
          backLinkColor: 'text-accent-red',
          backLinkHover: 'hover:text-accent-blue'
        }
      case 'iron-man':
        return {
          borderColor: 'border-accent-orange',
          textColor: 'text-white',
          hoverColor: 'hover:text-accent-orange',
          logoColor: 'text-accent-orange',
          backLinkColor: 'text-accent-red',
          backLinkHover: 'hover:text-accent-orange'
        }
      default:
        return {
          borderColor: 'border-primary-gold',
          textColor: 'text-white',
          hoverColor: 'hover:text-primary-gold',
          logoColor: 'text-primary-gold',
          backLinkColor: 'text-primary-gold',
          backLinkHover: 'hover:text-primary-gold'
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isScrolled ? '-translate-y-full' : 'translate-y-0'
    } bg-black border-b border-opacity-10 ${styles.borderColor}`} style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          {variant !== 'home' && (
            <Link href="/" className={`${styles.backLinkColor} font-semibold text-sm mb-2 transition-colors ${styles.backLinkHover}`}>
              ← Back to Heroes
            </Link>
          )}
          {variant === 'home' ? (
            <>
              <Link href="/" className="text-4xl font-bangers text-primary-gold hover:text-secondary-gold transition-colors">
                Mask Medals
              </Link>
              <span className="text-sm text-text-secondary">FREE shipping on all orders</span>
            </>
          ) : variant === 'cart' ? (
            <>
              <Link href="/" className="text-4xl font-bangers text-primary-gold hover:text-secondary-gold transition-colors">
                Mask Medals
              </Link>
              <span className="text-sm text-text-secondary">Your Shopping Cart</span>
            </>
          ) : (
            <h1 className={`text-4xl font-bangers ${styles.logoColor} ${variant === 'batman' ? 'batman-glow' : 'animate-glow'}`}>
              {variant === 'spiderman' ? 'Spider-Man' : 
               variant === 'batman' ? 'BATMAN' : 
               variant === 'transformers' ? 'Transformers' : 
               variant === 'superman' ? 'Superman' :
               variant === 'iron-man' ? 'Iron Man' : 'Mask Medals'}
            </h1>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {variant === 'home' ? (
            <>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-primary-gold transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('heroes')}
                className="text-white hover:text-primary-gold transition-colors font-medium"
              >
                Heroes
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-primary-gold transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-primary-gold transition-colors font-medium"
              >
                Contact
              </button>
            </>
          ) : variant === 'cart' ? (
            <>
              <Link 
                href="/#home"
                className="text-white hover:text-primary-gold transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                href="/#heroes"
                className="text-white hover:text-primary-gold transition-colors font-medium"
              >
                Heroes
              </Link>
              <Link 
                href="/#about"
                className="text-white hover:text-primary-gold transition-colors font-medium"
              >
                About
              </Link>
              <Link 
                href="/#contact"
                className="text-white hover:text-primary-gold transition-colors font-medium"
              >
                Contact
              </Link>
            </>
          ) : (
            <>
              <button 
                onClick={() => window.location.href = '/#product'}
                className={`${styles.textColor} ${styles.hoverColor} transition-colors font-medium`}
              >
                Product
              </button>
              <button 
                onClick={() => window.location.href = '/#gallery'}
                className={`${styles.textColor} ${styles.hoverColor} transition-colors font-medium`}
              >
                Gallery
              </button>
              <button 
                onClick={() => window.location.href = '/#other-products'}
                className={`${styles.textColor} ${styles.hoverColor} transition-colors font-medium`}
              >
                More
              </button>
            </>
          )}
          
          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingCart className={`w-6 h-6 ${styles.textColor} ${styles.hoverColor} transition-colors`} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-gold text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button and Cart Icon */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Cart Icon for Mobile */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-primary-gold" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-gold text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
          
          {/* Hamburger Menu Button */}
          <button
            className="flex flex-col space-y-1 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-primary-gold transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-primary-gold transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-primary-gold transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation - Slides from Right */}
      <nav className={`md:hidden fixed top-0 right-0 h-full w-64 max-w-[75vw] bg-black z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ backgroundColor: '#000000' }}>
        <div className="h-full flex flex-col">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <h1 className="text-xl font-bangers text-primary-gold">
              {variant === 'spiderman' ? 'Spider-Man' : 
               variant === 'batman' ? 'BATMAN' : 
               variant === 'transformers' ? 'Transformers' : 
               variant === 'superman' ? 'Superman' :
               variant === 'iron-man' ? 'Iron Man' : 'Mask Medals'}
            </h1>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="flex-1 px-6 py-8 space-y-2">
            {variant === 'home' ? (
              <>
                <button 
                  onClick={() => {
                    scrollToSection('home')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('heroes')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                >
                  Heroes
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact')
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                >
                  Contact
                </button>
              </>
            ) : variant === 'cart' ? (
              <>
                <Link 
                  href="/#home"
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/#heroes"
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Heroes
                </Link>
                <Link 
                  href="/#about"
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/#contact"
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="/" 
                  className="block text-primary-gold font-semibold text-lg py-4 border-b border-gray-800 hover:border-primary-gold/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ← Back to Heroes
                </Link>
                <button 
                  onClick={() => {
                    window.location.href = '/#product'
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                >
                  Product
                </button>
                <button 
                  onClick={() => {
                    window.location.href = '/#gallery'
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => {
                    window.location.href = '/#other-products'
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-white hover:text-primary-gold transition-colors text-lg py-4 w-full text-left border-b border-gray-800 hover:border-primary-gold/30"
                >
                  More
                </button>
              </>
            )}
          </div>

          {/* Mobile Footer */}
          <div className="p-6 border-t border-gray-800">
            <div className="flex items-center justify-center space-x-4">
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-primary-gold" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-gold text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              <span className="text-gray-400 text-sm">Shopping Cart</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
