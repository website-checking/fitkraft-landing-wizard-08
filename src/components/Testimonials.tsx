
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Exceptional trainers. My fitness transformed in 6 months.",
    author: "Priya Sharma",
    role: "Member since 2022",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "Flexible schedule fits my busy IT career. Classes keep me motivated.",
    author: "Rahul Desai",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5
  },
  {
    id: 3,
    content: "Yoga classes transformed my physical and mental wellbeing.",
    author: "Anjali Patil",
    role: "Yoga Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5
  },
  {
    id: 4,
    content: "Found my fitness home at FitKraft. Personal attention sets them apart.",
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
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="font-display mb-3 text-3xl font-extrabold text-foreground md:text-4xl opacity-0 animate-fade-in">
            <span className="text-primary drop-shadow-sm">Success</span> Stories
          </h2>
          <p className="text-foreground/80 font-medium opacity-0 animate-fade-in animate-delay-100">
            Hear from our community members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-in animate-delay-200">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="glass-card p-6 flex flex-col h-full border-t-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="relative mr-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary shadow-md"
                  />
                  <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                    <Quote className="h-3 w-3" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-foreground/70 text-xs">{testimonial.role}</p>
                </div>
              </div>

              <blockquote className="text-sm text-foreground leading-relaxed flex-grow font-medium">
                "{testimonial.content}"
              </blockquote>

              <div className="flex mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
