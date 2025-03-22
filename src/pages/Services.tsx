
import { ArrowRight, CreditCard, Coins, HomeIcon, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const ServicesPage = () => {
  const services = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Sekawan Modal",
      description: "Solusi pembiayaan usaha dengan proses cepat dan bunga rendah untuk pengembangan bisnis Anda.",
      benefits: [
        "Pengajuan modal usaha mulai dari Rp5 juta hingga Rp500 juta",
        "Proses persetujuan cepat hanya dalam hitungan jam",
        "Bunga kompetitif mulai dari 0,9% per bulan"
      ],
      path: "/layanan/sekawan-modal"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Raya Gold Trader",
      description: "Investasi emas dengan harga transparan, penyimpanan aman, dan proses transaksi mudah.",
      benefits: [
        "Investasi emas mulai dari 0.5 gram",
        "Harga jual dan beli yang kompetitif dan transparan",
        "Sertifikat keaslian dari lembaga terpercaya"
      ],
      path: "/layanan/raya-gold-trader"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Paylater Movement",
      description: "Kemudahan berbelanja dengan sistem cicilan fleksibel tanpa kartu kredit dan proses instan.",
      benefits: [
        "Limit belanja hingga Rp20 juta sesuai kualifikasi",
        "Proses pengajuan dan persetujuan kurang dari 10 menit",
        "Cicilan dengan bunga rendah mulai 0,75% per bulan"
      ],
      path: "/layanan/paylater-movement"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Raya Gadget",
      description: "Gadai dan cicilan gadget dengan nilai taksiran tinggi dan tenor pembayaran fleksibel.",
      benefits: [
        "Gadai smartphone, laptop, kamera, dan gadget lainnya",
        "Nilai pinjaman hingga 90% dari nilai taksir",
        "Bunga gadai mulai dari 0,8% per bulan"
      ],
      path: "/layanan/raya-gadget"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-luxury to-luxury-200 py-12 md:py-20">
        <div className="content-section">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-luxury-300/50 text-gold font-medium text-sm">
                Layanan Kami
              </div>
              <h1 className="mb-6 text-cream">Solusi Finansial <span className="text-shine">Terpercaya</span></h1>
              <p className="text-cream/70 max-w-2xl mx-auto text-lg">
                Kami menyediakan beragam layanan keuangan yang dirancang untuk memenuhi kebutuhan 
                finansial Anda dengan proses mudah, aman, dan terpercaya.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-luxury-100">
        <div className="content-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="glass-card-dark p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="icon-box">{service.icon}</div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-2 text-cream">{service.title}</h2>
                      <p className="text-cream/70">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 mb-8 flex-grow">
                    <h3 className="text-lg font-medium mb-4 text-gold">Keunggulan</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-gold text-xs">✓</span>
                          </div>
                          <p className="text-cream/80">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={service.path} className="group mt-auto">
                    <div className="bg-luxury-200/80 hover:bg-luxury-300/80 transition-all p-4 rounded-lg flex justify-between items-center">
                      <span className="text-gold font-medium">Pelajari Lebih Lanjut</span>
                      <ArrowRight className="w-5 h-5 text-gold transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-luxury">
        <div className="content-section">
          <AnimatedSection>
            <div className="glass-card-dark p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="mb-6">Butuh <span className="text-shine">Bantuan?</span></h2>
              <p className="text-cream/70 mb-8 max-w-2xl mx-auto">
                Tim kami siap membantu Anda menemukan solusi finansial yang tepat sesuai dengan kebutuhan.
                Konsultasikan kebutuhan Anda dengan spesialis kami.
              </p>
              <Link 
                to="/kontak" 
                className="bg-gold hover:bg-gold-dark text-luxury-100 button-shine px-8 py-3 rounded-md font-medium inline-block"
              >
                Hubungi Kami Sekarang
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
