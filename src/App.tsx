import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPageRayaGoldTrader from "./pages/ServicesPageRayaGoldTrader";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AuthService from "./services/authService";

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = AuthService.isTokenValid();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(userAgent);

    if (!isMobileDevice) {
      setIsMobile(false); // ❗ langsung render NotFound
    } else {
      setIsMobile(true);
    }
  }, []);

  if (isMobile === null) return <div>Loading...</div>;
  if (isMobile === false) return <NotFound />; // ❗ tangani non-mobile langsung di sini

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/raya-gold-trader" element={<ServicesPageRayaGoldTrader />} />
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}


export default App;