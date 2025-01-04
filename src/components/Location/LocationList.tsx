import React, { useEffect, useRef } from 'react';

const locations = [
  'Auto-detected',
  'New York',
  'London',
  'Paris',
  'Tokyo',
  'Singapore',
  'Mumbai',
  'Dubai'
];

interface LocationListProps {
  onSelect: (location: string) => void;
  onClose: () => void;
}

export default function LocationList({ onSelect, onClose }: LocationListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={listRef}
      className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg py-2 overflow-hidden"
    >
      {locations.map((location) => (
        <button
          key={location}
          onClick={() => onSelect(location)}
          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {location}
        </button>
      ))}
    </div>
  );
}