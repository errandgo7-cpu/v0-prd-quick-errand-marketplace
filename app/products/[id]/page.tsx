"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, Heart, Share2, MapPin, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart"
import { CheckoutDialog } from "@/components/checkout-dialog"
import { useRouter } from "next/navigation"

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1)
  const [showCheckout, setShowCheckout] = useState(false)
  const { addToCart } = useCart()
  const router = useRouter()

  const product = {
    id: "1",
    title: "iPhone 14 Pro",
    description:
      "Gently used iPhone 14 Pro in excellent condition. 256GB storage, space black color. Comes with original box and charger. No scratches or dents. Battery health at 98%. Perfect for anyone looking for a premium phone at a great price.",
    price: 799.99,
    originalPrice: 999.99,
    images: ["/iphone-front.png", "/iphone-back.png", "/iphone-side.jpg"],
    rating: 4.8,
    reviewCount: 24,
    stock: 5,
    category: "Electronics",
    condition: "Like New",
    seller: {
      id: "seller-1",
      name: "John Seller",
      avatar: "/diverse-avatars.png",
      rating: 4.9,
      totalSales: 156,
      location: "San Francisco, CA",
    },
  }

  const [selectedImage, setSelectedImage] = useState(0)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.images[0],
      price: product.price,
      stock: product.stock,
      sellerId: product.seller.id,
      sellerName: product.seller.name,
    })

    alert("Added to cart!")
  }

  const handleBuyNow = () => {
    const singleItem = {
      id: Math.random().toString(36).substr(2, 9),
      productId: product.id,
      productTitle: product.title,
      productImage: product.images[0],
      productPrice: product.price,
      quantity: quantity,
      stock: product.stock,
      sellerId: product.seller.id,
      sellerName: product.seller.name,
    }

    setShowCheckout(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-4 sm:py-8">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-foreground">
            Products
          </Link>
          <span>/</span>
          <Link href={`/categories/${product.category}`} className="hover:text-foreground">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? "border-[#2563eb]" : "border-transparent hover:border-muted-foreground/50"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="mb-2 flex items-center gap-2 flex-wrap">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">{product.condition}</Badge>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-balance">{product.title}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
                <Separator orientation="vertical" className="h-4 sm:hidden" />
                <span className="text-sm text-muted-foreground sm:block">{product.stock} in stock</span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#2563eb]">
                  GH₵ {product.price.toFixed(2)}
                </span>
                <span className="text-base sm:text-lg text-muted-foreground line-through">
                  GH₵ {product.originalPrice.toFixed(2)}
                </span>
                <Badge className="bg-[#10b981]">Save GH₵ {(product.originalPrice - product.price).toFixed(2)}</Badge>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-2 font-display font-semibold">Description</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-4">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex flex-col xs:flex-row gap-3">
                <Button size="lg" className="flex-1 bg-[#2563eb] hover:bg-[#2563eb]/90" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="xs:w-auto bg-transparent">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="xs:w-auto bg-transparent">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button size="lg" variant="outline" className="w-full bg-transparent" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </div>

            <Separator />

            {/* Seller Info */}
            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-3 font-display font-semibold">Seller Information</h3>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={product.seller.avatar || "/placeholder.svg"} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{product.seller.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-sm">
                    <Star className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    <span className="font-medium">{product.seller.rating}</span>
                    <span className="text-muted-foreground">({product.seller.totalSales} sales)</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{product.seller.location}</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3 bg-transparent" asChild>
                    <Link href={`/sellers/${product.seller.name}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#10b981]" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#10b981]" />
                <span>Buyer Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutDialog
        open={showCheckout}
        onOpenChange={setShowCheckout}
        items={[
          {
            id: Math.random().toString(36).substr(2, 9),
            productId: product.id,
            productTitle: product.title,
            productImage: product.images[0],
            productPrice: product.price,
            quantity: quantity,
            stock: product.stock,
            sellerId: product.seller.id,
            sellerName: product.seller.name,
          },
        ]}
        subtotal={product.price * quantity}
        deliveryFee={10}
        total={product.price * quantity + 10}
        onCheckoutComplete={() => {
          setShowCheckout(false)
          router.push("/orders")
        }}
      />
    </div>
  )
}
