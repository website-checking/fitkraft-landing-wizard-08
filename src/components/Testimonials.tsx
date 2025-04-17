
import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ThumbsUp, ArrowRight } from "lucide-react";

// Enhanced testimonials with more detailed information
const testimonials = [
  {
    id: 1,
    content: "Fitkraft is your space of positive energy where progress meets support, and every step of your fitness journey feels right. The trainers are incredibly knowledgeable and create personalized plans that actually work.",
    author: "Priya Sharma",
    role: "Member since 2022",
    program: "Personal Training",
    achievement: "Lost 15kg in 6 months",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    content: "FitKraft keeps workouts fresh, personal, and highly motivating. As someone with a busy schedule, I appreciate how they maximize my limited workout time with efficient routines that deliver results.",
    author: "Rahul Desai",
    role: "Software Engineer",
    program: "Batch Training",
    achievement: "Improved strength by 40%",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    featured: false
  },
  {
    id: 3,
    content: "It's been two months at FitKraft, and I'm loving the energy here. The yoga classes have significantly improved my flexibility and mental clarity. The instructors are attentive and supportive.",
    author: "Anjali Patil",
    role: "Yoga Enthusiast",
    program: "Yoga Classes",
    achievement: "Increased flexibility",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
    featured: false
  },
  {
    id: 4,
    content: "FitKraft's reform program worked wonders for me - 12 kgs gone in just 3 months! The combination of personalized training and nutrition guidance made all the difference in my weight loss journey.",
    author: "Vikram Joshi",
    role: "Regular Member",
    program: "Weight Loss Program",
    achievement: "Lost 12kg in 3 months",
    avatar: "https://randomuser.me/api/portraits/men/69.jpg",
    rating: 5,
    featured: true
  }
];

// Define interfaces for type safety
interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  program: string;
  achievement: string;
  avatar: string;
  rating: number;
  featured: boolean;
}

// Testimonial Card Component
const TestimonialCard = ({
  testimonial,
  onClick,
  isExpanded = false
}: {
  testimonial: Testimonial;
  onClick: () => void;
  isExpanded?: boolean;
}) => {
  return (
    <div
      className={`glass-panel rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20 relative flex flex-col group transition-all duration-500 cursor-pointer ${isExpanded ? 'md:col-span-2 md:row-span-2' : ''}`}
      onClick={onClick}
    >
      {/* Card header with avatar and info */}
      <div className="p-6 pb-4 flex items-center">
        <div className="relative mr-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
            <Quote className="h-3 w-3" />
          </div>
        </div>
        <div>
          <p className="font-bold text-foreground text-base group-hover:text-primary transition-colors duration-300">{testimonial.author}</p>
          <p className="text-foreground/70 text-xs">{testimonial.role}</p>

          {/* Program badge */}
          <div className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary mt-1">
            {testimonial.program}
          </div>
        </div>

        {/* Rating stars */}
        <div className="ml-auto flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-primary text-primary" />
          ))}
        </div>
      </div>

      {/* Achievement badge - only shown on expanded cards or featured cards */}
      {(isExpanded || testimonial.featured) && (
        <div className="px-6 pb-3">
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <ThumbsUp className="h-3.5 w-3.5 text-primary" />
            <span className="text-foreground/90">{testimonial.achievement}</span>
          </div>
        </div>
      )}

      {/* Testimonial content */}
      <div className="px-6 pb-6 flex-grow">
        <blockquote className="text-sm text-foreground/90 leading-relaxed font-medium">
          "{isExpanded ? testimonial.content : testimonial.content.length > 120 ? `${testimonial.content.substring(0, 120)}...` : testimonial.content}"
        </blockquote>
      </div>

      {/* Read more indicator - only shown when not expanded and content is truncated */}
      {!isExpanded && testimonial.content.length > 120 && (
        <div className="px-6 pb-4">
          <div className="text-xs text-primary font-medium flex items-center">
            Read more <ArrowRight className="ml-1 h-3 w-3" />
          </div>
        </div>
      )}
    </div>
  );
};

