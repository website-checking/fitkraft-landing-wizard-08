
import React from "react";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  delay = 0,
  showPrice = true
}: {
  title: string;
  price?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
  showPrice?: boolean;
}) => {
  return (
    <div 
      className={`glass-card p-6 relative opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      {showPrice && price ? (
        <div className="mb-4">
          <span className="text-3xl font-bold text-foreground">₹{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      ) : (
        <div className="mb-4 h-8 flex items-center">
          <span className="text-muted-foreground text-sm">Contact for pricing</span>
        </div>
      )}
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <ul className="mb-6 space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`w-full text-center py-2 px-4 rounded-full text-sm font-medium transition-colors duration-300 ${
          isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
        }`}
      >
        Get in Touch
      </a>
    </div>
  );
};

const CTASection = () => {
  const pricingPlans = [
    {
      title: "Batch Training",
      price: "2,500",
      description: "Group training sessions 5 days weekly",
      features: [
        "5 days of varied workouts per week",
        "Strength, cardio, core training",
        "Morning & evening batches",
        "Online options available",
        "Community motivation",
        "Expert trainers"
      ],
      isPopular: true,
      delay: 200,
      showPrice: true
    },
    {
      title: "Buddy Training",
      description: "Train with 2-3 friends or family",
      features: [
        "Small group training (2-3 people)",
        "Custom workout plans",
        "Flexible scheduling",
        "Cost-effective personal training",
        "Mutual accountability",
        "Fun, engaging environment"
      ],
      isPopular: false,
      delay: 300,
      showPrice: false
    },
    {
      title: "Personal Training",
      description: "One-on-one focused sessions",
      features: [
        "45-60 minute dedicated sessions",
        "Personalized attention",
        "Custom programming",
        "Nutrition guidance",
        "Progress tracking",
        "Health-specific training"
      ],
      isPopular: false,
      delay: 400,
      showPrice: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display mb-4 text-3xl font-bold text-foreground md:text-4xl opacity-0 animate-fade-in">
            Training Programs
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in animate-delay-100">
            Select the perfect program to kickstart your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={plan.delay}
              showPrice={plan.showPrice}
            />
          ))}
        </div>

        <div id="cta" className="mt-24 max-w-3xl mx-auto text-center">
          <div className="glass-card p-8 md:p-10 opacity-0 animate-fade-in animate-delay-500">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl mb-4">
              Ready to Transform Your Fitness?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our community of fitness enthusiasts in Karve Nagar, Pune.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="btn-primary">
                Book a Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              No commitment required. Experience our studio first-hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
