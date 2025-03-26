
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "I've been a member of FitKraft Studio for 6 months, and the transformation in my fitness level is incredible. The trainers are knowledgeable and supportive, making each session challenging yet enjoyable.",
    author: "Priya Sharma",
    role: "Member since 2022",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "As a busy IT professional, finding time for fitness was always a challenge. FitKraft's flexible schedule and variety of classes helped me incorporate workouts into my hectic routine. Highly recommended!",
    author: "Rahul Desai",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "The yoga classes at FitKraft have been transformative for both my physical health and mental wellbeing. The studio's atmosphere is welcoming, and the instructors are truly exceptional.",
    author: "Anjali Patil",
    role: "Yoga Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5
  },
  {
    id: 4,
    content: "After trying several gyms in Pune, I finally found my fitness home at FitKraft. The personal attention from trainers and the sense of community sets this studio apart from others in Karve Nagar.",
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
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-bold text-foreground md:text-4xl opacity-0 animate-fade-in">
            Member <span className="text-primary">Success</span> Stories
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in animate-delay-100">
            Hear from our community members who have transformed their fitness journey with FitKraft Studio
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl opacity-0 animate-fade-in animate-delay-200">
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-border shadow-md mx-auto"
                />
              </div>
              <div className="md:w-3/4">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mb-4 text-lg italic text-foreground">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
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
                  index === currentIndex ? "bg-primary" : "bg-secondary"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-300"
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
