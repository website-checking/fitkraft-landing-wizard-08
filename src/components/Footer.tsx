
import React from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-fitkraft-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-display font-bold mb-6">
              FitKraft<span className="text-primary">.</span>
            </div>
            <p className="text-fitkraft-300 mb-6 max-w-xs">
              Transforming fitness journeys through technology, expertise, and community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-fitkraft-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-fitkraft-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-fitkraft-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-fitkraft-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Blog</a>
              </li>
              <li>
                <a href="#" className="text-fitkraft-300 hover:text-white transition-colors duration-300">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-fitkraft-300 hover:text-white transition-colors duration-300">GDPR Compliance</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-fitkraft-400" />
                <span className="text-fitkraft-300">support@fitkraft.studio</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-fitkraft-400" />
                <span className="text-fitkraft-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-fitkraft-400" />
                <span className="text-fitkraft-300">
                  123 Fitness Avenue<br />
                  San Francisco, CA 94158
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-fitkraft-800 text-center text-fitkraft-400 text-sm">
          <p>&copy; {new Date().getFullYear()} FitKraft Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
