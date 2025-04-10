
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

const orderStatusMap = {
  processing: { label: "Processing", class: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
  shipped: { label: "Shipped", class: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
  delivered: { label: "Delivered", class: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300" },
  delayed: { label: "Delayed", class: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
  cancelled: { label: "Cancelled", class: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
};

const recentOrders = [
  {
    id: "ORD-7231",
    customer: "Acme Corp",
    date: "2023-11-25",
    value: "$12,400.00",
    status: "processing",
  },
  {
    id: "ORD-7230",
    customer: "TechGlobal Inc",
    date: "2023-11-24",
    value: "$8,753.50",
    status: "shipped",
  },
  {
    id: "ORD-7229",
    customer: "Northwest Traders",
    date: "2023-11-24",
    value: "$4,200.00",
    status: "delivered",
  },
  {
    id: "ORD-7228",
    customer: "Pacific Distributors",
    date: "2023-11-23",
    value: "$6,458.25",
    status: "delayed",
  },
  {
    id: "ORD-7227",
    customer: "EastCoast Logistics",
    date: "2023-11-22",
    value: "$2,150.00",
    status: "cancelled",
  },
];

const RecentOrders = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest purchase orders across all channels</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="h-8">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 transition-colors"
            >
              <div className="grid gap-1">
                <div className="font-medium">{order.id}</div>
                <div className="text-sm text-muted-foreground flex gap-4">
                  <span>{order.customer}</span>
                  <span>{order.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium">{order.value}</div>
                <Badge
                  variant="outline"
                  className={orderStatusMap[order.status].class}
                >
                  {orderStatusMap[order.status].label}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;
