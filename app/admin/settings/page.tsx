"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Settings, Percent, TrendingUp, Users, Truck, Save, RotateCcw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminSettingsPage() {
  const { toast } = useToast()

  // State for percentage settings
  const [sellerCommission, setSellerCommission] = useState("10")
  const [buyerServiceFee, setBuyerServiceFee] = useState("2.5")
  const [deliveryFeePercentage, setDeliveryFeePercentage] = useState("15")

  // Original values for reset
  const originalValues = {
    sellerCommission: "10",
    buyerServiceFee: "2.5",
    deliveryFeePercentage: "15",
  }

  const handleSave = () => {
    // Here you would typically save to a database
    toast({
      title: "Settings Saved",
      description: "Platform fee percentages have been updated successfully.",
    })
  }

  const handleReset = () => {
    setSellerCommission(originalValues.sellerCommission)
    setBuyerServiceFee(originalValues.buyerServiceFee)
    setDeliveryFeePercentage(originalValues.deliveryFeePercentage)

    toast({
      title: "Settings Reset",
      description: "All values have been reset to defaults.",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Platform Settings</h1>
          </div>
          <p className="text-gray-600">Configure commission rates and service fees for the marketplace</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-orange-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Seller Commission</p>
                  <p className="text-2xl font-bold text-orange-600">{sellerCommission}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Buyer Service Fee</p>
                  <p className="text-2xl font-bold text-pink-600">{buyerServiceFee}%</p>
                </div>
                <Users className="h-8 w-8 text-pink-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Delivery Fee</p>
                  <p className="text-2xl font-bold text-purple-600">{deliveryFeePercentage}%</p>
                </div>
                <Truck className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Percent className="h-5 w-5 text-orange-500" />
              Fee Configuration
            </CardTitle>
            <CardDescription>Set the percentage rates for platform commissions and service fees</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Seller Commission */}
            <div className="space-y-2">
              <Label htmlFor="seller-commission" className="text-base font-semibold">
                Seller Commission Percentage
              </Label>
              <p className="text-sm text-gray-600 mb-2">
                The percentage taken from each sale made by sellers on the platform
              </p>
              <div className="flex items-center gap-2">
                <Input
                  id="seller-commission"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={sellerCommission}
                  onChange={(e) => setSellerCommission(e.target.value)}
                  className="max-w-xs"
                />
                <span className="text-gray-600 font-medium">%</span>
              </div>
              <p className="text-xs text-gray-500">
                Example: On a $100 sale, platform earns ${(Number.parseFloat(sellerCommission) || 0).toFixed(2)}
              </p>
            </div>

            <Separator />

            {/* Buyer Service Fee */}
            <div className="space-y-2">
              <Label htmlFor="buyer-fee" className="text-base font-semibold">
                Buyer Service Fee Percentage
              </Label>
              <p className="text-sm text-gray-600 mb-2">The service fee charged to buyers on each purchase</p>
              <div className="flex items-center gap-2">
                <Input
                  id="buyer-fee"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={buyerServiceFee}
                  onChange={(e) => setBuyerServiceFee(e.target.value)}
                  className="max-w-xs"
                />
                <span className="text-gray-600 font-medium">%</span>
              </div>
              <p className="text-xs text-gray-500">
                Example: On a $100 purchase, buyer pays ${(Number.parseFloat(buyerServiceFee) || 0).toFixed(2)} service
                fee
              </p>
            </div>

            <Separator />

            {/* Delivery Fee */}
            <div className="space-y-2">
              <Label htmlFor="delivery-fee" className="text-base font-semibold">
                Delivery Fee Percentage
              </Label>
              <p className="text-sm text-gray-600 mb-2">The percentage of order value charged for delivery services</p>
              <div className="flex items-center gap-2">
                <Input
                  id="delivery-fee"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={deliveryFeePercentage}
                  onChange={(e) => setDeliveryFeePercentage(e.target.value)}
                  className="max-w-xs"
                />
                <span className="text-gray-600 font-medium">%</span>
              </div>
              <p className="text-xs text-gray-500">
                Example: On a $100 order, delivery fee is ${(Number.parseFloat(deliveryFeePercentage) || 0).toFixed(2)}
              </p>
            </div>

            <Separator />

            {/* Total Revenue Example */}
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Revenue Calculation Example</h3>
              <p className="text-sm text-gray-600 mb-3">For a $100 product sale with delivery:</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Seller Commission:</span>
                  <span className="font-semibold text-orange-600">
                    ${(Number.parseFloat(sellerCommission) || 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Buyer Service Fee:</span>
                  <span className="font-semibold text-pink-600">
                    ${(Number.parseFloat(buyerServiceFee) || 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee:</span>
                  <span className="font-semibold text-purple-600">
                    ${(Number.parseFloat(deliveryFeePercentage) || 0).toFixed(2)}
                  </span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-base">
                  <span className="font-semibold text-gray-900">Total Platform Revenue:</span>
                  <span className="font-bold text-green-600">
                    $
                    {(
                      (Number.parseFloat(sellerCommission) || 0) +
                      (Number.parseFloat(buyerServiceFee) || 0) +
                      (Number.parseFloat(deliveryFeePercentage) || 0)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
              <Button onClick={handleReset} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-6 border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="text-blue-600 mt-1">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Important Note</h4>
                <p className="text-sm text-blue-800">
                  Changes to these percentages will apply to all new transactions. Existing orders will maintain their
                  original fee structure. Always communicate fee changes to your users in advance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
