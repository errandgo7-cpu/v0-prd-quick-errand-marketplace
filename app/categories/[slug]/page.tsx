import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Package, TrendingUp, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
;("use client")

import { useState } from "react"

const categories = {
  electronics: {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and tech",
    imageUrl: "/electronics-components.png",
    productCount: 1247,
    trending: true,
    color: "from-blue-500 to-cyan-500",
  },
  fashion: {
    id: "fashion",
    name: "Fashion",
    description: "Style and trends",
    imageUrl: "/diverse-fashion-collection.png",
    productCount: 2891,
    trending: true,
    color: "from-pink-500 to-rose-500",
  },
  "home-garden": {
    id: "home-garden",
    name: "Home & Garden",
    description: "Make your space beautiful",
    imageUrl: "/cozy-living-room.png",
    productCount: 1653,
    trending: false,
    color: "from-green-500 to-emerald-500",
  },
  sports: {
    id: "sports",
    name: "Sports & Fitness",
    description: "Stay active and healthy",
    imageUrl: "/assorted-sports-gear.png",
    productCount: 892,
    trending: false,
    color: "from-orange-500 to-amber-500",
  },
  books: {
    id: "books",
    name: "Books & Media",
    description: "Knowledge and entertainment",
    imageUrl: "/books-and-media.png",
    productCount: 1456,
    trending: false,
    color: "from-purple-500 to-violet-500",
  },
  toys: {
    id: "toys",
    name: "Toys & Games",
    description: "Fun for all ages",
    imageUrl: "/assorted-toys-games.png",
    productCount: 734,
    trending: true,
    color: "from-yellow-500 to-orange-500",
  },
  automotive: {
    id: "automotive",
    name: "Automotive",
    description: "Cars and accessories",
    imageUrl: "/automotive-parts.png",
    productCount: 567,
    trending: false,
    color: "from-gray-500 to-slate-500",
  },
  beauty: {
    id: "beauty",
    name: "Beauty & Health",
    description: "Look and feel great",
    imageUrl: "/beauty-products-collection.png",
    productCount: 1123,
    trending: true,
    color: "from-pink-400 to-purple-400",
  },
}

