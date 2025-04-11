
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, Dumbbell, FlameIcon, Heart, Clock, Users, Target, Shield, MapPin } from "lucide-react";

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  benefits, 
  delay = 0
}: { 
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  delay?: number;
}) => {
  return (
    <div 
      className="glass-card p-6 opacity-0 animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      
      <h4 className="text-md font-semibold text-foreground mb-2">Benefits:</h4>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 text-sm">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <ChevronRight className="h-4 w-4 text-primary mr-1 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    // Set page title
    document.title = "Our Services - FitKraft Studio | Karve Nagar, Pune";
    
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  const services = [
    {
      title: "Goal-Oriented Training",
      description: "Comprehensive programs to help you achieve specific fitness goals with nutrition plans.",
      icon: <Target className="h-6 w-6" />,
      benefits: [
        "Personalized workouts",
        "Nutrition guidance",
        "Progress tracking",
        "Expert coaching",
        "Sustainable results"
      ],
      delay: 200
    },
    {
      title: "Buddy Training",
      description: "Train with 2-3 friends or family members, motivating each other with expert guidance.",
      icon: <Users className="h-6 w-6" />,
      benefits: [
        "Group motivation",
        "Cost-effective training",
        "Scheduled accountability",
        "Fun workout environment",
        "Customized group plans"
      ],
      delay: 300
    },
    {
      title: "Personalized Training",
      description: "One-on-one 45-60 minute sessions tailored to your specific needs and schedule.",
      icon: <Dumbbell className="h-6 w-6" />,
      benefits: [
        "Focused attention",
        "Custom programming",
        "Technique improvement",
        "Flexible scheduling",
        "Faster progress"
      ],
      delay: 400
    },
    {
      title: "Health-Focused Training",
      description: "Specialized programs for specific health concerns and rehabilitation needs.",
      icon: <Shield className="h-6 w-6" />,
      benefits: [
        "Safe exercise programs",
        "Rehabilitation support",
        "Healthcare coordination",
        "Appropriate progression",
        "Improved quality of life"
      ],
      delay: 450
    }
  ];

  const features = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Flexible Scheduling",
      description: "Morning (6-8am) and evening (6-7pm) sessions"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "5-Day Programs",
      description: "Comprehensive schedule with varied training styles"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Online Options",
      description: "Remote training with quality guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl opacity-0 animate-fade-in">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
                Comprehensive fitness programs to transform your health
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  benefits={service.benefits}
                  delay={service.delay}
                />
              ))}
            </div>
            
            <div className="bg-secondary/30 rounded-xl p-6 md:p-8 mb-16 opacity-0 animate-fade-in animate-delay-500">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-foreground mb-3">Why Our Services Stand Out</h2>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                  At FitKraft Studio, we combine scientific training methods, personalized attention, and a supportive community.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-5">
                {features.map((feature, index) => (
                  <div key={index} className="glass-card p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 mb-16 opacity-0 animate-fade-in animate-delay-600">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  <MapPin className="h-5 w-5 inline mr-2 text-primary" /> Our Location
                </h2>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-4">
                  Plot no 41, no 4, gaurav, Alankar Society Rd, opp. shailesh Sabhagruha, Alankar Society, Ganesh Nagar, Karve Nagar, Pune, Maharashtra 411052
                </p>
              </div>
              
              <div className="w-full h-[300px] rounded-lg overflow-hidden">
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
              <h2 className="text-xl font-bold text-foreground mb-4">Ready to Transform Your Fitness?</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Take the first step toward a healthier, stronger you with FitKraft Studio.
              </p>
              <a href="#" className="btn-primary">
                Book a Free Trial Class
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
