
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, Heart, Award, Clock, MapPin, Calendar, Dumbbell } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    // Set page title
    document.title = "About Us - Fitkraft Studio";

    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] animate-pulse-slow"></div>
            <div className="absolute top-3/4 left-1/2 w-[200px] h-[200px] rounded-full bg-primary/5 blur-[40px]"></div>
          </div>

          {/* Diagonal accent lines */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[10%] -left-20 w-[100px] h-[400px] bg-primary/10 rotate-[45deg] transform-gpu"></div>
            <div className="absolute bottom-[20%] -right-20 w-[150px] h-[500px] bg-primary/10 rotate-[30deg] transform-gpu"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            {/* Page header */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center rounded-full bg-secondary/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-secondary-foreground mb-6 w-fit mx-auto opacity-0 animate-fade-in shadow-sm border border-primary/10">
                <MapPin className="h-4 w-4 text-primary mr-2" />
                Karve Nagar, Pune
              </div>

              <h1 className="font-display mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl opacity-0 animate-fade-in">
                About <span className="text-primary drop-shadow-md relative inline-block">
                  FitKraft
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/40 rounded-full"></span>
                </span> Studio
              </h1>
              <p className="text-foreground/80 font-medium text-lg md:text-xl opacity-0 animate-fade-in animate-delay-100">
                Your premier fitness destination for holistic wellness
              </p>
            </div>

            {/* Our Story section */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
              <div className="opacity-0 animate-fade-in animate-delay-200">
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">Our Story</h2>
                <p className="text-foreground/90 font-medium text-base md:text-lg leading-relaxed mb-4">
                  Founded in 2018, FitKraft Studio grew from a small personal training service into one of Karve Nagar's most beloved fitness studios.
                </p>
                <p className="text-foreground/90 font-medium text-base md:text-lg leading-relaxed mb-4">
                  Our founder's 15+ years of experience in fitness training created a studio that combines scientific methods with a supportive community atmosphere.
                </p>
                <p className="text-foreground/90 font-medium text-base md:text-lg leading-relaxed">
                  Today, we offer comprehensive services including strength training, yoga, and aerobics, all designed to help our members achieve their fitness goals.
                </p>
              </div>

              <div className="relative group opacity-0 animate-fade-in animate-delay-300">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl translate-x-2 translate-y-2 transform transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 relative transform transition-all duration-500 hover:shadow-primary/20 z-10">
                  {/* Enhanced overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/5 z-10 pointer-events-none mix-blend-overlay"></div>

                  <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                    alt="FitKraft Studio"
                    className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 right-4 md:right-8 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-primary/20 z-20">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Est. 2018</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Values section */}
            <div className="glass-panel rounded-2xl p-8 md:p-12 backdrop-blur-md border border-primary/20 shadow-lg mb-20 opacity-0 animate-fade-in animate-delay-400">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">Our Mission</h2>
                  <p className="text-foreground/90 font-medium text-base md:text-lg leading-relaxed">
                    To empower individuals in Pune to lead healthier lives through accessible, effective fitness programs, creating a supportive community where everyone feels welcome and inspired to achieve their personal best.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">Our Values</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold text-foreground block mb-1">Passion for Health</span>
                        <span className="text-foreground/80 text-sm">Genuine enthusiasm for wellness</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold text-foreground block mb-1">Community Support</span>
                        <span className="text-foreground/80 text-sm">Fostering belonging and motivation</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold text-foreground block mb-1">Training Excellence</span>
                        <span className="text-foreground/80 text-sm">Commitment to quality instruction</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-bold text-foreground block mb-1">Results Commitment</span>
                        <span className="text-foreground/80 text-sm">Dedicated to your success</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us section */}
            <div className="mb-12 opacity-0 animate-fade-in animate-delay-500">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">Why Choose FitKraft Studio?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-card p-8 text-center transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Expert Trainers</h3>
                  <p className="text-foreground/80">Our certified professionals are dedicated to your fitness success with personalized attention and expertise.</p>
                </div>

                <div className="glass-card p-8 text-center transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Dumbbell className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Modern Facility</h3>
                  <p className="text-foreground/80">Train in our state-of-the-art facility with premium equipment in a clean, welcoming environment designed for results.</p>
                </div>

                <div className="glass-card p-8 text-center transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Supportive Community</h3>
                  <p className="text-foreground/80">Join our family of fitness enthusiasts who motivate each other and celebrate achievements together.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
