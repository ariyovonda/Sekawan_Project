
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote, User } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pengusaha UMKM",
    content: "DanaSejahtera membantu saya mendapatkan modal usaha dengan proses cepat dan bunga rendah. Berkat dukungan mereka, bisnis kuliner saya bisa berkembang pesat.",
  },
  {
    name: "Siti Rahayu",
    role: "Ibu Rumah Tangga",
    content: "Saat membutuhkan dana mendesak untuk biaya pendidikan anak, DanaSejahtera memberikan solusi gadai yang aman dan terpercaya. Prosesnya mudah dan nilai taksirannya sangat memuaskan.",
  },
  {
    name: "Andi Wijaya",
    role: "Karyawan Swasta",
    content: "Saya rutin berinvestasi emas di DanaSejahtera karena transparansi dan pelayanannya yang profesional. Investasi jadi lebih mudah dan terjamin keamanannya.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(autoplayTimer);
  }, [isAnimating]);

  return (
    <section id="testimonial" className="py-24 bg-black relative overflow-hidden">
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="section-badge">Testimonial</div>
            <h2 className="section-title">What Customers <span className="text-gradient">Say</span></h2>
            <p className="section-description">
              Our success is measured by customer satisfaction. See how our services
              have helped many people achieve their financial goals.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative">
            <div 
              className={cn(
                "transition-all duration-500 ease-in-out",
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              <div className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/70 border border-neutral-800 text-yellow-500 mb-6">
                  <User className="w-6 h-6" />
                </div>
                <blockquote className="text-xl md:text-2xl font-medium text-white mb-6">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                <div className="font-semibold text-yellow-500">{testimonials[activeIndex].name}</div>
                <div className="text-neutral-400 text-sm">{testimonials[activeIndex].role}</div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-black/70 border border-neutral-800 text-yellow-500 flex items-center justify-center transition-colors pointer-events-auto"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-black/70 border border-neutral-800 text-yellow-500 flex items-center justify-center transition-colors pointer-events-auto"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  idx === activeIndex ? "bg-yellow-500 w-6" : "bg-neutral-700"
                )}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
