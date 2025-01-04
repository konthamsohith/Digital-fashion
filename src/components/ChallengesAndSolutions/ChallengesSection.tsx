import React from 'react';
import { Target, TrendingUp, Search, DollarSign, Clock, BarChart2 } from 'lucide-react';

const challenges = [
  {
    icon: Target,
    title: 'Spot Trends',
    description: 'Identify emerging trends before competitors'
  },
  {
    icon: TrendingUp,
    title: 'Validate Trends',
    description: 'Data-driven trend validation'
  },
  {
    icon: Search,
    title: 'White Space',
    description: 'Find untapped market opportunities'
  },
  {
    icon: DollarSign,
    title: 'Reduce Markdown',
    description: 'Optimize inventory and pricing'
  },
  {
    icon: Clock,
    title: 'Speed to Market',
    description: 'Accelerate product development'
  },
  {
    icon: BarChart2,
    title: 'Sell Through',
    description: 'Maximize full-price sales'
  }
];

export default function ChallengesSection() {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Common Challenges</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-[#151B2E] p-4 rounded-xl hover:bg-[#1E2538] transition-colors group cursor-default"
          >
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
              <challenge.icon className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">
              {challenge.title}
            </h3>
            <p className="text-sm text-gray-400">{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}