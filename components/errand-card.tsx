import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"

interface ErrandCardProps {
  id: string
  title: string
  description: string
  type: string
  price: number
  pickupAddress: string
  deliveryAddress: string
  status: string
  distance: string
  postedTime: string
}

export function ErrandCard({
  id,
  title,
  description,
  type,
  price,
  pickupAddress,
  deliveryAddress,
  status,
  distance,
  postedTime,
}: ErrandCardProps) {
  return (
    <Link href={`/errands/${id}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <Badge className="bg-[#10b981]">{type}</Badge>
            <Badge variant={status === "pending" ? "outline" : "secondary"}>{status}</Badge>
          </div>

          <h3 className="mb-2 font-display text-lg font-semibold leading-tight text-balance">{title}</h3>
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground leading-relaxed">{description}</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" />
              <span className="line-clamp-1 text-muted-foreground">{pickupAddress}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#10b981]" />
              <span className="line-clamp-1 text-muted-foreground">{deliveryAddress}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t bg-muted/50 p-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{postedTime}</span>
            </div>
            <span>{distance}</span>
          </div>
          <div className="flex items-center gap-1 font-display text-xl font-bold text-[#10b981]">
            <span>GH₵ {price.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
