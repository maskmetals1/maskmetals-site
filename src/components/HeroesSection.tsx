'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const heroes = [
  {
    name: 'Spider-Man',
    slug: 'spiderman',
    image: '/images/spiderman/redPFP.avif',
    description: 'Web-slinging merchandise with amazing quality',
    gradient: 'from-accent-red to-accent-blue',
    textColor: 'text-accent-red',
    hoverColor: 'hover:border-accent-red hover:shadow-red-500/20'
  },
  {
    name: 'Batman',
    slug: 'batman',
    image: '/images/batman/goldAndSilverBat.avif',
    description: 'Dark Knight collectibles in premium metal',
    gradient: 'from-primary-gold to-black',
    textColor: 'text-primary-gold',
    hoverColor: 'hover:border-primary-gold hover:shadow-yellow-500/20'
  },
  {
    name: 'Transformers',
    slug: 'transformers',
    image: '/images/transformers/autobotPFP.avif',
    description: 'More than meets the eye in metal form',
    gradient: 'from-accent-orange to-black',
    textColor: 'text-accent-orange',
    hoverColor: 'hover:border-accent-orange hover:shadow-orange-500/20'
  },
  {
    name: 'Superman',
    slug: 'superman',
    image: '/images/superman/pfpRED.jpg',
    description: 'Man of Steel merchandise coming soon',
    gradient: 'from-accent-blue to-accent-red',
    textColor: 'text-accent-blue',
    hoverColor: 'hover:border-accent-blue hover:shadow-blue-500/20',
    comingSoon: true
  },
  {
    name: 'Iron Man',
    slug: 'ironman',
    image: '/images/iron-man/3pc3colorPFP.jpg',
    description: 'Genius billionaire merchandise in development',
    gradient: 'from-accent-orange to-accent-red',
    textColor: 'text-accent-orange',
    hoverColor: 'hover:border-accent-red hover:shadow-red-500/20',
    comingSoon: true
  }
]

export default function HeroesSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bangers text-primary-gold text-center mb-4">
          Choose Your Hero
        </h2>
        <p className="text-white text-center mb-16">
          Premium metal decals featuring your favorite superheroes
        </p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {heroes.map((hero, index) => (
            <motion.div
              key={hero.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={!hero.comingSoon ? { scale: 1.05 } : {}}
              className={`group ${hero.comingSoon ? 'cursor-default opacity-70' : 'cursor-pointer'}`}
            >
            {hero.comingSoon ? (
              <div className={`bg-card-bg rounded-2xl overflow-hidden border border-primary-gold/20 min-h-80 flex flex-col items-center text-center p-6 relative transition-all duration-300 ${hero.hoverColor}`}>
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-white mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={hero.image}
                      alt={`${hero.name} decal`}
                      width={120}
                      height={120}
                      className="w-28 h-28 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bangers text-white mb-2">
                    {hero.name}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm">{hero.description}</p>
                  <div className="bg-gradient-gold text-black px-4 py-2 rounded-full font-semibold text-sm">
                    Coming Soon
                  </div>
                </div>
              </div>
            ) : (
              <Link href={`/${hero.slug}`}>
                <div className={`bg-card-bg rounded-2xl overflow-hidden border border-primary-gold/20 transition-all duration-300 hover:shadow-card min-h-80 flex flex-col items-center text-center p-6 ${hero.hoverColor}`}>
                  <div className="w-32 h-32 rounded-full bg-white mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={hero.image}
                      alt={`${hero.name} decal`}
                      width={120}
                      height={120}
                      className="w-28 h-28 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bangers text-white mb-2">
                    {hero.name}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm">{hero.description}</p>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="text-primary-gold font-semibold text-sm">View Collection</span>
                  </div>
                </div>
              </Link>
            )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
