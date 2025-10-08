import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, TrendingUp, TrendingDown, Wallet, Percent } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboardPage() {
  // Mock data
  const stats = {
    totalRevenue: 125450.75,
    totalUsers: 1248,
    totalProducts: 3567,
    totalOrders: 892,
    revenueGrowth: 12.5,
    userGrowth: 8.3,
    productGrowth: 15.2,
    orderGrowth: -2.1,
    commissionEarned: 8250.5,
    platformWalletBalance: 15420.75,
    totalTransactions: 2456,
  }

  const recentActivity = [
    {
      id: "1",
      type: "order",
      message: "New order #ORD-892 placed",
      time: "2 minutes ago",
      status: "success",
    },
    {
      id: "2",
      type: "user",
      message: "New seller registered: Tech Store",
      time: "15 minutes ago",
      status: "info",
    },
    {
      id: "3",
      type: "product",
      message: "Product flagged for review: Vintage Watch",
      time: "1 hour ago",
      status: "warning",
    },
    {
      id: "4",
      type: "order",
      message: "Order #ORD-890 delivered successfully",
      time: "2 hours ago",
      status: "success",
    },
  ]

  const topSellers = [
    { name: "John Seller", revenue: 15420.5, orders: 156, rating: 4.9 },
    { name: "Jane Merchant", revenue: 12350.25, orders: 132, rating: 4.8 },
    { name: "Tech Store", revenue: 10890.0, orders: 98, rating: 4.7 },
  ]

  const recentCommissions = [
    { id: "TXN-892", type: "Product Sale", amount: 39.99, seller: "John Seller", date: "2025-02-10" },
    { id: "TXN-891", type: "Errand Payment", amount: 2.5, seller: "Jane Runner", date: "2025-02-10" },
    { id: "TXN-890", type: "Product Sale", amount: 54.99, seller: "Tech Store", date: "2025-02-09" },
    { id: "TXN-889", type: "Product Sale", amount: 7.5, seller: "John Seller", date: "2025-02-09" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Monitor and manage your marketplace</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-[#10b981]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">GH₵ {stats.totalRevenue.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {stats.revenueGrowth > 0 ? (
                  <>
                    <TrendingUp className="h-3 w-3 text-[#10b981]" />
                    <span className="text-[#10b981]">+{stats.revenueGrowth}%</span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="h-3 w-3 text-destructive" />
                    <span className="text-destructive">{stats.revenueGrowth}%</span>
                  </>
                )}
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
              <Percent className="h-4 w-4 text-[#f59e0b]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">GH₵ {stats.commissionEarned.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-[#10b981]" />
                <span className="text-[#10b981]">+15.2%</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Platform Wallet</CardTitle>
              <Wallet className="h-4 w-4 text-[#2563eb]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">GH₵ {stats.platformWalletBalance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">{stats.totalTransactions} transactions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-[#2563eb]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-[#10b981]" />
                <span className="text-[#10b981]">+{stats.userGrowth}%</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Commissions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Commissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCommissions.map((commission) => (
                  <div
                    key={commission.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{commission.id}</p>
                        <Badge variant="secondary" className="text-xs">
                          {commission.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">from {commission.seller}</p>
                      <p className="text-xs text-muted-foreground">{commission.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#10b981]">+GH₵ {commission.amount.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Sellers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Sellers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSellers.map((seller, index) => (
                  <div key={seller.name} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563eb]/10 font-display font-bold text-[#2563eb]">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{seller.name}</p>
                        <Badge variant="secondary" className="text-xs">
                          {seller.rating} ★
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{seller.orders} orders</p>
                    </div>
                    <p className="font-semibold">GH₵ {seller.revenue.toLocaleString()}</p>
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
