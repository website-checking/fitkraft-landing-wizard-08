const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] animate-pulse-slow"></div>
        <div className="absolute top-3/4 left-1/2 w-[200px] h-[200px] rounded-full bg-primary/5 blur-[40px]"></div>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] -left-20 w-[100px] h-[400px] bg-primary/10 rotate-[45deg] transform-gpu"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl mb-20">
          <div className="flex items-center mb-4 opacity-0 animate-fade-in animate-on-scroll">
            <div className="w-12 h-[2px] bg-primary mr-3"></div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm">WHO WE ARE</p>
          </div>
          <h2 className="font-display mb-6 text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-none opacity-0 animate-fade-in animate-on-scroll">
            ABOUT US
            <div className="w-20 h-1 bg-primary mt-4"></div>
          </h2>
          <p className="text-foreground/80 font-bold uppercase tracking-wider text-sm opacity-0 animate-fade-in animate-delay-100 animate-on-scroll max-w-xl">
            Your fitness journey starts with a team that cares
          </p>
        </div>

        {/* Main content - Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center mb-20 animate-on-scroll">
          {/* Left column - Image with enhanced styling */}
          <div className="relative group md:col-span-7">
            <div className="overflow-hidden shadow-xl relative transform transition-all duration-500 z-10">
              {/* Nike/Adidas-inspired overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent z-10 pointer-events-none"></div>

              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="FitKraft Studio Team"
                className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-0 left-0 bg-gray-800 px-4 py-2 z-20">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground uppercase tracking-wider text-xs">Since 2018</span>
              </div>
            </div>
          </div>

          {/* Right column - Text content with enhanced styling */}
          <div className="flex flex-col space-y-6 md:col-span-5">
            <h3 className="text-2xl md:text-4xl font-black text-foreground uppercase tracking-tight">OUR STORY</h3>
            <div className="w-12 h-1 bg-primary"></div>
            <p className="text-foreground/80 font-medium text-base md:text-lg leading-relaxed">
              Founded in 2018, FitKraft Studio has been transforming fitness journeys in Karve Nagar, Pune.
              Our mission is to provide personalized fitness solutions that fit your lifestyle and goals.
            </p>
            <p className="text-foreground/80 font-medium text-base md:text-lg leading-relaxed">
              We believe in building strong, sustainable habits rather than promoting quick fixes.
              Our expert trainers work closely with you to develop programs that evolve as you progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
