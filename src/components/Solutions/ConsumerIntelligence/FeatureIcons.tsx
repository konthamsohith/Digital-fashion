import React from 'react';
import { BarChart2, Eye, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: BarChart2,
    title: 'Advanced Analytics',
    description: 'Comprehensive data analysis and visualization tools'
  },
  {
    icon: Eye,
    title: 'Real-time Monitoring',
    description: 'Track performance metrics in real-time'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Insights',
    description: 'AI-powered trend forecasting and predictions'
  }
];

export default function FeatureIcons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <div key={index} className="text-center">
          <div className="bg-[#151B2E] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
            <feature.icon className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}