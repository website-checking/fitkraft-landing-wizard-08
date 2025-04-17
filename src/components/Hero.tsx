
import React, { useEffect, useRef } from "react";
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
    <section id="hero" className="relative overflow-hidden pt-20 pb-8 md:pt-32 md:pb-12">
      {/* Enhanced background effects */}
      <div className="spotlight animate-spotlight" />
      <div ref={spotlightRef} className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-[45rem] w-[45rem] rounded-full bg-primary/15 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 h-[45rem] w-[45rem] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 h-[35rem] w-[35rem] rounded-full bg-primary/10 blur-[80px]"></div>
      </div>

      {/* Enhanced diagonal accent lines */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-[200px] h-[700px] bg-primary/15 rotate-[30deg] transform-gpu"></div>
        <div className="absolute top-[20%] -left-20 w-[100px] h-[400px] bg-primary/10 rotate-[45deg] transform-gpu"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center order-2 md:order-1 mt-8 md:mt-0 mb-6 md:mb-0 md:pr-8">
            {/* Location badge */}
            <div className="inline-flex items-center rounded-full bg-secondary/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-secondary-foreground mb-6 w-fit opacity-0 animate-fade-in shadow-sm border border-primary/10">
              <MapPin className="h-4 w-4 text-primary mr-2" />
              Karve Nagar, Pune
            </div>

            {/* Main heading with enhanced styling */}
            <h1 className="font-display mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-7xl opacity-0 animate-fade-in animate-delay-100">
              <div className="flex items-center mb-2">
                <img src="/images/fitkraft-logo.png" alt="FitKraft" className="h-10 md:h-12 mr-3" />
              </div>
              <span className="text-primary drop-shadow-md relative inline-block">
                FitKraft
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/40 rounded-full"></span>
              </span> Studio
            </h1>

            {/* Tagline with enhanced styling */}
            <div className="mb-8 opacity-0 animate-fade-in animate-delay-200">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 flex items-center">
                Transform Your Fitness Journey
              </h2>
              <p className="text-foreground/90 font-medium text-base md:text-lg leading-relaxed">
                We advocate holistic fitness — strong over skinny, sustainable over crash diets, and consistency over quick fixes. Join our supportive community where being fit inside out is what we strive for.
              </p>
            </div>

            {/* CTA buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in animate-delay-300">
              <a href="#contact" className="btn-primary group w-full sm:w-auto text-center justify-center">
                Book a Free Class
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#pricing" className="btn-secondary w-full sm:w-auto text-center justify-center">
                View Programs
              </a>
            </div>
          </div>

          {/* Right Column - Enhanced Image */}
          <div ref={imageRef} className="order-1 md:order-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative mx-auto max-w-md md:max-w-none">
              {/* Main image with enhanced styling */}
              <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 relative h-[300px] md:h-[450px] transform transition-all duration-500 hover:shadow-primary/20 hover:scale-[1.01]">
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/5 z-10 pointer-events-none mix-blend-overlay"></div>

                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2675&q=80"
                  alt="FitKraft Studio in Pune"
                  className="w-full h-full object-cover rounded-2xl transform hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Enhanced decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-md z-0 animate-pulse-slow"></div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/40 rounded-full blur-md z-0 animate-float"></div>

                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-primary rotate-45 transform origin-top-right translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-12 md:mt-16 mb-4 opacity-0 animate-fade-in animate-delay-400">
          <div className="glass-panel rounded-2xl p-6 md:p-8 backdrop-blur-md border border-primary/20 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger-children">
              <div className="flex flex-col items-center p-4 text-center relative group transition-all duration-300 hover:bg-primary/5 rounded-xl">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
                <Clock className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-extrabold text-primary mb-1 drop-shadow-sm">5+</div>
                <div className="text-sm font-medium text-foreground/80">Years Experience</div>
              </div>

              <div className="flex flex-col items-center p-4 text-center relative group transition-all duration-300 hover:bg-primary/5 rounded-xl">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
                <Users className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-extrabold text-primary mb-1 drop-shadow-sm">500+</div>
                <div className="text-sm font-medium text-foreground/80">Happy Clients</div>
              </div>

              <div className="flex flex-col items-center p-4 text-center relative group transition-all duration-300 hover:bg-primary/5 rounded-xl">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
                <svg className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 15.5C6.5 15.5 7 13.5 12 13.5C17 13.5 17.5 15.5 17.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M16.5 6.5C16.5 8.15685 14.6569 9.5 12.5 9.5C10.3431 9.5 8.5 8.15685 8.5 6.5C8.5 4.84315 10.3431 3.5 12.5 3.5C14.6569 3.5 16.5 4.84315 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 17.5C20 19.9853 16.4183 22 12 22C7.58172 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="text-3xl font-extrabold text-primary mb-1 drop-shadow-sm">6</div>
                <div className="text-sm font-medium text-foreground/80">Training Programs</div>
              </div>

              <div className="flex flex-col items-center p-4 text-center relative group transition-all duration-300 hover:bg-primary/5 rounded-xl">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div>
                <Star className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-extrabold text-primary mb-1 drop-shadow-sm">4.9</div>
                <div className="text-sm font-medium text-foreground/80">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;