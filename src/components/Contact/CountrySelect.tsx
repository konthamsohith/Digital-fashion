import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const countries = [
  { code: 'IN', dial: '+91', label: 'India' },
  { code: 'US', dial: '+1', label: 'United States' },
  { code: 'GB', dial: '+44', label: 'United Kingdom' },
  { code: 'AU', dial: '+61', label: 'Australia' },
  { code: 'SG', dial: '+65', label: 'Singapore' }
];

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-36">
      <label className="block text-sm font-medium text-gray-200 mb-1">
        Country Code <span className="text-blue-400">*</span>
      </label>
      <button
        type="button"
        className="w-full px-4 py-2 bg-[#1E2538] border border-gray-700 rounded-lg flex items-center justify-between text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#1E2538] border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {countries.map((country) => (
            <button
              key={country.code}
              type="button"
              className="w-full px-4 py-2 text-left text-white hover:bg-[#2A3447] transition-colors"
              onClick={() => {
                onChange(`${country.code} ${country.dial}`);
                setIsOpen(false);
              }}
            >
              {country.code} {country.dial}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}