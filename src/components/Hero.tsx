
import { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Star, Users, Clock } from "lucide-react";

const Hero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for spotlight
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !imageRef.current) return;

      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;

      // Move spotlight with mouse
      spotlightRef.current.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;

      // Subtle image movement
      imageRef.current.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden pt-16 pb-6 md:pt-20 md:pb-8 min-h-[85vh] flex items-center">
      {/* Nike/Adidas-inspired background effects */}
      <div className="spotlight animate-spotlight" />
      <div ref={spotlightRef} className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-[45rem] w-[45rem] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 h-[45rem] w-[45rem] rounded-full bg-primary/5 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 h-[35rem] w-[35rem] rounded-full bg-primary/5 blur-[80px]"></div>
      </div>

      {/* Nike/Adidas-inspired diagonal accent lines */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-[150px] h-[600px] bg-primary/10 rotate-[30deg] transform-gpu"></div>
        <div className="absolute top-[20%] -left-20 w-[80px] h-[400px] bg-primary/5 rotate-[45deg] transform-gpu"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
          {/* Left Column - Text Content - Nike/Adidas-inspired */}
          <div className="flex flex-col justify-center order-2 md:order-1 mt-4 md:mt-0 mb-4 md:mb-0 md:ml-0 md:col-span-6">
            {/* Location badge - Nike/Adidas-inspired */}
            <div className="inline-flex items-center px-0 py-0 text-xs md:text-sm font-bold text-primary mb-3 md:mb-6 w-fit opacity-0 animate-fade-in tracking-widest">
              <div className="w-8 h-[2px] bg-primary mr-2"></div>
              KARVE NAGAR, PUNE
            </div>

            {/* Main heading with Nike/Adidas-inspired styling */}
            <h1 className="font-display mb-3 md:mb-6 text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-foreground opacity-0 animate-fade-in animate-delay-100 uppercase leading-none">
              <span className="text-primary relative inline-block">
                FIT<span className="text-foreground">KRAFT</span>
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold tracking-normal mt-2">STUDIO</span>
              <div className="w-20 h-1 bg-primary mt-4"></div>
            </h1>

            {/* Tagline with Nike/Adidas-inspired styling */}
            <p className="mb-8 text-foreground/80 text-sm md:text-base max-w-md opacity-0 animate-fade-in animate-delay-200 uppercase tracking-wider font-bold">
              We aim at achieving holistic fitness. We advocate strong over skinny, sustainable diets over crash diets, consistency and commitment.
            </p>

            {/* CTA buttons with Nike/Adidas-inspired styling */}
            <div className="flex flex-col sm:flex-row items-start gap-6 opacity-0 animate-fade-in animate-delay-300">
              <a href="#contact" className="btn-primary group w-full sm:w-auto text-center justify-center">
                BOOK A FREE CLASS
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#pricing" className="btn-secondary w-full sm:w-auto text-center justify-center">
                TRAINING PROGRAMS
              </a>
            </div>
          </div>

          {/* Right Column - Nike/Adidas-inspired Image */}
          <div ref={imageRef} className="order-1 md:order-2 opacity-0 animate-fade-in animate-delay-200 md:col-span-6 mt-6 md:mt-0">
            <div className="relative mx-auto max-w-md md:max-w-none">
              {/* Main image with Nike/Adidas-inspired styling */}
              <div className="overflow-hidden shadow-xl relative h-[180px] md:h-[500px] transform transition-all duration-500">
                {/* Nike/Adidas-inspired overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent z-10 pointer-events-none"></div>

                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2675&q=80"
                  alt="FitKraft Studio in Pune"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Nike/Adidas-inspired decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Nike/Adidas-inspired Stats Section */}
        <div className="mt-8 md:mt-16 mb-4 opacity-0 animate-fade-in animate-delay-400">
          <div className="p-3 md:p-8 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 stagger-children">
              <div className="flex flex-col items-center p-2 md:p-4 text-center relative group transition-all duration-300 hover:bg-primary/5">
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-5xl font-black text-primary mb-0 md:mb-1">5+</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70">Years Experience</div>
              </div>

              <div className="flex flex-col items-center p-2 md:p-4 text-center relative group transition-all duration-300 hover:bg-primary/5">
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                <Users className="h-6 w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-5xl font-black text-primary mb-0 md:mb-1">500+</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70">Happy Clients</div>
              </div>

              <div className="flex flex-col items-center p-2 md:p-4 text-center relative group transition-all duration-300 hover:bg-primary/5">
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                <svg className="h-6 w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 15.5C6.5 15.5 7 13.5 12 13.5C17 13.5 17.5 15.5 17.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M16.5 6.5C16.5 8.15685 14.6569 9.5 12.5 9.5C10.3431 9.5 8.5 8.15685 8.5 6.5C8.5 4.84315 10.3431 3.5 12.5 3.5C14.6569 3.5 16.5 4.84315 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 17.5C20 19.9853 16.4183 22 12 22C7.58172 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="text-3xl md:text-5xl font-black text-primary mb-0 md:mb-1">6</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70">Training Programs</div>
              </div>

              <div className="flex flex-col items-center p-2 md:p-4 text-center relative group transition-all duration-300 hover:bg-primary/5">
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                <Star className="h-6 w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-5xl font-black text-primary mb-0 md:mb-1">4.9</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/70">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;