import React from "react";
import { ChevronDown } from "lucide-react";
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

import { Category } from './types';
import { getStoreNameById } from './ProductUtils';

interface CategoryViewProps {
  categories: Category[];
  viewMode: 'grid' | 'list';
  editingCategory: Category | null;
  productsCount: (categoryName: string) => number;
  onCategoryClick: (categoryName: string) => void;
  onEditCategory: (category: Category) => void;
  onUpdateCategory: () => void;
  onDeleteCategory: (category: Category) => void;
  setEditingCategory: (category: Category | null) => void;
}

const CategoryView: React.FC<CategoryViewProps> = ({
  categories,
  viewMode,
  editingCategory,
  productsCount,
  onCategoryClick,
  onEditCategory,
  onUpdateCategory,
  onDeleteCategory,
  setEditingCategory
}) => {
  return (
    <>
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map(category => (
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
                                onChange={(e) => onEditCategory({
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
                                onChange={(e) => onEditCategory({
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
                              <Button onClick={onUpdateCategory} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
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
                                onClick={() => onDeleteCategory(category)}
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
                <p className="text-sm text-luxury-700 mb-4">{category.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gold">
                    {productsCount(category.name)} produk
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs border-gold/20 text-gold hover:bg-gold/10"
                    onClick={() => onCategoryClick(category.name.toLowerCase())}
                  >
                    Lihat Produk
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // Tampilan list untuk kategori
        <div className="space-y-2">
          {categories?.map(category => (
            <div 
              key={category.id} 
              className="flex items-center justify-between bg-luxury-50 border border-gold/20 shadow-sm rounded-md p-4"
            >
              <div className="flex-1">
                <h4 className="font-medium text-gold">{category.name}</h4>
                <p className="text-sm text-luxury-700">{category.description}</p>
                <span className="text-xs text-gold">
                  {productsCount(category.name)} produk
                </span>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gold/20 text-gold hover:bg-gold/10"
                  onClick={() => onCategoryClick(category.name.toLowerCase())}
                >
                  Lihat Produk
                </Button>
                
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
                          onChange={(e) => onEditCategory({
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
                          onChange={(e) => onEditCategory({
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
                        <Button onClick={onUpdateCategory} className="bg-gold hover:bg-gold-dark text-luxury-200">Simpan</Button>
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
                          onClick={() => onDeleteCategory(category)}
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
    </>
  );
};

export default CategoryView;