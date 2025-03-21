
import { ArrowRight, CreditCard, Coins, Briefcase, HomeIcon, Car, Lightbulb } from "lucide-react";
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
      icon: <Briefcase className="w-8 h-8" />,
      title: "Pembiayaan Usaha",
      description: "Dukung perkembangan bisnis Anda dengan pinjaman modal yang fleksibel dan terjangkau."
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
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Investasi Emas",
      description: "Investasi emas batangan dengan harga transparan dan penyimpanan yang aman."
    }
  ];

  return (
    <section id="layanan" className="bg-gradient-to-b from-white to-financial-50 py-24">
      <div className="content-section">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-financial-100 text-financial-800 font-medium text-sm">
              Layanan Kami
            </div>
            <h2 className="mb-4 text-financial-900">Solusi Finansial <span className="text-shine">Untuk Semua Kebutuhan</span></h2>
            <p className="max-w-2xl mx-auto text-financial-600">
              Kami menyediakan berbagai layanan keuangan terpercaya untuk membantu Anda
              memenuhi kebutuhan finansial dengan mudah dan aman.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-financial-100 hover:shadow-md transition-all h-full flex flex-col">
                <div className="mb-5 icon-box bg-financial-50 text-financial-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-financial-800">{service.title}</h3>
                <p className="text-financial-600 mb-4 flex-grow">{service.description}</p>
                <a href="#" className="group inline-flex items-center text-financial-700 font-medium">
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
