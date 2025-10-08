"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Wallet, CreditCard, Smartphone, MapPin, Package } from "lucide-react"
import Link from "next/link"
import type { CartItem } from "@/lib/cart"

interface CheckoutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CartItem[]
  subtotal: number
  deliveryFee?: number
  total: number
  onCheckoutComplete: () => void
}

export function CheckoutDialog({
  open,
  onOpenChange,
  items,
  subtotal,
  deliveryFee = 10,
  total,
  onCheckoutComplete,
}: CheckoutDialogProps) {
  const [paymentMethod, setPaymentMethod] = useState("wallet")
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery")
  const [isProcessing, setIsProcessing] = useState(false)
  const walletBalance = 1250.5 // Mock balance

  const [deliveryAddress, setDeliveryAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    landmark: "",
  })

  const finalDeliveryFee = deliveryMethod === "pickup" ? 0 : deliveryFee
  const finalTotal = subtotal + finalDeliveryFee

  const handleCheckout = async () => {
    if (deliveryMethod === "delivery") {
      if (!deliveryAddress.fullName || !deliveryAddress.phone || !deliveryAddress.address || !deliveryAddress.city) {
        alert("Please fill in all required delivery information")
        return
      }
    }

    setIsProcessing(true)
    console.log("[v0] Processing checkout:", {
      items,
      total: finalTotal,
      paymentMethod,
      deliveryMethod,
      deliveryAddress: deliveryMethod === "delivery" ? deliveryAddress : null,
    })

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // TODO: Make actual API call to process payment and create order
    // await fetch("/api/checkout", {
    //   method: "POST",
    //   body: JSON.stringify({ items, paymentMethod, deliveryMethod, deliveryAddress, total: finalTotal }),
    // })

    setIsProcessing(false)
    onCheckoutComplete()

    // Show success message (you could add a toast notification here)
    alert("Order placed successfully!")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Complete Your Order</DialogTitle>
          <DialogDescription>Choose delivery method and complete payment</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <Label className="text-base font-semibold">Delivery Method</Label>
            <RadioGroup
              value={deliveryMethod}
              onValueChange={(value) => setDeliveryMethod(value as "delivery" | "pickup")}
            >
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="delivery" id="method-delivery" />
                <Label htmlFor="method-delivery" className="flex items-center gap-3 cursor-pointer flex-1">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Home Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Get it delivered to your location (GH₵ {deliveryFee.toFixed(2)})
                    </p>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="pickup" id="method-pickup" />
                <Label htmlFor="method-pickup" className="flex items-center gap-3 cursor-pointer flex-1">
                  <Package className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium">Pickup</p>
                    <p className="text-sm text-muted-foreground">Pick up from seller location (Free)</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {deliveryMethod === "delivery" && (
            <div className="space-y-4 rounded-lg border p-4 bg-muted/30">
              <h3 className="font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Delivery Address
              </h3>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={deliveryAddress.fullName}
                      onChange={(e) => setDeliveryAddress({ ...deliveryAddress, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="0XX XXX XXXX"
                      value={deliveryAddress.phone}
                      onChange={(e) => setDeliveryAddress({ ...deliveryAddress, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    Street Address <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="House number, street name, area"
                    rows={2}
                    value={deliveryAddress.address}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, address: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="city">
                      City <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="city"
                      placeholder="Accra"
                      value={deliveryAddress.city}
                      onChange={(e) => setDeliveryAddress({ ...deliveryAddress, city: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Input
                      id="region"
                      placeholder="Greater Accra"
                      value={deliveryAddress.region}
                      onChange={(e) => setDeliveryAddress({ ...deliveryAddress, region: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="landmark">Landmark (Optional)</Label>
                  <Input
                    id="landmark"
                    placeholder="Near the big tree, opposite the school"
                    value={deliveryAddress.landmark}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, landmark: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {deliveryMethod === "pickup" && (
            <div className="rounded-lg border p-4 bg-muted/30">
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <Package className="h-4 w-4" />
                Pickup Location
              </h3>
              <p className="text-sm text-muted-foreground">
                You will receive the seller's pickup location details after completing your order. The seller will
                contact you to arrange pickup.
              </p>
            </div>
          )}

          {/* Order Summary */}
          <div className="rounded-lg bg-muted/50 p-4 space-y-2">
            <h3 className="font-semibold mb-3">Order Summary</h3>
            <div className="space-y-2 mb-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.productTitle} x{item.quantity}
                  </span>
                  <span>GH₵ {(item.productPrice * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>GH₵ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Fee</span>
              <span className={finalDeliveryFee === 0 ? "text-success font-medium" : ""}>
                {finalDeliveryFee === 0 ? "FREE" : `GH₵ ${finalDeliveryFee.toFixed(2)}`}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>GH₵ {finalTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              {/* Wallet Payment */}
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="wallet" id="dialog-wallet" />
                <Label htmlFor="dialog-wallet" className="flex items-center justify-between cursor-pointer flex-1">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">QuickErrand Wallet</p>
                      <p className="text-sm text-muted-foreground">Balance: GH₵ {walletBalance.toFixed(2)}</p>
                    </div>
                  </div>
                </Label>
              </div>

              {/* Mobile Money */}
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="momo" id="dialog-momo" />
                <Label htmlFor="dialog-momo" className="flex items-center gap-2 cursor-pointer flex-1">
                  <Smartphone className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium">Mobile Money</p>
                    <p className="text-sm text-muted-foreground">MTN, Vodafone, AirtelTigo</p>
                  </div>
                </Label>
              </div>

              {/* Card Payment */}
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="card" id="dialog-card" />
                <Label htmlFor="dialog-card" className="flex items-center gap-2 cursor-pointer flex-1">
                  <CreditCard className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Credit/Debit Card</p>
                    <p className="text-sm text-muted-foreground">Visa, Mastercard</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={handleCheckout}
            disabled={isProcessing || (paymentMethod === "wallet" && walletBalance < finalTotal)}
          >
            {isProcessing
              ? "Processing..."
              : paymentMethod === "wallet" && walletBalance < finalTotal
                ? "Insufficient Balance"
                : `Pay GH₵ ${finalTotal.toFixed(2)}`}
          </Button>

          {paymentMethod === "wallet" && walletBalance < finalTotal && (
            <p className="text-sm text-center text-muted-foreground">
              <Link href="/wallet/deposit" className="text-primary hover:underline">
                Add money to your wallet
              </Link>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
