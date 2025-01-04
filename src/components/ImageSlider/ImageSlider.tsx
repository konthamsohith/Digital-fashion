import React, { useState, useEffect, useCallback } from 'react';
import { sliderImages } from './SliderData';
import SlideContent from './SlideContent';
import SliderControls from './SliderControls';
import LocationSelector from '../Location/LocationSelector';

const SLIDE_INTERVAL = 3 * 60 * 1000; // 3 minutes in milliseconds

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNext, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <LocationSelector />
      {sliderImages.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <SlideContent
            title={slide.title}
            subtitle={slide.subtitle}
            hasDemo={slide.hasDemo}
          />
        </div>
      ))}
      <SliderControls
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  );
}