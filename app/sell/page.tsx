"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, X, ImageIcon, Video, Music, Sparkles, TrendingUp, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SellPage() {
  const router = useRouter()
  const [images, setImages] = useState<string[]>([])
  const [videos, setVideos] = useState<string[]>([])
  const [audio, setAudio] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Product submitted")
    router.push("/seller/products")
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "video" | "audio") => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files).map((file) => URL.createObjectURL(file))
      if (type === "image") setImages([...images, ...newFiles])
      if (type === "video") setVideos([...videos, ...newFiles])
      if (type === "audio") setAudio([...audio, ...newFiles])
    }
  }

  const removeFile = (index: number, type: "image" | "video" | "audio") => {
    if (type === "image") setImages(images.filter((_, i) => i !== index))
    if (type === "video") setVideos(videos.filter((_, i) => i !== index))
    if (type === "audio") setAudio(audio.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 animate-pulse-glow bg-secondary" variant="default">
              <Sparkles className="mr-1 h-3 w-3" />
              Start Selling
            </Badge>
            <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-balance md:text-5xl">
              Turn Your Items Into
              <span className="gradient-text"> Cash Today</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              List your products with photos, videos, and even audio descriptions to attract more buyers
            </p>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    Product Details
                  </CardTitle>
                  <CardDescription>Tell buyers about your amazing product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-base">
                      Product Title *
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., Brand New iPhone 14 Pro - 256GB Space Black"
                      className="mt-1.5"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-base">
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your product in detail... What makes it special? What condition is it in? Why should someone buy it?"
                      rows={6}
                      className="mt-1.5"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="category" className="text-base">
                        Category *
                      </Label>
                      <Select required>
                        <SelectTrigger id="category" className="mt-1.5">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electronics">📱 Electronics</SelectItem>
                          <SelectItem value="fashion">👗 Fashion</SelectItem>
                          <SelectItem value="home">🏠 Home & Garden</SelectItem>
                          <SelectItem value="sports">⚽ Sports & Fitness</SelectItem>
                          <SelectItem value="books">📚 Books & Media</SelectItem>
                          <SelectItem value="toys">🎮 Toys & Games</SelectItem>
                          <SelectItem value="automotive">🚗 Automotive</SelectItem>
                          <SelectItem value="beauty">💄 Beauty & Health</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="condition" className="text-base">
                        Condition *
                      </Label>
                      <Select required>
                        <SelectTrigger id="condition" className="mt-1.5">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">✨ Brand New</SelectItem>
                          <SelectItem value="like-new">🌟 Like New</SelectItem>
                          <SelectItem value="good">👍 Good</SelectItem>
                          <SelectItem value="fair">👌 Fair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <DollarSign className="h-4 w-4 text-secondary" />
                    </div>
                    Pricing & Stock
                  </CardTitle>
                  <CardDescription>Set your price and inventory</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="price" className="text-base">
                        Price (GH₵) *
                      </Label>
                      <Input id="price" type="number" step="0.01" placeholder="0.00" className="mt-1.5" required />
                      <p className="text-xs text-muted-foreground mt-1">Set a competitive price</p>
                    </div>

                    <div>
                      <Label htmlFor="stock" className="text-base">
                        Stock Quantity *
                      </Label>
                      <Input id="stock" type="number" min="0" placeholder="1" className="mt-1.5" required />
                      <p className="text-xs text-muted-foreground mt-1">How many do you have?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media Upload */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <ImageIcon className="h-4 w-4 text-accent" />
                    </div>
                    Media Gallery
                  </CardTitle>
                  <CardDescription>Add photos, videos, and audio to showcase your product</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="images" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="images" className="gap-2">
                        <ImageIcon className="h-4 w-4" />
                        Photos
                      </TabsTrigger>
                      <TabsTrigger value="videos" className="gap-2">
                        <Video className="h-4 w-4" />
                        Videos
                      </TabsTrigger>
                      <TabsTrigger value="audio" className="gap-2">
                        <Music className="h-4 w-4" />
                        Audio
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="images" className="space-y-4 mt-4">
                      <div className="grid gap-4 sm:grid-cols-3">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-lg border-2 bg-muted group"
                          >
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Product ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute right-2 top-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeFile(index, "image")}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            {index === 0 && <Badge className="absolute left-2 top-2 bg-primary">Cover</Badge>}
                          </div>
                        ))}

                        <label className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 transition-colors hover:border-primary hover:bg-primary/10">
                          <Upload className="h-8 w-8 text-primary" />
                          <span className="text-sm font-medium text-primary">Upload Photos</span>
                          <span className="text-xs text-muted-foreground">Up to 10 images</span>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, "image")}
                          />
                        </label>
                      </div>
                    </TabsContent>

                    <TabsContent value="videos" className="space-y-4 mt-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {videos.map((video, index) => (
                          <div
                            key={index}
                            className="relative aspect-video overflow-hidden rounded-lg border-2 bg-muted group"
                          >
                            <video src={video} className="h-full w-full object-cover" controls />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute right-2 top-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeFile(index, "video")}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}

                        <label className="flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-secondary/50 bg-secondary/5 transition-colors hover:border-secondary hover:bg-secondary/10">
                          <Video className="h-8 w-8 text-secondary" />
                          <span className="text-sm font-medium text-secondary">Upload Videos</span>
                          <span className="text-xs text-muted-foreground">Show it in action</span>
                          <input
                            type="file"
                            accept="video/*"
                            multiple
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, "video")}
                          />
                        </label>
                      </div>
                    </TabsContent>

                    <TabsContent value="audio" className="space-y-4 mt-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {audio.map((audioFile, index) => (
                          <div key={index} className="relative overflow-hidden rounded-lg border-2 bg-muted p-4 group">
                            <audio src={audioFile} controls className="w-full" />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute right-2 top-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeFile(index, "audio")}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}

                        <label className="flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-accent/50 bg-accent/5 transition-colors hover:border-accent hover:bg-accent/10">
                          <Music className="h-8 w-8 text-accent" />
                          <span className="text-sm font-medium text-accent">Upload Audio</span>
                          <span className="text-xs text-muted-foreground">Add voice description</span>
                          <input
                            type="file"
                            accept="audio/*"
                            multiple
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, "audio")}
                          />
                        </label>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publishing */}
              <Card className="border-2 sticky top-4">
                <CardHeader>
                  <CardTitle>Publish Product</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue="active">
                      <SelectTrigger id="status" className="mt-1.5">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">✅ Active</SelectItem>
                        <SelectItem value="inactive">⏸️ Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 h-11">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Publish Product
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => router.back()}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">📸</span>
                      <span>Use high-quality, well-lit photos</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary">🎥</span>
                      <span>Add videos to show product details</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">🎤</span>
                      <span>Record audio descriptions for uniqueness</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">💰</span>
                      <span>Price competitively to sell faster</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary">⚡</span>
                      <span>Respond to buyers within 24 hours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
