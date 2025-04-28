

import { Check, ArrowRight, Dumbbell, Users, Target } from "lucide-react";

// Program Card Component - simplified without expand/collapse functionality
const ProgramCard = ({
  title,
  price,
  description,
  features,
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
  image: string;
  isPopular?: boolean;
  delay?: number;
  showPrice?: boolean;
  onSelect: (title: string) => void;
}) => {
  return (
    <div
      className="bg-white shadow-sm overflow-hidden relative opacity-0 animate-fade-in h-full flex flex-col group transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Nike/Adidas-inspired popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 z-20">
          Popular
        </div>
      )}

      {/* Program image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none"></div>
        <div className="w-full h-[250px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Nike/Adidas-inspired overlay content on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">{title}</h3>

          {showPrice && price ? (
            <div className="mb-2 flex items-center">
              <span className="text-2xl font-black text-white">₹{price}</span>
              <span className="text-white/90 text-sm font-medium ml-1">/month</span>
            </div>
          ) : (
            <div className="mb-2">
              <span className="text-white/90 text-sm uppercase tracking-wider font-bold">Contact for pricing</span>
            </div>
          )}
        </div>
      </div>

      {/* Nike/Adidas-inspired content section */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-700 font-medium mb-6 h-[80px]">{description}</p>

        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Key Features
          </h4>
          <ul className="space-y-3 h-[160px]">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <button
            className="w-full bg-primary text-primary-foreground py-3 px-5 text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center group"
            onClick={() => onSelect(title)}
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
    <section id="pricing" className="py-16 md:py-24 relative" style={{ scrollMarginTop: '100px' }}>
      {/* Nike/Adidas-inspired subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background to-background/90"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[80px]"></div>
      </div>

      {/* Nike/Adidas-inspired diagonal accent */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[150px] h-[800px] bg-primary/5 -rotate-45 transform-gpu"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Desktop header */}
        <div className="hidden md:block mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display mb-6 text-6xl font-black uppercase tracking-tight leading-none text-center text-foreground opacity-0 animate-fade-in animate-on-scroll">
            Training Programs
            <div className="w-20 h-1 bg-primary mt-4 mx-auto"></div>
          </h2>
          <p className="text-foreground/80 font-bold uppercase tracking-wider text-sm text-center opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Choose the perfect program for your fitness journey
          </p>
        </div>

        {/* Mobile Nike/Adidas style header */}
        <div className="md:hidden mb-10">
          <div className="relative">
            {/* Nike/Adidas-style large title */}
            <h2 className="font-display text-4xl font-black text-foreground uppercase tracking-tight leading-none opacity-0 animate-fade-in animate-on-scroll">
              Training Programs
            </h2>

            {/* Nike/Adidas-style accent line */}
            <div className="w-16 h-1 bg-primary mt-3 mb-4"></div>

            {/* Nike/Adidas-style subtitle */}
            <p className="text-foreground/90 font-bold uppercase tracking-wider text-sm opacity-0 animate-fade-in animate-delay-100 animate-on-scroll max-w-xs">
              Choose the perfect program for your fitness journey
            </p>

            {/* Nike/Adidas-style decorative element */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-primary/30 opacity-50"></div>
          </div>
        </div>

        {/* Desktop layout - 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto animate-on-scroll">
          {trainingPrograms.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              price={program.price}
              description={program.description}
              features={program.features}
              benefits={program.benefits}
              schedule={program.schedule}
              image={program.image}
              isPopular={program.isPopular}
              delay={program.delay}
              showPrice={program.showPrice}
              onSelect={handleProgramSelect}
            />
          ))}
        </div>

        {/* Mobile layout - Nike/Adidas style vertical cards */}
        <div className="md:hidden animate-on-scroll space-y-6">
          {trainingPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-sm overflow-hidden relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${program.delay}ms` }}
            >
              {/* Program image with overlay */}
              <div className="relative">
                {/* Nike/Adidas-style gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>

                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />

                {/* Popular badge */}
                {program.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 z-20">
                    Popular
                  </div>
                )}

                {/* Title overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight drop-shadow-md">{program.title}</h3>

                  {/* Price info */}
                  {program.showPrice && program.price ? (
                    <div className="flex items-center mt-1">
                      <span className="text-lg font-black text-white">₹{program.price}</span>
                      <span className="text-white/90 text-xs font-medium ml-1">/month</span>
                    </div>
                  ) : (
                    <div className="mt-1">
                      <span className="text-white/90 text-xs uppercase tracking-wider font-bold">Contact for pricing</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content section - Nike/Adidas style */}
              <div className="p-4 bg-background">
                {/* Yellow accent line */}
                <div className="w-12 h-0.5 bg-primary mb-3"></div>

                <p className="text-foreground/90 text-sm mb-4">{program.description}</p>

                {/* Key features */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground mb-4 border-b border-gray-200 pb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Started button */}
                <button
                  className="w-full bg-primary text-primary-foreground py-3 px-5 text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center group"
                  onClick={() => handleProgramSelect(program.title)}
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
