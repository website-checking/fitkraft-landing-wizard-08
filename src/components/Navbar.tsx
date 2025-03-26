
import React, { useState, useEffect } from "react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-800" 
          : "py-6 bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold text-primary flex items-center">
            <img 
              alt="FitKraft Logo" 
              className="h-8 w-auto mr-2" 
              src="/lovable-uploads/d2b4f7f0-95f2-46c7-b725-7cf9df54b0ac.png" 
            />
            FitKraft<span className="text-primary">.</span>studio
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
              <Link to="/services" className="nav-link">
                Services
              </Link>
              <a href="/#testimonials" className="nav-link">
                Testimonials
              </a>
              <a href="/#pricing" className="nav-link">
                Programs
              </a>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
            <a href="/#cta" className="btn-primary">
              Book a Free Class
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden focus:outline-none" 
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 absolute top-full left-0 right-0 shadow-lg border-t border-gray-800 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6 py-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              className="text-foreground hover:text-primary py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <a 
              href="/#testimonials" 
              className="text-foreground hover:text-primary py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="/#pricing" 
              className="text-foreground hover:text-primary py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </a>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="/#cta" 
              className="btn-primary w-full text-center mt-4" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Free Class
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
