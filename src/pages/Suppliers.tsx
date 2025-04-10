
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Plus, Search, Users, Globe, Star } from "lucide-react";

const suppliers = [
  {
    id: "SUP-1001",
    name: "Global Electronics Ltd",
    location: "Shenzhen, China",
    category: "Electronics",
    rating: 4.8,
    activeContracts: 12,
    status: "Preferred",
  },
  {
    id: "SUP-1002",
    name: "American Steel Works",
    location: "Pittsburgh, USA",
    category: "Raw Materials",
    rating: 4.5,
    activeContracts: 7,
    status: "Approved",
  },
  {
    id: "SUP-1003",
    name: "Nordic Components AS",
    location: "Oslo, Norway",
    category: "Components",
    rating: 4.7,
    activeContracts: 9,
    status: "Preferred",
  },
  {
    id: "SUP-1004",
    name: "Pacific Logistics Group",
    location: "Singapore",
    category: "Logistics",
    rating: 4.2,
    activeContracts: 5,
    status: "Approved",
  },
  {
    id: "SUP-1005",
    name: "Chemical Solutions GmbH",
    location: "Frankfurt, Germany",
    category: "Chemicals",
    rating: 4.4,
    activeContracts: 4,
    status: "Under Review",
  },
  {
    id: "SUP-1006",
    name: "AutoParts Mexico SA",
    location: "Monterrey, Mexico",
    category: "Automotive",
    rating: 3.9,
    activeContracts: 3,
    status: "Probationary",
  },
];

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Preferred":
      return "bg-green-100 text-green-800";
    case "Approved":
      return "bg-blue-100 text-blue-800";
    case "Under Review":
      return "bg-yellow-100 text-yellow-800";
    case "Probationary":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Suppliers = () => {
  const { toast } = useToast();

  const handleAddSupplier = () => {
    toast({
      title: "Add Supplier",
      description: "Feature to add new supplier will be implemented soon.",
    });
  };

  const handleSupplierClick = (supplierId: string) => {
    toast({
      title: "Supplier Details",
      description: `Viewing details for supplier ${supplierId}`,
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
              <h1 className="text-3xl font-bold tracking-tight">Suppliers</h1>
              <p className="text-muted-foreground">
                Manage your supplier relationships
              </p>
            </div>
            <Button onClick={handleAddSupplier} className="flex items-center gap-2">
              <Plus size={16} />
              Add Supplier
            </Button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search suppliers..."
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
              <CardTitle>Supplier Directory</CardTitle>
              <CardDescription>All approved suppliers and their performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-7 font-medium text-sm bg-muted/50 p-4 border-b">
                  <div>ID</div>
                  <div>Supplier Name</div>
                  <div>Location</div>
                  <div>Category</div>
                  <div>Rating</div>
                  <div>Active Contracts</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {suppliers.map((supplier) => (
                    <div 
                      key={supplier.id} 
                      className="grid grid-cols-7 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => handleSupplierClick(supplier.id)}
                    >
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{supplier.id}</span>
                      </div>
                      <div>{supplier.name}</div>
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3 text-muted-foreground" />
                        {supplier.location}
                      </div>
                      <div>{supplier.category}</div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-amber-500 mr-1" fill="currentColor" />
                        {supplier.rating}
                      </div>
                      <div>{supplier.activeContracts}</div>
                      <div>
                        <Badge className={getStatusBadgeClass(supplier.status)}>
                          {supplier.status}
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

export default Suppliers;
