
import { useEffect, useRef } from "react";
import { Star, Quote, ThumbsUp } from "lucide-react";

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

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Intersection Observer for animations
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

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background relative" ref={sectionRef}>
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
        <div className="mx-auto max-w-3xl mb-16">
          <div className="flex items-center justify-center mb-4 opacity-0 animate-fade-in animate-on-scroll">
            <div className="w-12 h-[2px] bg-primary mr-3"></div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm">SUCCESS STORIES</p>
          </div>
          <h2 className="font-display mb-6 text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-none text-center opacity-0 animate-fade-in animate-on-scroll">
            TESTIMONIALS
            <div className="w-20 h-1 bg-primary mt-4 mx-auto"></div>
          </h2>
          <p className="text-foreground/80 font-bold uppercase tracking-wider text-sm text-center opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Hear from our community members
          </p>

          {/* Decorative quote marks */}
          <div className="relative mt-8 mb-4 opacity-0 animate-fade-in animate-delay-150 animate-on-scroll">
            <Quote className="h-8 w-8 text-primary/20 absolute -top-4 left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Static Testimonials Grid */}
        <div className="opacity-0 animate-fade-in animate-delay-200 animate-on-scroll">
          {/* Grid layout for testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="overflow-hidden shadow-md relative flex flex-col h-full border-t border-gray-200 hover:bg-gray-50/80">
                {/* Card header with avatar and info */}
                <div className="p-4 pb-3 flex items-center">
                  <div className="relative mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-gray-800 flex items-center justify-center text-white">
                      <Quote className="h-3 w-3" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-foreground/70 text-xs">{testimonial.role}</p>
                    <div className="inline-flex items-center px-1 py-0.5 text-[10px] text-primary mt-1 uppercase tracking-wider font-bold">
                      {testimonial.program}
                    </div>
                  </div>
                </div>

                {/* Card body with testimonial content */}
                <div className="px-4 pb-4 flex-grow">
                  <blockquote className="text-foreground/80 text-xs md:text-sm leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </div>

                {/* Card footer with rating and achievement */}
                <div className="px-4 pb-4 flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center text-[10px] md:text-xs text-foreground/70">
                    <ThumbsUp className="h-3 w-3 text-primary mr-1" />
                    {testimonial.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
