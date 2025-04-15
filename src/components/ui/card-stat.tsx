
import { cn } from "@/lib/utils";

interface CardStatProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  change?: string;
  isPositive?: boolean;
  className?: string;
}

export function CardStat({ 
  title, 
  value, 
  icon, 
  change, 
  isPositive = true,
  className 
}: CardStatProps) {
  return (
    <div className={cn("p-6 rounded-lg bg-card border border-border", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          {change && (
            <p className={cn("text-xs flex items-center mt-1", 
              isPositive ? "text-success" : "text-destructive"
            )}>
              {isPositive ? "↑" : "↓"} {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="rounded-full p-2 bg-muted">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