// Mock products data - in real app, this would be filtered by category from database
const getProductsByCategory = (categoryId: string) => {
  const allProducts = [
    {
      id: "1",
      title: "iPhone 14 Pro",
      price: 799.99,
      imageUrl: "/modern-smartphone.png",
      rating: 4.8,
      reviewCount: 24,
      seller: "John Seller",
      category: "electronics",
    },
    {
      id: "2",
      title: "MacBook Air M2",
      price: 1099.99,
      imageUrl: "/silver-macbook-on-desk.png",
      rating: 4.9,
      reviewCount: 18,
      seller: "John Seller",
      category: "electronics",
    },
    {
      id: "3",
      title: "Designer Leather Jacket",
      price: 249.99,
      imageUrl: "/classic-leather-jacket.png",
      rating: 4.7,
      reviewCount: 12,
      seller: "Jane Merchant",
      category: "fashion",
    },
    {
      id: "4",
      title: "Modern Coffee Table",
      price: 179.99,
      imageUrl: "/modern-living-room-coffee-table.png",
      rating: 4.6,
      reviewCount: 8,
      seller: "Jane Merchant",
      category: "home-garden",
    },
    {
      id: "5",
      title: "Wireless Headphones",
      price: 149.99,
      imageUrl: "/diverse-people-listening-headphones.png",
      rating: 4.5,
      reviewCount: 32,
      seller: "Tech Store",
      category: "electronics",
    },
    {
      id: "6",
      title: "Running Shoes",
      price: 89.99,
      imageUrl: "/running-shoes.jpg",
      rating: 4.4,
      reviewCount: 15,
      seller: "Sports Shop",
      category: "sports",
    },
    {
      id: "7",
      title: "Smart Watch Pro",
      price: 299.99,
      imageUrl: "/smartwatch-lifestyle.png",
      rating: 4.7,
      reviewCount: 45,
      seller: "Tech Store",
      category: "electronics",
    },
    {
      id: "8",
      title: "Summer Dress",
      price: 79.99,
      imageUrl: "/woman-in-floral-summer-dress.png",
      rating: 4.6,
      reviewCount: 28,
      seller: "Fashion Hub",
      category: "fashion",
    },
    {
      id: "9",
      title: "Garden Tool Set",
      price: 129.99,
      imageUrl: "/garden-tools.png",
      rating: 4.5,
      reviewCount: 19,
      seller: "Home Depot",
      category: "home-garden",
    },
    {
      id: "10",
      title: "Yoga Mat Premium",
      price: 49.99,
      imageUrl: "/rolled-yoga-mat.png",
      rating: 4.8,
      reviewCount: 67,
      seller: "Fitness Pro",
      category: "sports",
    },
    {
      id: "11",
      title: "Best Seller Novel",
      price: 19.99,
      imageUrl: "/book-novel.jpg",
      rating: 4.9,
      reviewCount: 234,
      seller: "Book Store",
      category: "books",
    },
    {
      id: "12",
      title: "LEGO City Set",
      price: 89.99,
      imageUrl: "/generic-building-blocks.png",
      rating: 4.7,
      reviewCount: 89,
      seller: "Toy World",
      category: "toys",
    },
  ]

  return allProducts.filter((product) => product.category === categoryId)
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(category.id)
  const subcategories = ["All Items", "New Arrivals", "Best Sellers", "On Sale"]

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9
  const totalPages = Math.ceil(products.length / productsPerPage)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Category Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0">
          <Image
            src={category.imageUrl || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover opacity-20 blur-sm"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30`} />
        </div>
        <div className="container relative py-12 md:py-16">
          <Link href="/categories">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Categories
            </Button>
          </Link>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <h1 className="font-display text-4xl font-bold md:text-5xl">{category.name}</h1>
                {category.trending && (
                  <Badge className="animate-pulse-glow bg-primary">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Trending
                  </Badge>
                )}
              </div>
              <p className="mb-4 text-lg text-muted-foreground leading-relaxed">{category.description}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{category.productCount.toLocaleString()} products</span>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  {products.length} available now
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="border-b bg-card">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto">
            {subcategories.map((sub) => (
              <Button key={sub} variant={sub === "All Items" ? "default" : "outline"} className="shrink-0">
                {sub}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 font-display text-lg font-semibold">Filters</h2>

                {/* Price Range */}
                <div className="mb-6">
                  <Label className="mb-3 block font-semibold">Price Range (GH₵)</Label>
                  <Slider defaultValue={[0, 1000]} max={2000} step={10} className="mb-2" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>GH₵0</span>
                    <span>GH₵2000+</span>
                  </div>
                </div>

                {/* Condition */}
                <div className="mb-6">
                  <Label className="mb-3 block font-semibold">Condition</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="new" />
                      <label htmlFor="new" className="text-sm cursor-pointer">
                        New
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="used" />
                      <label htmlFor="used" className="text-sm cursor-pointer">
                        Used - Like New
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="used-good" />
                      <label htmlFor="used-good" className="text-sm cursor-pointer">
                        Used - Good
                      </label>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <Label className="mb-3 block font-semibold">Minimum Rating</Label>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer">
                          {rating}+ Stars
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-semibold">
                  {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)}
                </span>{" "}
                of <span className="font-semibold">{products.length}</span> products
              </p>
              <Select defaultValue="featured">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center gap-2">
                    <Button variant="outline" disabled={currentPage === 1} onClick={handlePreviousPage}>
                      Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button variant="outline" disabled={currentPage === totalPages} onClick={handleNextPage}>
                      Next
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <Card className="p-12 text-center">
                <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 font-display text-xl font-semibold">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or check back later</p>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <section className="border-t bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-6 font-display text-2xl font-bold">Explore More Categories</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(categories)
              .filter((cat) => cat.id !== category.id)
              .slice(0, 4)
              .map((cat) => (
                <Link key={cat.id} href={`/categories/${cat.id}`}>
                  <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <Image
                          src={cat.imageUrl || "/placeholder.svg"}
                          alt={cat.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-30 group-hover:opacity-40 transition-opacity`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-display text-lg font-bold mb-1">{cat.name}</h3>
                          <p className="text-xs text-white/90">{cat.productCount.toLocaleString()} items</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
