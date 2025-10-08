import { AdminNav } from "@/components/admin-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreVertical, Eye, Ban, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AdminUsersPage() {
  // Mock data
  const users = [
    {
      id: "1",
      name: "John Seller",
      email: "seller1@example.com",
      type: "seller",
      status: "active",
      joinDate: "2024-01-15",
      totalSales: 156,
      revenue: 15420.5,
    },
    {
      id: "2",
      name: "Jane Merchant",
      email: "seller2@example.com",
      type: "seller",
      status: "active",
      joinDate: "2024-02-20",
      totalSales: 132,
      revenue: 12350.25,
    },
    {
      id: "3",
      name: "Alice Buyer",
      email: "buyer1@example.com",
      type: "buyer",
      status: "active",
      joinDate: "2024-03-10",
      totalOrders: 24,
    },
    {
      id: "4",
      name: "Bob Customer",
      email: "buyer2@example.com",
      type: "buyer",
      status: "active",
      joinDate: "2024-04-05",
      totalOrders: 18,
    },
    {
      id: "5",
      name: "Suspended User",
      email: "suspended@example.com",
      type: "buyer",
      status: "suspended",
      joinDate: "2024-05-12",
      totalOrders: 3,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">User Management</h1>
          <p className="mt-2 text-muted-foreground">Manage all users on the platform</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search users..." className="pl-9" />
          </div>
          <Button variant="outline">All Types</Button>
          <Button variant="outline">All Status</Button>
        </div>

        {/* Users List */}
        <div className="space-y-4">
          {users.map((user) => (
            <Card key={user.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold">{user.name}</h3>
                      <Badge
                        variant={user.type === "seller" ? "default" : "secondary"}
                        className={user.type === "seller" ? "bg-[#2563eb]" : ""}
                      >
                        {user.type}
                      </Badge>
                      <Badge
                        variant={user.status === "active" ? "default" : "destructive"}
                        className={user.status === "active" ? "bg-[#10b981]" : ""}
                      >
                        {user.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">Joined: {user.joinDate}</span>
                      {user.type === "seller" ? (
                        <>
                          <span className="text-muted-foreground">Sales: {user.totalSales}</span>
                          <span className="font-semibold">GH₵ {user.revenue?.toLocaleString()}</span>
                        </>
                      ) : (
                        <span className="text-muted-foreground">Orders: {user.totalOrders}</span>
                      )}
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
                        <Link href={`/admin/users/${user.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      {user.status === "active" ? (
                        <DropdownMenuItem className="text-destructive">
                          <Ban className="mr-2 h-4 w-4" />
                          Suspend User
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Activate User
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
