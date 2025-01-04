import React from 'react';
import AnimatedSection from '../animations/AnimatedSection';
import SplitText from '../animations/SplitText';

export default function PartnerHero() {
  return (
    <div className="text-center mb-24">
      <AnimatedSection animation="fade">
        <SplitText
          text="Stylumia Partners Program"
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
          staggerDelay={30}
        />
      </AnimatedSection>
      <AnimatedSection animation="slide-up" delay={500}>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Join forces with the leading AI-powered fashion analytics platform. Together, let's revolutionize the fashion industry through innovative collaborations.
        </p>
      </AnimatedSection>
      <AnimatedSection animation="scale" delay={800}>
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity hover-lift">
            Become a Partner
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
}