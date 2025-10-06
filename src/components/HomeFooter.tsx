import { Instagram, Video } from 'lucide-react'

export default function HomeFooter() {
  return (
    <footer className="bg-black/95 border-t border-primary-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bangers text-primary-gold mb-4">Mask Medals</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/deendecal/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@maskmetals.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <Video className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-gold mb-4">Products</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="/spiderman" className="hover:text-primary-gold transition-colors">Spider-Man</a></li>
              <li><a href="/batman" className="hover:text-primary-gold transition-colors">Batman</a></li>
              <li><a href="/transformers" className="hover:text-primary-gold transition-colors">Transformers</a></li>
              <li><a href="#heroes" className="hover:text-primary-gold transition-colors">More Heroes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-gold mb-4">Support</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#contact" className="hover:text-primary-gold transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-primary-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-gold mb-4">Company</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#about" className="hover:text-primary-gold transition-colors">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-primary-gold transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-primary-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-gold/20 pt-8 text-center">
          <p className="text-text-secondary">
            &copy; 2025 Mask Medals. All rights reserved. | Superhero merchandise for fans worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
