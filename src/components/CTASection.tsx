
import React from "react";
import { Check, ArrowRight } from "lucide-react";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  delay = 0
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}) => {
  return (
    <div 
      className={`glass-card p-8 relative opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-fitkraft-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-fitkraft-950">₹{price}</span>
        <span className="text-fitkraft-600">/month</span>
      </div>
      <p className="text-fitkraft-700 mb-6">{description}</p>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-fitkraft-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`w-full text-center py-3 px-6 rounded-full font-medium transition-colors duration-300 ${
          isPopular
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-secondary text-fitkraft-900 hover:bg-secondary/90"
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
      title: "Basic Fitness",
      price: "1,999",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym facilities",
        "2 group classes per week",
        "Basic fitness assessment",
        "Access to locker rooms",
        "Validity: 1 month"
      ],
      isPopular: false,
      delay: 200
    },
    {
      title: "Premium Fitness",
      price: "2,999",
      description: "Comprehensive package for dedicated fitness enthusiasts",
      features: [
        "Unlimited gym access",
        "Unlimited group classes",
        "1 personal training session",
        "Nutritional consultation",
        "Body composition analysis",
        "Validity: 1 month"
      ],
      isPopular: true,
      delay: 300
    },
    {
      title: "Elite Membership",
      price: "3,999",
      description: "Complete solution for performance-focused fitness goals",
      features: [
        "24/7 gym access",
        "Unlimited group classes",
        "4 personal training sessions",
        "Customized workout plan",
        "Comprehensive nutrition plan",
        "Recovery support",
        "Validity: 1 month"
      ],
      isPopular: false,
      delay: 400
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-fitkraft-950 md:text-4xl opacity-0 animate-fade-in">
            Membership Plans
          </h2>
          <p className="text-fitkraft-700 text-lg opacity-0 animate-fade-in animate-delay-100">
            Select the perfect package to kickstart your fitness journey at FitKraft Studio
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
            />
          ))}
        </div>

        <div id="cta" className="mt-32 max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-12 opacity-0 animate-fade-in animate-delay-500">
            <h2 className="font-display text-3xl font-bold text-fitkraft-950 md:text-4xl mb-6">
              Ready to Transform Your Fitness?
            </h2>
            <p className="text-fitkraft-700 text-lg mb-8">
              Join hundreds of satisfied members who have revolutionized their fitness journey with FitKraft Studio in Karve Nagar, Pune.
            </p>
            <a href="#" className="btn-primary text-lg px-8 py-4">
              Book a Free Trial Class <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="text-fitkraft-600 mt-4 text-sm">
              No commitment required. Experience our studio first-hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
