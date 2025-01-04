import React from 'react';
import Button from '../Button';

interface ChallengeHeaderProps {
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
}

export default function ChallengeHeader({ title, description, stats }: ChallengeHeaderProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-[#006BFF]">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <Button 
          variant="solid" 
          className="mt-8 !bg-[#006BFF] hover:!bg-[#0093FF]"
          onClick={() => window.location.href = '/request-demo'}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}