import { Header } from "@/components/header"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 font-display text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mb-8 text-muted-foreground">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Account information (name, email, phone number)</li>
                <li>• Profile information and photos</li>
                <li>• Payment information</li>
                <li>• Communications with us and other users</li>
                <li>• Product listings and transaction history</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Provide, maintain, and improve our services</li>
                <li>• Process transactions and send related information</li>
                <li>• Send you technical notices and support messages</li>
                <li>• Respond to your comments and questions</li>
                <li>• Detect and prevent fraud and abuse</li>
                <li>• Personalize your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• With other users to facilitate transactions</li>
                <li>• With service providers who perform services on our behalf</li>
                <li>• With payment processors to handle transactions</li>
                <li>• When required by law or to protect our rights</li>
                <li>• With your consent or at your direction</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
                However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to collect information about your browsing activities.
                You can control cookies through your browser settings, but disabling cookies may affect your ability to
                use certain features.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">6. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access and update your account information</li>
                <li>• Request deletion of your account</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request a copy of your data</li>
                <li>• Object to certain data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information for as long as your account is active or as needed to provide services. We
                may also retain information to comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                QuickErrand is not intended for users under 18 years of age. We do not knowingly collect information
                from children under 18. If we learn we have collected information from a child under 18, we will delete
                it.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">9. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than Ghana. We take steps to
                ensure your information receives adequate protection wherever it is processed.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">10. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of material changes by posting
                the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this privacy policy or our data practices, please contact us at{" "}
                <a href="mailto:privacy@quickerrand.com" className="text-[#2563eb] hover:underline">
                  privacy@quickerrand.com
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
