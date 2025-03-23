
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, Coins, HomeIcon, Smartphone, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceDetailProps {
  serviceId?: string;
}

const ServiceDetail = ({ serviceId: propServiceId }: ServiceDetailProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const serviceId = propServiceId || params.serviceId;
  const [service, setService] = useState<any>(null);

  const services = {
    "sekawan-modal": {
      id: "sekawan-modal",
      title: "Sekawan Modal",
      description: "We provide low-cost capital loans to help you jumpstart your business with easy terms and affordable interest.",
      icon: <CreditCard className="w-10 h-10" />,
      features: [
        "Business capital loans up to Rp 500 million",
        "Interest rates starting from 0.8% per month",
        "Flexible repayment terms from 6 to 36 months",
        "Quick approval process within 3 business days",
        "Minimal documentation required",
        "No early repayment penalties"
      ],
      requirements: [
        "Business registration document",
        "Monthly income statement for the last 6 months",
        "Valid ID and address proof",
        "Bank statements for the last 3 months",
        "Collateral documents (if applicable)"
      ]
    },
    "raya-gold-trader": {
      id: "raya-gold-trader",
      title: "Raya Gold Trader",
      description: "100% safe investment for safe additional income. Trade gold easily with a fast and flexible process.",
      icon: <Coins className="w-10 h-10" />,
      features: [
        "Buy and sell gold at competitive market rates",
        "Physical gold custody service",
        "Gold investment accounts with no monthly fees",
        "Mobile app to track gold prices in real time",
        "Buy gold in fractions, start from 0.01 gram",
        "Free gold insurance for all stored gold"
      ],
      requirements: [
        "Valid government-issued ID",
        "Proof of address (utility bill or bank statement)",
        "Tax identification number",
        "Bank account for transaction settlements",
        "Minimum initial investment of Rp 100,000"
      ]
    },
    "paylater-movement": {
      id: "paylater-movement",
      title: "Paylater Movement",
      description: "Fast cashless loans, which allows you to buy consumer items according to your needs.",
      icon: <HomeIcon className="w-10 h-10" />,
      features: [
        "Instant approval for purchases up to Rp 30 million",
        "0% interest for first-time customers (30 days)",
        "Integration with major e-commerce platforms",
        "Flexible payment options: full, installment, or minimum payment",
        "No hidden fees or charges",
        "Special promotions with partner merchants"
      ],
      requirements: [
        "21 years or older",
        "Valid KTP (Indonesian ID card)",
        "Active mobile phone number",
        "Bank account or e-wallet for disbursement",
        "Stable income source",
        "Good credit history"
      ]
    },
    "raya-gadget": {
      id: "raya-gadget",
      title: "Raya Gadget",
      description: "Utilize your new and used gadgets as collateral to borrow at competitive rates with extended repayment terms.",
      icon: <Smartphone className="w-10 h-10" />,
      features: [
        "Loans for smartphones, laptops, tablets, and other electronics",
        "Get up to 80% of device market value",
        "Low interest rates from 1.2% per month",
        "Loan terms from 1 to 12 months",
        "Safe storage of your gadgets",
        "Option to extend loan period"
      ],
      requirements: [
        "Original purchase receipt or proof of ownership",
        "Device in working condition",
        "Valid ID card (KTP)",
        "Additional contact information",
        "Original accessories (if available)",
        "Device must be unlocked and free of accounts"
      ]
    }
  };

  useEffect(() => {
    // @ts-ignore
    if (serviceId && services[serviceId]) {
      // @ts-ignore
      setService(services[serviceId]);
    } else {
      navigate("/not-found");
    }
  }, [serviceId, navigate]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-yellow-500 mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          
          <div className="flex items-center mb-6">
            <div className="icon-box mr-4">
              {service.icon}
            </div>
            <h1 className="text-3xl font-bold">{service.title}</h1>
          </div>
          
          <p className="text-lg text-neutral-400 mb-10 max-w-3xl">
            {service.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/50 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-yellow-500">Features & Benefits</h2>
              <ul className="space-y-3">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 shrink-0" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/50 border border-neutral-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-yellow-500">Requirements</h2>
              <ul className="space-y-3">
                {service.requirements.map((requirement: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 shrink-0" />
                    <span className="text-neutral-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="primary-button px-8 py-3 text-base">
              Apply Now
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
