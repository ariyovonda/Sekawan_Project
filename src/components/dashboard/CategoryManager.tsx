import React, { useState } from "react";
import { Plus, Grid, List } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

// Import komponen
import ProductManager from "./ProductManager";
import CategoryView from "./CategoryView";

// Import data dan utilitas
import { shopeeProducts, blibliProducts, lazadaProducts } from '../../components/Product';
import { 
  Category, 
  Product, 
  Store 
} from './types';
import { 
  extractCategory, 
  transformProducts, 
  stores, 
  getStoreNameById, 
  categoryDescriptions 
} from './ProductUtils';

// Membuat kategori berdasarkan toko
const generateCategoriesByStore = (products: Product[]) => {
  const categoriesByStore: Record<string, Category[]> = {};
  
  stores.forEach(store => {
    // Filter produk berdasarkan toko
    const storeProducts = products.filter(product => product.storeId === store.id);
    
    // Ambil kategori unik dari produk toko ini
    const uniqueCategories = [...new Set(storeProducts.map(product => product.category))];
    
    // Buat kategori untuk toko ini
    const storeCategories = uniqueCategories.map((category, index) => {
      return {
        id: `${store.id}-${index + 1}`,
        name: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Lainnya',
        description: categoryDescriptions[category || 'lainnya'] || "Berbagai jenis perhiasan emas",
        storeId: store.id
      };
    });
    
    categoriesByStore[store.id] = storeCategories;
  });
  
  return categoriesByStore;
};

// Transform data produk
const transformedShopeeProducts = transformProducts(shopeeProducts, 'shopee');
const transformedBlibliProducts = transformProducts(blibliProducts, 'blibli');
const transformedLazadaProducts = lazadaProducts && lazadaProducts.length > 0 
  ? transformProducts(lazadaProducts, 'lazada')
  : [];

// Gabungkan semua produk
const initialProducts = [
  ...transformedShopeeProducts, 
  ...transformedBlibliProducts,
  ...transformedLazadaProducts
];

