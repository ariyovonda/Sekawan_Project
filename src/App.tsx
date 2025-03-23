
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";

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
            <Route path="/services/sekawan-modal" element={<ServiceDetail serviceId="sekawan-modal" />} />
            <Route path="/services/raya-gold-trader" element={<ServiceDetail serviceId="raya-gold-trader" />} />
            <Route path="/services/paylater-movement" element={<ServiceDetail serviceId="paylater-movement" />} />
            <Route path="/services/raya-gadget" element={<ServiceDetail serviceId="raya-gadget" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
