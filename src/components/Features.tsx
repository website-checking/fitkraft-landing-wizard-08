
import React from "react";
import { Dumbbell, FlameIcon, Music, Users, Clock, Heart, Target, Shield } from "lucide-react";

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
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Goal-Oriented Training",
      description: "Personalized weight training programs designed to help you achieve specific fitness goals combined with nutrition guidance."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Buddy Training",
      description: "Train with 2-3 friends or family members, motivating each other while receiving expert guidance from our trainers."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Training",
      description: "One-on-one sessions with certified trainers focusing on your specific needs with 45-60 minute duration."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Health-Focused Training",
      description: "Specialized programs for individuals with specific health concerns or rehabilitation needs."
    },
    {
      icon: <FlameIcon className="h-6 w-6" />,
      title: "Diverse Workout Styles",
      description: "Enjoy a variety of workouts including strength training, cardio, core, yoga, functional training, HIIT, and aerobics."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Choose from morning batches (6am, 7am, 8am) or evening sessions (6pm, 7pm), with online options available."
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-foreground md:text-4xl opacity-0 animate-fade-in">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in animate-delay-100">
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
