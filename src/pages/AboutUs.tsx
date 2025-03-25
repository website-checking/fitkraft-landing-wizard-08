
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, Heart, Award, Clock } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    // Set page title
    document.title = "About Us - FitKraft Studio | Karve Nagar, Pune";
    
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
        <section className="pt-32 pb-16 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h1 className="font-display mb-6 text-4xl font-bold tracking-tight text-fitkraft-950 md:text-5xl opacity-0 animate-fade-in">
                About <span className="text-primary">FitKraft</span> Studio
              </h1>
              <p className="text-fitkraft-700 text-lg opacity-0 animate-fade-in animate-delay-100">
                Your premier fitness destination in Karve Nagar, Pune
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="opacity-0 animate-fade-in animate-delay-200">
                <h2 className="text-2xl font-bold text-fitkraft-900 mb-4">Our Story</h2>
                <p className="text-fitkraft-700 mb-4">
                  Founded in 2018, FitKraft Studio was born from a passion to create a fitness space that truly understands the needs of the Pune community. What started as a small personal training service has grown into one of Karve Nagar's most beloved fitness studios.
                </p>
                <p className="text-fitkraft-700 mb-4">
                  Our founder, with over 15 years of experience in fitness training, envisioned a studio that combines scientific training methods with a supportive community atmosphere. This vision continues to guide everything we do at FitKraft.
                </p>
                <p className="text-fitkraft-700">
                  Today, we're proud to offer a comprehensive range of services including strength training, yoga, and aerobics, all designed to help our members achieve their fitness goals while enjoying the journey.
                </p>
              </div>
              <div className="glass-card overflow-hidden opacity-0 animate-fade-in animate-delay-300">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt="FitKraft Studio" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-20 opacity-0 animate-fade-in animate-delay-400">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <h2 className="text-2xl font-bold text-fitkraft-900 mb-4">Our Mission</h2>
                  <p className="text-fitkraft-700">
                    To empower individuals in Pune to lead healthier, more active lives through accessible, effective, and enjoyable fitness programs. We strive to create a community where everyone feels welcome and supported on their fitness journey.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-fitkraft-900 mb-4">Our Values</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Heart className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-fitkraft-700">Passion for health and wellbeing</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-fitkraft-700">Community support and inclusivity</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-fitkraft-700">Excellence in fitness training</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-fitkraft-700">Commitment to member results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-500">
              <h2 className="text-2xl font-bold text-fitkraft-900 mb-6">Why Choose FitKraft Studio?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-fitkraft-900 mb-2">Expert Trainers</h3>
                  <p className="text-fitkraft-700">Certified professionals dedicated to your fitness success</p>
                </div>
                <div className="glass-card p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-fitkraft-900 mb-2">Modern Facility</h3>
                  <p className="text-fitkraft-700">State-of-the-art equipment in a clean, welcoming environment</p>
                </div>
                <div className="glass-card p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-fitkraft-900 mb-2">Supportive Community</h3>
                  <p className="text-fitkraft-700">Join a family of fitness enthusiasts who motivate each other</p>
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
