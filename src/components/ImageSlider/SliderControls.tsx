import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function SliderControls({ onPrevious, onNext }: SliderControlsProps) {
  const buttonClass = "absolute top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors";
  
  return (
    <>
      <button 
        onClick={onPrevious}
        className={`${buttonClass} left-4`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={onNext}
        className={`${buttonClass} right-4`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </>
  );
}