import React from 'react';

const solutions = [
  {
    title: 'Consumer Intelligence Tool',
    description: 'Analyze consumer behavior and market trends in real-time',
    path: '/solutions/consumer-intelligence-tool'
  },
  {
    title: 'Apollo',
    description: 'AI-powered merchandising and inventory optimization',
    path: '/solutions/apollo'
  },
  {
    title: 'ImaGenie - Stylumia Labs',
    description: 'Advanced image recognition and trend prediction',
    path: '/solutions/imagenie'
  }
];

interface SolutionsDropdownProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function SolutionsDropdown({ onMouseEnter, onMouseLeave }: SolutionsDropdownProps) {
  return (
    <div 
      className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-lg py-2 mt-2 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-orientation="vertical"
    >
      {solutions.map((solution, index) => (
        <a
          key={index}
          href={solution.path}
          className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
          role="menuitem"
        >
          <h3 className="text-gray-900 font-medium group-hover:text-[#006BFF] transition-colors">
            {solution.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {solution.description}
          </p>
        </a>
      ))}
    </div>
  );
}