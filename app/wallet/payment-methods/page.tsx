"use client"

import { useState } from "react"
import { ArrowLeft, Smartphone, Building2, CreditCard, Plus, Trash2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"

export default function PaymentMethodsPage() {
  const [isAddingMethod, setIsAddingMethod] = useState(false)
  const [methodType, setMethodType] = useState("momo")

  // Mock saved payment methods
  const paymentMethods = [
    { id: "1", type: "momo", provider: "MTN", number: "024 123 4567", isDefault: true },
    { id: "2", type: "momo", provider: "Vodafone", number: "050 987 6543", isDefault: false },
    { id: "3", type: "card", provider: "Visa", last4: "4242", isDefault: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/wallet">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Wallet
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your saved payment methods</CardDescription>
              </div>
              <Dialog open={isAddingMethod} onOpenChange={setIsAddingMethod}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Method
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Payment Method</DialogTitle>
                    <DialogDescription>Save a payment method for faster transactions</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <RadioGroup value={methodType} onValueChange={setMethodType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="momo" id="add-momo" />
                        <Label htmlFor="add-momo" className="flex items-center gap-2 cursor-pointer">
                          <Smartphone className="h-4 w-4" />
                          Mobile Money
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank" id="add-bank" />
                        <Label htmlFor="add-bank" className="flex items-center gap-2 cursor-pointer">
                          <Building2 className="h-4 w-4" />
                          Bank Account
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="add-card" />
                        <Label htmlFor="add-card" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-4 w-4" />
                          Credit/Debit Card
                        </Label>
                      </div>
                    </RadioGroup>

                    {methodType === "momo" && (
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label>Provider</Label>
                          <RadioGroup defaultValue="mtn" className="flex gap-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="mtn" id="provider-mtn" />
                              <Label htmlFor="provider-mtn">MTN</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="vodafone" id="provider-vodafone" />
                              <Label htmlFor="provider-vodafone">Vodafone</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="airteltigo" id="provider-airteltigo" />
                              <Label htmlFor="provider-airteltigo">AirtelTigo</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="momo-number">Phone Number</Label>
                          <Input id="momo-number" placeholder="024 123 4567" />
                        </div>
                      </div>
                    )}

                    <Button className="w-full" onClick={() => setIsAddingMethod(false)}>
                      Save Payment Method
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-muted">
                      {method.type === "momo" ? (
                        <Smartphone className="h-5 w-5" />
                      ) : method.type === "bank" ? (
                        <Building2 className="h-5 w-5" />
                      ) : (
                        <CreditCard className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{method.provider}</p>
                        {method.isDefault && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary flex items-center gap-1">
                            <Check className="h-3 w-3" />
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {method.type === "card" ? `•••• ${method.last4}` : method.number}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!method.isDefault && (
                      <Button variant="outline" size="sm">
                        Set Default
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
