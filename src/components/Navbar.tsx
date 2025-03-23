
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        isScrolled 
          ? "bg-black/90 backdrop-blur-sm border-b border-neutral-800" 
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white uppercase">
            Sekawan
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "About", path: "/about" },
            { name: "Testimonial", path: "/#testimonial" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-yellow-500 transition-colors text-sm"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="primary-button">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-black border-t border-neutral-800 transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "About", path: "/about" },
            { name: "Testimonial", path: "/#testimonial" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="py-2 text-white hover:text-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="primary-button w-full text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
