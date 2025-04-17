
import { Heart, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background relative">
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
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-extrabold text-foreground md:text-5xl opacity-0 animate-fade-in animate-on-scroll">
            <span className="text-primary drop-shadow-md relative inline-block">
              About
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/40 rounded-full"></span>
            </span> Us
          </h2>
          <p className="text-foreground/80 font-medium text-lg opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Your fitness journey starts with a team that cares
          </p>
        </div>

        {/* Main content - Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 animate-on-scroll">
          {/* Left column - Image with enhanced styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl translate-x-2 translate-y-2 transform transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 relative transform transition-all duration-500 hover:shadow-primary/20 z-10">
              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/5 z-10 pointer-events-none mix-blend-overlay"></div>

              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="FitKraft Studio Team"
                className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 right-4 md:right-8 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-primary/20 z-20">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">Since 2018</span>
              </div>
            </div>
          </div>

          {/* Right column - Text content with enhanced styling */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">Our Story</h3>
            <p className="text-foreground/90 font-medium text-base md:text-lg leading-relaxed">
              Founded in 2018, FitKraft Studio has been transforming fitness journeys in Karve Nagar, Pune.
              Our mission is to provide personalized fitness solutions that fit your lifestyle and goals.
            </p>
            <p className="text-foreground/90 font-medium text-base md:text-lg leading-relaxed">
              We believe in building strong, sustainable habits rather than promoting quick fixes.
              Our expert trainers work closely with you to develop programs that evolve as you progress.
            </p>
          </div>
        </div>

        {/* Values section */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 backdrop-blur-md border border-primary/20 shadow-lg mb-8 animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">Our Core Values</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Passion for Health</h4>
              <p className="text-foreground/80">
                We're driven by a genuine passion for helping people achieve better health and wellness through fitness.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Community Support</h4>
              <p className="text-foreground/80">
                We foster a supportive community where members motivate each other and celebrate achievements together.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Training Excellence</h4>
              <p className="text-foreground/80">
                Our certified trainers are committed to excellence, continuously updating their knowledge and techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
