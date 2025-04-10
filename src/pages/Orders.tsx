
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Filter, Plus, Calendar } from "lucide-react";

const orderStatusMap = {
  processing: { label: "Processing", class: "bg-blue-100 text-blue-800" },
  shipped: { label: "Shipped", class: "bg-green-100 text-green-800" },
  delivered: { label: "Delivered", class: "bg-gray-100 text-gray-800" },
  delayed: { label: "Delayed", class: "bg-yellow-100 text-yellow-800" },
  cancelled: { label: "Cancelled", class: "bg-red-100 text-red-800" },
};

const orders = [
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
  {
    id: "ORD-7226",
    customer: "Golden State Supply",
    date: "2023-11-22",
    value: "$9,370.80",
    status: "processing",
  },
  {
    id: "ORD-7225",
    customer: "Midwest Manufacturing",
    date: "2023-11-21",
    value: "$5,280.30",
    status: "shipped",
  },
];

const Orders = () => {
  const { toast } = useToast();

  const handleCreateOrder = () => {
    toast({
      title: "Create Order",
      description: "Feature to create new order will be implemented soon.",
    });
  };

  const handleOrderClick = (orderId: string) => {
    toast({
      title: "Order Details",
      description: `Viewing details for order ${orderId}`,
    });
  };

  return (
    <div className="grid min-h-screen grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
              <p className="text-muted-foreground">
                Manage and process customer orders
              </p>
            </div>
            <Button onClick={handleCreateOrder} className="flex items-center gap-2">
              <Plus size={16} />
              Create Order
            </Button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} />
              Date Range
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Orders</CardTitle>
              <CardDescription>Manage and track all customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 font-medium text-sm bg-muted/50 p-4 border-b">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Value</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {orders.map((order) => (
                    <div 
                      key={order.id} 
                      className="grid grid-cols-5 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => handleOrderClick(order.id)}
                    >
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{order.id}</span>
                      </div>
                      <div>{order.customer}</div>
                      <div>{order.date}</div>
                      <div className="font-medium">{order.value}</div>
                      <div>
                        <Badge className={orderStatusMap[order.status].class}>
                          {orderStatusMap[order.status].label}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Orders;
