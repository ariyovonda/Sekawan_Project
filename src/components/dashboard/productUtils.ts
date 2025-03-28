// productUtils.ts - Fungsi utilitas untuk produk

import { Product, Store } from './types';

// Fungsi untuk mengekstrak kategori dari nama produk
export function extractCategory(name: string): string {
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

// Fungsi untuk mentransformasi data produk
export function transformProducts(products: any[], storeId: string): Product[] {
  return products.map(product => ({
    ...product,
    id: product.id.toString(),
    category: extractCategory(product.name),
    storeId: storeId
  }));
}

// Data toko
export const stores: Store[] = [
  { id: "shopee", name: "Shopee", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Shopee_Logo.svg/1200px-Shopee_Logo.svg.png" },
  { id: "blibli", name: "Blibli", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_blibli.png" },
  { id: "lazada", name: "Lazada", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lazada.svg/1200px-Lazada.svg.png" }
];

// Fungsi helper untuk mendapatkan nama toko berdasarkan ID
export function getStoreNameById(storeId: string): string {
  const store = stores.find(s => s.id === storeId);
  return store ? store.name : storeId;
}

// Membuat deskripsi kategori
export const categoryDescriptions = {
  "kalung": "Berbagai jenis kalung emas",
  "gelang": "Berbagai jenis gelang emas",
  "cincin": "Berbagai jenis cincin emas",
  "anting": "Berbagai jenis anting emas",
  "lainnya": "Produk perhiasan emas lainnya"
};