import React from 'react';
import { Zap, TrendingUp, LineChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Insights',
    description: 'Get real-time trend predictions and market insights powered by advanced AI algorithms.'
  },
  {
    icon: TrendingUp,
    title: 'Improved Performance',
    description: 'Reduce time-to-market by 40% and increase sell-through rates with data-driven decisions.'
  },
  {
    icon: LineChart,
    title: 'Market Intelligence',
    description: 'Access comprehensive market data and competitor analysis to stay ahead.'
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Minimize inventory risks with accurate demand forecasting and trend prediction.'
  }
];

export default function DemoFeatures() {
  return (
    <div className="lg:pt-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Transform Your Fashion Business with AI
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Join leading fashion brands using Stylumia to make data-driven decisions
        and stay ahead of trends.
      </p>

      <div className="grid gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-[#006BFF]/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-[#006BFF]" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}