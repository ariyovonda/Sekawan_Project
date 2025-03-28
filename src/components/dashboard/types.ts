// types.ts - File untuk tipe data yang digunakan di aplikasi

// Tipe data untuk kategori
export interface Category {
    id: string;
    name: string;
    description: string;
    storeId: string; // ID toko terkait
  }
  
  // Tipe data untuk toko
  export interface Store {
    id: string;
    name: string;
    logo?: string;
  }
  
  // Tipe data untuk produk
  export interface Product {
    id: string | number;
    name: string;
    price: string;
    image: string;
    marketplace: string;
    link: string;
    category?: string;
    storeId?: string;
  }