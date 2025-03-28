import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// Import data produk
import { shopeeProducts, blibliProducts } from '../../components/Product';

// Fungsi untuk mengekstrak kategori dari nama produk
function extractCategory(name) {
  const nameLower = name.toLowerCase();
 
  if (nameLower.includes("kalung") || nameLower.includes("rantai")) {
    return "kalung";
  } else if (nameLower.includes("gelang") || nameLower.includes("gl ")) {
    return "gelang";
  } else if (nameLower.includes("cincin")) {
    return "cincin";
  } else if (nameLower.includes("anting")) {
    return "anting";
  } else {
    return "lainnya";
  }
}

// Transformasi data produk dari Shopee dan Blibli
const transformedShopeeProducts = shopeeProducts.map(product => ({
  ...product,
  id: product.id.toString(),
  category: extractCategory(product.name)
}));

const transformedBlibliProducts = blibliProducts.map(product => ({
  ...product,
  id: product.id.toString(),
  category: extractCategory(product.name)
}));

// Gabungkan semua produk
const initialProducts = [...transformedShopeeProducts, ...transformedBlibliProducts];

// Ekstrak kategori unik dari produk
const uniqueCategories = [...new Set(initialProducts.map(product => product.category))];

// Data awal untuk kategori
const initialCategories = uniqueCategories.map((category, index) => {
  const descriptions = {
    "kalung": "Berbagai jenis kalung emas",
    "gelang": "Berbagai jenis gelang emas",
    "cincin": "Berbagai jenis cincin emas",
    "anting": "Berbagai jenis anting emas",
    "lainnya": "Produk perhiasan emas lainnya"
  };
 
  return {
    id: (index + 1).toString(),
    name: category.charAt(0).toUpperCase() + category.slice(1),
    description: descriptions[category] || "Berbagai jenis perhiasan emas"
  };
});

// Komponen Halaman Dashboard Utama
const DashboardHome: React.FC = () => {
  // Hitung jumlah marketplace unik
  const uniqueMarketplaces = [...new Set(initialProducts.map(product => product.marketplace))];
 
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-luxury-50 border-gold/20 shadow-lg overflow-hidden">
          <CardHeader className="pb-2 border-b border-gold/10">
            <CardTitle className="text-lg text-gold">Total Produk</CardTitle>
            <CardDescription className="text-luxury-700">Semua produk di semua marketplace</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-white">{initialProducts.length}</p>
          </CardContent>
        </Card>
       
        <Card className="bg-luxury-50 border-gold/20 shadow-lg overflow-hidden">
          <CardHeader className="pb-2 border-b border-gold/10">
            <CardTitle className="text-lg text-gold">Kategori</CardTitle>
            <CardDescription className="text-luxury-700">Jumlah kategori produk</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-white">{initialCategories.length}</p>
          </CardContent>
        </Card>
       
        <Card className="bg-luxury-50 border-gold/20 shadow-lg overflow-hidden">
          <CardHeader className="pb-2 border-b border-gold/10">
            <CardTitle className="text-lg text-gold">Marketplace</CardTitle>
            <CardDescription className="text-luxury-700">Jumlah marketplace</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-3xl font-bold text-white">{uniqueMarketplaces.length}</p>
            <p className="text-sm text-luxury-700 mt-2">{uniqueMarketplaces.join(", ")}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-luxury-50 border-gold/20 shadow-lg overflow-hidden">
        <CardHeader className="border-b border-gold/10">
          <CardTitle className="text-gold">Produk Terbaru</CardTitle>
          <CardDescription className="text-luxury-700">Daftar produk yang baru ditambahkan</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-4">
            {initialProducts.slice(0, 5).map(product => (
              <div key={product.id} className="flex items-center border-b border-gold/10 pb-4">
                <div className="w-12 h-12 rounded bg-luxury-100 overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/150/D4AF37/000000?text=GOLD";
                    }}
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-white">{product.name}</p>
                  <p className="text-sm text-luxury-700">{product.marketplace} · {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-gold/10 bg-luxury-100/20">
          <RouterLink to="/admin/images">
            <Button className="bg-gold hover:bg-gold-dark text-luxury-200">
              Lihat Semua Produk
            </Button>
          </RouterLink>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardHome;