import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface ProductCardProps {
  id: string
  title: string
  price: number
  imageUrl: string
  rating?: number
  reviewCount?: number
  seller?: string
  status?: string
}

export function ProductCard({
  id,
  title,
  price,
  imageUrl,
  rating = 4.5,
  reviewCount = 0,
  seller,
  status = "active",
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="block">
      <Card className="group overflow-hidden transition-all hover:shadow-lg border-border/50">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {status === "sold" && <Badge className="absolute right-3 top-3 bg-destructive">Sold</Badge>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-4">
          <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-balance">{title}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            <span className="font-medium text-foreground">{rating}</span>
            {reviewCount > 0 && <span>({reviewCount})</span>}
          </div>
          {seller && <p className="text-xs text-muted-foreground">by {seller}</p>}
          <p className="text-lg font-bold text-primary">GH₵ {price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
