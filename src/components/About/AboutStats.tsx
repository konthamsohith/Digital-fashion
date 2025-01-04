import React from 'react';
import { Users, TrendingUp, Globe } from 'lucide-react';
import AnimatedSection from '../animations/AnimatedSection';
import FloatingElement from '../animations/FloatingElement';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Global Clients'
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Accuracy Rate'
  },
  {
    icon: Globe,
    value: '40+',
    label: 'Countries'
  }
];

export default function AboutStats() {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <AnimatedSection
            key={index}
            animation="scale"
            delay={index * 200}
          >
            <div className="bg-[#151B2E] p-8 rounded-xl text-center hover-lift">
              <FloatingElement delay={index * 0.2}>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-500" />
                </div>
              </FloatingElement>
              <div className="text-3xl font-bold mb-2 gradient-text-reveal bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}