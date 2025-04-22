
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, Dumbbell, Users, Target, Shield } from "lucide-react";

const ServiceCard = ({
  title,
  description,
  icon,
  benefits,
  image,
  delay = 0
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  image?: string;
  delay?: number;
}) => {
  return (
    <div
      className="overflow-hidden opacity-0 animate-fade-in flex flex-col h-full border-t border-gray-200 transition-all duration-300 hover:bg-gray-50/80 shadow-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      {image && (
        <div className="w-full h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground uppercase tracking-wider group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{description}</p>

        <div className="mt-auto">
          <h4 className="text-md font-bold text-foreground uppercase tracking-wider mb-3">KEY BENEFITS:</h4>
          <ul className="grid grid-cols-1 gap-y-3 text-sm">
            {benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 h-0.5 w-8 bg-primary group-hover:w-16 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    // Set page title
    document.title = "Our Services - Fitkraft Studio";
  }, []);

  const services = [
    {
      title: "Goal-Oriented Training",
      description: "Customized programs for your specific fitness targets.",
      icon: <Target className="h-6 w-6" />,
      benefits: [
        "Personalized workouts",
        "Nutrition guidance",
        "Progress tracking"
      ],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: 200
    },
    {
      title: "Buddy Training",
      description: "Train with friends for better motivation and results.",
      icon: <Users className="h-6 w-6" />,
      benefits: [
        "Group motivation",
        "Cost-effective training",
        "Scheduled accountability"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: 300
    },
    {
      title: "Personalized Training",
      description: "One-on-one sessions focused exclusively on you.",
      icon: <Dumbbell className="h-6 w-6" />,
      benefits: [
        "Custom programming",
        "Technique improvement",
        "Faster progress"
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: 400
    },
    {
      title: "Health-Focused Training",
      description: "Programs designed around specific health needs.",
      icon: <Shield className="h-6 w-6" />,
      benefits: [
        "Safe exercise programs",
        "Rehabilitation support",
        "Improved quality of life"
      ],
      image: "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: 450
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-28 pb-16 md:pt-40 md:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl mb-16">
              <div className="flex items-center justify-center mb-4 opacity-0 animate-fade-in">
                <div className="w-12 h-[2px] bg-primary mr-3"></div>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">WHAT WE OFFER</p>
              </div>
              <h1 className="font-display mb-6 text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-none text-center opacity-0 animate-fade-in">
                TRAINING PROGRAMS
                <div className="w-20 h-1 bg-primary mt-4 mx-auto"></div>
              </h1>
              <p className="text-foreground/80 font-bold uppercase tracking-wider text-sm text-center opacity-0 animate-fade-in animate-delay-100">
                Transform your fitness with expert guidance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  benefits={service.benefits}
                  image={service.image}
                  delay={service.delay}
                />
              ))}
            </div>

            <div className="p-6 md:p-8 mb-16 overflow-hidden opacity-0 animate-fade-in animate-delay-600 border-t border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-4">
                  OUR LOCATION
                </h2>
                <div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
                <p className="text-foreground/70 text-sm max-w-2xl mx-auto mb-6">
                  Plot no 41, no 4, gaurav, Alankar Society Rd, Karve Nagar, Pune, Maharashtra 411052
                </p>
              </div>

              <div className="w-full h-[300px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.7583363104007!2d73.81252807532395!3d18.49236408259097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb3a4119b77%3A0x16c006b37b1cca18!2sFITKRAFT!5e0!3m2!1sen!2sin!4v1719066642302!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="FitKraft Studio Location"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-600">
              <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-4">READY TO TRANSFORM YOUR FITNESS?</h2>
              <div className="w-12 h-1 bg-primary mb-6 mx-auto"></div>
              <p className="text-foreground/70 text-sm mb-8 max-w-xl mx-auto">
                Take the first step toward a healthier, stronger you.
              </p>
              <a href="/contact" className="btn-primary uppercase tracking-wider font-bold">
                BOOK A FREE TRIAL CLASS
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
