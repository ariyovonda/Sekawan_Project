import React, { useState } from "react";
import { Plus, ChevronDown, ChevronRight, Store, Filter } from "lucide-react";
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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

// Import data produk
import { shopeeProducts, blibliProducts, lazadaProducts } from '../../components/Product';

// Tipe data untuk kategori
interface Category {
  id: string;
  name: string;
  description: string;
  storeId: string; // ID toko terkait
}

// Tipe data untuk toko
interface Store {
  id: string;
  name: string;
  logo?: string;
}

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
  storeId: "shopee" // ID toko untuk produk Shopee
}));

const transformedBlibliProducts = blibliProducts.map(product => ({
  ...product,
  id: product.id.toString(),
  category: extractCategory(product.name),
  storeId: "blibli" // ID toko untuk produk Blibli
}));

const transformedLazadaProducts = lazadaProducts.map(product => ({
  ...product,
  id: product.id.toString(),
  category: extractCategory(product.name),
  storeId: "lazada" // ID toko untuk produk Lazada
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

// Membuat kategori berdasarkan toko
const generateCategoriesByStore = () => {
  const categoriesByStore = {};
  
  stores.forEach(store => {
    // Filter produk berdasarkan toko
    const storeProducts = initialProducts.filter(product => product.storeId === store.id);
    
    // Ambil kategori unik dari produk toko ini
    const uniqueCategories = [...new Set(storeProducts.map(product => product.category))];
    
    // Buat kategori untuk toko ini
    const storeCategories = uniqueCategories.map((category, index) => {
      const descriptions = {
        "kalung": "Berbagai jenis kalung emas",
        "gelang": "Berbagai jenis gelang emas",
        "cincin": "Berbagai jenis cincin emas",
        "anting": "Berbagai jenis anting emas",
        "lainnya": "Produk perhiasan emas lainnya"
      };
      
      return {
        id: `${store.id}-${index + 1}`,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        description: descriptions[category] || "Berbagai jenis perhiasan emas",
        storeId: store.id
      };
    });
    
    categoriesByStore[store.id] = storeCategories;
  });
  
  return categoriesByStore;
};

// Komponen untuk Mengelola Kategori
const CategoryManager: React.FC = () => {
  const [categoriesByStore, setCategoriesByStore] = useState<Record<string, Category[]>>(generateCategoriesByStore());
  const [activeStore, setActiveStore] = useState<string>(stores[0].id);
  const [newCategory, setNewCategory] = useState<Partial<Category>>({ name: "", description: "", storeId: activeStore });
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
        [newCategory.storeId]: [...categoriesByStore[newCategory.storeId], category]
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
  };

  const getStoreNameById = (storeId: string) => {
    const store = stores.find(s => s.id === storeId);
    return store ? store.name : storeId;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gold">Kategori Produk</h2>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2 bg-luxury-50 border border-gold/20 rounded-md p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                "p-1 rounded",
                viewMode === 'grid' ? "bg-gold/20 text-gold" : "text-luxury-700 hover:text-gold"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                "p-1 rounded",
                viewMode === 'list' ? "bg-gold/20 text-gold" : "text-luxury-700 hover:text-gold"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
            </button>
          </div>
          
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
        </div>
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
              <Store size={16} />
              <span>{store.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {stores.map(store => (
          <TabsContent key={store.id} value={store.id} className="mt-0">
            {/* Label untuk toko yang dipilih */}
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gold/10">
              <div className="flex items-center">
                <Store size={18} className="text-gold mr-2" />
                <h3 className="text-lg font-medium text-gold">{store.name}</h3>
              </div>
              <div className="text-sm text-luxury-700">
                {categoriesByStore[store.id]?.length || 0} Kategori
              </div>
            </div>

            {/* Tampilan grid untuk kategori */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoriesByStore[store.id]?.map(category => (
                  <Card key={category.id} className="bg-luxury-50 border-gold/20 shadow-lg overflow-hidden">
                    <CardHeader className="pb-2 border-b border-gold/10">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-gold">{category.name}</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gold hover:text-white hover:bg-luxury-100/50">
                              <span className="sr-only">Open menu</span>
                              <ChevronDown size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-luxury-50 border-gold/20">
                            <DropdownMenuLabel className="text-luxury-700">Aksi</DropdownMenuLabel>
                            <Dialog>
                              <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-white hover:bg-luxury-100/50 hover:text-gold">
                                  Edit
                                </DropdownMenuItem>
                              </DialogTrigger>
                              <DialogContent className="bg-luxury-50 border-gold/20">
                                <DialogHeader>
                                  <DialogTitle className="text-gold">Edit Kategori</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-name" className="text-white">Nama Kategori</Label>
                                    <Input
                                      id="edit-name"
                                      value={editingCategory?.name || category.name}
                                      onChange={(e) => setEditingCategory({
                                        ...category,
                                        name: e.target.value
                                      })}
                                      onClick={() => !editingCategory && setEditingCategory(category)}
                                      className="bg-luxury-100 border-gold/20 text-white"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="edit-description" className="text-white">Deskripsi</Label>
                                    <Textarea
                                      id="edit-description"
                                      value={editingCategory?.description || category.description}
                                      onChange={(e) => setEditingCategory({
                                        ...category,
                                        description: e.target.value
                                      })}
                                      onClick={() => !editingCategory && setEditingCategory(category)}
                                      className="bg-luxury-100 border-gold/20 text-white"
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    <Button
                                      variant="outline"
                                      onClick={() => setEditingCategory(null)}
                                      className="border-gold/20 text-luxury-700 hover:text-white"
                                    >
                                      Batal
                                    </Button>
                                  </DialogClose>
                                  <DialogClose asChild>
                                    <Button onClick={handleUpdateCategory} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Dialog>
                              <DialogTrigger asChild>
                                <DropdownMenuItem
                                  className="text-red-400 focus:text-red-400 hover:bg-luxury-100/50"
                                  onSelect={(e) => e.preventDefault()}
                                >
                                  Hapus
                                </DropdownMenuItem>
                              </DialogTrigger>
                              <DialogContent className="bg-luxury-50 border-gold/20">
                                <DialogHeader>
                                  <DialogTitle className="text-gold">Hapus Kategori</DialogTitle>
                                  <DialogDescription className="text-luxury-700">
                                    Apakah Anda yakin ingin menghapus kategori "{category.name}" dari {getStoreNameById(category.storeId)}? Tindakan ini tidak dapat dibatalkan.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    <Button variant="outline" className="border-gold/20 text-luxury-700 hover:text-white">Batal</Button>
                                  </DialogClose>
                                  <DialogClose asChild>
                                    <Button
                                      variant="destructive"
                                      onClick={() => handleDeleteCategory(category)}
                                      className="bg-red-500 hover:bg-red-600 text-white"
                                    >
                                      Hapus
                                    </Button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-luxury-700">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // Tampilan list untuk kategori
              <div className="space-y-2">
                {categoriesByStore[store.id]?.map(category => (
                  <div 
                    key={category.id} 
                    className="flex items-center justify-between bg-luxury-50 border border-gold/20 shadow-sm rounded-md p-4"
                  >
                    <div>
                      <h4 className="font-medium text-gold">{category.name}</h4>
                      <p className="text-sm text-luxury-700">{category.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="border-gold/20 text-luxury-700 hover:text-gold hover:border-gold">
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-luxury-50 border-gold/20">
                          <DialogHeader>
                            <DialogTitle className="text-gold">Edit Kategori</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor={`edit-name-${category.id}`} className="text-white">Nama Kategori</Label>
                              <Input
                                id={`edit-name-${category.id}`}
                                value={editingCategory?.name || category.name}
                                onChange={(e) => setEditingCategory({
                                  ...category,
                                  name: e.target.value
                                })}
                                onClick={() => !editingCategory && setEditingCategory(category)}
                                className="bg-luxury-100 border-gold/20 text-white"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`edit-description-${category.id}`} className="text-white">Deskripsi</Label>
                              <Textarea
                                id={`edit-description-${category.id}`}
                                value={editingCategory?.description || category.description}
                                onChange={(e) => setEditingCategory({
                                  ...category,
                                  description: e.target.value
                                })}
                                onClick={() => !editingCategory && setEditingCategory(category)}
                                className="bg-luxury-100 border-gold/20 text-white"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button
                                variant="outline"
                                onClick={() => setEditingCategory(null)}
                                className="border-gold/20 text-luxury-700 hover:text-white"
                              >
                                Batal
                              </Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button onClick={handleUpdateCategory} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="border-red-400/30 text-red-400 hover:text-red-500 hover:border-red-500/30">
                            Hapus
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-luxury-50 border-gold/20">
                          <DialogHeader>
                            <DialogTitle className="text-gold">Hapus Kategori</DialogTitle>
                            <DialogDescription className="text-luxury-700">
                              Apakah Anda yakin ingin menghapus kategori "{category.name}" dari {getStoreNameById(category.storeId)}? Tindakan ini tidak dapat dibatalkan.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline" className="border-gold/20 text-luxury-700 hover:text-white">Batal</Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button
                                variant="destructive"
                                onClick={() => handleDeleteCategory(category)}
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
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryManager;