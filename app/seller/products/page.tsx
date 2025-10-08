import { SellerNav } from "@/components/seller-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { MoreVertical, Plus, Search, Eye, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SellerProductsPage() {
  // Mock data
  const products = [
    {
      id: "1",
      title: "iPhone 14 Pro",
      price: 799.99,
      stock: 1,
      status: "active",
      views: 245,
      imageUrl: "/modern-smartphone.png",
      category: "Electronics",
    },
    {
      id: "2",
      title: "MacBook Air M2",
      price: 1099.99,
      stock: 2,
      status: "active",
      views: 189,
      imageUrl: "/silver-macbook-on-desk.png",
      category: "Electronics",
    },
    {
      id: "3",
      title: "Wireless Headphones",
      price: 149.99,
      stock: 0,
      status: "inactive",
      views: 156,
      imageUrl: "/diverse-people-listening-headphones.png",
      category: "Electronics",
    },
    {
      id: "4",
      title: "Designer Watch",
      price: 299.99,
      stock: 1,
      status: "active",
      views: 98,
      imageUrl: "/placeholder.svg?height=400&width=400",
      category: "Fashion",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SellerNav />

      <div className="container py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold">My Products</h1>
            <p className="mt-2 text-muted-foreground">Manage your product listings</p>
          </div>
          <Button className="bg-[#10b981] hover:bg-[#10b981]/90" asChild>
            <Link href="/seller/products/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="pl-9" />
          </div>
          <Button variant="outline">All Status</Button>
          <Button variant="outline">All Categories</Button>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {products.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display font-semibold">{product.title}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/products/${product.id}`}>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/seller/products/${product.id}/edit`}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Price: </span>
                        <span className="font-semibold">GH₵ {product.price.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stock: </span>
                        <span className={product.stock === 0 ? "font-semibold text-destructive" : "font-semibold"}>
                          {product.stock}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Views: </span>
                        <span className="font-semibold">{product.views}</span>
                      </div>
                      <Badge
                        variant={product.status === "active" ? "default" : "secondary"}
                        className={product.status === "active" ? "bg-[#10b981]" : ""}
                      >
                        {product.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
