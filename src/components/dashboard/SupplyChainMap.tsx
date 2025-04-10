
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Package, Anchor, Truck, MapPin } from "lucide-react";

const SupplyChainMap = () => {
  // This would ideally be a real map, but for simplicity we'll create a visual representation
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Supply Chain Status</CardTitle>
            <CardDescription>Global shipment tracking & alerts</CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary">12 Active Routes</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-[300px] w-full bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden">
          {/* World Map would be rendered here with a proper map library */}
          
          {/* For demo purposes, we'll show a simplified supply chain route */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Globe className="h-16 w-16 mx-auto mb-2 text-primary/50" />
              <p>Interactive supply chain map</p>
              <p className="text-sm">Connect to live tracking data</p>
            </div>
          </div>

          {/* Shipping routes and status indicators */}
          <div className="absolute top-[80px] left-[15%] flex items-center gap-1 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-md border">
            <Package className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium">Shanghai Factory</span>
          </div>
          
          <div className="absolute top-[110px] left-[35%] flex items-center gap-1 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-md border">
            <Anchor className="h-4 w-4 text-cyan-500" />
            <span className="text-xs font-medium">In Transit (Ocean)</span>
          </div>
          
          <div className="absolute top-[140px] right-[30%] flex items-center gap-1 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-md border">
            <Truck className="h-4 w-4 text-green-500" />
            <span className="text-xs font-medium">LA Distribution</span>
          </div>

          <div className="absolute bottom-[80px] right-[15%] flex items-center gap-1 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-md border">
            <MapPin className="h-4 w-4 text-red-500" />
            <span className="text-xs font-medium">Regional Centers</span>
          </div>
        </div>

        {/* Status legend */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="text-xs">On Schedule</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="text-xs">Slight Delay</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="text-xs">Delayed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-blue-500"></span>
            <span className="text-xs">In Production</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-purple-500"></span>
            <span className="text-xs">Customs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-gray-500"></span>
            <span className="text-xs">Delivered</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplyChainMap;
