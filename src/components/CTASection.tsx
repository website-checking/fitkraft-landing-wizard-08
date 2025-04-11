
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
      className={`glass-card p-6 relative opacity-0 animate-fade-in h-full flex flex-col ${isPopular ? 'border-t-4 border-primary' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="absolute -top-3 right-3 bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-full shadow-md">
          Popular
        </div>
      )}
      <h3 className="text-xl font-extrabold text-foreground mb-2">{title}</h3>
      {showPrice && price ? (
        <div className="mb-3">
          <span className="text-2xl font-extrabold text-primary">₹{price}</span>
          <span className="text-foreground/70 text-sm font-medium">/month</span>
        </div>
      ) : (
        <div className="mb-3 h-8 flex items-center">
          <span className="text-foreground/70 text-sm font-medium">Contact for pricing</span>
        </div>
      )}
      <p className="text-foreground/80 text-sm font-medium mb-3">{description}</p>
      <ul className="mb-5 space-y-2 text-sm flex-grow">
        {features.slice(0, 4).map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-foreground/80 font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#cta"
        className={`w-full text-center py-2 px-4 rounded-full text-sm font-medium transition-colors duration-300 ${
          isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
        }`}
      >
        Get Started
      </a>
    </div>
  );
};

const CTASection = () => {
  const pricingPlans = [
    {
      title: "Batch Training",
      price: "2,500",
      description: "Group training sessions",
      features: [
        "5 days weekly workouts",
        "Strength & cardio training",
        "Morning & evening batches",
        "Community motivation"
      ],
      isPopular: true,
      delay: 200,
      showPrice: true
    },
    {
      title: "Buddy Training",
      description: "Train with friends",
      features: [
        "Small group (2-3 people)",
        "Custom workout plans",
        "Flexible scheduling",
        "Mutual accountability"
      ],
      isPopular: false,
      delay: 300,
      showPrice: false
    },
    {
      title: "Personal Training",
      description: "One-on-one sessions",
      features: [
        "45-60 minute sessions",
        "Personalized attention",
        "Custom programming",
        "Nutrition guidance"
      ],
      isPopular: false,
      delay: 400,
      showPrice: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="font-display mb-3 text-3xl font-extrabold text-foreground md:text-4xl opacity-0 animate-fade-in">
            Training <span className="text-primary drop-shadow-sm">Programs</span>
          </h2>
          <p className="text-foreground/80 font-medium opacity-0 animate-fade-in animate-delay-100">
            Choose your fitness path
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

        <div id="cta" className="mt-20 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fade-in animate-delay-500">
            <div className="glass-card p-8 flex flex-col justify-center border-l-4 border-primary">
              <h2 className="font-display text-2xl font-extrabold text-foreground mb-3">
                Start Your Journey
              </h2>
              <p className="text-foreground/80 font-medium text-sm mb-5">
                Join our fitness community in Karve Nagar, Pune.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a href="#" className="btn-primary">
                  Book a Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="/contact" className="btn-secondary">
                  Contact Us <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="glass-card p-0 overflow-hidden shadow-lg border-r-4 border-primary">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="FitKraft Training"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
