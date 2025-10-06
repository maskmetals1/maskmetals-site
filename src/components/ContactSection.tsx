'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bangers text-primary-gold mb-8">
          Get In Touch
        </h2>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
          Have questions about our products? Need help with an order? We&apos;re here to help!
        </p>
        
        <div className="flex justify-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card-bg p-8 rounded-lg border border-primary-gold/20 hover:border-primary-gold/40 transition-colors max-w-md"
          >
            <Mail className="w-12 h-12 text-primary-gold mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-primary-gold mb-4 text-center">Email</h3>
            <p className="text-text-secondary text-center text-lg">maskmetals1@gmail.com</p>
          </motion.div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-card-bg p-8 rounded-lg border border-primary-gold/20"
        >
          <h3 className="text-2xl font-bangers text-primary-gold mb-4">
            Ready to Order?
          </h3>
          <p className="text-text-secondary mb-6">
            Browse our collection and find the perfect decal for your vehicle or device.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const heroesSection = document.getElementById('heroes');
              if (heroesSection) {
                heroesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-gold transition-all duration-300"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
