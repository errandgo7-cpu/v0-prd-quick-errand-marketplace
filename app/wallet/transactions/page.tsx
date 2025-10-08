import { ArrowLeft, ArrowUpRight, ArrowDownLeft, CreditCard, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function TransactionsPage() {
  // Mock data - will be replaced with real data from Supabase
  const transactions = [
    {
      id: "1",
      type: "deposit",
      amount: 500,
      method: "MTN MoMo",
      status: "completed",
      date: "2025-02-10 14:30",
      ref: "TXN001",
    },
    {
      id: "2",
      type: "payment",
      amount: -150,
      description: "Purchase: Wireless Headphones",
      status: "completed",
      date: "2025-02-09 10:15",
      ref: "TXN002",
    },
    {
      id: "3",
      type: "deposit",
      amount: 1000,
      method: "Bank Transfer",
      status: "completed",
      date: "2025-02-08 16:45",
      ref: "TXN003",
    },
    {
      id: "4",
      type: "withdrawal",
      amount: -200,
      method: "Vodafone Cash",
      status: "pending",
      date: "2025-02-07 09:20",
      ref: "TXN004",
    },
    {
      id: "5",
      type: "payment",
      amount: -75,
      description: "Errand: Grocery Delivery",
      status: "completed",
      date: "2025-02-06 18:00",
      ref: "TXN005",
    },
    {
      id: "6",
      type: "refund",
      amount: 50,
      description: "Refund: Cancelled Order",
      status: "completed",
      date: "2025-02-05 12:30",
      ref: "TXN006",
    },
    {
      id: "7",
      type: "deposit",
      amount: 300,
      method: "Visa Card",
      status: "completed",
      date: "2025-02-04 15:10",
      ref: "TXN007",
    },
    {
      id: "8",
      type: "withdrawal",
      amount: -500,
      method: "MTN MoMo",
      status: "completed",
      date: "2025-02-03 11:45",
      ref: "TXN008",
    },
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
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>All your wallet transactions</CardDescription>
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="deposit">Deposits</SelectItem>
                    <SelectItem value="withdrawal">Withdrawals</SelectItem>
                    <SelectItem value="payment">Payments</SelectItem>
                    <SelectItem value="refund">Refunds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-4 border-b last:border-0">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`p-3 rounded-full ${
                        transaction.type === "deposit"
                          ? "bg-success/10"
                          : transaction.type === "withdrawal"
                            ? "bg-destructive/10"
                            : transaction.type === "refund"
                              ? "bg-accent/10"
                              : "bg-muted"
                      }`}
                    >
                      {transaction.type === "deposit" ? (
                        <ArrowDownLeft className="h-5 w-5 text-success" />
                      ) : transaction.type === "withdrawal" ? (
                        <ArrowUpRight className="h-5 w-5 text-destructive" />
                      ) : (
                        <CreditCard className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium capitalize">{transaction.type}</p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            transaction.status === "completed"
                              ? "bg-success/10 text-success"
                              : transaction.status === "pending"
                                ? "bg-accent/10 text-accent"
                                : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{transaction.method || transaction.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {transaction.date} • Ref: {transaction.ref}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold text-lg ${transaction.amount > 0 ? "text-success" : "text-foreground"}`}
                    >
                      {transaction.amount > 0 ? "+" : ""}GH₵ {Math.abs(transaction.amount).toFixed(2)}
                    </p>
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
