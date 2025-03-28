import React, { useState } from "react";
import { Edit, Plus, Store, Filter, ExternalLink, Search, X } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

// Tipe data untuk produk
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  link: string;
  marketplace: string;
  category: string;
  storeId: string;
}

// Tipe data untuk toko
interface Store {
  id: string;
  name: string;
  logo?: string;
}

// Import data produk
import { shopeeProducts, blibliProducts, lazadaProducts } from '../../components/Product';

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

// Transformasi data produk
const transformedShopeeProducts = shopeeProducts.map(product => ({
  ...product,
  id: product.id.toString(),
  category: extractCategory(product.name),
  storeId: "shopee"
}));

const transformedBlibliProducts = blibliProducts.map(product => ({
  ...product,
  id: product.id.toString(),
  category: extractCategory(product.name),
  storeId: "blibli"
}));

const transformedLazadaProducts = lazadaProducts.map(product => ({
  ...product,
  id: product.id.toString(),
  category: extractCategory(product.name),
  storeId: "lazada"
}));

// Gabungkan semua produk
const initialProducts = [
  ...transformedShopeeProducts,
  ...transformedBlibliProducts,
  ...transformedLazadaProducts
];

// Data toko
const stores: Store[] = [
  { id: "shopee", name: "Shopee", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Shopee_Logo.svg/1200px-Shopee_Logo.svg.png" },
  { id: "blibli", name: "Blibli", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_blibli.png" },
  { id: "lazada", name: "Lazada", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lazada.svg/1200px-Lazada.svg.png" }
];

// Komponen untuk Mengelola Link Produk
const LinkManager: React.FC = () => {
  const [productsByStore, setProductsByStore] = useState<Record<string, Product[]>>(
    stores.reduce((acc, store) => {
      acc[store.id] = initialProducts.filter(product => product.storeId === store.id);
      return acc;
    }, {})
  );
  
  const [activeStore, setActiveStore] = useState<string>(stores[0].id);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newLink, setNewLink] = useState("");
  const [newMarketplace, setNewMarketplace] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    price: "",
    image: "",
    link: "",
    category: "",
    storeId: activeStore,
    marketplace: stores.find(s => s.id === activeStore)?.name || ""
  });

  // Dapatkan kategori unik untuk filter
  const getUniqueCategories = (storeId: string) => {
    const categories = new Set(productsByStore[storeId]?.map(p => p.category) || []);
    return Array.from(categories).map(cat => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1)
    }));
  };

  // Filter produk berdasarkan pencarian dan kategori
  const getFilteredProducts = (storeId: string) => {
    return (productsByStore[storeId] || []).filter(product => {
      const matchesSearch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter === null || 
        product.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
  };

  const handleUpdateLink = () => {
    if (selectedProduct) {
      const updatedProducts = productsByStore[selectedProduct.storeId].map(product =>
        product.id === selectedProduct.id
          ? {
              ...product,
              link: newLink,
              marketplace: newMarketplace || product.marketplace
            }
          : product
      );
      
      setProductsByStore({
        ...productsByStore,
        [selectedProduct.storeId]: updatedProducts
      });
      
      setSelectedProduct(null);
      setNewLink("");
      setNewMarketplace("");
    }
  };

  const handleDeleteProduct = (product: Product) => {
    const updatedProducts = productsByStore[product.storeId].filter(p => p.id !== product.id);
    
    setProductsByStore({
      ...productsByStore,
      [product.storeId]: updatedProducts
    });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.storeId) {
      const product: Product = {
        id: `${newProduct.storeId}-${Date.now()}`,
        name: newProduct.name,
        price: newProduct.price || "0",
        image: newProduct.image || "https://via.placeholder.com/150/D4AF37/000000?text=GOLD",
        link: newProduct.link || "",
        marketplace: stores.find(s => s.id === newProduct.storeId)?.name || "",
        category: newProduct.category || "lainnya",
        storeId: newProduct.storeId
      };
      
      setProductsByStore({
        ...productsByStore,
        [newProduct.storeId]: [...productsByStore[newProduct.storeId], product]
      });
      
      // Reset form
      setNewProduct({
        name: "",
        price: "",
        image: "",
        link: "",
        category: "",
        storeId: activeStore,
        marketplace: stores.find(s => s.id === activeStore)?.name || ""
      });
      
      setAddProductOpen(false);
    }
  };

  const handleStoreChange = (storeId: string) => {
    setActiveStore(storeId);
    setCategoryFilter(null);
    setSearchQuery("");
    setNewProduct({
      ...newProduct,
      storeId: storeId,
      marketplace: stores.find(s => s.id === storeId)?.name || ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gold">Edit Link Produk</h2>
        <div className="flex space-x-3">
          <Dialog open={addProductOpen} onOpenChange={setAddProductOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gold hover:bg-gold-dark text-luxury-200">
                <Plus size={16} className="mr-2" />
                Tambah Produk
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-luxury-50 border-gold/20">
              <DialogHeader>
                <DialogTitle className="text-gold">Tambah Produk Baru</DialogTitle>
                <DialogDescription className="text-luxury-700">
                  Masukkan detail produk baru di bawah ini.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="store" className="text-white">Marketplace</Label>
                  <select
                    id="store"
                    className="w-full px-3 py-2 border border-gold/20 rounded-md bg-luxury-100 text-white"
                    value={newProduct.storeId}
                    onChange={(e) => setNewProduct({
                      ...newProduct, 
                      storeId: e.target.value,
                      marketplace: stores.find(s => s.id === e.target.value)?.name || ""
                    })}
                  >
                    {stores.map(store => (
                      <option key={store.id} value={store.id}>{store.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-name" className="text-white">Nama Produk</Label>
                  <Input
                    id="product-name"
                    placeholder="Masukkan nama produk"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-price" className="text-white">Harga</Label>
                  <Input
                    id="product-price"
                    placeholder="Rp 1.000.000"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-category" className="text-white">Kategori</Label>
                  <select
                    id="product-category"
                    className="w-full px-3 py-2 border border-gold/20 rounded-md bg-luxury-100 text-white"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="kalung">Kalung</option>
                    <option value="gelang">Gelang</option>
                    <option value="cincin">Cincin</option>
                    <option value="anting">Anting</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-image" className="text-white">URL Gambar</Label>
                  <Input
                    id="product-image"
                    placeholder="https://example.com/image.jpg"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-link" className="text-white">URL Produk</Label>
                  <Input
                    id="product-link"
                    placeholder="https://marketplace.com/product/123"
                    value={newProduct.link}
                    onChange={(e) => setNewProduct({...newProduct, link: e.target.value})}
                    className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setAddProductOpen(false)}
                  className="border-gold/20 text-luxury-700 hover:text-white"
                >
                  Batal
                </Button>
                <Button 
                  onClick={handleAddProduct} 
                  className="bg-gold hover:bg-gold-dark text-luxury-200"
                >
                  Simpan
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Tabs untuk produk berdasarkan toko */}
      <Tabs defaultValue={stores[0].id} onValueChange={handleStoreChange} className="w-full">
        <TabsList className="grid grid-cols-3 bg-luxury-50 border border-gold/20 mb-6">
          {stores.map(store => (
            <TabsTrigger 
              key={store.id} 
              value={store.id}
              className="flex items-center space-x-2 data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
            >
              <Store size={16} />
              <span>{store.name}</span>
              <Badge 
                variant="outline" 
                className="ml-2 bg-luxury-100/50 text-luxury-300 border-gold/10"
              >
                {productsByStore[store.id]?.length || 0}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {stores.map(store => (
          <TabsContent key={store.id} value={store.id} className="mt-0">
            {/* Filter dan Pencarian */}
            <div className="mb-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-luxury-700 h-4 w-4" />
                <Input
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 bg-luxury-50 border-gold/20 text-white placeholder:text-luxury-700"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-luxury-700 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <div className="flex-shrink-0 md:w-56">
                <select
                  value={categoryFilter || ""}
                  onChange={e => setCategoryFilter(e.target.value || null)}
                  className="w-full px-3 py-2 border border-gold/20 rounded-md bg-luxury-50 text-white"
                >
                  <option value="">Semua Kategori</option>
                  {getUniqueCategories(store.id).map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Daftar Produk */}
            <div className="space-y-6">
              {getFilteredProducts(store.id).length === 0 ? (
                <div className="bg-luxury-50 border border-gold/20 rounded-md p-8 text-center">
                  <p className="text-luxury-700">Tidak ada produk yang ditemukan</p>
                  <Button 
                    onClick={() => {
                      setSearchQuery("");
                      setCategoryFilter(null);
                    }}
                    variant="outline"
                    className="mt-4 border-gold/20 text-gold hover:bg-gold/10"
                  >
                    Reset Filter
                  </Button>
                </div>
              ) : (
                getFilteredProducts(store.id).map(product => (
                  <Card key={product.id} className="bg-luxury-50 border-gold/20 shadow-lg overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded bg-luxury-100 overflow-hidden flex-shrink-0">
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
                            <h3 className="font-medium text-white">{product.name}</h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <p className="text-sm text-luxury-700">{product.price}</p>
                              <span className="text-luxury-700">•</span>
                              <Badge 
                                variant="outline" 
                                className="bg-luxury-100/20 text-gold border-gold/20 text-xs capitalize"
                              >
                                {product.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                       
                        <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                          <div className="mb-3">
                            <div className="text-sm font-medium mb-1 text-white">Link Produk:</div>
                            <div className="flex items-center">
                              {product.link ? (
                                <a
                                  href={product.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-gold hover:underline flex items-center"
                                >
                                  <span className="line-clamp-1 max-w-xs">{product.link}</span>
                                  <ExternalLink size={14} className="ml-1 flex-shrink-0" />
                                </a>
                              ) : (
                                <span className="text-sm text-luxury-700 italic">Belum ada link</span>
                              )}
                            </div>
                          </div>
                         
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  className="bg-gold hover:bg-gold-dark text-luxury-200"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedProduct(product);
                                    setNewLink(product.link);
                                    setNewMarketplace(product.marketplace);
                                  }}
                                >
                                  <Edit size={16} className="mr-2" />
                                  Edit Link
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-luxury-50 border-gold/20">
                                <DialogHeader>
                                  <DialogTitle className="text-gold">Update Link Produk</DialogTitle>
                                  <DialogDescription className="text-luxury-700">
                                    Update link marketplace untuk "{product.name}"
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="link-url" className="text-white">URL Produk</Label>
                                    <Input
                                      id="link-url"
                                      placeholder="https://marketplace.com/product/123"
                                      value={newLink}
                                      onChange={(e) => setNewLink(e.target.value)}
                                      className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    <Button variant="outline" className="border-gold/20 text-luxury-700 hover:text-white">Batal</Button>
                                  </DialogClose>
                                  <DialogClose asChild>
                                    <Button onClick={handleUpdateLink} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-red-400/30 text-red-400 hover:text-red-500 hover:border-red-500/30"
                                >
                                  Hapus
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-luxury-50 border-gold/20">
                                <DialogHeader>
                                  <DialogTitle className="text-gold">Hapus Produk</DialogTitle>
                                  <DialogDescription className="text-luxury-700">
                                    Apakah Anda yakin ingin menghapus produk "{product.name}"? Tindakan ini tidak dapat dibatalkan.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    <Button variant="outline" className="border-gold/20 text-luxury-700 hover:text-white">Batal</Button>
                                  </DialogClose>
                                  <DialogClose asChild>
                                    <Button
                                      variant="destructive"
                                      onClick={() => handleDeleteProduct(product)}
                                      className="bg-red-500 hover:bg-red-600 text-white"
                                    >
                                      Hapus
                                    </Button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default LinkManager;