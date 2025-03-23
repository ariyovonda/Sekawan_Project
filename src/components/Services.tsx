
import { ArrowRight, CreditCard, Coins, HomeIcon, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Services = () => {
  const services = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Sekawan Modal",
      description: "We provide low-cost capital loans to help you jumpstart your business with easy terms and affordable interest.",
      path: "/services/sekawan-modal"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Raya Gold Trader",
      description: "100% safe investment for safe additional income. Trade gold easily with a fast and flexible process.",
      path: "/services/raya-gold-trader"
    },
    {
      icon: <HomeIcon className="w-6 h-6" />,
      title: "Paylater Movement",
      description: "Fast cashless loans, which allows you to buy consumer items according to your needs.",
      path: "/services/paylater-movement"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Raya Gadget",
      description: "Utilize your new and used gadgets as collateral to borrow at competitive rates with extended repayment terms.",
      path: "/services/raya-gadget"
    }
  ];

  return (
    <section id="layanan" className="bg-black py-24">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="section-badge">Our Services</div>
            <h2 className="section-title">Financial Solutions for <span className="text-gradient">All Needs</span></h2>
            <p className="section-description">
              We provide a wide range of reliable financial services to help you meet your 
              financial needs easily and securely.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div className="service-card h-full flex flex-col">
                <div className="mb-5 icon-box">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow text-sm">{service.description}</p>
                <Link to={service.path} className="group inline-flex items-center text-yellow-500 font-medium text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
