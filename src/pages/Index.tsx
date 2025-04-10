
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import InventoryOverview from "@/components/dashboard/InventoryOverview";
import SupplyChainMap from "@/components/dashboard/SupplyChainMap";
import RecentOrders from "@/components/dashboard/RecentOrders";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import { useToast } from "@/components/ui/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { toast } = useToast();
  const [actionDialog, setActionDialog] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
  }>({
    isOpen: false,
    title: "",
    description: ""
  });
  
  const handleQuickAction = (action: string) => {
    let dialogContent = {
      title: action,
      description: ""
    };
    
    switch(action) {
      case "Create Purchase Order":
        dialogContent.description = "Create a new purchase order for inventory replenishment with automated vendor selection.";
        break;
      case "Inventory Audit":
        dialogContent.description = "Begin a comprehensive inventory audit across all warehouses and distribution centers.";
        break;
      case "Generate Reports":
        dialogContent.description = "Create customized inventory, logistics, and financial performance reports.";
        break;
      case "Process Returns":
        dialogContent.description = "Manage and process customer returns with automated quality assessment.";
        break;
    }
    
    setActionDialog({
      isOpen: true,
      title: dialogContent.title,
      description: dialogContent.description
    });
    
    toast({
      title: "Action Initiated",
      description: `You selected: ${action}`,
    });
  };

  const handleCompleteAction = () => {
    toast({
      title: "Action Completed",
      description: `${actionDialog.title} was completed successfully`,
    });
    setActionDialog({ ...actionDialog, isOpen: false });
  };

  return (
    <div className="grid min-h-screen grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Your supply chain performance at a glance
              </p>
            </div>
            
            <div className="dashboard-grid gap-6">
              <DashboardMetrics />
              <InventoryOverview />
              <SupplyChainMap />
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <RecentOrders />
                <div className="space-y-6">
                  <div className="rounded-lg border bg-card p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                    <div className="grid gap-2">
                      <button 
                        className="w-full text-left px-4 py-2 border rounded-lg hover:bg-muted/50 transition-colors flex items-center gap-2"
                        onClick={() => handleQuickAction("Create Purchase Order")}
                      >
                        <span className="bg-primary/10 p-1 rounded">📋</span>
                        Create Purchase Order
                      </button>
                      <button 
                        className="w-full text-left px-4 py-2 border rounded-lg hover:bg-muted/50 transition-colors flex items-center gap-2"
                        onClick={() => handleQuickAction("Inventory Audit")}
                      >
                        <span className="bg-primary/10 p-1 rounded">🔍</span>
                        Inventory Audit
                      </button>
                      <button 
                        className="w-full text-left px-4 py-2 border rounded-lg hover:bg-muted/50 transition-colors flex items-center gap-2"
                        onClick={() => handleQuickAction("Generate Reports")}
                      >
                        <span className="bg-primary/10 p-1 rounded">📊</span>
                        Generate Reports
                      </button>
                      <button 
                        className="w-full text-left px-4 py-2 border rounded-lg hover:bg-muted/50 transition-colors flex items-center gap-2"
                        onClick={() => handleQuickAction("Process Returns")}
                      >
                        <span className="bg-primary/10 p-1 rounded">🛒</span>
                        Process Returns
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <PerformanceChart />
            </div>
          </div>
        </main>
      </div>

      <Dialog open={actionDialog.isOpen} onOpenChange={(open) => setActionDialog({...actionDialog, isOpen: open})}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{actionDialog.title}</DialogTitle>
            <DialogDescription>{actionDialog.description}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>Would you like to proceed with this action?</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActionDialog({...actionDialog, isOpen: false})}>
              Cancel
            </Button>
            <Button onClick={handleCompleteAction}>
              Complete Action
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
