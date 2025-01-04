import React from 'react';
import { Brain, Zap, LineChart } from 'lucide-react';

const stats = [
  { icon: Brain, label: 'AI Accuracy', value: '98%' },
  { icon: Zap, label: 'Faster Decisions', value: '60%' },
  { icon: LineChart, label: 'Revenue Growth', value: '45%' }
];

export default function HeroSection() {
  return (
    <div className="text-center mb-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Fashion Industry Challenges & Solutions
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
        Discover how our AI-powered solutions help fashion brands overcome challenges
        and stay ahead in a competitive market.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#151B2E] rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}