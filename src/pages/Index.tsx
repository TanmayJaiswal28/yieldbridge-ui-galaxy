
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectWallet = () => {
    setIsConnecting(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background grid-pattern">
      {/* Header */}
      <header className="container flex justify-between items-center py-6">
        <div className="flex items-center">
          <div className="relative w-8 h-8 mr-3">
            <div className="absolute inset-0 bg-primary rounded-full blur-sm"></div>
            <div className="absolute inset-0.5 bg-gradient-to-tr from-primary to-secondary rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">YieldBridge</span>
        </div>
        <Button onClick={handleConnectWallet} disabled={isConnecting}>
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center">
        <div className="container grid md:grid-cols-2 gap-8 py-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-glow">
                YieldBridge
                <span className="block text-primary">Maximize Your DeFi Earnings</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Automated, cross-chain yield optimization powered by Pharos.
              </p>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                onClick={handleConnectWallet} 
                disabled={isConnecting}
                className="text-lg"
              >
                {isConnecting ? "Connecting..." : "Connect Wallet"}
                <Icons.arrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="flex flex-col items-center p-4">
                <div className="rounded-full bg-muted p-3 mb-2">
                  <Icons.crossChain className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Cross-Chain</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="rounded-full bg-muted p-3 mb-2">
                  <Icons.coins className="h-5 w-5 text-primary" />
                </div>
                <p className="text-center text-sm text-muted-foreground">DeFi Yields</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="rounded-full bg-muted p-3 mb-2">
                  <Icons.automate className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Automation</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            {/* Abstract background elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-primary/10 filter blur-3xl animate-float"></div>
              <div className="w-64 h-64 rounded-full bg-secondary/10 filter blur-3xl animate-float-delayed"></div>
            </div>
            
            {/* Main illustration */}
            <div className="relative z-10 w-full max-w-md">
              <div className="glass-card rounded-2xl p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Your Yield Portfolio</h3>
                  <span className="text-xs text-muted-foreground">Demo</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primary/20 p-2 mr-3">
                        <Icons.coins className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Aave</p>
                        <p className="text-xs text-muted-foreground">Ethereum</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">4.2% APY</p>
                      <p className="text-xs text-success">+0.2% today</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="rounded-full bg-secondary/20 p-2 mr-3">
                        <Icons.coins className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Lido</p>
                        <p className="text-xs text-muted-foreground">Ethereum</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">5.1% APY</p>
                      <p className="text-xs text-success">+0.1% today</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg opacity-50">
                    <div className="flex items-center">
                      <div className="rounded-full bg-muted p-2 mr-3">
                        <Icons.coins className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Venus</p>
                        <p className="text-xs text-muted-foreground">BSC</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">6.2% APY</p>
                      <p className="text-xs text-destructive">-0.3% today</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">Connect Wallet to View</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container py-6 border-t border-muted">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} YieldBridge. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
