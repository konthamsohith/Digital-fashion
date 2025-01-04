import React from 'react';
import { Eye, Brain, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Eye,
    title: 'Real-time Monitoring',
    description: 'Track market trends and consumer behavior as they happen'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Make data-driven decisions with advanced analytics'
  },
  {
    icon: TrendingUp,
    title: 'Growth Optimization',
    description: 'Identify opportunities and optimize performance'
  }
];

export default function BenefitsSection() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Key Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-[#151B2E] rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <benefit.icon className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}