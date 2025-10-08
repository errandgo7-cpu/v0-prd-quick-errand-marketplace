import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CategoriesPage() {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets and tech",
      imageUrl: "/electronics-components.png",
      productCount: 1247,
      trending: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "fashion",
      name: "Fashion",
      description: "Style and trends",
      imageUrl: "/diverse-fashion-collection.png",
      productCount: 2891,
      trending: true,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "home-garden",
      name: "Home & Garden",
      description: "Make your space beautiful",
      imageUrl: "/cozy-living-room.png",
      productCount: 1653,
      trending: false,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "sports",
      name: "Sports & Fitness",
      description: "Stay active and healthy",
      imageUrl: "/assorted-sports-gear.png",
      productCount: 892,
      trending: false,
      color: "from-orange-500 to-amber-500",
    },
    {
      id: "books",
      name: "Books & Media",
      description: "Knowledge and entertainment",
      imageUrl: "/books-and-media.png",
      productCount: 1456,
      trending: false,
      color: "from-purple-500 to-violet-500",
    },
    {
      id: "toys",
      name: "Toys & Games",
      description: "Fun for all ages",
      imageUrl: "/assorted-toys-games.png",
      productCount: 734,
      trending: true,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "automotive",
      name: "Automotive",
      description: "Cars and accessories",
      imageUrl: "/automotive-parts.png",
      productCount: 567,
      trending: false,
      color: "from-gray-500 to-slate-500",
    },
    {
      id: "beauty",
      name: "Beauty & Health",
      description: "Look and feel great",
      imageUrl: "/beauty-products-collection.png",
      productCount: 1123,
      trending: true,
      color: "from-pink-400 to-purple-400",
    },
  ]

  const featuredCategory = categories[0]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 animate-pulse-glow bg-primary" variant="default">
              <Sparkles className="mr-1 h-3 w-3" />
              Explore Categories
            </Badge>
            <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
              Discover Your
              <span className="gradient-text"> Perfect Find</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
              Browse through our curated categories and find exactly what you're looking for
            </p>
          </div>
        </div>
      </section>

      {/* Featured Category */}
      <section className="container py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold">Trending Now</h2>
          </div>
        </div>

        <Link href={`/categories/${featuredCategory.id}`}>
          <Card className="group overflow-hidden border-2 transition-all hover:shadow-2xl hover:scale-[1.02]">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                <Image
                  src={featuredCategory.imageUrl || "/placeholder.svg"}
                  alt={featuredCategory.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredCategory.color} opacity-20`} />
              </div>
              <CardContent className="flex flex-col justify-center p-8 md:p-12">
                <Badge className="mb-4 w-fit bg-primary">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  Hot Category
                </Badge>
                <h3 className="mb-3 font-display text-3xl md:text-4xl font-bold">{featuredCategory.name}</h3>
                <p className="mb-4 text-lg text-muted-foreground">{featuredCategory.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{featuredCategory.productCount.toLocaleString()} items</span>
                  </div>
                </div>
                <Button size="lg" className="w-fit bg-primary hover:bg-primary/90">
                  Explore {featuredCategory.name}
                </Button>
              </CardContent>
            </div>
          </Card>
        </Link>
      </section>

      {/* All Categories Grid */}
      <section className="container py-12">
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-2">All Categories</h2>
          <p className="text-muted-foreground">Find products in every category</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={category.imageUrl || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30 group-hover:opacity-40 transition-opacity`}
                    />
                    {category.trending && (
                      <Badge className="absolute right-3 top-3 bg-primary animate-pulse">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Trending
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-display text-xl font-bold mb-1 text-balance">{category.name}</h3>
                      <p className="text-sm text-white/90 mb-2">{category.description}</p>
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <Package className="h-4 w-4" />
                        <span>{category.productCount.toLocaleString()} items</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-balance">Can't Find What You Need?</h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Request an errand and let our community help you find it
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
              <Link href="/errands/new">Request an Errand</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
