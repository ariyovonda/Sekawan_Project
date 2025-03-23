
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const productLinks = [
    { name: "Sekawan Modal", path: "/services/sekawan-modal" }, 
    { name: "Raya Gold Trader", path: "/services/raya-gold-trader" }, 
    { name: "Raya Gadget", path: "/services/raya-gadget" }, 
    { name: "Paylater Movement", path: "/services/paylater-movement" }
  ];
  
  const companyLinks = [
    { name: "About Us", path: "/about" }, 
    { name: "Contact Us", path: "/contact" }, 
    { name: "Privacy Policy", path: "/privacy" }, 
    { name: "Terms & Conditions", path: "/terms" }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-neutral-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-5">
              <Link to="/" className="text-2xl font-bold uppercase">
                Sekawan
              </Link>
            </div>
            <p className="text-neutral-400 mb-6 text-sm">
              Trusted partner for solutions safe and affordable financial for all Indonesian people.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#"
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-yellow-500 text-neutral-400 hover:text-yellow-500 flex items-center justify-center transition-colors"
                aria-label="Social Media"
              >
                <span className="text-xs">@</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Products and Services</h4>
            <ul className="space-y-3">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-neutral-400 hover:text-yellow-500 transition-colors inline-flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 mr-2 text-yellow-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-neutral-400 hover:text-yellow-500 transition-colors inline-flex items-center text-sm">
                    <ArrowRight className="w-3 h-3 mr-2 text-yellow-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 shrink-0" />
                <span className="text-neutral-400 text-sm">
                  Sekawan Building<br />
                  Jl. Sudirman No.123<br />
                  Jakarta, 12190
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-500 mr-3 shrink-0" />
                <span className="text-neutral-400 text-sm">021-1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-500 mr-3 shrink-0" />
                <span className="text-neutral-400 text-sm">contact@sekawan.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-xs mb-4 md:mb-0">
              © {currentYear} SEKAWAN. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-neutral-500 text-xs hover:text-yellow-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-500 text-xs hover:text-yellow-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-neutral-500 text-xs hover:text-yellow-500 transition-colors">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
