
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Plus, Search, Truck } from "lucide-react";

const shipmentStatusMap = {
  intransit: { label: "In Transit", class: "bg-blue-100 text-blue-800" },
  delivered: { label: "Delivered", class: "bg-green-100 text-green-800" },
  delayed: { label: "Delayed", class: "bg-yellow-100 text-yellow-800" },
  preparing: { label: "Preparing", class: "bg-purple-100 text-purple-800" },
  cancelled: { label: "Cancelled", class: "bg-red-100 text-red-800" },
};

const shipments = [
  {
    id: "SHP-4501",
    origin: "Shanghai, CN",
    destination: "Los Angeles, US",
    carrier: "Pacific Freight Ltd",
    departureDate: "2023-12-01",
    arrivalDate: "2023-12-18",
    status: "intransit",
  },
  {
    id: "SHP-4502",
    origin: "Rotterdam, NL",
    destination: "New York, US",
    carrier: "Atlantic Shipping Co",
    departureDate: "2023-11-28",
    arrivalDate: "2023-12-12",
    status: "intransit",
  },
  {
    id: "SHP-4500",
    origin: "Hamburg, DE",
    destination: "Singapore, SG",
    carrier: "Global Maritime",
    departureDate: "2023-11-22",
    arrivalDate: "2023-12-15",
    status: "delayed",
  },
  {
    id: "SHP-4499",
    origin: "Seattle, US",
    destination: "Tokyo, JP",
    carrier: "Pacific Routes Inc",
    departureDate: "2023-11-15",
    arrivalDate: "2023-12-01",
    status: "delivered",
  },
  {
    id: "SHP-4498",
    origin: "Busan, KR",
    destination: "Melbourne, AU",
    carrier: "Southern Ocean Logistics",
    departureDate: "2023-11-20",
    arrivalDate: "2023-12-08",
    status: "preparing",
  },
  {
    id: "SHP-4497",
    origin: "Dubai, AE",
    destination: "Mumbai, IN",
    carrier: "Indian Ocean Express",
    departureDate: "2023-11-25",
    arrivalDate: "2023-12-05",
    status: "cancelled",
  },
];

const Shipments = () => {
  const { toast } = useToast();

  const handleCreateShipment = () => {
    toast({
      title: "Create Shipment",
      description: "Feature to create new shipment will be implemented soon.",
    });
  };

  const handleShipmentClick = (shipmentId: string) => {
    toast({
      title: "Shipment Details",
      description: `Viewing details for shipment ${shipmentId}`,
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
              <h1 className="text-3xl font-bold tracking-tight">Shipments</h1>
              <p className="text-muted-foreground">
                Track and manage global shipments
              </p>
            </div>
            <Button onClick={handleCreateShipment} className="flex items-center gap-2">
              <Plus size={16} />
              Create Shipment
            </Button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search shipments..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Global Shipments</CardTitle>
              <CardDescription>Track all shipments across global routes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-7 font-medium text-sm bg-muted/50 p-4 border-b">
                  <div>Shipment ID</div>
                  <div>Origin</div>
                  <div>Destination</div>
                  <div>Carrier</div>
                  <div>Departure</div>
                  <div>Arrival</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {shipments.map((shipment) => (
                    <div 
                      key={shipment.id} 
                      className="grid grid-cols-7 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => handleShipmentClick(shipment.id)}
                    >
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{shipment.id}</span>
                      </div>
                      <div>{shipment.origin}</div>
                      <div>{shipment.destination}</div>
                      <div>{shipment.carrier}</div>
                      <div>{shipment.departureDate}</div>
                      <div>{shipment.arrivalDate}</div>
                      <div>
                        <Badge className={shipmentStatusMap[shipment.status].class}>
                          {shipmentStatusMap[shipment.status].label}
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

export default Shipments;
