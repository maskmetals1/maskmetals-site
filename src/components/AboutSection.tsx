'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bangers text-primary-gold mb-4">
              About Mask Medals
            </h2>
            <h3 className="text-2xl font-bold text-white mb-6">
              Bringing Superhero Magic to Your Vehicle
            </h3>
            <p className="text-lg text-white mb-8 leading-relaxed">
              At Mask Medals, we specialize in premium quality metal decals featuring your favorite superhero designs. 
              Our mission is to bring quality metal decals worldwide, serving as a middleman to ensure every person gets 
              the product they want, no matter what country they&apos;re from.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg border-l-4 border-primary-gold">
                <div className="text-3xl">🌍</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Worldwide Shipping</h4>
                  <p className="text-white">We ship to every corner of the globe, bringing superhero magic to fans everywhere.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg border-l-4 border-primary-gold">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Premium Quality</h4>
                  <p className="text-white">Our metal decals are made with the highest quality materials for lasting durability.</p>
                </div>
              </div>
              
                      <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg border-l-4 border-primary-gold">
                        <div className="text-3xl">🎯</div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Custom Solutions</h4>
                          <p className="text-white">We work as your middleman to get you exactly what you want, when you want it.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg border-l-4 border-primary-gold">
                        <div className="text-3xl">💰</div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">Global Fair Pricing</h4>
                          <p className="text-white">We strive to keep the price of every item the same worldwide, ensuring fair access to premium superhero merchandise regardless of your location and to ensure FREE shipping on all orders.</p>
                        </div>
                      </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-card-bg rounded-lg p-6 text-center border-l-4 border-primary-gold">
                <Image
                  src="/images/spiderman/redPFP.avif"
                  alt="Spider-Man"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-3 border-primary-gold mx-auto mb-3"
                />
                <div className="text-white font-semibold mb-1">Spider-Man</div>
                <div className="text-primary-gold text-sm font-medium">Available</div>
              </div>
              
              <div className="bg-card-bg rounded-lg p-6 text-center border-l-4 border-primary-gold">
                <Image
                  src="/images/batman/goldAndSilverBat.avif"
                  alt="Batman"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-3 border-primary-gold mx-auto mb-3"
                />
                <div className="text-white font-semibold mb-1">Batman</div>
                <div className="text-primary-gold text-sm font-medium">Available</div>
              </div>
              
              <div className="bg-card-bg rounded-lg p-6 text-center border-l-4 border-primary-gold">
                <Image
                  src="/images/transformers/autobotPFP.avif"
                  alt="Transformers"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-3 border-primary-gold mx-auto mb-3"
                />
                <div className="text-white font-semibold mb-1">Transformers</div>
                <div className="text-primary-gold text-sm font-medium">Available</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
