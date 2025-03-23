
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Aman & Terpercaya",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: "Bunga Kompetitif",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Proses Cepat",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-luxury-100 to-luxury"></div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gold/5 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gold/10 filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-luxury-300/50 text-gold font-medium text-sm animate-fade-in">
            Solusi Keuangan Terpercaya Sejak 1992
          </div>
          
          <h1 className="mb-6 overflow-hidden text-cream">
            <span className="block overflow-hidden">
              <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.1s" }}>
                Solusi Keuangan yang
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-shine font-bold animate-text-reveal" style={{ animationDelay: "0.3s" }}>
                Terpercaya &amp; Terjangkau
              </span>
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-cream/70 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Dapatkan pinjaman cepat dengan jaminan yang aman, proses mudah, dan suku bunga 
            kompetitif. Solusi finansial untuk semua kebutuhan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-luxury-100 button-shine font-medium">
              Ajukan Pinjaman
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gold/50 text-gold hover:bg-luxury-100">
              Simulasi Kredit
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "flex items-center justify-center gap-2 py-3 px-4 rounded-lg glass-card-dark",
                  "animate-fade-in opacity-0"
                )}
                style={{ animationDelay: `${0.8 + idx * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-luxury-300 text-gold">
                  {feature.icon}
                </div>
                <span className="font-medium text-cream">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
