import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Eye } from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  // Mock data
  const orders = [
    {
      id: "ORD-001",
      product: "iPhone 14 Pro",
      seller: "John Seller",
      amount: 799.99,
      status: "delivered",
      date: "2025-02-08",
      imageUrl: "/modern-smartphone.png",
    },
    {
      id: "ORD-002",
      product: "MacBook Air M2",
      seller: "John Seller",
      amount: 1099.99,
      status: "shipped",
      date: "2025-02-09",
      imageUrl: "/silver-macbook-on-desk.png",
    },
    {
      id: "ORD-003",
      product: "Wireless Headphones",
      seller: "Tech Store",
      amount: 149.99,
      status: "pending",
      date: "2025-02-10",
      imageUrl: "/diverse-people-listening-headphones.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">My Orders</h1>
          <p className="mt-2 text-muted-foreground">Track and manage your purchases</p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={order.imageUrl || "/placeholder.svg"}
                        alt={order.product}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display font-semibold">{order.id}</h3>
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

                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{order.product}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Seller: </span>
                          <span>{order.seller}</span>
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
                        <Link href={`/orders/${order.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pending">
            <p className="text-center text-muted-foreground py-8">No pending orders</p>
          </TabsContent>

          <TabsContent value="shipped">
            <p className="text-center text-muted-foreground py-8">No shipped orders</p>
          </TabsContent>

          <TabsContent value="delivered">
            <p className="text-center text-muted-foreground py-8">No delivered orders</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
