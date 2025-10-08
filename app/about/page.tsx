import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Package, Users, Truck, Shield } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 font-display text-4xl font-bold md:text-5xl">About QuickErrand</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              QuickErrand is Ghana's premier local marketplace connecting buyers, sellers, and errand runners in a
              seamless digital ecosystem. We're building the future of local commerce.
            </p>

            <div className="grid gap-6 md:grid-cols-2 my-12">
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb]/10">
                  <Package className="h-6 w-6 text-[#2563eb]" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower local communities by making buying, selling, and delivery services accessible to everyone.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#10b981]/10">
                  <Users className="h-6 w-6 text-[#10b981]" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">Our Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Over 10,000 active users trust QuickErrand for their daily marketplace and delivery needs.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f59e0b]/10">
                  <Truck className="h-6 w-6 text-[#f59e0b]" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">Fast Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our network of errand runners ensures your items reach you quickly and safely.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb]/10">
                  <Shield className="h-6 w-6 text-[#2563eb]" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">Secure Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your transactions are protected with industry-leading security measures.
                </p>
              </div>
            </div>

            <h2 className="mb-4 font-display text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2024, QuickErrand was born from a simple idea: what if buying and selling locally could be as
              easy as ordering online? We saw the potential to connect neighbors, support local businesses, and create
              opportunities for errand runners.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, we're proud to serve communities across Ghana, facilitating thousands of transactions every month
              and helping people turn their unused items into cash while providing convenient delivery services.
            </p>

            <h2 className="mb-4 font-display text-3xl font-bold mt-12">Why Choose QuickErrand?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981]">
                  ✓
                </span>
                <span>Local focus with trusted community members</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981]">
                  ✓
                </span>
                <span>Secure payment processing in Ghana Cedis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981]">
                  ✓
                </span>
                <span>Fast errand services for same-day delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981]">
                  ✓
                </span>
                <span>Easy-to-use platform for buyers and sellers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981]">
                  ✓
                </span>
                <span>24/7 customer support</span>
              </li>
            </ul>

            <div className="mt-12 rounded-lg border bg-muted/50 p-8 text-center">
              <h3 className="mb-4 font-display text-2xl font-bold">Join Our Community</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Whether you're looking to buy, sell, or earn as an errand runner, QuickErrand has a place for you.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-[#2563eb] hover:bg-[#2563eb]/90" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
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
