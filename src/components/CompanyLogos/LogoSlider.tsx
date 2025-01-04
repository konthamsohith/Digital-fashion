import React from 'react';
import SliderHeader from './SliderHeader';
import SliderTrack from './SliderTrack';

export default function LogoSlider() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SliderHeader />
        <SliderTrack />
      </div>
    </div>
  );
}