
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesPageRayaGoldTrader = () => {
  // Data produk untuk Shopee
  const shopeeProducts = [
    {
      id: 1,
      name: "Kalung Emas Rantai Minimalis Berat 9.5gr",
      price: "Rp 1.823.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Shopee"
    },
    {
      id: 2,
      name: "Kalung Emas Rantai Kecil Berat 7.8gr",
      price: "Rp 1.495.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Shopee"
    },
    {
      id: 3,
      name: "Kalung Emas Korea Model Y Berat 8.2gr",
      price: "Rp 1.572.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Shopee"
    },
    {
      id: 4,
      name: "Kalung Emas Liontin Bunga Berat 10.3gr",
      price: "Rp 1.977.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Shopee"
    },
    {
      id: 5,
      name: "Kalung Emas Mata Berlian Kecil Berat 8.7gr",
      price: "Rp 1.923.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Shopee"
    },
    {
      id: 6,
      name: "Kalung Emas Bangkok Premium Berat 11.2gr",
      price: "Rp 2.149.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Shopee"
    },
    {
      id: 7,
      name: "Kalung Emas Liontin Love Berat 9.8gr",
      price: "Rp 1.881.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Shopee"
    },
    {
      id: 8,
      name: "Kalung Emas Rantai Panjang Berat 12.3gr",
      price: "Rp 2.361.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Shopee"
    },
  ];

  // Data produk untuk Blibli
  const blibliProducts = [
    {
      id: 1,
      name: "Gelang Emas Rantai Minimalis Berat 5.2gr",
      price: "Rp 997.000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Blibli"
    },
    {
      id: 2,
      name: "Gelang Emas Model Tennis Berat 6.3gr",
      price: "Rp 1.209.000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Blibli"
    },
    {
      id: 3,
      name: "Gelang Emas Ukir Nama Berat 5.8gr",
      price: "Rp 1.113.000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Blibli"
    },
    {
      id: 4,
      name: "Gelang Emas Charm Butterfly Berat 7.1gr",
      price: "Rp 1.362.000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Blibli"
    },
    {
      id: 5,
      name: "Gelang Emas Couple Berat 8.5gr",
      price: "Rp 1.631.000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Blibli"
    },
    {
      id: 6,
      name: "Gelang Emas Berlian Kecil Berat 7.9gr",
      price: "Rp 1.935.000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Blibli"
    },
    {
      id: 7,
      name: "Gelang Emas Anak Motif Kartun Berat 4.5gr",
      price: "Rp 863.000",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Blibli"
    },
  ];

  // Data produk untuk Lazada
  const lazadaProducts = [
    {
      id: 1,
      name: "Cincin Emas Polos Berat 3.8gr",
      price: "Rp 729.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
    {
      id: 2,
      name: "Cincin Emas Berlian Kecil Berat 4.2gr",
      price: "Rp 986.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
    {
      id: 3,
      name: "Cincin Emas Couple Berat 7.5gr (Sepasang)",
      price: "Rp 1.439.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
    {
      id: 4,
      name: "Cincin Emas Ukir Bunga Berat 3.6gr",
      price: "Rp 691.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
    {
      id: 5,
      name: "Cincin Emas Tali Simpul Berat 4.1gr",
      price: "Rp 787.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
    {
      id: 6,
      name: "Cincin Emas Tunangan Ruby Berat 5.3gr",
      price: "Rp 1.247.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
    {
      id: 7,
      name: "Cincin Emas Retro Vintage Berat 4.7gr",
      price: "Rp 902.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
    {
      id: 8,
      name: "Cincin Emas Safir Biru Berat 4.9gr",
      price: "Rp 1.153.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
    {
      id: 9,
      name: "Cincin Emas Motif Naga Berat 6.1gr",
      price: "Rp 1.170.000",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      marketplace: "Lazada"
    },
  ];

  // Card Produk
  const GoldProductCard = ({ item }) => (
    <div className="bg-luxury-50 rounded-lg overflow-hidden min-w-[240px] w-[240px] mx-2 flex-shrink-0 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 hover:translate-y-[-5px]">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80";
          }}
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm text-white mb-2 line-clamp-2 h-10">{item.name}</h3>
        <div className="flex justify-between items-center">
          <Button size="sm" className="bg-gold hover:bg-gold-dark text-luxury-200 text-xs px-3 py-1">
            Buy Now
          </Button>
          <span className="text-gold font-semibold">{item.price}</span>
        </div>
        <div className="flex items-center justify-center mt-3">
          <ShoppingBag className="w-4 h-4 mr-1 text-luxury-700" />
          <span className="text-xs text-luxury-700">{item.marketplace}</span>
        </div>
      </div>
    </div>
  );

  // Component untuk carousel/slider produk
  const ProductCarousel = ({ products }) => {
    const carouselRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(products.length > 4);

    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' });
        
        // Setelah scroll, periksa apakah kita masih bisa scroll ke kanan atau kiri
        setTimeout(() => {
          if (carouselRef.current) {
            setShowLeftArrow(carouselRef.current.scrollLeft > 0);
            setShowRightArrow(
              carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth
            );
          }
        }, 300);
      }
    };

    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        
        // Setelah scroll, periksa apakah kita masih bisa scroll ke kanan atau kiri
        setTimeout(() => {
          if (carouselRef.current) {
            setShowLeftArrow(carouselRef.current.scrollLeft > 0);
            setShowRightArrow(
              carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth
            );
          }
        }, 300);
      }
    };

    // Check scroll positions on mount and on scroll
    const handleScroll = () => {
      if (carouselRef.current) {
        setShowLeftArrow(carouselRef.current.scrollLeft > 0);
        setShowRightArrow(
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth
        );
      }
    };

    return (
      <div className="relative group">
        {/* Container for carousel and navigation buttons */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-luxury-100/80 hover:bg-luxury-100 text-gold p-2 rounded-r-lg shadow-lg transform -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto py-4 px-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            onScroll={handleScroll}
          >
            {products.map((item) => (
              <GoldProductCard key={item.id} item={item} />
            ))}
          </div>
          
          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-luxury-100/80 hover:bg-luxury-100 text-gold p-2 rounded-l-lg shadow-lg transform translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
        
        {/* Dots navigation for mobile (optional) */}
        {products.length > 4 && (
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex gap-1">
              {Array.from({ length: Math.ceil(products.length / 2) }).map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === 0 ? "bg-gold w-4" : "bg-luxury-200"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-luxury">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="content-section">
            <Link to="/" className="flex items-center text-gold mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Kembali ke Layanan</span>
            </Link>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/2">
                <AnimatedSection>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-ful flex items-center justify-center mr-3">
                    <img 
                      src="https://res.cloudinary.com/dqrazyfpm/image/upload/v1742739708/Frame_17_rdshxw.png" 
                      alt="Gold Icon"
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/50/D4AF37/000000?text=GOLD";
                      }}
                    />
                  </div>
                  <h1 className="text-gold text-3xl font-bold">Raya Gold Trader</h1>
                </div>
                  <div className="text-luxury-700 space-y-4">
                    <p>
                      Raya Gold Trader serves the buying and selling of precious jewelry or bullion. The latest innovation raises the development of precious metal trading for anyone who wants to trade gold.
                    </p>
                    <p>
                      Offering high purchase prices is our advantage. Please consult our partners to get more complete purchasing and selling information.
                    </p>
                    <p className="font-semibold text-gold">
                      Raya Gold provides easy access for anyone who wants to trade gold, throughout Indonesia.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="w-full md:w-1/2">
                <AnimatedSection delay={100}>
                  <div className="glass-card p-6 rounded-xl shadow-gold/20 shadow-lg flex items-center justify-center h-[280px] w-[560px]">
                    <img 
                      src="https://res.cloudinary.com/dqrazyfpm/image/upload/v1742739708/Frame_17_rdshxw.png"
                      alt="Raya Gold Trader" 
                      className="max-w-36 max-h-36"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/150/D4AF37/000000?text=GOLD";
                      }}
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="content-section">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">
                  <span className="text-white">Services </span>
                  <span className="text-gold">We Provide</span>
                </h2>
              </div>
            </AnimatedSection>
            
            <Tabs defaultValue="shopee" className="w-full">
              <TabsList className="w-full flex justify-start mb-6 bg-transparent border-b border-luxury-200">
                <TabsTrigger 
                  value="shopee" 
                  className={cn(
                    "data-[state=active]:bg-transparent data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold",
                    "rounded-none bg-transparent text-luxury-700 pb-2"
                  )}
                >
                  Shopee
                </TabsTrigger>
                <TabsTrigger 
                  value="blibli" 
                  className={cn(
                    "data-[state=active]:bg-transparent data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold",
                    "rounded-none bg-transparent text-luxury-700 pb-2"
                  )}
                >
                  Blibli
                </TabsTrigger>
                <TabsTrigger 
                  value="lazada" 
                  className={cn(
                    "data-[state=active]:bg-transparent data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold",
                    "rounded-none bg-transparent text-luxury-700 pb-2"
                  )}
                >
                  Lazada
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="shopee" className="mt-0">
                <ProductCarousel products={shopeeProducts} />
              </TabsContent>
              
              <TabsContent value="blibli" className="mt-0">
                <ProductCarousel products={blibliProducts} />
              </TabsContent>
              
              <TabsContent value="lazada" className="mt-0">
                <ProductCarousel products={lazadaProducts} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16">
          <div className="content-section max-w-4xl">
            <AnimatedSection>
              <div className="glass-card-dark p-10 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-white">Interested In </span>
                  <span className="text-gold">Raya Gold Trader?</span>
                </h2>
                <p className="text-luxury-700 mb-6 max-w-lg mx-auto">
                  Do not hesitate to contact and consult your financial needs.
                  Our team is ready to help you get the best solution.
                </p>
                <Button className="bg-gold hover:bg-gold-dark text-luxury-200">
                  Contact Us
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPageRayaGoldTrader;