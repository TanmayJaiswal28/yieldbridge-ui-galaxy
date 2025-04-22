
import { cn } from "@/lib/utils";

interface TokenCardProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  icon: React.ReactNode;
  isPositive: boolean;
  className?: string;
}

export function TokenCard({
  name,
  symbol,
  price,
  change,
  icon,
  isPositive,
  className,
}: TokenCardProps) {
  return (
    <div className={cn(
      "p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover-scale", 
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full p-2 bg-muted flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-xs text-muted-foreground">{symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">{price}</p>
          <p className={cn(
            "text-xs flex items-center justify-end",
            isPositive ? "text-success" : "text-destructive"
          )}>
            {isPositive ? "↑" : "↓"} {change}
          </p>
        </div>
      </div>
    </div>
  );
}
