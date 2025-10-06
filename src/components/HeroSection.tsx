'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {/* Welcome Text */}
        <div className="text-white text-sm uppercase tracking-wider mb-4">
          WELCOME TO
        </div>
        
        {/* Main Brand Name */}
        <h1 className="text-6xl md:text-8xl font-bangers text-primary-gold mb-4 animate-glow">
          MASK MEDALS
        </h1>
        
        {/* Tagline */}
        <div className="text-white text-sm uppercase tracking-wider mb-8">
          PREMIUM SUPERHERO MERCHANDISE
        </div>
        
        {/* Description */}
        <p className="text-lg text-white mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your vehicle with premium quality metal decals featuring your favorite superhero designs. Professional craftsmanship meets superhero magic.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-primary-gold mb-2">6K+</div>
            <div className="text-white text-sm uppercase tracking-wider">HAPPY CUSTOMERS</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-primary-gold mb-2">48+</div>
            <div className="text-white text-sm uppercase tracking-wider">COUNTRIES SERVED</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-primary-gold mb-2">95%</div>
            <div className="text-white text-sm uppercase tracking-wider">REPEAT CUSTOMERS</div>
          </motion.div>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const heroesSection = document.getElementById('heroes');
              if (heroesSection) {
                heroesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary-gold text-black px-8 py-4 font-semibold text-lg hover:shadow-gold transition-all duration-300"
          >
            Explore Heroes
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
