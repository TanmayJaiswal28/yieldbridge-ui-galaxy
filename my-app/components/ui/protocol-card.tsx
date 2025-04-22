
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Badge } from "./badge";

interface ProtocolCardProps {
  name: string;
  logo: React.ReactNode;
  apy: string;
  risk: number;
  chain: string;
  lockPeriod: string;
  className?: string;
}

export function ProtocolCard({
  name,
  logo,
  apy,
  risk,
  chain,
  lockPeriod,
  className,
}: ProtocolCardProps) {
  const riskColors = [
    "bg-success/20 text-success",
    "bg-success/20 text-success",
    "bg-secondary/20 text-secondary",
    "bg-secondary/20 text-secondary",
    "bg-destructive/20 text-destructive"
  ];
  
  const riskLabels = ["Very Low", "Low", "Medium", "High", "Very High"];

  return (
    <div className={cn(
      "p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all", 
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="mr-4 rounded-full p-3 bg-muted">
            {logo}
          </div>
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{chain}</p>
          </div>
        </div>
        <Badge variant="outline" className={cn(riskColors[risk - 1], "border-0")}>
          {riskLabels[risk - 1]} Risk
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <p className="text-sm text-muted-foreground">APY</p>
          <p className="text-xl font-semibold text-success">{apy}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Lock Period</p>
          <p className="text-xl font-semibold">{lockPeriod}</p>
        </div>
      </div>
      
      <Button className="w-full mt-6">Stake Now</Button>
    </div>
  );
}
