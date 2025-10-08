"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  // Mock data
  const products = [
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
    {
      id: "5",
      title: "Wireless Headphones",
      price: 149.99,
      imageUrl: "/diverse-people-listening-headphones.png",
      rating: 4.5,
      reviewCount: 32,
      seller: "Tech Store",
    },
    {
      id: "6",
      title: "Running Shoes",
      price: 89.99,
      imageUrl: "/running-shoes.jpg",
      rating: 4.4,
      reviewCount: 15,
      seller: "Sports Shop",
    },
  ]

  const categories = ["Electronics", "Fashion", "Home & Garden", "Sports", "Books"]

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

      <div className="container py-8">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold">All Products</h1>
          <p className="mt-2 text-muted-foreground">Browse our entire collection</p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 font-display text-lg font-semibold">Filters</h2>

              {/* Categories */}
              <div className="mb-6">
                <Label className="mb-3 block font-semibold">Category</Label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <Label className="mb-3 block font-semibold">Price Range</Label>
                <Slider defaultValue={[0, 1000]} max={1000} step={10} className="mb-2" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>$0</span>
                  <span>$1000+</span>
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
                      Used
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length}{" "}
                products
              </p>
              <Select defaultValue="featured">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

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
          </div>
        </div>
      </div>
    </div>
  )
}
