
import React, { useState } from "react";
import { Check, ArrowRight, Dumbbell, Users, Target, Star, ChevronRight, Calendar } from "lucide-react";

// Program Card Component with expanded view functionality
const ProgramCard = ({
  title,
  price,
  description,
  features,
  benefits,
  schedule,
  icon,
  image,
  isPopular = false,
  delay = 0,
  showPrice = true,
  onSelect
}: {
  title: string;
  price?: string;
  description: string;
  features: string[];
  benefits: string[];
  schedule: string[];
  icon: React.ReactNode;
  image: string;
  isPopular?: boolean;
  delay?: number;
  showPrice?: boolean;
  onSelect: (title: string) => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`glass-panel rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 relative opacity-0 animate-fade-in h-full flex flex-col group transition-all duration-500 ${expanded ? 'md:col-span-3 md:grid md:grid-cols-3 md:gap-6' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-4 bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-b-lg shadow-md z-20 transform translate-y-0">
          Popular
        </div>
      )}

      {/* Program image - only shown when not expanded on mobile, always shown on desktop */}
      <div className={`${expanded ? 'hidden md:block' : ''} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
        <div className="w-full h-[200px] bg-primary/5 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Overlay content on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center mr-3">
              {icon}
            </div>
            <h3 className="text-xl font-extrabold text-white">{title}</h3>
          </div>

          {showPrice && price ? (
            <div className="mb-2">
              <span className="text-2xl font-extrabold text-white">₹{price}</span>
              <span className="text-white/80 text-sm font-medium">/month</span>
            </div>
          ) : (
            <div className="mb-2">
              <span className="text-white/80 text-sm font-medium">Contact for pricing</span>
            </div>
          )}
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Only show this title on expanded mobile view */}
        {expanded && (
          <div className="md:hidden flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              {icon}
            </div>
            <h3 className="text-xl font-extrabold text-foreground">{title}</h3>
          </div>
        )}

        <p className="text-foreground/90 font-medium mb-4">{description}</p>

        <div className="mb-6">
          <h4 className="text-md font-bold text-foreground mb-3 flex items-center">
            <Check className="h-4 w-4 text-primary mr-2" />
            Key Features
          </h4>
          <ul className="space-y-2 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {expanded && (
          <>
            <div className="mb-6">
              <h4 className="text-md font-bold text-foreground mb-3 flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Benefits
              </h4>
              <ul className="space-y-2 text-sm">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-md font-bold text-foreground mb-3 flex items-center">
                <Calendar className="h-4 w-4 text-primary mr-2" />
                Schedule Options
              </h4>
              <ul className="space-y-2 text-sm">
                {schedule.map((time, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button
            className={`py-2.5 px-5 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden flex items-center justify-center ${expanded ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Learn More'}
          </button>

          <button
            className="bg-primary text-primary-foreground py-2.5 px-5 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden flex items-center justify-center group"
            onClick={() => onSelect(title)}
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  // Enhanced training programs with more detailed information
  const trainingPrograms = [
    {
      title: "Batch Training",
      price: "2,500",
      description: "Join our energetic group sessions designed to maximize results through community motivation and expert guidance.",
      features: [
        "5 days weekly workouts",
        "Strength & cardio training",
        "Morning & evening batches",
        "Community motivation"
      ],
      benefits: [
        "Cost-effective training solution",
        "Social environment for motivation",
        "Variety of workout styles",
        "Friendly competition to push limits"
      ],
      schedule: [
        "Morning: 6:00 AM - 7:00 AM",
        "Evening: 6:00 PM - 7:00 PM",
        "Weekend: 8:00 AM - 9:00 AM"
      ],
      icon: <Users className="h-5 w-5 text-white" />,
      image: "/images/batch_traning.png",
      isPopular: true,
      delay: 200,
      showPrice: true
    },
    {
      title: "Buddy Training",
      description: "Train with a friend or partner for better accountability, motivation, and a more personalized approach than group classes.",
      features: [
        "Small group (2-3 people)",
        "Custom workout plans",
        "Flexible scheduling",
        "Mutual accountability"
      ],
      benefits: [
        "More affordable than personal training",
        "Shared motivation and accountability",
        "Customized to your shared goals",
        "Fun, supportive environment"
      ],
      schedule: [
        "Flexible scheduling",
        "45-60 minute sessions",
        "Available 7 days a week"
      ],
      icon: <Target className="h-5 w-5 text-white" />,
      image: "/images/buddy_training.png",
      isPopular: false,
      delay: 300,
      showPrice: false
    },
    {
      title: "Personal Training",
      description: "One-on-one sessions with our expert trainers, fully customized to your specific goals, fitness level, and preferences.",
      features: [
        "45-60 minute sessions",
        "Personalized attention",
        "Custom programming",
        "Nutrition guidance"
      ],
      benefits: [
        "Fastest route to your fitness goals",
        "Form correction and technique mastery",
        "Personalized nutrition advice",
        "Flexible scheduling to fit your life"
      ],
      schedule: [
        "By appointment",
        "Early morning to late evening slots",
        "Weekend availability"
      ],
      icon: <Dumbbell className="h-5 w-5 text-white" />,
      image: "/images/personal_training.png",
      isPopular: false,
      delay: 400,
      showPrice: false
    }
  ];

  // Handle program selection
  const handleProgramSelect = (title: string) => {
    // Store the selected program in localStorage
    localStorage.setItem('selectedProgram', title);
    console.log('Stored in localStorage:', title);

    // Create a custom event to notify the ContactSection
    const event = new CustomEvent('programSelected', { detail: { program: title } });
    document.dispatchEvent(event);
    console.log('Dispatched event with program:', title);

    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] animate-pulse-slow"></div>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] -right-20 w-[100px] h-[400px] bg-primary/10 rotate-[45deg] transform-gpu"></div>
        <div className="absolute bottom-[20%] -left-20 w-[150px] h-[500px] bg-primary/10 rotate-[30deg] transform-gpu"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-extrabold text-foreground md:text-5xl opacity-0 animate-fade-in animate-on-scroll">
            <span className="text-primary drop-shadow-md relative inline-block">
              Training
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/40 rounded-full"></span>
            </span> Programs
          </h2>
          <p className="text-foreground/80 font-medium text-lg opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Choose the perfect program for your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto animate-on-scroll">
          {trainingPrograms.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              price={program.price}
              description={program.description}
              features={program.features}
              benefits={program.benefits}
              schedule={program.schedule}
              icon={program.icon}
              image={program.image}
              isPopular={program.isPopular}
              delay={program.delay}
              showPrice={program.showPrice}
              onSelect={handleProgramSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
