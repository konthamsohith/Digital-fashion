import React from 'react';
import AnimatedSection from '../animations/AnimatedSection';
import SplitText from '../animations/SplitText';
import GradientText from '../animations/GradientText';

export default function AboutHero() {
  return (
    <div className="text-center mb-24">
      <AnimatedSection animation="fade">
        <SplitText
          text="About Stylumia"
          className="text-4xl md:text-6xl font-bold mb-6"
          staggerDelay={30}
        />
      </AnimatedSection>
      <AnimatedSection animation="slide-up" delay={500}>
        <GradientText
          text="Augmenting human intelligence in fashion and lifestyle retail"
          className="text-xl"
        />
      </AnimatedSection>
    </div>
  );
}