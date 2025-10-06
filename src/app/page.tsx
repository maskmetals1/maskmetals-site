'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import HeroesSection from '@/components/HeroesSection'
import ContactSection from '@/components/ContactSection'
import HomeFooter from '@/components/HomeFooter'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation variant="home" />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="dots-pattern absolute inset-0"></div>
        </div>
        <HeroSection />
      </section>

      {/* Heroes Section - Second Section */}
      <section id="heroes" className="py-24 bg-black">
        <HeroesSection />
      </section>

      {/* About Section - Third Section */}
      <section id="about" className="py-20 bg-darker-bg">
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <ContactSection />
      </section>

      <HomeFooter />
    </main>
  )
}
