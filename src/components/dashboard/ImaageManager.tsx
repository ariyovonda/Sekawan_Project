import React, { useState, useEffect } from "react";
import { Edit, Filter, Plus, Trash2, ShoppingBag, Store, BarChart4, Package } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Tipe data untuk produk
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  link: string;
  marketplace: string;
  category: string;
}

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

// Komponen untuk Mengelola Gambar Produk
const ImageManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [activeMarketplace, setActiveMarketplace] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    price: "",
    image: "",
    link: "",
    marketplace: "shopee",
    category: "lainnya"
  });
  
  // Mendapatkan daftar marketplace unik
  const marketplaces = ["all", ...Array.from(new Set(products.map(p => p.marketplace)))];
  
  // Mendapatkan daftar kategori unik
  const categories = ["all", "kalung", "gelang", "cincin", "anting", "lainnya"];
  
  // Filter produk berdasarkan marketplace dan kategori
  const filteredProducts = products.filter(product => 
    (activeMarketplace === "all" || product.marketplace === activeMarketplace) &&
    (activeCategory === "all" || product.category === activeCategory)
  );
  
  // Kelompokkan produk berdasarkan marketplace
  const groupedByMarketplace = filteredProducts.reduce((groups, product) => {
    const group = groups[product.marketplace] || [];
    group.push(product);
    groups[product.marketplace] = group;
    return groups;
  }, {});
  
  // Handler untuk update gambar
  const handleUpdateImage = () => {
    if (selectedProduct && newImageUrl) {
      setProducts(products.map(product =>
        product.id === selectedProduct.id
          ? { ...product, image: newImageUrl }
          : product
      ));
      setSelectedProduct(null);
      setNewImageUrl("");
    }
  };
  
  // Handler untuk menambah produk baru
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.marketplace) {
      const newId = Date.now().toString();
      const productToAdd = {
        ...newProduct,
        id: newId,
        category: newProduct.category || extractCategory(newProduct.name),
        image: newProduct.image || "https://via.placeholder.com/150/D4AF37/000000?text=GOLD"
      } as Product;
      
      setProducts([...products, productToAdd]);
      
      // Reset form
      setNewProduct({
        name: "",
        price: "",
        image: "",
        link: "",
        marketplace: "shopee",
        category: "lainnya"
      });
    }
  };
  
  // Handler untuk menghapus produk
  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gold">Kelola Produk</h2>
      
      {/* Filter dan Tabs */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-4">
          <Select value={activeMarketplace} onValueChange={setActiveMarketplace}>
            <SelectTrigger className="w-[180px] bg-luxury-100 border-gold/20 text-white">
              <SelectValue placeholder="Pilih Marketplace" />
            </SelectTrigger>
            <SelectContent className="bg-luxury-50 border-gold/20">
              {marketplaces.map(marketplace => (
                <SelectItem key={marketplace} value={marketplace} className="text-white">
                  {marketplace === "all" ? "Semua Marketplace" : marketplace.charAt(0).toUpperCase() + marketplace.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={activeCategory} onValueChange={setActiveCategory}>
            <SelectTrigger className="w-[180px] bg-luxury-100 border-gold/20 text-white">
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent className="bg-luxury-50 border-gold/20">
              {categories.map(category => (
                <SelectItem key={category} value={category} className="text-white">
                  {category === "all" ? "Semua Kategori" : category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Tombol tambah produk */}
        <Dialog>
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
                Isi informasi produk baru yang akan ditambahkan
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="product-name" className="text-white">Nama Produk</Label>
                <Input
                  id="product-name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="bg-luxury-100 border-gold/20 text-white"
                  placeholder="Nama produk"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="product-price" className="text-white">Harga</Label>
                <Input
                  id="product-price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  className="bg-luxury-100 border-gold/20 text-white"
                  placeholder="Rp xxx.xxx"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="product-image" className="text-white">URL Gambar</Label>
                <Input
                  id="product-image"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                  className="bg-luxury-100 border-gold/20 text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="product-link" className="text-white">Link Produk</Label>
                <Input
                  id="product-link"
                  value={newProduct.link}
                  onChange={(e) => setNewProduct({...newProduct, link: e.target.value})}
                  className="bg-luxury-100 border-gold/20 text-white"
                  placeholder="https://example.com/product"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="product-marketplace" className="text-white">Marketplace</Label>
                <Select 
                  value={newProduct.marketplace} 
                  onValueChange={(value) => setNewProduct({...newProduct, marketplace: value})}
                >
                  <SelectTrigger id="product-marketplace" className="bg-luxury-100 border-gold/20 text-white">
                    <SelectValue placeholder="Pilih marketplace" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-50 border-gold/20">
                    <SelectItem value="shopee" className="text-white">Shopee</SelectItem>
                    <SelectItem value="blibli" className="text-white">Blibli</SelectItem>
                    <SelectItem value="tokopedia" className="text-white">Tokopedia</SelectItem>
                    <SelectItem value="lazada" className="text-white">Lazada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="product-category" className="text-white">Kategori</Label>
                <Select 
                  value={newProduct.category} 
                  onValueChange={(value) => setNewProduct({...newProduct, category: value})}
                >
                  <SelectTrigger id="product-category" className="bg-luxury-100 border-gold/20 text-white">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-50 border-gold/20">
                    <SelectItem value="kalung" className="text-white">Kalung</SelectItem>
                    <SelectItem value="gelang" className="text-white">Gelang</SelectItem>
                    <SelectItem value="cincin" className="text-white">Cincin</SelectItem>
                    <SelectItem value="anting" className="text-white">Anting</SelectItem>
                    <SelectItem value="lainnya" className="text-white">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="border-gold/20 text-luxury-700 hover:text-white">Batal</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button onClick={handleAddProduct} className="bg-gold hover:bg-gold-dark text-luxury-200">Tambah</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Tampilan produk dikelompokkan berdasarkan marketplace */}
      <div className="space-y-8">
        {Object.keys(groupedByMarketplace).sort().map(marketplace => (
          <div key={marketplace} className="space-y-4">
            <Accordion type="single" collapsible className="w-full" defaultValue={marketplace}>
              <AccordionItem value={marketplace} className="border-gold/20">
                <AccordionTrigger className="text-xl text-gold bg-luxury-100 px-4 py-2 rounded-lg hover:bg-luxury-200">
                  <div className="flex items-center">
                    {marketplace === "shopee" ? (
                      <ShoppingBag className="mr-2 text-gold h-5 w-5" />
                    ) : marketplace === "blibli" ? (
                      <Store className="mr-2 text-gold h-5 w-5" />
                    ) : marketplace === "tokopedia" ? (
                      <Package className="mr-2 text-gold h-5 w-5" />
                    ) : (
                      <BarChart4 className="mr-2 text-gold h-5 w-5" />
                    )}
                    {marketplace.charAt(0).toUpperCase() + marketplace.slice(1)}
                  </div>
                  <div className="flex-1"></div>
                  <div className="text-sm text-luxury-700 bg-gold/10 px-2 py-1 rounded-full">
                    {groupedByMarketplace[marketplace].length} produk
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
                    {groupedByMarketplace[marketplace].map(product => (
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
                                    <Button onClick={handleUpdateImage} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteProduct(product.id)}
                              className="bg-red-500 hover:bg-red-600 text-white"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                          <div className="absolute top-2 left-2 bg-gold px-2 py-1 rounded text-xs text-luxury-900 font-medium">
                            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                          </div>
                        </div>
                        <CardContent className="pt-4 border-t border-gold/10">
                          <h3 className="font-medium line-clamp-1 text-white">{product.name}</h3>
                          <p className="text-sm text-gold font-semibold">{product.price}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageManager;