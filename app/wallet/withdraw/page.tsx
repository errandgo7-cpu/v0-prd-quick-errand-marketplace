"use client"

import { useState } from "react"
import { ArrowLeft, Smartphone, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function WithdrawPage() {
  const [amount, setAmount] = useState("")
  const [withdrawMethod, setWithdrawMethod] = useState("momo")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [provider, setProvider] = useState("mtn")

  const walletBalance = 1250.5 // Mock balance

  const handleWithdraw = () => {
    // Will integrate with payment gateway
    console.log("[v0] Withdraw:", { amount, withdrawMethod, phoneNumber, provider })
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
            <CardTitle>Withdraw Money</CardTitle>
            <CardDescription>Transfer money from your wallet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Available Balance */}
            <Alert>
              <AlertDescription>
                Available Balance: <span className="font-bold">GH₵ {walletBalance.toFixed(2)}</span>
              </AlertDescription>
            </Alert>

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
                max={walletBalance}
              />
              <Button
                variant="link"
                size="sm"
                className="p-0 h-auto"
                onClick={() => setAmount(walletBalance.toString())}
              >
                Withdraw all
              </Button>
            </div>

            {/* Withdrawal Method Selection */}
            <div className="space-y-4">
              <Label>Withdrawal Method</Label>
              <RadioGroup value={withdrawMethod} onValueChange={setWithdrawMethod}>
                {/* Mobile Money */}
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="momo" id="momo" />
                  <Label htmlFor="momo" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Smartphone className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium">Mobile Money</p>
                      <p className="text-sm text-muted-foreground">Instant transfer to MoMo</p>
                    </div>
                  </Label>
                </div>

                {/* Bank Transfer */}
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Building2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Bank Account</p>
                      <p className="text-sm text-muted-foreground">1-2 business days</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Mobile Money Details */}
            {withdrawMethod === "momo" && (
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
              onClick={handleWithdraw}
              disabled={
                !amount || Number.parseFloat(amount) > walletBalance || (withdrawMethod === "momo" && !phoneNumber)
              }
            >
              Withdraw GH₵ {amount || "0.00"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Withdrawals are processed securely. Mobile Money transfers are instant.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
