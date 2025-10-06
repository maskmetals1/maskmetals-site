import Navigation from '@/components/Navigation'
import ProductFooter from '@/components/ProductFooter'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navigation variant="home" />
      
      <div className="container mx-auto px-4 py-16 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bangers text-primary-gold text-center mb-12">
            Privacy Policy
          </h1>
          <p className="text-text-secondary text-center mb-12">Last updated: 10/3/2025</p>
          
          <div className="space-y-8">
            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">1. Information We Collect</h2>
              <p className="text-text-secondary mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Create an account or make a purchase</li>
                <li>Contact us for customer support</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              <p className="text-text-secondary mt-4">
                <strong>Personal Information:</strong> Name, email address, shipping address, phone number, and payment information.
              </p>
              <p className="text-text-secondary mt-2">
                <strong>Payment Information:</strong> We use Stripe for payment processing. Your payment information is securely handled by Stripe and not stored on our servers.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">2. How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and our services</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">3. Information Sharing</h2>
              <p className="text-text-secondary mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li><strong>Suppliers:</strong> We work with trusted suppliers to fulfill your orders. We share necessary shipping information (name, address) to ensure delivery.</li>
                <li><strong>Payment Processors:</strong> Stripe processes your payments securely.</li>
                <li><strong>Shipping Partners:</strong> To deliver your orders worldwide.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              </ul>
              <p className="text-text-secondary mt-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">4. Data Security</h2>
              <p className="text-text-secondary">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">5. Cookies and Tracking</h2>
              <p className="text-text-secondary mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage</li>
                <li>Improve user experience</li>
              </ul>
              <p className="text-text-secondary mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">6. Your Rights</h2>
              <p className="text-text-secondary mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability (where applicable)</li>
              </ul>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">7. International Transfers</h2>
              <p className="text-text-secondary">
                As a global business, we may transfer your information to countries outside your residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-text-secondary">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">9. Changes to This Policy</h2>
              <p className="text-text-secondary">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="bg-black/50 p-6 rounded-lg border border-primary-gold/20">
              <h2 className="text-2xl font-semibold text-primary-gold mb-4">10. Contact Us</h2>
              <p className="text-text-secondary">
                If you have any questions about this Privacy Policy, please contact us through our contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <ProductFooter />
    </main>
  )
}
