
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const stats = [
    { label: "Tahun Pengalaman", value: "30+" },
    { label: "Cabang di Indonesia", value: "500+" },
    { label: "Nasabah Aktif", value: "2.5 Juta+" },
    { label: "Tingkat Kepuasan", value: "95%" },
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integritas",
      description: "Kami menjalankan bisnis dengan standar etika tinggi dan transparansi dalam setiap layanan.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Inovasi",
      description: "Terus mengembangkan solusi keuangan yang relevan dengan kebutuhan masyarakat modern.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Kepedulian",
      description: "Berkomitmen untuk memberikan layanan terbaik dan membantu masyarakat dalam setiap kebutuhan finansial.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Profesionalisme",
      description: "Layanan kami didukung oleh tim profesional yang berpengalaman di bidang keuangan.",
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-financial-800 text-white">
      <div className="content-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="bg-financial-700 rounded-xl p-8 relative overflow-hidden">
              {/* Abstract shapes */}
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gold/10 filter blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-financial-900/30 filter blur-3xl"></div>
              
              <div className="relative z-10">
                <Badge className="mb-5 bg-gold/20 text-gold-light hover:bg-gold/30">Sejak 1992</Badge>
                <h3 className="text-2xl font-bold mb-4">Mitra Finansial Terpercaya</h3>
                <p className="mb-6 text-financial-100">
                  Selama lebih dari 30 tahun, kami telah membantu jutaan masyarakat Indonesia 
                  untuk mendapatkan solusi finansial yang tepat bagi kebutuhan mereka.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="bg-financial-600/50 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-financial-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-financial-700 text-financial-200 font-medium text-sm">
                Tentang Kami
              </div>
              <h2 className="mb-6">Membangun <span className="text-shine">Kepercayaan</span><br />Melalui Layanan Berkualitas</h2>
              <p className="text-financial-200 mb-8">
                DanaSejahtera adalah lembaga keuangan bukan bank yang menyediakan layanan pinjaman dengan 
                jaminan dan investasi emas untuk memenuhi kebutuhan finansial masyarakat Indonesia.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {values.map((value, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 text-gold-light shrink-0 mt-1">
                      {value.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                      <p className="text-financial-200">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
