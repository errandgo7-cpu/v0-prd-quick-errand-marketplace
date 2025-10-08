import { Header } from "@/components/header"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 font-display text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <p className="mb-8 text-muted-foreground">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using QuickErrand, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">2. Use of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                QuickErrand provides a platform for users to buy, sell, and request errand services. You agree to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Provide accurate and complete information when creating an account</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Not use the service for any illegal or unauthorized purpose</li>
                <li>• Not violate any laws in your jurisdiction</li>
                <li>• Not transmit any harmful code or malware</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">3. Buying and Selling</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When listing items for sale, you agree to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Provide accurate descriptions and images of items</li>
                <li>• Honor the price and terms listed</li>
                <li>• Ship items promptly after receiving payment</li>
                <li>• Not sell prohibited or illegal items</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                When purchasing items, you agree to pay for items you commit to buying and follow through with
                transactions in good faith.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">4. Errand Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Errand runners are independent contractors, not employees of QuickErrand. We facilitate connections but
                are not responsible for the actions of errand runners. Users requesting errands agree to provide clear
                instructions and fair compensation.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">5. Payments and Fees</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                QuickErrand charges a service fee on transactions. All fees are clearly displayed before you complete a
                transaction. Payment processing is handled securely through our payment partners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Refunds are handled on a case-by-case basis according to our refund policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">6. Prohibited Items</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following items are prohibited from being listed or sold on QuickErrand:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Illegal drugs or controlled substances</li>
                <li>• Weapons and ammunition</li>
                <li>• Stolen goods</li>
                <li>• Counterfeit items</li>
                <li>• Adult content or services</li>
                <li>• Live animals</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The QuickErrand platform, including its design, features, and content, is owned by QuickErrand and
                protected by copyright and trademark laws. You may not copy, modify, or distribute our content without
                permission.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                QuickErrand is not liable for any damages arising from your use of the service, including but not
                limited to disputes between buyers and sellers, lost or damaged items, or actions of errand runners. We
                provide the platform but do not guarantee outcomes of transactions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violations of these terms or
                for any other reason at our discretion.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these terms from time to time. Continued use of the service after changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">11. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these terms, please contact us at{" "}
                <a href="mailto:legal@quickerrand.com" className="text-[#2563eb] hover:underline">
                  legal@quickerrand.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 QuickErrand. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
