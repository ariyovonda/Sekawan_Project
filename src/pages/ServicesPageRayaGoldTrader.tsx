
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CreditCard, Shield, BarChart, TrendingUp, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ServicesPageRayaGoldTrader = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-luxury to-luxury-50 pt-32 pb-16">
          <div className="content-section">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="w-full md:w-1/2">
                <AnimatedSection>
                  <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-luxury-100 text-gold font-medium text-sm">
                    Raya Gold Trader
                  </div>
                  <h1 className="mb-6">
                    Investasi Emas <span className="text-shine">Yang Aman dan Transparan</span>
                  </h1>
                  <p className="text-luxury-700 mb-8 text-lg">
                    Raya Gold Trader menawarkan investasi emas dengan harga transparan, penyimpanan aman, dan 
                    likuiditas tinggi untuk masa depan finansial yang lebih cerah.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-gold hover:bg-gold-dark text-luxury-200 button-shine">
                      Mulai Berinvestasi
                    </Button>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                      Konsultasi Gratis
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
              <div className="w-full md:w-1/2">
                <AnimatedSection delay={100}>
                  <div className="glass-card p-6 rounded-xl shadow-gold/20 shadow-lg">
                    <img 
                      src="/gold-investment.jpg" 
                      alt="Raya Gold Trader" 
                      className="w-full h-auto rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1610375461369-d613b613daab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-luxury-50">
          <div className="content-section">
            <AnimatedSection>
              <div className="text-center mb-14">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-luxury-100 text-gold font-medium text-sm">
                  Keunggulan Kami
                </div>
                <h2 className="mb-4">Mengapa Memilih <span className="text-shine">Raya Gold Trader</span></h2>
                <p className="max-w-2xl mx-auto text-luxury-700">
                  Investasi emas batangan dengan Raya Gold Trader menawarkan berbagai keuntungan yang membuat masa depan finansial Anda lebih aman.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection delay={100}>
                <div className="glass-card-dark p-6 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="mb-5 icon-box">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Emas Bersertifikat Resmi</h3>
                  <p className="text-luxury-700">
                    Semua emas yang kami sediakan memiliki sertifikat keaslian dari lembaga terpercaya dengan kadar kemurnian 99.99%.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="glass-card-dark p-6 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="mb-5 icon-box">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Harga Transparan</h3>
                  <p className="text-luxury-700">
                    Kami menawarkan harga yang kompetitif dan transparan sesuai dengan pergerakan pasar global tanpa biaya tersembunyi.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="glass-card-dark p-6 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="mb-5 icon-box">
                    <BarChart className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Likuiditas Tinggi</h3>
                  <p className="text-luxury-700">
                    Jual kembali emas Anda kapan saja dengan proses yang mudah dan cepat tanpa pemotongan nilai yang signifikan.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="glass-card-dark p-6 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="mb-5 icon-box">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Penyimpanan Aman</h3>
                  <p className="text-luxury-700">
                    Nikmati layanan penyimpanan emas dengan sistem keamanan berstandar internasional dan asuransi penuh.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-luxury">
          <div className="content-section">
            <AnimatedSection>
              <div className="text-center mb-14">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-luxury-100 text-gold font-medium text-sm">
                  Proses Investasi
                </div>
                <h2 className="mb-4 text-white">Cara <span className="text-shine">Berinvestasi Emas</span> Dengan Kami</h2>
                <p className="max-w-2xl mx-auto text-luxury-700">
                  Proses berinvestasi emas dengan Raya Gold Trader sangat mudah dan dapat dilakukan dalam beberapa langkah sederhana.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection delay={100}>
                <div className="glass-card-dark p-6 border-gold/20 hover:border-gold/40 transition-all h-full relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold text-luxury-200 flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="text-xl font-semibold mb-3 text-white mt-4">Pilih Produk Emas</h3>
                  <p className="text-luxury-700">
                    Pilih jenis dan berat emas batangan yang ingin Anda investasikan sesuai dengan budget dan tujuan investasi Anda.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="glass-card-dark p-6 border-gold/20 hover:border-gold/40 transition-all h-full relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold text-luxury-200 flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="text-xl font-semibold mb-3 text-white mt-4">Lakukan Pembayaran</h3>
                  <p className="text-luxury-700">
                    Selesaikan pembayaran melalui berbagai metode yang tersedia dengan sistem keamanan transaksi yang terjamin.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="glass-card-dark p-6 border-gold/20 hover:border-gold/40 transition-all h-full relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold text-luxury-200 flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="text-xl font-semibold mb-3 text-white mt-4">Kelola Investasi Anda</h3>
                  <p className="text-luxury-700">
                    Pantau perkembangan investasi emas Anda secara real-time melalui aplikasi atau website kami yang user-friendly.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="flex justify-center mt-10">
              <AnimatedSection delay={400}>
                <Button className="bg-gold hover:bg-gold-dark text-luxury-200 button-shine">
                  Mulai Investasi Sekarang
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPageRayaGoldTrader;
