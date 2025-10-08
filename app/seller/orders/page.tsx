import { SellerNav } from "@/components/seller-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Package, Eye } from "lucide-react"
import Link from "next/link"

export default function SellerOrdersPage() {
  // Mock data
  const orders = [
    {
      id: "ORD-001",
      product: "iPhone 14 Pro",
      buyer: "Alice Buyer",
      amount: 799.99,
      status: "shipped",
      date: "2025-02-08",
      shippingAddress: "123 Main St, San Francisco, CA 94102",
    },
    {
      id: "ORD-002",
      product: "MacBook Air M2",
      buyer: "Bob Customer",
      amount: 1099.99,
      status: "pending",
      date: "2025-02-09",
      shippingAddress: "456 Oak Ave, Oakland, CA 94601",
    },
    {
      id: "ORD-003",
      product: "Wireless Headphones",
      buyer: "Charlie User",
      amount: 149.99,
      status: "delivered",
      date: "2025-02-07",
      shippingAddress: "789 Pine Rd, Berkeley, CA 94704",
    },
    {
      id: "ORD-004",
      product: "Designer Watch",
      buyer: "Diana Shopper",
      amount: 299.99,
      status: "pending",
      date: "2025-02-10",
      shippingAddress: "321 Elm St, San Jose, CA 95110",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SellerNav />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Orders</h1>
          <p className="mt-2 text-muted-foreground">Manage your customer orders</p>
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
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{order.product}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Customer: </span>
                        <span>{order.buyer}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Shipping: </span>
                        <span>{order.shippingAddress}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Order Date: </span>
                        <span>{order.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <p className="font-display text-xl font-bold">GH₵ {order.amount.toFixed(2)}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/seller/orders/${order.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Link>
                      </Button>
                      {order.status === "pending" && (
                        <Button size="sm" className="bg-[#2563eb] hover:bg-[#2563eb]/90">
                          Mark as Shipped
                        </Button>
                      )}
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
