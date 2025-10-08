import { SellerNav } from "@/components/seller-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Package, ShoppingCart, TrendingUp, Eye, Plus, Wallet, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function SellerDashboardPage() {
  // Mock data
  const stats = {
    totalRevenue: 12450.5,
    totalProducts: 24,
    totalOrders: 156,
    viewsThisMonth: 3420,
    walletBalance: 8750.25,
    pendingPayouts: 1200.5,
  }

  const recentOrders = [
    {
      id: "ORD-001",
      product: "iPhone 14 Pro",
      buyer: "Alice Buyer",
      amount: 799.99,
      status: "shipped",
      date: "2025-02-08",
    },
    {
      id: "ORD-002",
      product: "MacBook Air M2",
      buyer: "Bob Customer",
      amount: 1099.99,
      status: "pending",
      date: "2025-02-09",
    },
    {
      id: "ORD-003",
      product: "Wireless Headphones",
      buyer: "Charlie User",
      amount: 149.99,
      status: "delivered",
      date: "2025-02-07",
    },
  ]

  const topProducts = [
    { name: "iPhone 14 Pro", sales: 45, revenue: 35999.55 },
    { name: "MacBook Air M2", sales: 32, revenue: 35199.68 },
    { name: "Wireless Headphones", sales: 28, revenue: 4199.72 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SellerNav />

      <div className="container py-6 sm:py-8">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">Seller Dashboard</h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">Manage your products and track your sales</p>
          </div>
          <Button className="bg-[#10b981] hover:bg-[#10b981]/90 w-full sm:w-auto" asChild>
            <Link href="/seller/products/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </div>

        {/* Wallet Balance Card */}
        <Card className="mb-6 bg-gradient-to-br from-[#10b981] to-[#10b981]/80 text-white">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <CardTitle className="text-lg">Seller Wallet</CardTitle>
              </div>
              <Button variant="secondary" size="sm" asChild className="w-full sm:w-auto">
                <Link href="/wallet/withdraw">
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                  Withdraw
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-sm opacity-90">Available Balance</p>
                <p className="font-display text-2xl sm:text-3xl font-bold">GH₵ {stats.walletBalance.toFixed(2)}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm opacity-90">Pending Payouts</p>
                <p className="font-display text-xl font-semibold">GH₵ {stats.pendingPayouts.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-[#10b981]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">GH₵ {stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-[#2563eb]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">{stats.totalProducts}</div>
              <p className="text-xs text-muted-foreground">4 active listings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-[#f59e0b]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">+8 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Views This Month</CardTitle>
              <Eye className="h-4 w-4 text-[#2563eb]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">{stats.viewsThisMonth.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+18.2% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/seller/orders">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{order.id}</p>
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
                      <p className="text-sm text-muted-foreground">{order.product}</p>
                      <p className="text-xs text-muted-foreground">by {order.buyer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">GH₵ {order.amount.toFixed(2)}</p>
                      <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Top Products</CardTitle>
                <TrendingUp className="h-4 w-4 text-[#10b981]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563eb]/10 font-display font-bold text-[#2563eb]">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                    </div>
                    <p className="font-semibold">GH₵ {product.revenue.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
