
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Filter, Search, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const inventoryItems = [
  {
    id: "INV-001",
    name: "Industrial Bearings",
    category: "Components",
    location: "Warehouse A",
    quantity: 2450,
    minStock: 500,
    status: "In Stock",
  },
  {
    id: "INV-002",
    name: "Circuit Boards",
    category: "Electronics",
    location: "Warehouse B",
    quantity: 850,
    minStock: 200,
    status: "In Stock",
  },
  {
    id: "INV-003",
    name: "Hydraulic Pumps",
    category: "Machinery",
    location: "Warehouse A",
    quantity: 120,
    minStock: 50,
    status: "In Stock",
  },
  {
    id: "INV-004",
    name: "Cooling Fans",
    category: "Electronics",
    location: "Warehouse C",
    quantity: 75,
    minStock: 100,
    status: "Low Stock",
  },
  {
    id: "INV-005",
    name: "Industrial Paint",
    category: "Chemicals",
    location: "Warehouse D",
    quantity: 0,
    minStock: 50,
    status: "Out of Stock",
  },
];

const Inventory = () => {
  const { toast } = useToast();

  const getStatusClass = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAddItem = () => {
    toast({
      title: "Add Inventory Item",
      description: "Feature to add new inventory item will be implemented soon.",
    });
  };

  const handleItemClick = (itemId: string) => {
    toast({
      title: "Item Details",
      description: `Viewing details for item ${itemId}`,
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
              <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
              <p className="text-muted-foreground">
                Track and manage inventory across all locations
              </p>
            </div>
            <Button onClick={handleAddItem} className="flex items-center gap-2">
              <Plus size={16} />
              Add Item
            </Button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search inventory..."
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
              <CardTitle>Current Inventory</CardTitle>
              <CardDescription>All inventory items across all warehouses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 font-medium text-sm bg-muted/50 p-4 border-b">
                  <div>ID</div>
                  <div>Name</div>
                  <div>Category</div>
                  <div>Location</div>
                  <div>Quantity</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {inventoryItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="grid grid-cols-6 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => handleItemClick(item.id)}
                    >
                      <div className="text-sm font-medium">{item.id}</div>
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span>{item.name}</span>
                      </div>
                      <div>{item.category}</div>
                      <div>{item.location}</div>
                      <div>{item.quantity}</div>
                      <div>
                        <Badge className={getStatusClass(item.status)}>{item.status}</Badge>
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

export default Inventory;
