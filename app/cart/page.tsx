"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CheckoutDialog } from "@/components/checkout-dialog"
import { useState } from "react"

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, isLoading } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-8">
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">Loading cart...</p>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-8">
          <h1 className="mb-8 font-display text-3xl font-bold">Shopping Cart</h1>
          <Card className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="font-display text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Looks like you haven't added anything to your cart yet. Start shopping to find great deals!
            </p>
            <Button asChild size="lg" className="bg-primary">
              <Link href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  const deliveryFee = 10.0
  const finalTotal = totalPrice + deliveryFee

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-4 sm:py-8">
        <h1 className="mb-6 sm:mb-8 font-display text-2xl sm:text-3xl font-bold">
          Shopping Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </h1>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* Product Image */}
                  <div className="relative h-32 sm:h-24 sm:w-24 w-full flex-shrink-0 overflow-hidden rounded-lg border bg-muted">
                    <Image
                      src={item.productImage || "/placeholder.svg"}
                      alt={item.productTitle}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        href={`/products/${item.productId}`}
                        className="font-semibold hover:text-primary line-clamp-2"
                      >
                        {item.productTitle}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">Sold by {item.sellerName}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-3 sm:mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          disabled={item.quantity >= item.stock}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price and Remove */}
                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <span className="font-display text-lg font-bold text-primary">
                          GH₵ {(item.productPrice * item.quantity).toFixed(2)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.productId)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {item.quantity >= item.stock && (
                      <p className="text-xs text-amber-600 mt-1">Maximum stock reached</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-4 sm:p-6 lg:sticky lg:top-20">
              <h2 className="font-display text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                  <span className="font-medium">GH₵ {totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-medium">GH₵ {deliveryFee.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span className="font-display font-bold">Total</span>
                  <span className="font-display text-xl font-bold text-primary">GH₵ {finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg" onClick={() => setShowCheckout(true)}>
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="outline" className="w-full mt-3 bg-transparent" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span>Buyer protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <span>Fast delivery</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <CheckoutDialog
        open={showCheckout}
        onOpenChange={setShowCheckout}
        items={items}
        subtotal={totalPrice}
        deliveryFee={deliveryFee}
        total={finalTotal}
        onCheckoutComplete={() => {
          setShowCheckout(false)
          // Cart will be cleared after successful checkout
        }}
      />
    </div>
  )
}
