
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
      className={`glass-card p-8 relative opacity-0 animate-fade-in`}
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
          <span className="text-4xl font-bold text-foreground">₹{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      ) : (
        <div className="mb-4 h-10 flex items-center">
          <span className="text-muted-foreground">Contact for pricing</span>
        </div>
      )}
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`w-full text-center py-3 px-6 rounded-full font-medium transition-colors duration-300 ${
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
      description: "Join our group training sessions 5 days a week",
      features: [
        "5 days of workouts per week",
        "Varied training styles (strength, cardio, core, etc.)",
        "Morning & evening batch options",
        "Online options available",
        "Community motivation",
        "Experienced trainers"
      ],
      isPopular: true,
      delay: 200,
      showPrice: true
    },
    {
      title: "Buddy Training",
      description: "Train with 2-3 friends or family members",
      features: [
        "Group of 2-3 people training together",
        "Customized workout plans",
        "Mutual motivation and accountability",
        "Flexible scheduling options",
        "Cost-effective personal training alternative",
        "Fun and engaging environment"
      ],
      isPopular: false,
      delay: 300,
      showPrice: false
    },
    {
      title: "Personal Training",
      description: "One-on-one focused training sessions",
      features: [
        "45-60 minute dedicated sessions",
        "Fully personalized attention",
        "Custom workout programming",
        "Nutrition guidance included",
        "Progress tracking",
        "Health-specific training available"
      ],
      isPopular: false,
      delay: 400,
      showPrice: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-foreground md:text-4xl opacity-0 animate-fade-in">
            Training Programs
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in animate-delay-100">
            Select the perfect program to kickstart your fitness journey at FitKraft Studio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

        <div id="cta" className="mt-32 max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-12 opacity-0 animate-fade-in animate-delay-500">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
              Ready to Transform Your Fitness?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join our community of fitness enthusiasts who have revolutionized their health with FitKraft Studio in Karve Nagar, Pune.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="btn-primary text-lg px-8 py-4">
                Book a Free Trial Class <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
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
