import React from 'react';
import { Clock, TrendingDown, ShieldCheck, BarChart3 } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const benefits = [
  {
    icon: Clock,
    title: 'Faster Time-to-Market',
    description: 'Reduce product development cycles by up to 40% with AI-driven insights.',
    metric: '40%',
    metricLabel: 'Faster'
  },
  {
    icon: TrendingDown,
    title: 'Reduced Inventory Risk',
    description: 'Minimize overstock and stockouts with precise demand forecasting.',
    metric: '60%',
    metricLabel: 'Less Waste'
  },
  {
    icon: ShieldCheck,
    title: 'Accurate Predictions',
    description: 'Make confident decisions with our highly accurate trend forecasts.',
    metric: '98%',
    metricLabel: 'Accuracy'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Access comprehensive analytics to inform your strategy.',
    metric: '2x',
    metricLabel: 'ROI'
  }
];

export default function Benefits() {
  return (
    <div className="py-24 bg-[#151B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Your Fashion Business
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the advantages of AI-powered trend forecasting and make
              data-driven decisions that drive growth.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 200}
            >
              <div className="text-center hover-scale">
                <div className="bg-[#1E2538] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-500 animate-float" />
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-500">{benefit.metric}</span>
                  <span className="text-gray-400 ml-1">{benefit.metricLabel}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}