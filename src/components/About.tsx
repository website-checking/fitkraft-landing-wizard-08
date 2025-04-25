const About = () => {
  return (
    <section id="about" className="py-8 md:py-12 bg-background relative" style={{ scrollMarginTop: '100px' }}>
      {/* Enhanced background effects - Desktop only */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] animate-pulse-slow"></div>
        <div className="absolute top-3/4 left-1/2 w-[200px] h-[200px] rounded-full bg-primary/5 blur-[40px]"></div>
      </div>

      {/* Diagonal accent lines - Desktop only */}
      <div className="hidden md:block absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] -left-20 w-[100px] h-[400px] bg-primary/10 rotate-[45deg] transform-gpu"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section header - Desktop version */}
        <div className="hidden md:block mx-auto max-w-3xl mb-6">
          <h2 className="font-display mb-4 text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight leading-none opacity-0 animate-fade-in animate-on-scroll">
            ABOUT US
            <div className="w-20 h-1 bg-primary mt-4"></div>
          </h2>
          <p className="text-foreground/80 font-bold uppercase tracking-wider text-sm opacity-0 animate-fade-in animate-delay-100 animate-on-scroll max-w-xl">
            YOUR FITNESS JOURNEY STARTS WITH A TEAM THAT CARES
          </p>
        </div>

        {/* Section header - Mobile Nike/Adidas style */}
        <div className="md:hidden mb-10">
          <div className="relative">
            {/* Nike/Adidas-style large title */}
            <h2 className="font-display text-5xl font-black text-foreground uppercase tracking-tight leading-none opacity-0 animate-fade-in animate-on-scroll">
              ABOUT US
            </h2>

            {/* Nike/Adidas-style accent line */}
            <div className="w-16 h-1 bg-primary mt-3 mb-4"></div>

            {/* Nike/Adidas-style subtitle */}
            <p className="text-foreground/90 font-bold uppercase tracking-wider text-sm opacity-0 animate-fade-in animate-delay-100 animate-on-scroll max-w-xs">
              YOUR FITNESS JOURNEY STARTS WITH A TEAM THAT CARES
            </p>

            {/* Nike/Adidas-style decorative element */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-primary/30 opacity-50"></div>
          </div>
        </div>

        {/* Main content - Desktop version */}
        <div className="hidden md:grid grid-cols-2 gap-12 items-center mb-6 animate-on-scroll">
          {/* Left column - Image with enhanced styling */}
          <div className="relative group">
            <div className="overflow-hidden shadow-xl relative transform transition-all duration-500 z-10 max-h-[350px]">
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
                <span className="font-bold text-white uppercase tracking-wider text-xs">Since 2018</span>
              </div>
            </div>
          </div>

          {/* Right column - Text content with enhanced styling */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-bold text-foreground uppercase tracking-tight">OUR STORY</h3>
            <div className="w-12 h-1 bg-primary"></div>
            <p className="text-foreground/80 font-medium text-lg leading-relaxed">
              Founded in 2018, FitKraft Studio has been transforming fitness journeys in Karve Nagar, Pune.
              Our mission is to provide personalized fitness solutions that fit your lifestyle and goals.
            </p>
            <p className="text-foreground/80 font-medium text-lg leading-relaxed">
              We believe in building strong, sustainable habits rather than promoting quick fixes.
              Our expert trainers work closely with you to develop programs that evolve as you progress.
            </p>
          </div>
        </div>

        {/* Main content - Mobile Nike/Adidas style */}
        <div className="md:hidden animate-on-scroll">
          {/* Image with Nike/Adidas-inspired styling */}
          <div className="relative mb-6">
            <div className="overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="FitKraft Studio Team"
                className="w-full h-[200px] object-cover"
                loading="lazy"
              />

              {/* Overlay with badge */}
              <div className="absolute bottom-0 left-0 bg-black/70 px-3 py-1">
                <span className="font-bold text-white uppercase tracking-wider text-xs">SINCE 2018</span>
              </div>
            </div>
          </div>

          {/* Story content with Nike/Adidas-inspired styling */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">OUR STORY</h3>
            <div className="w-10 h-1 bg-primary my-3"></div>
            <p className="text-foreground/90 font-medium text-base leading-relaxed mb-3">
              Founded in 2018, FitKraft Studio has been transforming fitness journeys in Karve Nagar, Pune.
              Our mission is to provide personalized fitness solutions that fit your lifestyle and goals.
            </p>
            <p className="text-foreground/90 font-medium text-base leading-relaxed">
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
