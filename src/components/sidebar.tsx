
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  
  const routes = [
    {
      title: "Dashboard",
      icon: Icons.dashboard,
      href: "/dashboard",
      variant: "ghost",
    },
    {
      title: "Opportunities",
      icon: Icons.opportunities,
      href: "/opportunities",
      variant: "ghost",
    },
    {
      title: "Wallet",
      icon: Icons.wallet,
      href: "/wallet",
      variant: "ghost",
    },
    {
      title: "Settings",
      icon: Icons.settings,
      href: "/settings",
      variant: "ghost",
    },
  ];

  return (
    <div className={cn("pb-12 w-64 bg-card border-r", className)}>
      <div className="px-4 py-6 flex items-center">
        <Link to="/" className="flex items-center">
          <div className="relative w-8 h-8 mr-3">
            <div className="absolute inset-0 bg-primary rounded-full blur-sm"></div>
            <div className="absolute inset-0.5 bg-gradient-to-tr from-primary to-secondary rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">YieldBridge</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-10rem)] px-4">
        <div className="flex flex-col gap-2 pt-4">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={
                location.pathname === route.href ? "secondary" : "ghost"
              }
              className={cn(
                "justify-start gap-2 font-normal",
                location.pathname === route.href
                  ? "text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              asChild
            >
              <Link to={route.href} className="flex items-center">
                <route.icon className="h-4 w-4" />
                <span>{route.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="px-4 pt-4 border-t mt-auto">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
        >
          <Icons.logout className="h-4 w-4" />
          <span>Disconnect</span>
        </Button>
      </div>
    </div>
  );
}
