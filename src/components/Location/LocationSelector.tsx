import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import LocationList from './LocationList';

export default function LocationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('Auto-detected');

  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
      >
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </button>
      
      {isOpen && (
        <LocationList
          onSelect={(newLocation) => {
            setLocation(newLocation);
            setIsOpen(false);
          }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}