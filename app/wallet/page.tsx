import { Wallet, ArrowUpRight, ArrowDownLeft, Plus, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function WalletPage() {
  // Mock data - will be replaced with real data from Supabase
  const balance = 1250.5
  const recentTransactions = [
    { id: "1", type: "deposit", amount: 500, method: "MTN MoMo", status: "completed", date: "2025-02-10" },
    {
      id: "2",
      type: "payment",
      amount: -150,
      description: "Purchase: Wireless Headphones",
      status: "completed",
      date: "2025-02-09",
    },
    { id: "3", type: "deposit", amount: 1000, method: "Bank Transfer", status: "completed", date: "2025-02-08" },
    { id: "4", type: "withdrawal", amount: -200, method: "Vodafone Cash", status: "pending", date: "2025-02-07" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
        {/* Wallet Balance Card */}
        <Card className="mb-6 sm:mb-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              <CardTitle className="text-lg">Wallet Balance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">GH₵ {balance.toFixed(2)}</div>
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-3">
              <Link href="/wallet/deposit" className="w-full">
                <Button variant="secondary" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Deposit
                </Button>
              </Link>
              <Link href="/wallet/withdraw" className="w-full">
                <Button variant="secondary" className="w-full">
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                  Withdraw
                </Button>
              </Link>
              <Link href="/wallet/payment-methods" className="w-full">
                <Button variant="secondary" className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Methods
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest wallet activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b last:border-0">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        transaction.type === "deposit"
                          ? "bg-success/10"
                          : transaction.type === "withdrawal"
                            ? "bg-destructive/10"
                            : "bg-muted"
                      }`}
                    >
                      {transaction.type === "deposit" ? (
                        <ArrowDownLeft className="h-4 w-4 text-success" />
                      ) : transaction.type === "withdrawal" ? (
                        <ArrowUpRight className="h-4 w-4 text-destructive" />
                      ) : (
                        <CreditCard className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium capitalize">{transaction.type}</p>
                      <p className="text-sm text-muted-foreground">{transaction.method || transaction.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${transaction.amount > 0 ? "text-success" : "text-foreground"}`}>
                      {transaction.amount > 0 ? "+" : ""}GH₵ {Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">{transaction.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/wallet/transactions">
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View All Transactions
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
