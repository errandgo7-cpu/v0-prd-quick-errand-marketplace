import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreVertical, Eye, CheckCircle, XCircle, Flag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdminProductsPage() {
  // Mock data
  const products = [
    {
      id: "1",
      title: "iPhone 14 Pro",
      seller: "John Seller",
      price: 799.99,
      status: "active",
      category: "Electronics",
      views: 245,
      imageUrl: "/modern-smartphone.png",
      flagged: false,
    },
    {
      id: "2",
      title: "MacBook Air M2",
      seller: "John Seller",
      price: 1099.99,
      status: "active",
      category: "Electronics",
      views: 189,
      imageUrl: "/silver-macbook-on-desk.png",
      flagged: false,
    },
    {
      id: "3",
      title: "Suspicious Product",
      seller: "New Seller",
      price: 29.99,
      status: "pending",
      category: "Electronics",
      views: 12,
      imageUrl: "/placeholder.svg?height=400&width=400",
      flagged: true,
    },
    {
      id: "4",
      title: "Designer Leather Jacket",
      seller: "Jane Merchant",
      price: 249.99,
      status: "active",
      category: "Fashion",
      views: 156,
      imageUrl: "/classic-leather-jacket.png",
      flagged: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Product Management</h1>
          <p className="mt-2 text-muted-foreground">Monitor and moderate product listings</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="pl-9" />
          </div>
          <Button variant="outline">All Status</Button>
          <Button variant="outline">All Categories</Button>
          <Button variant="outline">Flagged Only</Button>
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
                    {product.flagged && (
                      <div className="absolute inset-0 flex items-center justify-center bg-destructive/80">
                        <Flag className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold">{product.title}</h3>
                          {product.flagged && (
                            <Badge variant="destructive" className="text-xs">
                              Flagged
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">by {product.seller}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <Badge variant="secondary">{product.category}</Badge>
                          <Badge
                            variant={product.status === "active" ? "default" : "outline"}
                            className={product.status === "active" ? "bg-[#10b981]" : ""}
                          >
                            {product.status}
                          </Badge>
                          <span className="text-muted-foreground">Views: {product.views}</span>
                          <span className="font-semibold">GH₵ {product.price.toFixed(2)}</span>
                        </div>
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
                              View Product
                            </Link>
                          </DropdownMenuItem>
                          {product.status === "pending" && (
                            <>
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4 text-[#10b981]" />
                                Approve
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <XCircle className="mr-2 h-4 w-4" />
                                Reject
                              </DropdownMenuItem>
                            </>
                          )}
                          {product.status === "active" && (
                            <DropdownMenuItem className="text-destructive">
                              <XCircle className="mr-2 h-4 w-4" />
                              Deactivate
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem>
                            <Flag className="mr-2 h-4 w-4" />
                            {product.flagged ? "Unflag" : "Flag for Review"}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
