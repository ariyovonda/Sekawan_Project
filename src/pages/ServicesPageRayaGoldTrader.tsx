
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft, CreditCard } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesPageRayaGoldTrader = () => {
  const goldChains = [
    {
      id: 1,
      name: "Kalung Emas Rantai Minimalis Berat 9.5gr",
      price: "Rp 1.823.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Kalung Emas Rantai Minimalis Berat 9.5gr",
      price: "Rp 1.823.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Kalung Emas Rantai Minimalis Berat 9.5gr",
      price: "Rp 1.823.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Kalung Emas Rantai Minimalis Berat 9.5gr",
      price: "Rp 1.823.000",
      image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
  ];

  const GoldProductCard = ({ item }: { item: typeof goldChains[0] }) => (
    <div className="bg-luxury-50 rounded-lg overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
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
          <span className="text-xs text-luxury-700">Shopee</span>
        </div>
      </div>
    </div>
  );

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
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-3">
                      <CreditCard className="w-4 h-4 text-luxury-200" />
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
                  <div className="glass-card p-6 rounded-xl shadow-gold/20 shadow-lg flex items-center justify-center h-[300px]">
                    <img 
                      src="/lovable-uploads/a3e03f07-e7a7-436e-92ab-1d98a4832a05.png" 
                      alt="Raya Gold Trader" 
                      className="max-w-40 max-h-40"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {goldChains.map((item) => (
                    <GoldProductCard key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="blibli" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {goldChains.map((item) => (
                    <GoldProductCard key={item.id} item={{...item, name: "Gelang Emas Rantai Minimalis " + item.id}} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="lazada" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {goldChains.map((item) => (
                    <GoldProductCard key={item.id} item={{...item, name: "Cincin Emas Rantai Minimalis " + item.id}} />
                  ))}
                </div>
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
