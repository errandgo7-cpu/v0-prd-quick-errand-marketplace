import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  id: string
  name: string
  imageUrl: string
  productCount?: number
}

export function CategoryCard({ id, name, imageUrl, productCount = 0 }: CategoryCardProps) {
  return (
    <Link href={`/categories/${id}`} className="block">
      <Card className="group overflow-hidden transition-all hover:shadow-lg border-border/50">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="text-lg font-semibold text-balance mb-1">{name}</h3>
              {productCount > 0 && <p className="text-sm text-white/90">{productCount} items</p>}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
