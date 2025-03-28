import React, { useState, useRef } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { shopeeProducts, blibliProducts, lazadaProducts } from "@/components/Product";
import VisitorCounter from "@/components/VisitorCounter";

const ServicesPageRayaGoldTrader = () => {
  // Card Produk
  // Card Produk
const GoldProductCard = ({ item }) => (
  <div className="bg-luxury-50 rounded-lg overflow-hidden min-w-[240px] w-[240px] mx-2 flex-shrink-0 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 hover:translate-y-[-5px]">
    <div className="h-48 w-full overflow-hidden">
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80";
            }}
          />
        </a>
      ) : (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80";
          }}
        />
      )}
    </div>
    <div className="p-3">
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="no-underline">
          <h3 className="text-sm text-white mb-2 line-clamp-2 h-10 hover:text-gold transition-colors">{item.name}</h3>
        </a>
      ) : (
        <h3 className="text-sm text-white mb-2 line-clamp-2 h-10">{item.name}</h3>
      )}
      <div className="flex justify-between items-center">
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button size="sm" className="bg-gold hover:bg-gold-dark text-luxury-200 text-xs px-3 py-1">
              Buy Now
            </Button>
          </a>
        ) : (
          <Button size="sm" className="bg-gray-500 hover:bg-gray-600 text-luxury-200 text-xs px-3 py-1" disabled>
            Coming Soon
          </Button>
        )}
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
                  className={`w-2 h-2 rounded-full transition-all ${i === 0 ? "bg-gold w-4" : "bg-luxury-200"
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
      <VisitorCounter />
      <main>
        <section className="pt-20 md:pt-24 lg:pt-32 pb-8 md:pb-12 lg:pb-16">
          <div className="content-section px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <Link to="/" className="flex items-center text-gold mb-4 md:mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Home</span>
            </Link>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
              {/* Text Content - Full width on mobile, half on larger screens */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <AnimatedSection>
                  <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
                    <div className="mr-3">
                      <img
                        src="https://res.cloudinary.com/dqrazyfpm/image/upload/v1743086568/logorayagold_igfsvf.png"
                        alt="Gold Icon"
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/50/D4AF37/000000?text=GOLD";
                        }}
                      />
                    </div>
                    <h1 className="text-gold text-2xl md:text-3xl font-bold">Raya Gold Trader</h1>
                  </div>
                  <div className="text-luxury-700 space-y-3 md:space-y-4">
                    <p className="text-sm md:text-base">
                      Raya Gold Trader serves the buying and selling of precious jewelry or bullion. The latest innovation raises the development of precious metal trading for anyone who wants to trade gold.
                      Offering high purchase prices is our advantage. Please consult our partners to get more complete purchasing and selling information.
                    </p>
                    <p className="text-sm md:text-base">
                      Raya Gold provides easy access for anyone who wants to trade gold, throughout Indonesia.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Image Card - Full width on mobile, half on larger screens */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
                <AnimatedSection delay={100}>
                  <div className="glass-card-dark md:p-6 rounded-xl shadow-lg flex items-center justify-center h-[200px] sm:h-[240px] md:h-[280px] w-full overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gold/5 filter blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gold/5 filter blur-3xl"></div>
                    <img
                      src="https://res.cloudinary.com/dqrazyfpm/image/upload/v1743086568/logorayagold_igfsvf.png"
                      alt="Raya Gold Trader"
                      className="max-w-24 max-h-24 sm:max-w-28 sm:max-h-28 md:max-w-36 md:max-h-36"
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
                    "rounded-none bg-transparent text-luxury-700 pb-2 text-xl "
                  )}
                >
                  Shopee
                </TabsTrigger>
                <TabsTrigger
                  value="blibli"
                  className={cn(
                    "data-[state=active]:bg-transparent data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold",
                    "rounded-none bg-transparent text-luxury-700 pb-2 text-xl "
                  )}
                >
                  Blibli
                </TabsTrigger>
                {/* <TabsTrigger
                  value="lazada"
                  className={cn(
                    "data-[state=active]:bg-transparent data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold",
                    "rounded-none bg-transparent text-luxury-700 pb-2"
                  )}
                >
                  Lazada
                </TabsTrigger> */}
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
              <div className="glass-card-dark p-10 text-center overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gold/5 filter blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gold/5 filter blur-3xl"></div>
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