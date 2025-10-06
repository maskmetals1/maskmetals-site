import Navigation from '@/components/Navigation'
import ProductFooter from '@/components/ProductFooter'

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navigation variant="legal" />
      
      <div className="container mx-auto px-4 py-16 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bangers text-primary-gold text-center mb-12">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-8">
            {/* Shipping Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">Shipping Information</h2>
              
              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">How long does shipping take?</h3>
                  <p className="text-text-secondary">
                    Shipping typically takes 2 to 3 weeks. We ship from our facility and process orders within 1-2 business days.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">Is shipping really free?</h3>
                  <p className="text-text-secondary">
                    Yes! We offer free shipping on all orders, no minimum purchase required. This applies to all domestic and international orders.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">Do you ship internationally?</h3>
                  <p className="text-text-secondary">
                    Yes, we ship worldwide. International shipping also takes 2-3 weeks and is completely free.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">How can I track my order?</h3>
                  <p className="text-text-secondary">
                    Once your order ships, you&apos;ll receive a tracking number via email. You can track your package using the provided tracking number.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Operate */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">How We Operate</h2>
              
              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">How does Mask Medals work?</h3>
                  <p className="text-text-secondary">
                    We act as a trusted middleman, working directly with suppliers worldwide to bring you authentic superhero merchandise. We don&apos;t maintain our own warehouse inventory, but instead work closely with our suppliers to ensure you receive high-quality products at competitive prices.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">Why do you operate this way?</h3>
                  <p className="text-text-secondary">
                    This model allows us to offer you the best prices while maintaining quality standards. We&apos;re transparent about this because we believe in honest business practices and want you to know exactly how we bring these products to you.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">Does this affect product quality?</h3>
                  <p className="text-text-secondary">
                    Not at all. We carefully vet all our suppliers and maintain strict quality standards. Every product goes through our quality assurance process before reaching you.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">How do you ensure quality control?</h3>
                  <p className="text-text-secondary">
                    We work only with trusted suppliers who meet our strict quality standards. Every order is processed through our quality assurance system, and we handle all customer service to ensure your satisfaction.
                  </p>
                </div>
              </div>
            </section>

            {/* Returns & Refunds */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">Returns & Refunds</h2>
              
              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">What is your return policy?</h3>
                  <p className="text-text-secondary">
                    We do offer money-back guarantees, but you must email us with your reasoning for the return. Please contact us with your order number and reason for return.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">How do I request a return?</h3>
                  <p className="text-text-secondary">
                    To request a return, please email us with your order number and a detailed explanation of why you&apos;d like to return the item. We&apos;ll review your request and provide instructions.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">What if my decal is damaged during shipping?</h3>
                  <p className="text-text-secondary">
                    If your decal arrives damaged, please contact us immediately with photos of the damage. We&apos;ll send you a replacement free of charge.
                  </p>
                </div>
              </div>
            </section>

            {/* Product Information */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">Product Information</h2>
              
              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">What material are the decals made from?</h3>
                  <p className="text-text-secondary">
                    Our superhero decals are made from high-quality metal material, ensuring durability and weather resistance.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">How do I install the decal?</h3>
                  <p className="text-text-secondary">
                    Installation is simple: 1) Clean the surface, 2) Peel and apply the decal, 3) Smooth out any air bubbles. Do not wash your vehicle for 48 hours after installation.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">Will the decal damage my car&apos;s paint?</h3>
                  <p className="text-text-secondary">
                    No, our decals are designed to be removable without damaging your vehicle&apos;s paint when properly installed and removed.
                  </p>
                </div>
              </div>
            </section>

            {/* General Questions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">General Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">How do I contact customer support?</h3>
                  <p className="text-text-secondary">
                    You can reach us through our contact form. We typically respond within 24 hours during business days.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">Do you offer bulk discounts?</h3>
                  <p className="text-text-secondary">
                    Yes! For orders of 10 or more decals, please contact us for special pricing.
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
                  <h3 className="text-xl font-semibold text-primary-gold mb-3">Are your products authentic superhero designs?</h3>
                  <p className="text-text-secondary">
                    Yes, all our designs are created with respect for superhero traditions and are approved for use by fans.
                  </p>
                </div>
              </div>
            </section>

            {/* Still Have Questions */}
            <section className="bg-gradient-to-r from-primary-gold/10 to-primary-gold/5 p-8 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">Still Have Questions?</h2>
              <p className="text-text-secondary mb-6">
                If you can&apos;t find the answer you&apos;re looking for, please don&apos;t hesitate to contact us:
              </p>
              <a 
                href="/#contact" 
                className="inline-block bg-primary-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-primary-gold/80 transition-colors"
              >
                Contact Us
              </a>
            </section>
          </div>
        </div>
      </div>
      
      <ProductFooter />
    </main>
  )
}
