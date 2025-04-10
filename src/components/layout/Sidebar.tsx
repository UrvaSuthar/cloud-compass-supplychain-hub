
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Box,
  ClipboardList,
  Globe,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Truck,
  Users,
  Warehouse
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarLink = ({ to, icon, label, isActive }: SidebarLinkProps) => (
  <Link to={to}>
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
        isActive && "bg-sidebar-accent text-sidebar-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Button>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const { toast } = useToast();

  const links = [
    { to: "/", icon: <Home size={20} />, label: "Dashboard" },
    { to: "/inventory", icon: <Warehouse size={20} />, label: "Inventory" },
    { to: "/orders", icon: <ShoppingCart size={20} />, label: "Orders" },
    { to: "/shipments", icon: <Truck size={20} />, label: "Shipments" },
    { to: "/products", icon: <Package size={20} />, label: "Products" },
    { to: "/suppliers", icon: <Users size={20} />, label: "Suppliers" },
    { to: "/compliance", icon: <ClipboardList size={20} />, label: "Compliance" },
    { to: "/analytics", icon: <BarChart3 size={20} />, label: "Analytics" },
    { to: "/locations", icon: <Globe size={20} />, label: "Locations" },
    { to: "/settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  const handleProfileClick = () => {
    toast({
      title: "User Profile",
      description: "Viewing Supply Chain Admin profile",
    });
  };

  return (
    <div className="flex h-screen flex-col bg-sidebar-background border-r">
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2 font-semibold text-sidebar-foreground cursor-pointer" onClick={() => navigate("/")}>
          <Box className="h-6 w-6 text-sidebar-primary" />
          <span className="text-lg">CloudCompass</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {links.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={
                link.to === "/" ? currentPath === "/" : currentPath.startsWith(link.to)
              }
            />
          ))}
        </nav>
      </div>
      <div className="border-t p-4">
        <div 
          className="flex items-center gap-2 text-sm text-sidebar-foreground/80 cursor-pointer hover:bg-sidebar-accent/50 p-2 rounded-md transition-all"
          onClick={handleProfileClick}
        >
          <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-sidebar-foreground font-medium">SC</span>
          </div>
          <div>
            <p className="font-medium text-sidebar-foreground">Supply Chain Admin</p>
            <p className="text-xs">admin@cloudcompass.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
