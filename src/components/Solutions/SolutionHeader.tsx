import React from 'react';
import Button from '../Button';

interface SolutionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function SolutionHeader({ title, subtitle, description, image }: SolutionHeaderProps) {
  return (
    <div className="relative bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <h2 className="text-2xl text-[#006BFF] font-semibold mb-6">{subtitle}</h2>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            <Button 
              variant="solid" 
              onClick={() => window.location.href = '/request-demo'}
              className="!bg-[#006BFF] hover:!bg-[#0093FF]"
            >
              Request Demo
            </Button>
          </div>
          <div className="relative h-[400px]">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}