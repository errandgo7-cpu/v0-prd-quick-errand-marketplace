import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { CategoryCard } from "@/components/category-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Truck, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  // Mock data - will be replaced with real data from database
  const featuredProducts = [
    {
      id: "1",
      title: "iPhone 14 Pro",
      price: 799.99,
      imageUrl: "/modern-smartphone.png",
      rating: 4.8,
      reviewCount: 24,
      seller: "John Seller",
    },
    {
      id: "2",
      title: "MacBook Air M2",
      price: 1099.99,
      imageUrl: "/silver-macbook-on-desk.png",
      rating: 4.9,
      reviewCount: 18,
      seller: "John Seller",
    },
    {
      id: "3",
      title: "Designer Leather Jacket",
      price: 249.99,
      imageUrl: "/classic-leather-jacket.png",
      rating: 4.7,
      reviewCount: 12,
      seller: "Jane Merchant",
    },
    {
      id: "4",
      title: "Modern Coffee Table",
      price: 179.99,
      imageUrl: "/modern-living-room-coffee-table.png",
      rating: 4.6,
      reviewCount: 8,
      seller: "Jane Merchant",
    },
  ]

  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      imageUrl: "/electronics-components.png",
      productCount: 156,
    },
    {
      id: "fashion",
      name: "Fashion",
      imageUrl: "/diverse-fashion-collection.png",
      productCount: 243,
    },
    {
      id: "home-garden",
      name: "Home & Garden",
      imageUrl: "/cozy-living-room.png",
      productCount: 189,
    },
    {
      id: "sports",
      name: "Sports",
      imageUrl: "/assorted-sports-gear.png",
      productCount: 98,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20" variant="outline">
              Your Local Marketplace
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Buy, Sell & Get Things Done
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Discover amazing deals from local sellers or request errand services for quick deliveries
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-2">
              <Button size="lg" asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/errands">Request Errand</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Wide Selection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thousands of products from trusted local sellers
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quick errand services for same-day delivery
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Secure Payments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe and encrypted payment processing</p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Always here to help with your orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
              <p className="text-muted-foreground">Find what you're looking for</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/categories">View All</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-t py-16 bg-muted/30">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked deals for you</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/products">View All</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-balance">Start Selling Today</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Join thousands of sellers and turn your unused items into cash
            </p>
            <Button size="lg" asChild>
              <Link href="/sell">List Your First Item</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 QuickErrand. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
