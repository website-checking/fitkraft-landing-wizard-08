
import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-fitkraft-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-display font-bold mb-6">
              FitKraft<span className="text-primary">.</span>studio
            </div>
            <p className="text-fitkraft-300 mb-6 max-w-xs">
              Transforming fitness journeys in Karve Nagar, Pune through expert training, supportive community, and world-class facilities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/fitkraftstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-fitkraft-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/fitkraftstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-fitkraft-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/fitkraftstudio" 
                target="_blank" 
                rel="noopener noreferrer"
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
                <Link to="/" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-fitkraft-300 hover:text-white transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Services</Link>
              </li>
              <li>
                <a href="/#testimonials" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="/#pricing" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Membership</a>
              </li>
              <li>
                <Link to="/contact" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services#strength" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Strength Training</a>
              </li>
              <li>
                <a href="/services#yoga" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Yoga Classes</a>
              </li>
              <li>
                <a href="/services#aerobics" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Aerobics & Dance</a>
              </li>
              <li>
                <a href="/services#personal" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Personal Training</a>
              </li>
              <li>
                <a href="/services#nutrition" className="text-fitkraft-300 hover:text-white transition-colors duration-300">Nutrition Guidance</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-fitkraft-400" />
                <span className="text-fitkraft-300">info@fitkraft.studio</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-fitkraft-400" />
                <span className="text-fitkraft-300">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-fitkraft-400" />
                <span className="text-fitkraft-300">
                  123 Fitness Street<br />
                  Karve Nagar, Pune 411052<br />
                  Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-fitkraft-800 text-center text-fitkraft-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} FitKraft Studio. All rights reserved. | 
            <span className="mx-2">FitKraft Studio is not affiliated with FitKraft Training & Nutrition.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
