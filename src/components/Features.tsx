import React from 'react';
import { Brain, LineChart, Eye, Zap } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const features = [
  {
    icon: Brain,
    title: 'Fashion AI Technology',
    description: 'Proprietary AI algorithms trained on millions of fashion data points for accurate trend prediction.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: LineChart,
    title: 'Real-time Analysis',
    description: 'Monitor market trends and consumer behavior in real-time to stay ahead of the competition.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Eye,
    title: 'Visual Recognition',
    description: 'Advanced computer vision system that identifies and analyzes emerging fashion patterns.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Zap,
    title: 'Predictive Analytics',
    description: 'Forecast future trends with machine learning models trained on historical and real-time data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our cutting-edge features combine AI, machine learning, and industry expertise
              to deliver unparalleled fashion intelligence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 200}
            >
              <div className="bg-[#151B2E] rounded-xl overflow-hidden hover-lift h-full">
                <div className="relative h-48">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151B2E] to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <feature.icon className="w-8 h-8 text-blue-500 animate-float" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}