// Komponen untuk Mengelola Kategori dan Produk
const CategoryManager: React.FC = () => {
  const [categoriesByStore, setCategoriesByStore] = useState<Record<string, Category[]>>(generateCategoriesByStore(initialProducts));
  const [activeStore, setActiveStore] = useState<string>(stores[0].id);
  const [newCategory, setNewCategory] = useState<Partial<Category>>({ name: "", description: "", storeId: activeStore });
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'categories' | 'products'>('categories');
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Fungsi untuk mendapatkan produk berdasarkan toko dan kategori
  const getProductsByStoreAndCategory = (storeId: string, categoryName: string | null) => {
    return products.filter(product => 
      product.storeId === storeId && 
      (categoryName === null || product.category === categoryName.toLowerCase())
    );
  };

  // Handler untuk filter produk berdasarkan kategori
  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
    setActiveTab('products');
  };

  const handleAddCategory = () => {
    if (newCategory.name && newCategory.storeId) {
      const category: Category = {
        id: `${newCategory.storeId}-${Date.now()}`,
        name: newCategory.name,
        description: newCategory.description || "",
        storeId: newCategory.storeId
      };
      
      setCategoriesByStore({
        ...categoriesByStore,
        [newCategory.storeId as string]: [...(categoriesByStore[newCategory.storeId as string] || []), category]
      });
      
      setNewCategory({ name: "", description: "", storeId: activeStore });
    }
  };

  const handleUpdateCategory = () => {
    if (editingCategory) {
      const updatedCategories = categoriesByStore[editingCategory.storeId].map(cat =>
        cat.id === editingCategory.id ? editingCategory : cat
      );
      
      setCategoriesByStore({
        ...categoriesByStore,
        [editingCategory.storeId]: updatedCategories
      });
      
      setEditingCategory(null);
    }
  };

  const handleDeleteCategory = (category: Category) => {
    const updatedCategories = categoriesByStore[category.storeId].filter(cat => cat.id !== category.id);
    
    setCategoriesByStore({
      ...categoriesByStore,
      [category.storeId]: updatedCategories
    });
  };

  const handleStoreChange = (storeId: string) => {
    setActiveStore(storeId);
    setNewCategory({ ...newCategory, storeId });
    setActiveCategory(null);
  };

  const handleUpdateProduct = (product: Product, newImageUrl: string) => {
    setProducts(products.map(p =>
      p.id === product.id
        ? { ...p, image: newImageUrl }
        : p
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gold">Kategori & Produk</h2>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2 bg-luxury-50 border border-gold/20 rounded-md p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                "p-1 rounded",
                viewMode === 'grid' ? "bg-gold/20 text-gold" : "text-luxury-700 hover:text-gold"
              )}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                "p-1 rounded",
                viewMode === 'list' ? "bg-gold/20 text-gold" : "text-luxury-700 hover:text-gold"
              )}
            >
              <List size={20} />
            </button>
          </div>
          
          {activeTab === 'categories' && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gold hover:bg-gold-dark text-luxury-200">
                  <Plus size={16} className="mr-2" />
                  Tambah Kategori
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-luxury-50 border-gold/20">
                <DialogHeader>
                  <DialogTitle className="text-gold">Tambah Kategori Baru</DialogTitle>
                  <DialogDescription className="text-luxury-700">
                    Masukkan detail kategori baru di bawah ini.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="store" className="text-white">Marketplace</Label>
                    <select
                      id="store"
                      className="w-full px-3 py-2 border border-gold/20 rounded-md bg-luxury-100 text-white"
                      value={newCategory.storeId}
                      onChange={(e) => setNewCategory({...newCategory, storeId: e.target.value})}
                    >
                      {stores.map(store => (
                        <option key={store.id} value={store.id}>{store.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nama Kategori</Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama kategori"
                      value={newCategory.name}
                      onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                      className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">Deskripsi</Label>
                    <Textarea
                      id="description"
                      placeholder="Masukkan deskripsi kategori"
                      value={newCategory.description}
                      onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                      className="bg-luxury-100 border-gold/20 text-white placeholder:text-luxury-700"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="border-gold/20 text-luxury-700 hover:text-white">Batal</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button onClick={handleAddCategory} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {/* Tab untuk memilih antara Kategori dan Produk */}
      <div className="flex space-x-4 border-b border-gold/20 mb-6">
        <button
          onClick={() => setActiveTab('categories')}
          className={cn(
            "px-4 py-2 font-medium",
            activeTab === 'categories' 
              ? "border-b-2 border-gold text-gold" 
              : "text-luxury-700 hover:text-gold"
          )}
        >
          Kategori
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={cn(
            "px-4 py-2 font-medium",
            activeTab === 'products' 
              ? "border-b-2 border-gold text-gold" 
              : "text-luxury-700 hover:text-gold"
          )}
        >
          Produk
        </button>
      </div>

      {/* Tabs untuk kategori berdasarkan toko */}
      <Tabs defaultValue={stores[0].id} onValueChange={handleStoreChange} className="w-full">
        <TabsList className="grid grid-cols-3 bg-luxury-50 border border-gold/20 mb-6">
          {stores.map(store => (
            <TabsTrigger 
              key={store.id} 
              value={store.id}
              className="flex items-center space-x-2 data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
            >
              <img 
                src={store.logo} 
                alt={store.name}
                className="w-4 h-4 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/40/D4AF37/000000?text=S";
                }}
              />
              <span>{store.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {stores.map(store => (
          <TabsContent key={store.id} value={store.id} className="mt-0">
            {/* Label untuk toko yang dipilih */}
            <div className="flex items-center mb-4 pb-2 border-b border-gold/10">
              <img 
                src={store.logo} 
                alt={store.name}
                className="w-6 h-6 object-contain mr-2"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/40/D4AF37/000000?text=S";
                }}
              />
              <h3 className="text-lg font-medium text-gold">{store.name}</h3>
              <div className="text-sm text-luxury-700 ml-4">
                {activeTab === 'categories' 
                  ? `${categoriesByStore[store.id]?.length || 0} Kategori` 
                  : `${getProductsByStoreAndCategory(store.id, activeCategory).length} Produk`
                }
              </div>
            </div>

            {/* Konten untuk tab Kategori */}
            {activeTab === 'categories' && (
              <CategoryView
                categories={categoriesByStore[store.id] || []}
                viewMode={viewMode}
                editingCategory={editingCategory}
                productsCount={(categoryName) => getProductsByStoreAndCategory(store.id, categoryName.toLowerCase()).length}
                onCategoryClick={handleCategoryFilter}
                onEditCategory={setEditingCategory}
                onUpdateCategory={handleUpdateCategory}
                onDeleteCategory={handleDeleteCategory}
                setEditingCategory={setEditingCategory}
              />
            )}

            {/* Konten untuk tab Produk */}
            {activeTab === 'products' && (
              <ProductManager
                products={products}
                categories={categoriesByStore[store.id] || []}
                storeId={store.id}
                viewMode={viewMode}
                onUpdateProduct={handleUpdateProduct}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryManager;