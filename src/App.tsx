
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Shipments from "./pages/Shipments";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import NotFound from "./pages/NotFound";

// Create stub components for the remaining pages
const Compliance = () => (
  <div className="grid min-h-screen grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Compliance Management</h1>
        <p className="mt-2">This page will contain compliance documentation and regulations tracking.</p>
      </main>
    </div>
  </div>
);

const Analytics = () => (
  <div className="grid min-h-screen grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="mt-2">This page will contain advanced analytics and business intelligence reports.</p>
      </main>
    </div>
  </div>
);

const Locations = () => (
  <div className="grid min-h-screen grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Locations Management</h1>
        <p className="mt-2">This page will contain warehouse and distribution center management.</p>
      </main>
    </div>
  </div>
);

const Settings = () => (
  <div className="grid min-h-screen grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">System Settings</h1>
        <p className="mt-2">This page will contain application configuration and user preferences.</p>
      </main>
    </div>
  </div>
);

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
