import { Header } from "@/components/header"
import { ErrandCard } from "@/components/errand-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Truck, Package, ShoppingBag, Plus, Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function ErrandsPage() {
  // Mock data
  const errands = [
    {
      id: "1",
      title: "Grocery Shopping & Delivery",
      description: "Need someone to pick up groceries from Whole Foods and deliver to my apartment.",
      type: "shopping",
      price: 25.0,
      pickupAddress: "Whole Foods, Market St, SF",
      deliveryAddress: "123 Main St, San Francisco",
      status: "pending",
      distance: "2.5 miles",
      postedTime: "15 mins ago",
    },
    {
      id: "2",
      title: "Package Pickup from Post Office",
      description: "Pick up a package from USPS and deliver to my office building.",
      type: "pickup",
      price: 15.0,
      pickupAddress: "USPS, 5th Ave, SF",
      deliveryAddress: "456 Market St, San Francisco",
      status: "pending",
      distance: "1.8 miles",
      postedTime: "30 mins ago",
    },
    {
      id: "3",
      title: "Food Delivery from Restaurant",
      description: "Pick up my takeout order from Thai restaurant and deliver to my home.",
      type: "delivery",
      price: 12.0,
      pickupAddress: "Thai Kitchen, Mission St, SF",
      deliveryAddress: "789 Oak Ave, San Francisco",
      status: "accepted",
      distance: "3.2 miles",
      postedTime: "1 hour ago",
    },
    {
      id: "4",
      title: "Document Delivery",
      description: "Urgent: Deliver important documents to law office downtown.",
      type: "delivery",
      price: 30.0,
      pickupAddress: "123 Pine St, San Francisco",
      deliveryAddress: "Legal Office, Financial District, SF",
      status: "pending",
      distance: "4.1 miles",
      postedTime: "45 mins ago",
    },
  ]

  const errandTypes = [
    { value: "delivery", label: "Delivery", icon: Truck },
    { value: "pickup", label: "Pickup", icon: Package },
    { value: "shopping", label: "Shopping", icon: ShoppingBag },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-6 sm:py-8">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">Errand Services</h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Find errands to complete or request a delivery
            </p>
          </div>
          <Button className="bg-[#10b981] hover:bg-[#10b981]/90 w-full sm:w-auto" asChild>
            <Link href="/errands/new">
              <Plus className="mr-2 h-4 w-4" />
              Request Errand
            </Link>
          </Button>
        </div>

        {/* Errand Types */}
        <div className="mb-6 sm:mb-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
          {errandTypes.map((type) => {
            const Icon = type.icon
            return (
              <Link
                key={type.value}
                href={`/errands?type=${type.value}`}
                className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10b981]/10">
                  <Icon className="h-6 w-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{type.label}</h3>
                  <p className="text-sm text-muted-foreground">Browse {type.label.toLowerCase()} errands</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Filters Sidebar */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full bg-transparent">
                  <Menu className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  {/* Errand Type */}
                  <div className="mb-6">
                    <Label className="mb-3 block font-semibold">Errand Type</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="delivery-mobile" />
                        <label htmlFor="delivery-mobile" className="text-sm cursor-pointer">
                          Delivery
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="pickup-mobile" />
                        <label htmlFor="pickup-mobile" className="text-sm cursor-pointer">
                          Pickup
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="shopping-mobile" />
                        <label htmlFor="shopping-mobile" className="text-sm cursor-pointer">
                          Shopping
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <Label className="mb-3 block font-semibold">Price Range</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="under15-mobile" />
                        <label htmlFor="under15-mobile" className="text-sm cursor-pointer">
                          Under $15
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="15to30-mobile" />
                        <label htmlFor="15to30-mobile" className="text-sm cursor-pointer">
                          $15 - $30
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="over30-mobile" />
                        <label htmlFor="over30-mobile" className="text-sm cursor-pointer">
                          Over $30
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Distance */}
                  <div className="mb-6">
                    <Label className="mb-3 block font-semibold">Distance</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox id="under2-mobile" />
                        <label htmlFor="under2-mobile" className="text-sm cursor-pointer">
                          Under 2 miles
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="2to5-mobile" />
                        <label htmlFor="2to5-mobile" className="text-sm cursor-pointer">
                          2-5 miles
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="over5-mobile" />
                        <label htmlFor="over5-mobile" className="text-sm cursor-pointer">
                          Over 5 miles
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    Reset Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <aside className="hidden lg:block w-full lg:w-64 shrink-0">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 font-display text-lg font-semibold">Filters</h2>

              {/* Errand Type */}
              <div className="mb-6">
                <Label className="mb-3 block font-semibold">Errand Type</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="delivery" />
                    <label htmlFor="delivery" className="text-sm cursor-pointer">
                      Delivery
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="pickup" />
                    <label htmlFor="pickup" className="text-sm cursor-pointer">
                      Pickup
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="shopping" />
                    <label htmlFor="shopping" className="text-sm cursor-pointer">
                      Shopping
                    </label>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <Label className="mb-3 block font-semibold">Price Range</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="under15" />
                    <label htmlFor="under15" className="text-sm cursor-pointer">
                      Under $15
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="15to30" />
                    <label htmlFor="15to30" className="text-sm cursor-pointer">
                      $15 - $30
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="over30" />
                    <label htmlFor="over30" className="text-sm cursor-pointer">
                      Over $30
                    </label>
                  </div>
                </div>
              </div>

              {/* Distance */}
              <div className="mb-6">
                <Label className="mb-3 block font-semibold">Distance</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="under2" />
                    <label htmlFor="under2" className="text-sm cursor-pointer">
                      Under 2 miles
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="2to5" />
                    <label htmlFor="2to5" className="text-sm cursor-pointer">
                      2-5 miles
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="over5" />
                    <label htmlFor="over5" className="text-sm cursor-pointer">
                      Over 5 miles
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Errands Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="mb-4 sm:mb-6 flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3">
              <p className="text-sm text-muted-foreground">Showing {errands.length} errands</p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full xs:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-high">Highest Pay</SelectItem>
                  <SelectItem value="price-low">Lowest Pay</SelectItem>
                  <SelectItem value="distance">Closest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Errands Grid */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {errands.map((errand) => (
                <ErrandCard key={errand.id} {...errand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
