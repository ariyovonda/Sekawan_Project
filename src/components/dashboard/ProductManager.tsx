import React, { useState } from "react";
import { Edit, Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Tipe data untuk kategori
interface Category {
  id: string;
  name: string;
  description: string;
  storeId: string;
}

// Tipe data untuk produk
interface Product {
  id: string | number;
  name: string;
  price: string;
  image: string;
  marketplace: string;
  link: string;
  category?: string;
  storeId?: string;
}

interface ProductManagerProps {
  products: Product[];
  categories: Category[];
  storeId: string;
  viewMode: 'grid' | 'list';
  onUpdateProduct: (product: Product, newImage: string) => void;
}

const ProductManager: React.FC<ProductManagerProps> = ({
  products,
  categories,
  storeId,
  viewMode,
  onUpdateProduct
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newImageUrl, setNewImageUrl] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fungsi untuk memfilter produk berdasarkan kategori dan pencarian
  const getFilteredProducts = () => {
    return products.filter(product => 
      product.storeId === storeId && 
      (activeCategory === null || product.category === activeCategory.toLowerCase()) &&
      (searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  // Handler untuk filter produk berdasarkan kategori
  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
  };

  // Handler untuk filter produk berdasarkan pencarian
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handler untuk update gambar produk
  const handleUpdateProductImage = () => {
    if (selectedProduct && newImageUrl) {
      onUpdateProduct(selectedProduct, newImageUrl);
      setSelectedProduct(null);
      setNewImageUrl("");
    }
  };

  // Mendapatkan produk yang sudah difilter
  const filteredProducts = getFilteredProducts();

  return (
    <div className="space-y-6">
      {/* Filter dan pencarian */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700 w-64 pl-8"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-luxury-700" />
          </div>
          
          <Select 
            value={activeCategory || "all"} 
            onValueChange={(value) => handleCategoryFilter(value === "all" ? null : value)}
          >
            <SelectTrigger className="w-[180px] bg-luxury-100 border-gold/20 text-white">
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent className="bg-luxury-50 border-gold/20">
              <SelectItem value="all" className="text-white">Semua Kategori</SelectItem>
              {categories.map(category => (
                <SelectItem 
                  key={category.id} 
                  value={category.name.toLowerCase()} 
                  className="text-white"
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="text-sm text-luxury-700">
          {filteredProducts.length} Produk
        </div>
      </div>

      {/* Tampilan produk */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="bg-luxury-50 border-gold/20 shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/150/D4AF37/000000?text=GOLD";
                  }}
                />
                <div className="absolute top-2 left-2 bg-gold px-2 py-1 rounded text-xs text-luxury-900 font-medium">
                  {product.category && product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-gold hover:bg-gold-dark text-luxury-200"
                        size="sm"
                        onClick={() => {
                          setSelectedProduct(product);
                          setNewImageUrl(product.image);
                        }}
                      >
                        <Edit size={16} />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-luxury-50 border-gold/20">
                      <DialogHeader>
                        <DialogTitle className="text-gold">Update Gambar Produk</DialogTitle>
                        <DialogDescription className="text-luxury-700">
                          Masukkan URL gambar baru untuk "{product.name}"
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="image-url" className="text-white">URL Gambar</Label>
                          <Input
                            id="image-url"
                            placeholder="https://example.com/image.jpg"
                            value={newImageUrl}
                            onChange={(e) => setNewImageUrl(e.target.value)}
                            className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                          />
                        </div>
                        {newImageUrl && (
                          <div className="mt-4">
                            <p className="text-sm font-medium mb-2 text-white">Preview:</p>
                            <div className="h-40 w-full border border-gold/20 rounded-md overflow-hidden">
                              <img
                                src={newImageUrl}
                                alt="Preview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/150/D4AF37/000000?text=GOLD";
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline" className="border-gold/20 text-luxury-700 hover:text-white">Batal</Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button onClick={handleUpdateProductImage} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  
                  {product.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-luxury-200 border-gold/20 text-gold hover:bg-luxury-300"
                      onClick={() => window.open(product.link, '_blank')}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="pt-4 border-t border-gold/10">
                <h3 className="font-medium line-clamp-2 text-white mb-1">{product.name}</h3>
                <p className="text-sm text-gold font-semibold">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // Tampilan list untuk produk
        <div className="space-y-2">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="flex items-center space-x-4 bg-luxury-50 border border-gold/20 shadow-sm rounded-md p-4"
            >
              <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/150/D4AF37/000000?text=GOLD";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-white truncate">{product.name}</h4>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gold font-semibold mr-3">{product.price}</span>
                  <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded">
                    {product.category && product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gold/20 text-luxury-700 hover:text-gold hover:border-gold"
                      onClick={() => {
                        setSelectedProduct(product);
                        setNewImageUrl(product.image);
                      }}
                    >
                      <Edit size={16} className="mr-1" />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-luxury-50 border-gold/20">
                    <DialogHeader>
                      <DialogTitle className="text-gold">Update Gambar Produk</DialogTitle>
                      <DialogDescription className="text-luxury-700">
                        Masukkan URL gambar baru untuk "{product.name}"
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor={`image-url-${product.id}`} className="text-white">URL Gambar</Label>
                        <Input
                          id={`image-url-${product.id}`}
                          placeholder="https://example.com/image.jpg"
                          value={newImageUrl}
                          onChange={(e) => setNewImageUrl(e.target.value)}
                          className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                        />
                      </div>
                      {newImageUrl && (
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2 text-white">Preview:</p>
                          <div className="h-40 w-full border border-gold/20 rounded-md overflow-hidden">
                            <img
                              src={newImageUrl}
                              alt="Preview"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/150/D4AF37/000000?text=GOLD";
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline" className="border-gold/20 text-luxury-700 hover:text-white">Batal</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button onClick={handleUpdateProductImage} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                {product.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gold/20 text-gold hover:bg-gold/10"
                    onClick={() => window.open(product.link, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Lihat
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductManager;