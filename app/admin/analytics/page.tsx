import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, TrendingUp, Users, Package } from "lucide-react"

export default function AdminAnalyticsPage() {
  // Mock data
  const monthlyRevenue = [
    { month: "Jan", revenue: 45200 },
    { month: "Feb", revenue: 52100 },
    { month: "Mar", revenue: 48900 },
    { month: "Apr", revenue: 61500 },
    { month: "May", revenue: 58700 },
    { month: "Jun", revenue: 67300 },
  ]

  const categoryBreakdown = [
    { category: "Electronics", revenue: 185400, percentage: 42 },
    { category: "Fashion", revenue: 132800, percentage: 30 },
    { category: "Home & Garden", revenue: 88200, percentage: 20 },
    { category: "Sports", revenue: 35200, percentage: 8 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="container py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold">Analytics & Reports</h1>
            <p className="mt-2 text-muted-foreground">Track platform performance and insights</p>
          </div>
          <Select defaultValue="30days">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Metrics */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-[#10b981]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">GH₵ 125,450</div>
              <p className="text-xs text-muted-foreground">+12.5% from last period</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-[#2563eb]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">GH₵ 140.67</div>
              <p className="text-xs text-muted-foreground">+5.2% from last period</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-[#f59e0b]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">+8.3% from last period</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Products Listed</CardTitle>
              <Package className="h-4 w-4 text-[#2563eb]" />
            </CardHeader>
            <CardContent>
              <div className="font-display text-2xl font-bold">3,567</div>
              <p className="text-xs text-muted-foreground">+15.2% from last period</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Monthly Revenue */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyRevenue.map((item) => (
                  <div key={item.month} className="flex items-center gap-4">
                    <span className="w-12 text-sm font-medium">{item.month}</span>
                    <div className="flex-1">
                      <div className="h-8 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-[#2563eb] transition-all"
                          style={{ width: `${(item.revenue / 70000) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="w-20 text-right text-sm font-semibold">
                      GH₵ {(item.revenue / 1000).toFixed(1)}k
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryBreakdown.map((item) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{item.category}</span>
                      <span className="text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-[#10b981] transition-all" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <div className="text-right text-sm font-semibold">GH₵ {item.revenue.toLocaleString()}</div>
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
