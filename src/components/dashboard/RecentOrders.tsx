
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
    items: [
      { name: "Industrial Bearings", quantity: 500, price: "$15.80" },
      { name: "Hydraulic Components", quantity: 20, price: "$205.50" }
    ],
    shipping: "Express Freight",
    notes: "Customer requested delivery confirmation"
  },
  {
    id: "ORD-7230",
    customer: "TechGlobal Inc",
    date: "2023-11-24",
    value: "$8,753.50",
    status: "shipped",
    items: [
      { name: "Circuit Boards", quantity: 150, price: "$45.25" },
      { name: "Cooling Systems", quantity: 10, price: "$230.00" }
    ],
    shipping: "Standard Shipping",
    notes: "Fragile items, handle with care"
  },
  {
    id: "ORD-7229",
    customer: "Northwest Traders",
    date: "2023-11-24",
    value: "$4,200.00",
    status: "delivered",
    items: [
      { name: "Industrial Paint", quantity: 80, price: "$52.50" }
    ],
    shipping: "Ground Shipping",
    notes: "Delivery completed"
  },
  {
    id: "ORD-7228",
    customer: "Pacific Distributors",
    date: "2023-11-23",
    value: "$6,458.25",
    status: "delayed",
    items: [
      { name: "Automotive Parts", quantity: 200, price: "$32.29" }
    ],
    shipping: "Maritime Freight",
    notes: "Delivery delayed due to port congestion"
  },
  {
    id: "ORD-7227",
    customer: "EastCoast Logistics",
    date: "2023-11-22",
    value: "$2,150.00",
    status: "cancelled",
    items: [
      { name: "Packaging Materials", quantity: 1000, price: "$2.15" }
    ],
    shipping: "Cancelled",
    notes: "Order cancelled by customer"
  },
];

const RecentOrders = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewAllOrders = () => {
    navigate("/orders");
    toast({
      title: "Orders Page",
      description: "Navigating to all orders",
    });
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  const handleProcessOrder = (orderId) => {
    setIsDialogOpen(false);
    toast({
      title: "Order Processed",
      description: `Order ${orderId} has been processed successfully`,
    });
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest purchase orders across all channels</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="h-8" onClick={handleViewAllOrders}>
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 transition-colors cursor-pointer"
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
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8" 
                    onClick={() => handleViewOrder(order)}
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              Order Details: {selectedOrder?.id}
              <Badge variant="outline" className={selectedOrder ? orderStatusMap[selectedOrder.status].class : ""}>
                {selectedOrder?.status && orderStatusMap[selectedOrder.status].label}
              </Badge>
            </DialogTitle>
            <DialogDescription>
              Complete order information and processing options
            </DialogDescription>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="grid gap-4 py-3">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Customer</p>
                  <p className="text-sm">{selectedOrder.customer}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Order Date</p>
                  <p className="text-sm">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                  <p className="text-sm font-bold">{selectedOrder.value}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Order Items</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between border-b pb-1">
                      <div>
                        <span className="text-sm">{item.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">x{item.quantity}</span>
                      </div>
                      <span className="text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Shipping Method</p>
                  <p className="text-sm">{selectedOrder.shipping}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Notes</p>
                  <p className="text-sm">{selectedOrder.notes}</p>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => handleProcessOrder(selectedOrder?.id)}>
              Process Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RecentOrders;
