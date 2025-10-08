import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminOrdersPage() {
  // Mock data
  const orders = [
    {
      id: "ORD-001",
      product: "iPhone 14 Pro",
      seller: "John Seller",
      buyer: "Alice Buyer",
      amount: 799.99,
      status: "shipped",
      date: "2025-02-08",
    },
    {
      id: "ORD-002",
      product: "MacBook Air M2",
      seller: "John Seller",
      buyer: "Bob Customer",
      amount: 1099.99,
      status: "pending",
      date: "2025-02-09",
    },
    {
      id: "ORD-003",
      product: "Wireless Headphones",
      seller: "Tech Store",
      buyer: "Charlie User",
      amount: 149.99,
      status: "delivered",
      date: "2025-02-07",
    },
    {
      id: "ORD-004",
      product: "Designer Watch",
      seller: "Jane Merchant",
      buyer: "Diana Shopper",
      amount: 299.99,
      status: "cancelled",
      date: "2025-02-10",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Order Management</h1>
          <p className="mt-2 text-muted-foreground">Monitor all orders across the platform</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search orders..." className="pl-9" />
          </div>
          <Button variant="outline">All Status</Button>
          <Button variant="outline">Date Range</Button>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-display text-lg font-semibold">{order.id}</h3>
                      <Badge
                        variant={
                          order.status === "delivered"
                            ? "default"
                            : order.status === "shipped"
                              ? "secondary"
                              : order.status === "cancelled"
                                ? "destructive"
                                : "outline"
                        }
                        className={
                          order.status === "delivered"
                            ? "bg-[#10b981]"
                            : order.status === "shipped"
                              ? "bg-[#2563eb]"
                              : ""
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>

                    <div className="grid gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Product: </span>
                        <span className="font-medium">{order.product}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Seller: </span>
                        <span>{order.seller}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Buyer: </span>
                        <span>{order.buyer}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Order Date: </span>
                        <span>{order.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <p className="font-display text-xl font-bold">GH₵ {order.amount.toFixed(2)}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/orders/${order.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </Button>
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
