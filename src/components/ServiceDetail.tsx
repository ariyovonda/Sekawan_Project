
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
  requirements?: string[];
  icon: React.ReactNode;
  heroImage?: string;
}

const ServiceDetail = ({
  title,
  description,
  features,
  benefits,
  requirements,
  icon,
  heroImage,
}: ServiceDetailProps) => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-luxury to-luxury-200 py-16 md:py-24">
        <div className="content-section">
          <Link 
            to="/#layanan" 
            className="inline-flex items-center text-gold mb-8 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Kembali ke Layanan</span>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box">{icon}</div>
                  <h1 className="text-cream">{title}</h1>
                </div>
                <p className="text-cream/70 text-lg mb-6">{description}</p>
                <div className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-gold text-xs">✓</span>
                      </div>
                      <p className="text-cream/80">{benefit}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="md:w-1/2">
              <AnimatedSection delay={200}>
                <div className="glass-card-dark overflow-hidden rounded-xl">
                  {heroImage ? (
                    <img src={heroImage} alt={title} className="w-full h-auto object-cover" />
                  ) : (
                    <div className="aspect-video bg-luxury-300/30 flex items-center justify-center">
                      <div className="icon-box w-24 h-24">
                        {icon}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-luxury-100">
        <div className="content-section">
          <AnimatedSection>
            <h2 className="text-center mb-12">Fitur <span className="text-shine">Unggulan</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="glass-card-dark p-6 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-cream">{feature.title}</h3>
                  <p className="text-cream/70">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section - Only show if requirements exist */}
      {requirements && requirements.length > 0 && (
        <section className="py-16 bg-luxury-200">
          <div className="content-section">
            <AnimatedSection>
              <h2 className="text-center mb-10">Persyaratan</h2>
              <div className="max-w-3xl mx-auto glass-card p-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-gold text-xs">{idx + 1}</span>
                      </div>
                      <p className="text-cream/80">{requirement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-luxury">
        <div className="content-section">
          <AnimatedSection>
            <div className="glass-card-dark p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="mb-6">Tertarik dengan <span className="text-shine">{title}</span>?</h2>
              <p className="text-cream/70 mb-8 max-w-2xl mx-auto">
                Jangan ragu untuk menghubungi kami dan konsultasikan kebutuhan finansial Anda. 
                Tim profesional kami siap membantu Anda mendapatkan solusi terbaik.
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

export default ServiceDetail;
