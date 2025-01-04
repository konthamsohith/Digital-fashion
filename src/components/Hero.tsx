import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import AnimatedSection from './animations/AnimatedSection';
import ParallaxSection from './animations/ParallaxSection';

export default function Hero() {
  return (
    <div className="relative">
      <ParallaxSection speed={0.3}>
        <ImageSlider />
      </ParallaxSection>
      <AnimatedSection animation="slide-up" className="absolute bottom-0 left-0 right-0">
        <div className="bg-gradient-to-t from-[#0A0F1E] to-transparent h-32" />
      </AnimatedSection>
    </div>
  );
}