
import { FlameIcon, Clock, Target, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

// Desktop Feature Card
const DesktopFeatureCard = ({
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
    <div className="overflow-hidden shadow-md relative flex flex-col h-full border-t border-gray-200 hover:bg-gray-50/80">
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

      {/* Card header with icon and title */}
      <div className="p-4 pb-3 flex items-center">
        <div className="relative mr-4">
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
            <div className="text-primary">{icon}</div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-foreground text-base uppercase tracking-wider">{title}</h3>
        </div>
      </div>

      {/* Card body with description */}
      <div className="px-4 pb-4">
        <p className="text-foreground/70 text-sm">{description}</p>

        {/* Nike/Adidas-inspired indicator */}
        <div className="mt-4 h-0.5 w-8 bg-primary group-hover:w-12 transition-all duration-300"></div>
      </div>
    </div>
  );
};

// Mobile Feature Card (Nike/Adidas style)
const MobileFeatureCard = ({
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
      className="opacity-0 animate-fade-in relative h-full bg-background shadow-md rounded-sm overflow-hidden"
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      {image && (
        <div className="w-full overflow-hidden relative">
          {/* Nike/Adidas-style gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>

          <img
            src={image}
            alt={title}
            className="w-full h-36 object-cover"
          />

          {/* Nike/Adidas-style title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
            <h3 className="text-white text-base font-black uppercase tracking-tight drop-shadow-md">{title}</h3>
          </div>
        </div>
      )}

      {/* Content section - Nike/Adidas style */}
      <div className="p-3 pt-5 bg-background relative">
        {/* Nike/Adidas-style icon badge in original position */}
        <div className="absolute left-3 -top-4 h-8 w-8 rounded-full bg-background flex items-center justify-center text-primary border border-gray-100 shadow-md">
          {icon}
        </div>

        <div className="w-10 h-0.5 bg-primary mb-2"></div>
        <p className="text-foreground/90 text-xs leading-tight">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const animatedElements = section.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const animatedElements = section.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
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
    <section id="features" className="py-12 md:py-20 bg-background relative" ref={sectionRef} style={{ scrollMarginTop: '100px' }}>
      {/* Nike/Adidas-inspired background elements - Desktop only */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full bg-primary/5"></div>
        <div className="absolute top-1/4 right-0 w-[150px] h-[500px] bg-primary/5 -rotate-45"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Desktop Header */}
        <div className="hidden md:block mx-auto max-w-3xl mb-12">
          <h2 className="font-display mb-6 text-6xl font-black text-foreground uppercase tracking-tight leading-none text-center opacity-0 animate-fade-in animate-on-scroll">
            KEY FEATURES
            <div className="w-20 h-1 bg-primary mt-4 mx-auto"></div>
          </h2>
          <p className="text-foreground/80 font-bold uppercase tracking-wider text-sm text-center opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Transform your fitness journey with expert guidance
          </p>
        </div>

        {/* Mobile Header - Nike/Adidas style */}
        <div className="md:hidden mb-10">
          <div className="relative">
            {/* Nike/Adidas-style large title */}
            <h2 className="font-display text-5xl font-black text-foreground uppercase tracking-tight leading-none opacity-0 animate-fade-in animate-on-scroll">
              KEY FEATURES
            </h2>

            {/* Nike/Adidas-style accent line */}
            <div className="w-16 h-1 bg-primary mt-3 mb-4"></div>

            {/* Nike/Adidas-style subtitle */}
            <p className="text-foreground/90 font-bold uppercase tracking-wider text-sm opacity-0 animate-fade-in animate-delay-100 animate-on-scroll max-w-xs">
              Transform your fitness journey with expert guidance
            </p>

            {/* Nike/Adidas-style decorative element */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-primary/30 opacity-50"></div>
          </div>
        </div>

        {/* Desktop Grid Layout - Matching Testimonials grid */}
        <div className="hidden md:block opacity-0 animate-fade-in animate-delay-200 animate-on-scroll">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => (
              <DesktopFeatureCard
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

        {/* Mobile Nike/Adidas Style Layout - 2x2 Grid */}
        <div className="md:hidden opacity-0 animate-fade-in animate-delay-200 animate-on-scroll">
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <MobileFeatureCard
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

        {/* Nike/Adidas-inspired divider - Desktop only */}
        <div className="hidden md:flex mt-12 max-w-md mx-auto items-center gap-4">
          <div className="h-0.5 flex-grow bg-primary/20"></div>
          <div className="h-2 w-2 bg-primary"></div>
          <div className="h-0.5 flex-grow bg-primary/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
