
import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { CardStat } from "@/components/ui/card-stat";
import { YieldChart } from "@/components/ui/yield-chart";
import { Icons } from "@/components/icons";
import { TokenCard } from "@/components/ui/token-card";
import { DepositModal } from "@/components/deposit-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's an overview of your yield portfolio.</p>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setWithdrawModalOpen(true)}
              >
                Withdraw
              </Button>
              <Button 
                onClick={() => setDepositModalOpen(true)}
              >
                Deposit
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CardStat
              title="Total Balance"
              value="$12,482.45"
              change="12.5% this month"
              isPositive={true}
              icon={<Icons.wallet className="h-5 w-5 text-primary" />}
            />
            <CardStat
              title="Total Yield"
              value="$847.21"
              change="$124.12 this month"
              isPositive={true}
              icon={<Icons.chart className="h-5 w-5 text-secondary" />}
            />
            <CardStat
              title="Average APY"
              value="4.3%"
              change="0.2% since last week"
              isPositive={true}
              icon={<Icons.opportunities className="h-5 w-5 text-primary" />}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <YieldChart />
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-lg">Top Coins</h3>
                  <a href="#" className="text-sm text-primary hover:underline">View all</a>
                </div>
                <div className="space-y-3">
                  <TokenCard 
                    name="Ethereum"
                    symbol="ETH"
                    price="$3,472.51"
                    change="2.4%"
                    isPositive={true}
                    icon={<Icons.coins className="h-4 w-4" />}
                  />
                  <TokenCard 
                    name="Bitcoin"
                    symbol="BTC"
                    price="$65,241.30"
                    change="1.7%"
                    isPositive={true}
                    icon={<Icons.coins className="h-4 w-4" />}
                  />
                  <TokenCard 
                    name="Solana"
                    symbol="SOL"
                    price="$138.92"
                    change="3.5%"
                    isPositive={false}
                    icon={<Icons.coins className="h-4 w-4" />}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Active Yields</h2>
            <div className="rounded-lg overflow-hidden border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 text-muted-foreground font-medium">Protocol</th>
                    <th className="text-left p-3 text-muted-foreground font-medium">Chain</th>
                    <th className="text-left p-3 text-muted-foreground font-medium">Amount</th>
                    <th className="text-left p-3 text-muted-foreground font-medium">APY</th>
                    <th className="text-left p-3 text-muted-foreground font-medium">Time Locked</th>
                    <th className="text-left p-3 text-muted-foreground font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="rounded-full bg-muted p-2 mr-3">
                          <Icons.coins className="h-4 w-4" />
                        </div>
                        <span>Aave</span>
                      </div>
                    </td>
                    <td className="p-3">Ethereum</td>
                    <td className="p-3">$5,245.82</td>
                    <td className="p-3 text-success">4.2%</td>
                    <td className="p-3">None</td>
                    <td className="p-3">
                      <Badge variant="outline" className="bg-success/20 text-success border-0">Active</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="rounded-full bg-muted p-2 mr-3">
                          <Icons.coins className="h-4 w-4" />
                        </div>
                        <span>Lido</span>
                      </div>
                    </td>
                    <td className="p-3">Ethereum</td>
                    <td className="p-3">$3,236.63</td>
                    <td className="p-3 text-success">5.1%</td>
                    <td className="p-3">28 days</td>
                    <td className="p-3">
                      <Badge variant="outline" className="bg-secondary/20 text-secondary border-0">Staked</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="rounded-full bg-muted p-2 mr-3">
                          <Icons.coins className="h-4 w-4" />
                        </div>
                        <span>Venus</span>
                      </div>
                    </td>
                    <td className="p-3">BSC</td>
                    <td className="p-3">$4,000.00</td>
                    <td className="p-3 text-success">6.2%</td>
                    <td className="p-3">None</td>
                    <td className="p-3">
                      <Badge variant="outline" className="bg-success/20 text-success border-0">Active</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <DepositModal 
        open={depositModalOpen}
        onOpenChange={setDepositModalOpen}
        mode="deposit"
      />
      <DepositModal 
        open={withdrawModalOpen}
        onOpenChange={setWithdrawModalOpen}
        mode="withdraw"
      />
    </div>
  );
}
