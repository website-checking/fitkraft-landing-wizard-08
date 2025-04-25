
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight, Clock, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-16 md:pt-20 pb-8 bg-background text-foreground border-t border-gray-200">
      {/* Nike/Adidas-inspired background effects - Desktop only */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Desktop footer content */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <img src="/images/fitkraft-logo.png" alt="FitKraft Studio" className="h-16 mr-4" />
              <div className="text-3xl font-display font-black uppercase tracking-tight">
                FitKraft<span className="text-primary">.</span>studio
              </div>
            </div>

            <p className="text-foreground/80 text-base mb-6 max-w-md leading-relaxed">
              Transforming fitness journeys in Karve Nagar, Pune through expert training, supportive community, and world-class facilities since 2018.
            </p>

            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.instagram.com/fitkraft.shubhangi/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex items-center justify-center text-white bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/fitkraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex items-center justify-center text-white bg-blue-600 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/fitkraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex items-center justify-center text-white bg-red-600 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
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
                <div className="h-10 w-10 flex items-center justify-center text-primary mr-3 flex-shrink-0 bg-primary/10 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm mb-1">VISIT US:</p>
                  <address className="text-foreground/80 not-italic text-base">
                    Plot no 41, no 4, gaurav, Alankar Society Rd,<br />
                    opp. shailesh Sabhagruha, Alankar Society,<br />
                    Ganesh Nagar, Karvenagar, Pune, Maharashtra 411052
                  </address>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-10 w-10 flex items-center justify-center text-primary mr-3 flex-shrink-0 bg-primary/10 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm mb-1">OPENING HOURS:</p>
                  <p className="text-foreground/80 text-base">
                    Monday to Friday: 6:00 AM - 10:00 AM and 7:00 PM - 8:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-10 w-10 flex items-center justify-center text-primary mr-3 flex-shrink-0 bg-primary/10 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm mb-1">CALL US:</p>
                  <a href="tel:+919699088367" className="text-foreground/80 hover:text-primary transition-colors duration-300 text-base font-medium">
                    +91 9699088367
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-10 w-10 flex items-center justify-center text-primary mr-3 flex-shrink-0 bg-primary/10 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm mb-1">EMAIL US:</p>
                  <a href="mailto:info@fitkraft.studio" className="text-foreground/80 hover:text-primary transition-colors duration-300 text-base font-medium">
                    info@fitkraft.studio
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile footer - Minimal Nike/Adidas style with only logo and social media */}
        <div className="md:hidden">
          {/* Logo and social media only */}
          <div className="flex flex-col items-center">
            <img src="/images/fitkraft-logo.png" alt="FitKraft Studio" className="h-20 mb-4" />
            <div className="text-2xl font-display font-black uppercase tracking-tight mb-6">
              FitKraft<span className="text-primary">.</span>studio
            </div>

            {/* Social media icons with brand colors */}
            <div className="flex space-x-5 mb-4">
              <a
                href="https://www.instagram.com/fitkraft.shubhangi/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white rounded-full shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="h-7 w-7" />
              </a>
              <a
                href="https://www.facebook.com/fitkraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="h-7 w-7" />
              </a>
              <a
                href="https://www.youtube.com/fitkraftstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 flex items-center justify-center bg-red-600 text-white rounded-full shadow-md"
                aria-label="YouTube"
              >
                <Youtube className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 md:mt-16 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} FitKraft Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <a href="/privacy-policy" className="text-foreground/70 text-xs md:text-sm hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-foreground/70 text-xs md:text-sm hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-foreground/70 text-xs md:text-sm hover:text-primary transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
