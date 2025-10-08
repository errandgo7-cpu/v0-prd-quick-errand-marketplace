"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Package, ShoppingCart, Star, MapPin, Phone, Mail, Wallet, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Alice Buyer",
    email: "alice@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/diverse-avatars.png",
    userType: "buyer",
    rating: 4.8,
    totalOrders: 24,
    totalErrands: 12,
    memberSince: "January 2024",
    address: "123 Main St, Apt 4B",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    walletBalance: 1250.5,
  }

  const recentOrders = [
    {
      id: "ORD-001",
      product: "iPhone 14 Pro",
      amount: 799.99,
      status: "delivered",
      date: "2025-02-08",
    },
    {
      id: "ORD-002",
      product: "MacBook Air M2",
      amount: 1099.99,
      status: "shipped",
      date: "2025-02-09",
    },
  ]

  const recentErrands = [
    {
      id: "ERR-001",
      title: "Grocery Shopping & Delivery",
      amount: 25.0,
      status: "completed",
      date: "2025-02-07",
    },
    {
      id: "ERR-002",
      title: "Package Pickup",
      amount: 15.0,
      status: "in_progress",
      date: "2025-02-10",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">My Profile</h1>
          <p className="mt-2 text-muted-foreground">Manage your account settings and view your activity</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <h2 className="font-display text-xl font-bold">{user.name}</h2>
                  <Badge variant="secondary" className="mt-2">
                    {user.userType}
                  </Badge>
                  <div className="mt-4 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                    <span className="font-semibold">{user.rating}</span>
                    <span className="text-sm text-muted-foreground">rating</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Member since {user.memberSince}</p>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Total Orders</span>
                    </div>
                    <span className="font-semibold">{user.totalOrders}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-4 w-4" />
                      <span>Total Errands</span>
                    </div>
                    <span className="font-semibold">{user.totalErrands}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  <CardTitle className="text-base">Wallet Balance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-display text-3xl font-bold mb-4">GH₵ {user.walletBalance.toFixed(2)}</p>
                <Button variant="secondary" size="sm" className="w-full" asChild>
                  <Link href="/wallet">
                    Manage Wallet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MapPin className="mr-2 h-4 w-4" />
                  Manage Addresses
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/wallet">
                    <Wallet className="mr-2 h-4 w-4" />
                    My Wallet
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start text-destructive bg-transparent">
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="info" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="info">Personal Info</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="errands">Errands</TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={user.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input id="email" defaultValue={user.email} className="pl-9" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="phone" defaultValue={user.phone} className="pl-9" />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" defaultValue={user.address} />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue={user.city} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue={user.state} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" defaultValue={user.zipCode} />
                      </div>
                    </div>

                    <Button className="bg-[#2563eb] hover:bg-[#2563eb]/90">Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="space-y-4">
                {recentOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-display font-semibold">{order.id}</h3>
                            <Badge
                              variant={order.status === "delivered" ? "default" : "secondary"}
                              className={order.status === "delivered" ? "bg-[#10b981]" : "bg-[#2563eb]"}
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{order.product}</p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-xl font-bold">GH₵ {order.amount.toFixed(2)}</p>
                          <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="errands" className="space-y-4">
                {recentErrands.map((errand) => (
                  <Card key={errand.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-display font-semibold">{errand.id}</h3>
                            <Badge
                              variant={errand.status === "completed" ? "default" : "secondary"}
                              className={errand.status === "completed" ? "bg-[#10b981]" : "bg-[#f59e0b]"}
                            >
                              {errand.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{errand.title}</p>
                          <p className="text-xs text-muted-foreground">{errand.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-xl font-bold text-[#10b981]">
                            GH₵ {errand.amount.toFixed(2)}
                          </p>
                          <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
