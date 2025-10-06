import Navigation from '@/components/Navigation'
import ProductFooter from '@/components/ProductFooter'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navigation variant="home" />
      
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bangers text-primary-gold text-center mb-12">
            Terms of Service
          </h1>
          <p className="text-text-secondary text-center mb-12">Last updated: 10/3/2025</p>
          
          <div className="space-y-8">
            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-secondary">
                By accessing and using MaskMedals.com (&quot;the Website&quot;) and purchasing our products, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">2. About Our Business</h2>
              <p className="text-text-secondary mb-4">
                Mask Medals operates as a trusted middleman, working directly with suppliers worldwide to bring you authentic superhero merchandise. We do not maintain our own warehouse inventory but work closely with our suppliers to ensure you receive high-quality products at competitive prices.
              </p>
              <p className="text-text-secondary">
                For more information about how we operate, please visit our How We Operate section in our FAQ.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">3. Products and Services</h2>
              <p className="text-text-secondary mb-4">We offer premium superhero merchandise including:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Spider-Man Metal Car Decals in various colors (Red, Black, Gold, Silver)</li>
                <li>Batman Metal Car Decals in various colors</li>
                <li>Transformers Metal Car Decals (Autobot & Decepticon)</li>
                <li>High-quality metal material construction</li>
                <li>Worldwide shipping</li>
              </ul>
              <p className="text-text-secondary mt-4">
                Product images and descriptions are provided by our suppliers. While we strive for accuracy, slight variations may occur.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">4. Orders and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Order Processing:</h3>
                  <p className="text-text-secondary">All orders are processed through our secure payment system powered by Stripe. Payment is required at the time of purchase.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Pricing:</h3>
                  <p className="text-text-secondary">All prices are listed in USD and include applicable taxes. We reserve the right to change prices at any time.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Order Confirmation:</h3>
                  <p className="text-text-secondary">You will receive an email confirmation upon successful order placement.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Payment Methods:</h3>
                  <p className="text-text-secondary">We accept all major credit cards, debit cards, and other payment methods supported by Stripe.</p>
                </div>
              </div>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">5. Shipping and Delivery</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Shipping Times:</h3>
                  <p className="text-text-secondary">Orders typically ship within 1-2 business days and arrive within 2-3 weeks worldwide.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Free Shipping:</h3>
                  <p className="text-text-secondary">We offer free shipping on all orders with no minimum purchase required.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">International Shipping:</h3>
                  <p className="text-text-secondary">We ship worldwide. International orders may be subject to customs duties and taxes, which are the customer&apos;s responsibility.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Tracking:</h3>
                  <p className="text-text-secondary">You will receive tracking information via email once your order ships.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Delivery Issues:</h3>
                  <p className="text-text-secondary">If you experience delivery issues, please contact us immediately through our contact form.</p>
                </div>
              </div>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">6. Returns and Refunds</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Return Policy:</h3>
                  <p className="text-text-secondary">We offer money-back guarantees, but you must email us with your reasoning for the return. Please contact us with your order number and reason for return.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Damaged Items:</h3>
                  <p className="text-text-secondary">If your decal arrives damaged, please contact us immediately with photos of the damage. We&apos;ll send you a replacement free of charge.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Refund Processing:</h3>
                  <p className="text-text-secondary">Approved refunds will be processed within 5-10 business days to your original payment method.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Return Shipping:</h3>
                  <p className="text-text-secondary">Return shipping costs are the customer&apos;s responsibility unless the item was damaged or defective.</p>
                </div>
              </div>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">7. Customer Responsibilities</h2>
              <p className="text-text-secondary mb-4">Customers are responsible for:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Providing accurate shipping information</li>
                <li>Ensuring proper installation of products</li>
                <li>Following installation instructions provided</li>
                <li>Contacting us promptly with any issues</li>
                <li>Paying any applicable customs duties or taxes</li>
              </ul>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">8. Installation and Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Installation Instructions:</h3>
                  <ol className="list-decimal list-inside text-text-secondary space-y-2 ml-4">
                    <li>Clean the area of the vehicle to be applied. Ensure the area is dry, clean, free of oil and moisture, and has not been waxed within three days.</li>
                    <li>Carefully peel off the protective film from the adhesive backing of the vehicle logo. Align the sticker with the desired area, pressing downward along the logo and pressing firmly.</li>
                    <li>Do not wash the vehicle within 48 hours of application.</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-gold mb-2">Proper Use:</h3>
                  <p className="text-text-secondary">Our products are designed for automotive use. Improper installation or use may void any warranty.</p>
                </div>
              </div>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">9. Limitation of Liability</h2>
              <p className="text-text-secondary mb-4">
                Mask Medals shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our products or services.
              </p>
              <p className="text-text-secondary">
                Our total liability to you for any damages shall not exceed the amount you paid for the product.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">10. Intellectual Property</h2>
              <p className="text-text-secondary">
                All content on this website, including text, graphics, logos, images, and software, is the property of Mask Medals or our suppliers and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">11. Privacy</h2>
              <p className="text-text-secondary">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Website.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">12. Modifications</h2>
              <p className="text-text-secondary">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">13. Governing Law</h2>
              <p className="text-text-secondary">
                These terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">14. Contact Information</h2>
              <p className="text-text-secondary">
                If you have any questions about these Terms of Service, please contact us through our contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <ProductFooter />
    </main>
  )
}
