
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight, Clock, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 bg-background text-foreground border-t border-gray-200">
      {/* Nike/Adidas-inspired background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <img src="/images/fitkraft-logo.png" alt="FitKraft Studio" className="h-12 mr-3" />
              <div className="text-2xl font-display font-black uppercase tracking-tight">
                FitKraft<span className="text-primary">.</span>studio
              </div>
            </div>

            <p className="text-foreground/70 text-sm mb-6 max-w-md">
              Transforming fitness journeys in Karve Nagar, Pune through expert training, supportive community, and world-class facilities since 2018.
            </p>

            <div className="flex space-x-3 mb-8">
              <a
                href="https://www.instagram.com/fitkraft.shubhangi/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 text-gray-700 border border-gray-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/fitkraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 text-gray-700 border border-gray-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/fitkraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 text-gray-700 border border-gray-200"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <div className="flex items-start space-x-3 mt-6">
              <div className="h-10 w-10 flex items-center justify-center text-primary mt-1">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-bold uppercase tracking-wider">OPENING HOURS:</p>
                <p className="text-sm text-foreground/70">Mon-Fri: 6AM-9AM, 6PM-8PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 pb-2 border-b border-primary/20">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center text-sm uppercase tracking-wider">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center text-sm uppercase tracking-wider">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#features" className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center text-sm uppercase tracking-wider">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                  KEY FEATURES
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center text-sm uppercase tracking-wider">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                  TESTIMONIALS
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center text-sm uppercase tracking-wider">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                  PROGRAMS
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center text-sm uppercase tracking-wider">
                  <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Services column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 pb-2 border-b border-gray-200">
              OUR SERVICES
            </h3>
            <ul className="space-y-3">
              <li className="text-foreground/70 flex items-center text-sm uppercase tracking-wider">
                <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                STRENGTH TRAINING
              </li>
              <li className="text-foreground/70 flex items-center text-sm uppercase tracking-wider">
                <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                YOGA CLASSES
              </li>
              <li className="text-foreground/70 flex items-center text-sm uppercase tracking-wider">
                <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                AEROBICS & DANCE
              </li>
              <li className="text-foreground/70 flex items-center text-sm uppercase tracking-wider">
                <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                PERSONAL TRAINING
              </li>
              <li className="text-foreground/70 flex items-center text-sm uppercase tracking-wider">
                <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                NUTRITION GUIDANCE
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 pb-2 border-b border-gray-200">
              CONTACT INFORMATION
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm">EMAIL US:</p>
                  <a href="mailto:info@fitkraft.studio" className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm">
                    info@fitkraft.studio
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm">CALL US:</p>
                  <a href="tel:+919699088367" className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm">
                    +91 9699088367
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center text-primary mr-3 flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm">VISIT US:</p>
                  <address className="text-foreground/70 not-italic text-sm">
                    Plot no 41, no 4, gaurav, Alankar Society Rd,<br />
                    opp. shailesh Sabhagruha, Alankar Society,<br />
                    Ganesh Nagar, Karvenagar, Pune, Maharashtra 411052
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FitKraft Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-foreground/70 text-sm hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-foreground/70 text-sm hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-foreground/70 text-sm hover:text-primary transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
