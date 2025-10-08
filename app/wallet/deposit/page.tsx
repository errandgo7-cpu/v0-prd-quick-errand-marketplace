"use client"

import { useState } from "react"
import { ArrowLeft, Smartphone, Building2, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"

export default function DepositPage() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("momo")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [provider, setProvider] = useState("mtn")

  const handleDeposit = () => {
    // Will integrate with payment gateway
    console.log("[v0] Deposit:", { amount, paymentMethod, phoneNumber, provider })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link href="/wallet">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Wallet
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle>Deposit Money</CardTitle>
            <CardDescription>Add money to your QuickErrand wallet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (GH₵)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
              />
              <div className="flex gap-2 mt-2">
                {[50, 100, 200, 500].map((preset) => (
                  <Button key={preset} variant="outline" size="sm" onClick={() => setAmount(preset.toString())}>
                    GH₵ {preset}
                  </Button>
                ))}
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4">
              <Label>Payment Method</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                {/* Mobile Money */}
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="momo" id="momo" />
                  <Label htmlFor="momo" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Smartphone className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium">Mobile Money</p>
                      <p className="text-sm text-muted-foreground">MTN, Vodafone, AirtelTigo</p>
                    </div>
                  </Label>
                </div>

                {/* Bank Transfer */}
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Building2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">Direct bank deposit</p>
                    </div>
                  </Label>
                </div>

                {/* Card Payment */}
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                    <CreditCard className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Credit/Debit Card</p>
                      <p className="text-sm text-muted-foreground">Visa, Mastercard</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Mobile Money Details */}
            {paymentMethod === "momo" && (
              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <div className="space-y-2">
                  <Label>Select Provider</Label>
                  <RadioGroup value={provider} onValueChange={setProvider} className="flex gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mtn" id="mtn" />
                      <Label htmlFor="mtn" className="cursor-pointer">
                        MTN
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vodafone" id="vodafone" />
                      <Label htmlFor="vodafone" className="cursor-pointer">
                        Vodafone
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="airteltigo" id="airteltigo" />
                      <Label htmlFor="airteltigo" className="cursor-pointer">
                        AirtelTigo
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Money Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="024 123 4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              className="w-full"
              size="lg"
              onClick={handleDeposit}
              disabled={!amount || (paymentMethod === "momo" && !phoneNumber)}
            >
              Deposit GH₵ {amount || "0.00"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Your payment is secured and encrypted. Deposits are instant.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
