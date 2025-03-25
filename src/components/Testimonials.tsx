
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "FitKraft transformed my approach to fitness. The personalized workouts and analytics have helped me achieve results I never thought possible.",
    author: "Sarah Johnson",
    role: "Marathon Runner",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "As a busy executive, I struggled to maintain a consistent fitness routine. FitKraft's smart scheduling and efficient workouts fit perfectly into my life.",
    author: "Michael Chen",
    role: "CEO, TechVision",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "The data insights from FitKraft helped me break through my training plateau. I've seen more progress in 3 months than in my previous year of training.",
    author: "Emma Rodriguez",
    role: "CrossFit Athlete",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
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
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-fitkraft-950 md:text-4xl opacity-0 animate-fade-in">
            Success Stories
          </h2>
          <p className="text-fitkraft-700 text-lg opacity-0 animate-fade-in animate-delay-100">
            Hear from our community members who have transformed their fitness journey with FitKraft.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl opacity-0 animate-fade-in animate-delay-200">
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md mx-auto"
                />
              </div>
              <div className="md:w-3/4">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-4 text-lg italic text-fitkraft-800">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-fitkraft-900">{testimonials[currentIndex].author}</p>
                  <p className="text-fitkraft-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-0 right-0 flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-fitkraft-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-fitkraft-900 hover:bg-fitkraft-50 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-fitkraft-900 hover:bg-fitkraft-50 transition-colors duration-300"
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
