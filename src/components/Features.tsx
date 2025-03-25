
import React from "react";
import { Dumbbell, Activity, Heart, LineChart, Clock, Zap } from "lucide-react";

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
      title: "Personalized Workouts",
      description: "Custom workout plans tailored to your goals, fitness level, and available equipment."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Monitor your performance, track achievements, and visualize your fitness journey."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health Integration",
      description: "Seamlessly connects with health apps to provide a comprehensive wellness overview."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Data-driven insights to optimize your training and maximize results."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Efficient Scheduling",
      description: "Smart scheduling that fits workouts into your busy life, not the other way around."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energy Optimization",
      description: "Recommendations for nutrition and recovery to keep your energy levels at peak performance."
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-fitkraft-950 md:text-4xl opacity-0 animate-fade-in">
            Cutting-Edge Features
          </h2>
          <p className="text-fitkraft-700 text-lg opacity-0 animate-fade-in animate-delay-100">
            Our platform combines innovative technology with fitness expertise to deliver an unparalleled experience.
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
