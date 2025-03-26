
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
      className="glass-card p-8 opacity-0 animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <h4 className="text-lg font-semibold text-foreground mb-3">Benefits:</h4>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
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
      description: "Comprehensive training programs designed to help you achieve specific fitness goals, combining weight training with personalized nutrition plans.",
      icon: <Target className="h-7 w-7" />,
      benefits: [
        "Personalized workout programming",
        "Nutritional guidance tailored to your goals",
        "Regular progress tracking and adjustments",
        "Expert coaching and form correction",
        "Sustainable results that last"
      ],
      delay: 200
    },
    {
      title: "Buddy Training",
      description: "Train with 2-3 friends or family members in a motivating group setting, supporting each other while receiving expert guidance from our trainers.",
      icon: <Users className="h-7 w-7" />,
      benefits: [
        "Increased motivation through group dynamics",
        "Cost-effective personal training alternative",
        "Scheduled accountability",
        "Fun, engaging workout environment",
        "Customized workouts for small groups"
      ],
      delay: 300
    },
    {
      title: "Personalized Training",
      description: "One-on-one focused sessions lasting 45-60 minutes, completely tailored to your specific needs, goals, and schedule.",
      icon: <Dumbbell className="h-7 w-7" />,
      benefits: [
        "100% focused attention from your trainer",
        "Fully customized workout programs",
        "Form correction and technique improvement",
        "Flexible scheduling options",
        "Faster progress toward your goals"
      ],
      delay: 400
    },
    {
      title: "Health-Focused Training",
      description: "Specialized programs for individuals with specific health concerns, rehabilitation needs, or medical conditions requiring careful exercise programming.",
      icon: <Shield className="h-7 w-7" />,
      benefits: [
        "Safe exercise programs for various health conditions",
        "Rehabilitation support",
        "Coordination with healthcare providers when needed",
        "Gradual progression appropriate to your condition",
        "Improved quality of life through fitness"
      ],
      delay: 450
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Morning batches at 6am, 7am, 8am and evening sessions at 6pm and 7pm"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "5-Day Programs",
      description: "Comprehensive workout schedule with 5 days of varied training styles"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Online Options",
      description: "Train remotely with the same quality guidance and programming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h1 className="font-display mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl opacity-0 animate-fade-in">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg opacity-0 animate-fade-in animate-delay-100">
                Comprehensive fitness programs designed to transform your health and wellbeing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-20">
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
            
            <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-20 opacity-0 animate-fade-in animate-delay-500">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Our Services Stand Out</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  At FitKraft Studio, we believe in delivering more than just workout sessions. Our approach combines scientific training methods, personalized attention, and a supportive community.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="glass-card p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 md:p-12 mb-20 opacity-0 animate-fade-in animate-delay-600">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  <MapPin className="h-6 w-6 inline mr-2 text-primary" /> Our Location
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
                  Plot no 41, no 4, gaurav, Alankar Society Rd, opp. shailesh Sabhagruha, Alankar Society, Ganesh Nagar, Karve Nagar, Pune, Maharashtra 411052
                </p>
              </div>
              
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
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
            
            <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-600">
              <h2 className="text-2xl font-bold text-foreground mb-6">Ready to Transform Your Fitness?</h2>
              <p className="text-muted-foreground mb-8">
                Take the first step toward a healthier, stronger you. Join FitKraft Studio today and experience the difference our expert-led services can make.
              </p>
              <a href="#" className="btn-primary text-lg px-8 py-4">
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
