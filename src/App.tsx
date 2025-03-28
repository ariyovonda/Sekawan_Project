import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPageRayaGoldTrader from "./pages/ServicesPageRayaGoldTrader";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ChangePw from "./pages/changepw";


function App() {
  // Create a client inside the component to properly initialize React Query
  const [queryClient] = useState(() => new QueryClient());


  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/raya-gold-trader" element={<ServicesPageRayaGoldTrader />} />
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/changepw" element={<ChangePw />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}


export default App;