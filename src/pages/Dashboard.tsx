import React, { useState } from "react";
import {
  Home,
  Layers,
  Image,
  Link as LinkIcon,
  Menu,
  LogOut
} from "lucide-react";
import { Link as RouterLink, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Import individual dashboard components
import DashboardHome from "../components/dashboard/Dashboardhome";
import CategoryManager from "../components/dashboard/CategoryManager";
import ImageManager from "../components/dashboard/ImaageManager";
import LinkManager from "../components/dashboard/LinkManager";

// Komponen Dashboard
const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-x-hidden bg-luxury">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-luxury-50 shadow-lg transition-all duration-300 flex flex-col border-r border-gold/20",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-gold/20">
          <div className={cn("flex items-center", !isSidebarOpen && "justify-center w-full")}>
            <img
              src="https://res.cloudinary.com/dqrazyfpm/image/upload/v1743086568/logorayagold_igfsvf.png"
              alt="Raya Gold"
              className="w-8 h-8"
            />
            {isSidebarOpen && <span className="ml-2 font-bold text-gold">Raya Gold Admin</span>}
          </div>
          <button
            onClick={toggleSidebar}
            className={cn("text-gold hover:text-gold/80 transition-colors", !isSidebarOpen && "hidden")}
          >
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            <li>
              <RouterLink
                to="/admin/dashboard"
                className={cn(
                  "flex items-center px-4 py-3 rounded-md transition-colors",
                  location.pathname === "/admin/dashboard"
                    ? "bg-gold/10 text-gold font-semibold"
                    : "text-luxury-700 hover:bg-luxury-100/50 hover:text-gold",
                  !isSidebarOpen && "justify-center"
                )}
              >
                <Home size={20} />
                {isSidebarOpen && <span className="ml-3">Dashboard</span>}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/admin/categories"
                className={cn(
                  "flex items-center px-4 py-3 rounded-md transition-colors",
                  location.pathname === "/admin/categories"
                    ? "bg-gold/10 text-gold font-semibold"
                    : "text-luxury-700 hover:bg-luxury-100/50 hover:text-gold",
                  !isSidebarOpen && "justify-center"
                )}
              >
                <Layers size={20} />
                {isSidebarOpen && <span className="ml-3">Kategori Produk</span>}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/admin/images"
                className={cn(
                  "flex items-center px-4 py-3 rounded-md transition-colors",
                  location.pathname === "/admin/images"
                    ? "bg-gold/10 text-gold font-semibold"
                    : "text-luxury-700 hover:bg-luxury-100/50 hover:text-gold",
                  !isSidebarOpen && "justify-center"
                )}
              >
                <Image size={20} />
                {isSidebarOpen && <span className="ml-3">Edit Gambar</span>}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/admin/links"
                className={cn(
                  "flex items-center px-4 py-3 rounded-md transition-colors",
                  location.pathname === "/admin/links"
                    ? "bg-gold/10 text-gold font-semibold"
                    : "text-luxury-700 hover:bg-luxury-100/50 hover:text-gold",
                  !isSidebarOpen && "justify-center"
                )}
              >
                <LinkIcon size={20} />
                {isSidebarOpen && <span className="ml-3">Edit Link</span>}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gold/20">
          <Button
            variant="ghost"
            className={cn(
              "w-full text-luxury-700 hover:text-red-500 hover:bg-luxury-100/50",
              !isSidebarOpen && "justify-center p-2"
            )}
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-luxury-50 shadow-md py-4 px-6 flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className={cn("text-gold hover:text-gold/80 transition-colors", isSidebarOpen && "hidden")}
          >
            <Menu size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gold">
            {location.pathname === "/admin/dashboard" && "Dashboard"}
            {location.pathname === "/admin/categories" && "Kategori Produk"}
            {location.pathname === "/admin/images" && "Edit Gambar Produk"}
            {location.pathname === "/admin/links" && "Edit Link Produk"}
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-luxury-700">Admin</span>
            <div className="w-8 h-8 rounded-full bg-gold text-luxury-200 flex items-center justify-center">
              A
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 md:p-8">
  <Routes>
    <Route path="/dashboard" element={<DashboardHome />} />
    <Route path="/categories" element={<CategoryManager />} />
    <Route path="/images" element={<ImageManager />} />
    <Route path="/links" element={<LinkManager />} />
    <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
  </Routes>
</main>

      </div>
    </div>
  );
};

export default Dashboard;