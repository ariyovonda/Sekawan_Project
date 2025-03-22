
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SekawanModal from "./pages/SekawanModal";
import RayaGoldTrader from "./pages/RayaGoldTrader";
import PaylaterMovement from "./pages/PaylaterMovement";
import RayaGadget from "./pages/RayaGadget";
import ServicesPage from "./pages/Services";
import { useState } from "react";

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
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/layanan/sekawan-modal" element={<SekawanModal />} />
            <Route path="/layanan/raya-gold-trader" element={<RayaGoldTrader />} />
            <Route path="/layanan/paylater-movement" element={<PaylaterMovement />} />
            <Route path="/layanan/raya-gadget" element={<RayaGadget />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
