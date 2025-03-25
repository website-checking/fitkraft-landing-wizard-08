
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      
      spotlightRef.current.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="spotlight animate-spotlight" />
      <div ref={spotlightRef} className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-[50rem] w-[50rem] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 h-[50rem] w-[50rem] rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground mb-8 opacity-0 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Premier Fitness Studio in Karve Nagar, Pune
          </div>
          <h1 className="font-display mb-6 text-4xl font-bold tracking-tight text-fitkraft-950 md:text-5xl lg:text-6xl opacity-0 animate-fade-in animate-delay-100">
            Transform Your Body at{" "}
            <span className="text-primary">FitKraft</span> Studio
          </h1>
          <p className="mb-10 text-lg text-fitkraft-700 md:text-xl opacity-0 animate-fade-in animate-delay-200">
            Join Pune's leading fitness community offering personalized strength training, 
            yoga classes, and aerobics programs for all fitness levels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-300">
            <a href="#cta" className="btn-primary">
              Book a Free Class
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#features" className="btn-secondary">
              Explore Our Services
            </a>
          </div>
          
          <div className="mt-16 opacity-0 animate-fade-in animate-delay-400">
            <div className="glass-panel rounded-2xl mx-auto overflow-hidden max-w-4xl">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2675&q=80"
                alt="FitKraft Studio in Pune"
                className="w-full h-auto rounded shadow-lg transform hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
