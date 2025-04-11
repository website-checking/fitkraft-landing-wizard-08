
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "The trainers at FitKraft are exceptional - knowledgeable and supportive. My fitness level has transformed completely in just 6 months.",
    author: "Priya Sharma",
    role: "Member since 2022",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "FitKraft's flexible schedule helped me incorporate workouts into my busy IT career. Their variety of classes keeps me motivated.",
    author: "Rahul Desai",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "The yoga classes have transformed both my physical health and mental wellbeing. The studio atmosphere is truly welcoming.",
    author: "Anjali Patil",
    role: "Yoga Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5
  },
  {
    id: 4,
    content: "After trying several gyms in Pune, I found my fitness home at FitKraft. The personal attention and community feeling sets them apart.",
    author: "Vikram Joshi",
    role: "Regular Member",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display mb-4 text-3xl font-bold text-foreground md:text-4xl opacity-0 animate-fade-in">
            Member <span className="text-primary">Success</span> Stories
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
            Hear from our community who transformed their fitness journey with us
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl opacity-0 animate-fade-in animate-delay-200">
          <div className="glass-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-border shadow-md mx-auto"
                  />
                  <div className="absolute -top-2 -left-2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>
                
                <div className="flex justify-center mt-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="mb-4 text-lg italic text-foreground leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-secondary"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-5">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-5">
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