// Featured Testimonial Component
const FeaturedTestimonial = ({
  testimonial,
  onClick
}: {
  testimonial: Testimonial;
  onClick: () => void;
}) => {
  return (
    <div
      className="glass-panel rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 relative flex flex-col md:flex-row group transition-all duration-500 cursor-pointer md:col-span-2 hover:shadow-primary/10"
      onClick={onClick}
    >
      {/* Left side - Avatar and info */}
      <div className="md:w-1/3 p-6 flex flex-col justify-between relative">
        <div>
          <div className="flex items-center mb-4">
            <div className="relative mr-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                <Quote className="h-3 w-3" />
              </div>
            </div>
            <div>
              <p className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">{testimonial.author}</p>
              <p className="text-foreground/70 text-sm">{testimonial.role}</p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Program badge */}
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              {testimonial.program}
            </div>

            {/* Achievement badge */}
            <div className="flex items-center gap-2 text-sm font-medium">
              <ThumbsUp className="h-4 w-4 text-primary" />
              <span className="text-foreground/90">{testimonial.achievement}</span>
            </div>
          </div>
        </div>

        {/* Rating stars */}
        <div className="flex mt-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
      </div>

      {/* Right side - Testimonial content */}
      <div className="md:w-2/3 p-6 md:p-8 bg-primary/5 flex items-center">
        <blockquote className="text-base md:text-lg text-foreground/90 leading-relaxed font-medium italic">
          "{testimonial.content}"
        </blockquote>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const totalTestimonials = testimonials.length;

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  // Handle autoplay
  useEffect(() => {
    if (autoplayEnabled) {
      autoplayIntervalRef.current = setInterval(() => {
        goToNext();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplayEnabled]);

  // Pause autoplay when user interacts with carousel
  const handleManualNavigation = (callback: () => void) => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      setAutoplayEnabled(false);

      // Resume autoplay after 10 seconds of inactivity
      setTimeout(() => {
        setAutoplayEnabled(true);
      }, 10000);
    }
    callback();
  };

  // Calculate indices for visible testimonials
  const getVisibleIndices = () => {
    const indices = [];
    indices.push(currentIndex);
    indices.push((currentIndex + 1) % totalTestimonials);
    indices.push((currentIndex + 2) % totalTestimonials);
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background relative" ref={sectionRef}>
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] animate-pulse-slow"></div>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] -right-20 w-[100px] h-[400px] bg-primary/10 rotate-[45deg] transform-gpu"></div>
        <div className="absolute bottom-[20%] -left-20 w-[150px] h-[500px] bg-primary/10 rotate-[30deg] transform-gpu"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-extrabold text-foreground md:text-5xl opacity-0 animate-fade-in animate-on-scroll">
            <span className="text-primary drop-shadow-md relative inline-block">
              Testimonials
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/40 rounded-full"></span>
            </span>
          </h2>
          <p className="text-foreground/80 font-medium text-lg opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Hear from our community members
          </p>

          {/* Decorative quote marks */}
          <div className="relative mt-8 mb-4 opacity-0 animate-fade-in animate-delay-150 animate-on-scroll">
            <Quote className="h-8 w-8 text-primary/20 absolute -top-4 left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="relative mb-16 opacity-0 animate-fade-in animate-delay-200 animate-on-scroll">
          {/* Main featured testimonial */}
          <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 relative mb-8">
            <div className="md:grid md:grid-cols-3 items-stretch">
              {/* Left side - Avatar and info */}
              <div className="p-8 md:p-10 flex flex-col justify-between relative">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="relative mr-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                        <Quote className="h-3 w-3" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">{testimonials[currentIndex].author}</p>
                      <p className="text-foreground/70 text-sm">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Program badge */}
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      {testimonials[currentIndex].program}
                    </div>

                    {/* Achievement badge */}
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <ThumbsUp className="h-4 w-4 text-primary" />
                      <span className="text-foreground/90">{testimonials[currentIndex].achievement}</span>
                    </div>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex mt-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Right side - Testimonial content */}
              <div className="md:col-span-2 p-8 md:p-10 bg-primary/5 flex items-center">
                <blockquote className="text-base md:text-xl text-foreground/90 leading-relaxed font-medium italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mb-8">
            <button
              className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-300"
              onClick={() => handleManualNavigation(goToPrev)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Pagination indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'}`}
                  onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-300"
              onClick={() => handleManualNavigation(goToNext)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Preview of next testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleIndices.map((index, i) => (
              <div
                key={index}
                className={`glass-panel rounded-xl overflow-hidden shadow-md border border-primary/20 p-6 cursor-pointer transition-all duration-300 ${index === currentIndex ? 'ring-2 ring-primary' : 'opacity-80 hover:opacity-100'}`}
                onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
              >
                <div className="flex items-center mb-3">
                  <img
                    src={testimonials[index].avatar}
                    alt={testimonials[index].author}
                    className="w-10 h-10 rounded-full object-cover border border-primary mr-3"
                  />
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonials[index].author}</p>
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary mt-1">
                      {testimonials[index].program}
                    </div>
                  </div>
                </div>
                <blockquote className="text-xs text-foreground/90 line-clamp-2">
                  "{testimonials[index].content.substring(0, 80)}..."
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
