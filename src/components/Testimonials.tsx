import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const testimonials = [
  {
    quote: "Stylumia's AI predictions have transformed our product development process. We've seen a significant reduction in time-to-market and improved sell-through rates.",
    author: "Sarah Chen",
    role: "Head of Design, Fashion Forward",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    icon: Star,
    quote: "The accuracy of trend predictions and the depth of market insights have helped us stay ahead of our competition. A game-changer for our business.",
    author: "Michael Rodriguez",
    role: "CEO, Style Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-[#0A0F1E] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              See how fashion brands are transforming their businesses with our AI-powered solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="slide-in"
              delay={index * 200}
            >
              <div className="bg-[#151B2E] p-8 rounded-xl hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}