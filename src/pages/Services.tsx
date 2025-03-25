
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, Dumbbell, FlameIcon, Music, Heart, Clock, Users } from "lucide-react";

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
      <h3 className="text-2xl font-bold text-fitkraft-900 mb-3">{title}</h3>
      <p className="text-fitkraft-700 mb-6">{description}</p>
      
      <h4 className="text-lg font-semibold text-fitkraft-900 mb-3">Benefits:</h4>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-fitkraft-700">{benefit}</span>
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
      title: "Strength Training",
      description: "Our comprehensive strength training programs are designed to build muscle, increase strength, and improve overall fitness. With personalized training plans, you'll see results faster than ever.",
      icon: <Dumbbell className="h-7 w-7" />,
      benefits: [
        "Increased muscle mass and strength",
        "Improved metabolism and weight management",
        "Enhanced bone density",
        "Better posture and balance",
        "Reduced risk of injury"
      ],
      delay: 200
    },
    {
      title: "Yoga Classes",
      description: "Find balance, flexibility and inner peace with our diverse yoga classes. Whether you're a beginner or advanced practitioner, our certified yoga instructors guide you through practices that benefit both body and mind.",
      icon: <FlameIcon className="h-7 w-7" />,
      benefits: [
        "Increased flexibility and range of motion",
        "Stress reduction and relaxation",
        "Improved balance and coordination",
        "Enhanced mental clarity",
        "Better breathing techniques"
      ],
      delay: 300
    },
    {
      title: "Aerobics & Dance Fitness",
      description: "Get your heart pumping with our high-energy aerobics and dance fitness classes. These fun, music-driven workouts make burning calories enjoyable while improving cardiovascular health.",
      icon: <Music className="h-7 w-7" />,
      benefits: [
        "Improved cardiovascular health",
        "Effective calorie burning",
        "Enhanced coordination and rhythm",
        "Reduced stress levels",
        "Increased stamina and endurance"
      ],
      delay: 400
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Multiple class times to fit your busy lifestyle"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Attention",
      description: "Small class sizes to ensure individual guidance"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Holistic Approach",
      description: "Focus on both physical fitness and mental wellbeing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h1 className="font-display mb-6 text-4xl font-bold tracking-tight text-fitkraft-950 md:text-5xl opacity-0 animate-fade-in">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-fitkraft-700 text-lg opacity-0 animate-fade-in animate-delay-100">
                Comprehensive fitness programs designed to transform your health and wellbeing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                <h2 className="text-2xl font-bold text-fitkraft-900 mb-4">Why Our Services Stand Out</h2>
                <p className="text-fitkraft-700 max-w-3xl mx-auto">
                  At FitKraft Studio, we believe in delivering more than just workout sessions. Our approach combines scientific training methods, personalized attention, and a supportive community.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="glass-card p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-fitkraft-900 mb-2">{feature.title}</h3>
                    <p className="text-fitkraft-700">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-600">
              <h2 className="text-2xl font-bold text-fitkraft-900 mb-6">Ready to Transform Your Fitness?</h2>
              <p className="text-fitkraft-700 mb-8">
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
