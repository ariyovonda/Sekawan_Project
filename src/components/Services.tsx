
import { ArrowRight, CreditCard, Coins, Smartphone, ShoppingBag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const Services = () => {
  const services = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Sekawan Modal",
      description: "Solusi pembiayaan usaha dengan bunga rendah dan proses persetujuan yang mudah untuk pengembangan bisnis Anda."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Raya Gold Trader",
      description: "Investasi emas batangan dengan harga transparan dan penyimpanan yang aman untuk masa depan yang lebih cerah."
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Paylater Movement",
      description: "Nikmati kemudahan berbelanja dengan cicilan ringan dan proses pengajuan yang cepat tanpa kartu kredit."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Raya Gadget",
      description: "Dapatkan gadget impian dengan cicilan terjangkau dan persyaratan mudah untuk mengikuti perkembangan teknologi."
    }
  ];

  return (
    <section id="layanan" className="bg-gradient-to-b from-luxury to-luxury-50 py-24">
      <div className="content-section">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-luxury-100 text-gold font-medium text-sm">
              Layanan Kami
            </div>
            <h2 className="mb-4 text-white">Solusi Finansial <span className="text-shine">Untuk Semua Kebutuhan</span></h2>
            <p className="max-w-2xl mx-auto text-luxury-700">
              Kami menyediakan berbagai layanan keuangan terpercaya untuk membantu Anda
              memenuhi kebutuhan finansial dengan mudah dan aman.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div className="glass-card-dark p-6 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="mb-5 icon-box">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-luxury-700 mb-4 flex-grow">{service.description}</p>
                <a href="#" className="group inline-flex items-center text-gold font-medium">
                  <span className="animated-border">Pelajari Lebih Lanjut</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
