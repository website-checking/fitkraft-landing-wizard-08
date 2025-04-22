
import { useState } from "react";
import { FlameIcon, Clock, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({
  icon,
  title,
  description,
  image,
  index
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  index: number;
}) => {
  return (
    <div
      className="overflow-hidden opacity-0 animate-fade-in flex flex-col h-full group border-t border-gray-200 transition-all duration-300 hover:bg-gray-50/80 shadow-sm"
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden relative">
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

          {/* Nike/Adidas-inspired accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-10"></div>

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold text-foreground uppercase tracking-wider group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-foreground/70 text-sm">{description}</p>

        {/* Nike/Adidas-inspired indicator */}
        <div className="mt-4 h-0.5 w-8 bg-primary group-hover:w-12 transition-all duration-300"></div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personal Training",
      description: "One-on-one sessions tailored to your needs",
      image: "/images/personal_training.png"
    },
    {
      icon: <FlameIcon className="h-6 w-6" />,
      title: "Diverse Workouts",
      description: "Strength, cardio, yoga, HIIT, and more",
      image: "/images/diverse_workouts.png"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Health Focus",
      description: "Programs for health concerns or rehabilitation",
      image: "/images/health_focus.png"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description: "Morning, evening, and online options",
      image: "/images/flexible_schedule.png"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-28 bg-background relative">
      {/* Nike/Adidas-inspired background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full bg-primary/5"></div>
        <div className="absolute top-1/4 right-0 w-[150px] h-[500px] bg-primary/5 -rotate-45"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl mb-12">
          <div className="flex items-center justify-center mb-4 opacity-0 animate-fade-in animate-on-scroll">
            <div className="w-12 h-[2px] bg-primary mr-3"></div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm">WHAT WE OFFER</p>
          </div>
          <h2 className="font-display mb-6 text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-none text-center opacity-0 animate-fade-in animate-on-scroll">
            KEY FEATURES
            <div className="w-20 h-1 bg-primary mt-4 mx-auto"></div>
          </h2>
          <p className="text-foreground/80 font-bold uppercase tracking-wider text-sm text-center opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Transform your fitness journey with expert guidance
          </p>
        </div>

        <div className="grid gap-8 md:gap-6 grid-cols-1 md:grid-cols-4 animate-on-scroll stagger-children max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              index={index}
            />
          ))}
        </div>

        {/* Nike/Adidas-inspired divider */}
        <div className="mt-20 max-w-md mx-auto flex items-center gap-4">
          <div className="h-0.5 flex-grow bg-primary/20"></div>
          <div className="h-2 w-2 bg-primary"></div>
          <div className="h-0.5 flex-grow bg-primary/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
