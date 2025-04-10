
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useToast } from "@/components/ui/use-toast";

const inventoryData = [
  {
    name: "Global HQ",
    current: 5842,
    capacity: 8000,
    utilization: 73,
  },
  {
    name: "North America",
    current: 9456,
    capacity: 12000,
    utilization: 79,
  },
  {
    name: "EMEA",
    current: 6235,
    capacity: 10000,
    utilization: 62,
  },
  {
    name: "APAC",
    current: 3359,
    capacity: 5000,
    utilization: 67,
  },
];

const categoryData = [
  { name: "Electronics", value: 3254 },
  { name: "Apparel", value: 5421 },
  { name: "Home Goods", value: 2753 },
  { name: "Automotive", value: 1842 },
  { name: "Health", value: 1236 },
];

const InventoryOverview = () => {
  const { toast } = useToast();
  
  const handleLocationClick = (location: string, current: number, capacity: number) => {
    toast({
      title: `${location} Inventory`,
      description: `Current: ${current.toLocaleString()} units | Capacity: ${capacity.toLocaleString()} units`,
    });
  };
  
  const handleCategoryClick = (category: string, value: number) => {
    toast({
      title: `${category} Category`,
      description: `Current inventory: ${value.toLocaleString()} units`,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Warehouse Capacity</CardTitle>
          <CardDescription>Current inventory levels across locations</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-4">
            {inventoryData.map((item) => (
              <div 
                key={item.name} 
                className="space-y-1 cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-all"
                onClick={() => handleLocationClick(item.name, item.current, item.capacity)}
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground">
                    {item.current.toLocaleString()} / {item.capacity.toLocaleString()} units
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={item.utilization} className="h-2" />
                  <span className="text-xs font-medium">{item.utilization}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Updated 35 minutes ago
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inventory by Category</CardTitle>
          <CardDescription>Distribution across product categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[230px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                onClick={(data) => {
                  if (data && data.activePayload && data.activePayload[0]) {
                    const payload = data.activePayload[0].payload;
                    handleCategoryClick(payload.name, payload.value);
                  }
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "white", 
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                    border: "none"
                  }} 
                />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} cursor="pointer" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryOverview;
