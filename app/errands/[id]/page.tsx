"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, User, MessageSquare, CheckCircle } from "lucide-react"
import Image from "next/image"
import { CheckoutDialog } from "@/components/checkout-dialog"

export default function ErrandDetailPage() {
  const [hasAccepted, setHasAccepted] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const errand = {
    id: "1",
    title: "Grocery Shopping & Delivery",
    description:
      "I need someone to pick up groceries from Whole Foods on Market Street and deliver them to my apartment. I'll provide a detailed shopping list. Please text me when you arrive at the store. The building has a doorman who can accept the delivery if I'm not home.",
    type: "shopping",
    price: 25.0,
    pickupAddress: "Whole Foods Market, 1765 Market St, San Francisco, CA 94103",
    deliveryAddress: "123 Main St, Apt 4B, San Francisco, CA 94102",
    status: "pending",
    distance: "2.5 miles",
    estimatedTime: "45 mins",
    postedTime: "15 mins ago",
    images: ["/grocery-store.png", "/shopping-list.jpg"],
    customer: {
      name: "Alice Buyer",
      avatar: "/diverse-avatars.png",
      rating: 4.8,
      completedErrands: 12,
    },
  }

  const handleAccept = () => {
    setShowCheckout(true)
  }

  const handleCheckout = (paymentMethod: string) => {
    console.log("[v0] Errand payment:", { errand: errand.id, paymentMethod, amount: errand.price })
    setHasAccepted(true)
    setShowCheckout(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Badge className="bg-[#10b981]">{errand.type}</Badge>
                <Badge variant={errand.status === "pending" ? "outline" : "secondary"}>{errand.status}</Badge>
              </div>
              <h1 className="font-display text-3xl font-bold text-balance">{errand.title}</h1>
              <p className="mt-2 text-sm text-muted-foreground">Posted {errand.postedTime}</p>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="mb-3 font-display text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{errand.description}</p>
            </div>

            {/* Images */}
            {errand.images.length > 0 && (
              <div>
                <h2 className="mb-3 font-display text-xl font-semibold">Images</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {errand.images.map((image, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Errand image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location Details */}
            <div>
              <h2 className="mb-3 font-display text-xl font-semibold">Location Details</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10">
                        <MapPin className="h-5 w-5 text-[#2563eb]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Pickup Location</p>
                        <p className="text-sm text-muted-foreground">{errand.pickupAddress}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/10">
                        <MapPin className="h-5 w-5 text-[#10b981]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Delivery Location</p>
                        <p className="text-sm text-muted-foreground">{errand.deliveryAddress}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Customer Info */}
            <div>
              <h2 className="mb-3 font-display text-xl font-semibold">Customer Information</h2>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={errand.customer.avatar || "/placeholder.svg"} />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{errand.customer.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          Rating: <span className="font-medium">{errand.customer.rating} ★</span>
                        </span>
                        <span className="text-muted-foreground">
                          {errand.customer.completedErrands} completed errands
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Card */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-muted-foreground">Payment</span>
                  <div className="flex items-center gap-1">
                    <span className="font-display text-3xl font-bold text-[#10b981]">
                      GH₵ {errand.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Distance</span>
                    <span className="font-medium">{errand.distance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Est. Time</span>
                    <span className="font-medium">{errand.estimatedTime}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                {!hasAccepted ? (
                  <div className="space-y-2">
                    <Button className="w-full bg-[#10b981] hover:bg-[#10b981]/90" onClick={handleAccept}>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Accept Errand
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message Customer
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-lg bg-[#10b981]/10 p-4 text-center">
                    <CheckCircle className="mx-auto mb-2 h-8 w-8 text-[#10b981]" />
                    <p className="font-semibold text-[#10b981]">Errand Accepted!</p>
                    <p className="mt-1 text-sm text-muted-foreground">Contact the customer to coordinate</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-display font-semibold">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Posted {errand.postedTime}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">0 runners interested</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{errand.distance} total distance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-display font-semibold">Safety Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Verify pickup and delivery locations</li>
                  <li>• Communicate through the platform</li>
                  <li>• Take photos of completed deliveries</li>
                  <li>• Report any suspicious activity</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <CheckoutDialog
        open={showCheckout}
        onOpenChange={setShowCheckout}
        title={errand.title}
        amount={errand.price}
        deliveryFee={0}
        onCheckout={handleCheckout}
      />
    </div>
  )
}
