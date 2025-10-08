"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface CartItem {
  id: string
  productId: string
  productTitle: string
  productImage: string
  productPrice: number
  quantity: number
  stock: number
  sellerId: string
  sellerName: string
}

interface CartContextType {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addToCart: (product: {
    id: string
    title: string
    image: string
    price: number
    stock: number
    sellerId: string
    sellerName: string
  }) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (product: {
    id: string
    title: string
    image: string
    price: number
    stock: number
    sellerId: string
    sellerName: string
  }) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.productId === product.id)

      if (existingItem) {
        // Update quantity
        return currentItems.map((item) =>
          item.productId === product.id ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) } : item,
        )
      } else {
        // Add new item
        const newItem: CartItem = {
          id: Math.random().toString(36).substr(2, 9),
          productId: product.id,
          productTitle: product.title,
          productImage: product.image,
          productPrice: product.price,
          quantity: 1,
          stock: product.stock,
          sellerId: product.sellerId,
          sellerName: product.sellerName,
        }
        return [...currentItems, newItem]
      }
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) } : item,
      ),
    )
  }

  const removeFromCart = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.productId !== productId))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.productPrice * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
