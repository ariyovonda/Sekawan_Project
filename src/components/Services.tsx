
import { ArrowRight, CreditCard, Coins, HomeIcon, Car } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const Services = () => {
  const services = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Gadai Barang Berharga",
      description: "Dapatkan pinjaman dengan jaminan perhiasan, emas, atau barang berharga lainnya dengan proses cepat."
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Kredit Mikro",
      description: "Solusi pinjaman untuk usaha kecil dengan bunga rendah dan proses persetujuan yang mudah."
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Kredit Multiguna",
      description: "Pinjaman untuk berbagai kebutuhan dengan jaminan sertifikat properti atau kendaraan."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Gadai Kendaraan",
      description: "Gadai BPKB mobil atau motor dengan nilai taksiran tinggi dan tenor fleksibel."
    }
  ];

  return (
    <section id="layanan" className="bg-gradient-to-b from-luxury to-luxury-200 py-24">
      <div className="content-section">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-luxury-300/50 text-gold font-medium text-sm">
              Layanan Kami
            </div>
            <h2 className="mb-4 text-cream">Solusi Finansial <span className="text-shine">Untuk Semua Kebutuhan</span></h2>
            <p className="max-w-2xl mx-auto text-cream/70">
              Kami menyediakan berbagai layanan keuangan terpercaya untuk membantu Anda
              memenuhi kebutuhan finansial dengan mudah dan aman.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div className="glass-card-dark p-6 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="mb-5 icon-box">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cream">{service.title}</h3>
                <p className="text-cream/70 mb-4 flex-grow">{service.description}</p>
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
