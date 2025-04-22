
import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Icons } from "@/components/icons";
import { ProtocolCard } from "@/components/ui/protocol-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Opportunities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("apy");
  const [filterChain, setFilterChain] = useState("all");

  // Demo protocols
  const protocols = [
    { id: 1, name: "Aave", apy: "4.2%", risk: 1, chain: "Ethereum", lockPeriod: "None" },
    { id: 2, name: "Compound", apy: "3.8%", risk: 1, chain: "Ethereum", lockPeriod: "None" },
    { id: 3, name: "Lido", apy: "5.1%", risk: 2, chain: "Ethereum", lockPeriod: "28 days" },
    { id: 4, name: "Venus", apy: "6.2%", risk: 3, chain: "BSC", lockPeriod: "None" },
    { id: 5, name: "Benqi", apy: "4.5%", risk: 2, chain: "Avalanche", lockPeriod: "None" },
    { id: 6, name: "Anchor", apy: "8.5%", risk: 4, chain: "Terra", lockPeriod: "21 days" },
    { id: 7, name: "Mirror", apy: "7.2%", risk: 4, chain: "Terra", lockPeriod: "14 days" },
    { id: 8, name: "Curve", apy: "4.8%", risk: 2, chain: "Ethereum", lockPeriod: "None" },
    { id: 9, name: "Yearn", apy: "5.6%", risk: 3, chain: "Ethereum", lockPeriod: "None" },
  ];

  // Filter and sort protocols
  const filteredProtocols = protocols
    .filter(p => 
      (filterChain === "all" || p.chain === filterChain) && 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "apy":
          return parseFloat(b.apy) - parseFloat(a.apy);
        case "risk":
          return a.risk - b.risk;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Yield Opportunities</h1>
            <p className="text-muted-foreground">Compare and discover the best yield opportunities across chains.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Icons.search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search protocols..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apy">Sort by APY</SelectItem>
                <SelectItem value="risk">Sort by Risk</SelectItem>
                <SelectItem value="name">Sort by Name</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterChain} onValueChange={setFilterChain}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by chain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Chains</SelectItem>
                <SelectItem value="Ethereum">Ethereum</SelectItem>
                <SelectItem value="BSC">BSC</SelectItem>
                <SelectItem value="Avalanche">Avalanche</SelectItem>
                <SelectItem value="Terra">Terra</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProtocols.map((protocol) => (
              <ProtocolCard
                key={protocol.id}
                name={protocol.name}
                logo={<Icons.coins className="h-6 w-6" />}
                apy={protocol.apy}
                risk={protocol.risk}
                chain={protocol.chain}
                lockPeriod={protocol.lockPeriod}
              />
            ))}
            {filteredProtocols.length === 0 && (
              <div className="col-span-3 flex flex-col items-center justify-center p-12 text-center">
                <Icons.search className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No protocols found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
