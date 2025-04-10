
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Plus, Search, Package, Tag } from "lucide-react";

const productStatusMap = {
  active: { label: "Active", class: "bg-green-100 text-green-800" },
  discontinued: { label: "Discontinued", class: "bg-red-100 text-red-800" },
  seasonal: { label: "Seasonal", class: "bg-purple-100 text-purple-800" },
  lowstock: { label: "Low Stock", class: "bg-yellow-100 text-yellow-800" },
};

const products = [
  {
    id: "PRD-3501",
    name: "Premium Steel Bearings",
    sku: "BRG-PS-001",
    category: "Components",
    unitPrice: "$12.50",
    supplier: "Steel Components Inc",
    status: "active",
  },
  {
    id: "PRD-3502",
    name: "High-Torque Electric Motor",
    sku: "MTR-HT-050",
    category: "Machinery",
    unitPrice: "$89.99",
    supplier: "ElectroTech Industries",
    status: "active",
  },
  {
    id: "PRD-3503",
    name: "Industrial Circuit Board A7",
    sku: "PCB-A7-220",
    category: "Electronics",
    unitPrice: "$45.75",
    supplier: "TechParts Global",
    status: "lowstock",
  },
  {
    id: "PRD-3504",
    name: "Winter Grade Hydraulic Fluid",
    sku: "FLD-HYD-W20",
    category: "Chemicals",
    unitPrice: "$32.25",
    supplier: "ChemSolutions Ltd",
    status: "seasonal",
  },
  {
    id: "PRD-3505",
    name: "Legacy Control Unit v2",
    sku: "CTRL-L2-005",
    category: "Controls",
    unitPrice: "$175.00",
    supplier: "OmniControl Systems",
    status: "discontinued",
  },
  {
    id: "PRD-3506",
    name: "Carbon Fiber Sheet 2mm",
    sku: "MAT-CF-2MM",
    category: "Materials",
    unitPrice: "$67.80",
    supplier: "Advanced Materials Co",
    status: "active",
  },
];

const Products = () => {
  const { toast } = useToast();

  const handleAddProduct = () => {
    toast({
      title: "Add Product",
      description: "Feature to add new product will be implemented soon.",
    });
  };

  const handleProductClick = (productId: string) => {
    toast({
      title: "Product Details",
      description: `Viewing details for product ${productId}`,
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
              <h1 className="text-3xl font-bold tracking-tight">Products</h1>
              <p className="text-muted-foreground">
                Manage your product catalog
              </p>
            </div>
            <Button onClick={handleAddProduct} className="flex items-center gap-2">
              <Plus size={16} />
              Add Product
            </Button>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search products..."
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
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>All products in your inventory system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-7 font-medium text-sm bg-muted/50 p-4 border-b">
                  <div>Product ID</div>
                  <div>Name</div>
                  <div>SKU</div>
                  <div>Category</div>
                  <div>Unit Price</div>
                  <div>Supplier</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {products.map((product) => (
                    <div 
                      key={product.id} 
                      className="grid grid-cols-7 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{product.id}</span>
                      </div>
                      <div>{product.name}</div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3 text-muted-foreground" />
                        {product.sku}
                      </div>
                      <div>{product.category}</div>
                      <div>{product.unitPrice}</div>
                      <div>{product.supplier}</div>
                      <div>
                        <Badge className={productStatusMap[product.status].class}>
                          {productStatusMap[product.status].label}
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

export default Products;
