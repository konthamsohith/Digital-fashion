import React from 'react';
import SlidingDoors from '../animations/SlidingDoors';
import AnimatedSection from '../animations/AnimatedSection';

const testimonials = [
  {
    quote: "Partnering with Stylumia has opened new opportunities for our business. Their AI technology combined with our expertise has created tremendous value for our clients.",
    author: "Sarah Chen",
    role: "CEO, Fashion Analytics Co",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The partnership program is well-structured and the support team is exceptional. We've seen significant growth since joining forces with Stylumia.",
    author: "Michael Rodriguez",
    role: "Director of Partnerships, Style Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function PartnerTestimonials() {
  return (
    <div className="mb-24">
      <AnimatedSection animation="slide-up">
        <h2 className="text-3xl font-bold text-center mb-12">Partner Success Stories</h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <SlidingDoors
            key={index}
            direction={index % 2 === 0 ? 'left' : 'right'}
            delay={index * 200}
          >
            <div className="bg-[#151B2E] p-8 rounded-xl hover-lift">
              <p className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SlidingDoors>
        ))}
      </div>
    </div>
  );
}