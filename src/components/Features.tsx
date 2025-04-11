
import React from "react";
import { Dumbbell, FlameIcon, Users, Clock, Target, Shield } from "lucide-react";
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
      className="glass-card p-0 overflow-hidden opacity-0 animate-fade-in flex flex-col h-full"
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      {image && (
        <div className="w-full h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 shadow-inner"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary shadow-md">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="text-foreground/80 text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Goal Training",
      description: "Custom programs for your specific fitness targets",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Buddy Training",
      description: "Train with friends for better motivation",
      image: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personal Training",
      description: "One-on-one sessions tailored to your needs",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Health Focus",
      description: "Programs for health concerns or rehabilitation",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FlameIcon className="h-6 w-6" />,
      title: "Diverse Workouts",
      description: "Strength, cardio, yoga, HIIT, and more",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description: "Morning, evening, and online options",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="font-display mb-3 text-3xl font-extrabold text-foreground md:text-4xl opacity-0 animate-fade-in">
            Our <span className="text-primary drop-shadow-sm">Services</span>
          </h2>
          <p className="text-foreground/80 font-medium opacity-0 animate-fade-in animate-delay-100">
            Transform your fitness journey with expert guidance
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
};

export default Features;
