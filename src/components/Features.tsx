
import React from "react";
import { Dumbbell, Yoga, Music, Users, Clock, Heart } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  index: number;
}) => {
  return (
    <div 
      className="glass-card p-6 opacity-0 animate-fade-in" 
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-fitkraft-900">{title}</h3>
      <p className="text-fitkraft-700">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Strength Training",
      description: "Expert-guided strength programs designed to build muscle, increase strength, and improve overall fitness."
    },
    {
      icon: <Yoga className="h-6 w-6" />,
      title: "Yoga Classes",
      description: "Find balance and flexibility with our diverse yoga classes suitable for beginners and advanced practitioners."
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Aerobics & Dance",
      description: "High-energy cardio workouts that make burning calories enjoyable while improving cardiovascular health."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers focused on your specific fitness goals and needs."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Multiple class times throughout the day to accommodate your busy lifestyle and routine."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Supportive Community",
      description: "Join a family of fitness enthusiasts who motivate and support each other on their fitness journeys."
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-fitkraft-950 md:text-4xl opacity-0 animate-fade-in">
            Our Services
          </h2>
          <p className="text-fitkraft-700 text-lg opacity-0 animate-fade-in animate-delay-100">
            Comprehensive fitness programs designed for all levels at Pune's premier fitness studio
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
