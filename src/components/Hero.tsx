
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, Clock } from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Safe & Reliable",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: "Competitive Interest",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Fast Process",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">          
          <h1 className="mb-6">
            <span className="block text-white mb-1">Reliable & Affordable</span>
            <span className="block text-gradient font-bold">Financial Solution</span>
            <span className="block w-64 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto mt-2"></span>
          </h1>
          
          <p className="mb-8 text-base opacity-80 max-w-xl mx-auto">
            Quick loan with secure collateral, easy processes and competitive
            interest rates. Financial solutions for your real-life needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="icon-button">
              <Shield size={18} />
              Safe & Reliable
            </button>
            <button className="icon-button">
              <BarChart3 size={18} />
              Competitive Interest
            </button>
            <button className="icon-button">
              <Clock size={18} />
              Fast Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
