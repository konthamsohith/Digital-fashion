import React from 'react';
import { Zap, Users, DollarSign, Award } from 'lucide-react';
import AnimatedSection from '../animations/AnimatedSection';
import FloatingElement from '../animations/FloatingElement';

const benefits = [
  {
    icon: Zap,
    title: 'Fast Integration',
    description: 'Quick and seamless integration with our AI-powered platform'
  },
  {
    icon: Users,
    title: 'Joint Marketing',
    description: 'Access to co-marketing opportunities and shared success stories'
  },
  {
    icon: DollarSign,
    title: 'Revenue Share',
    description: 'Attractive revenue sharing model for mutual growth'
  },
  {
    icon: Award,
    title: 'Partner Success',
    description: 'Dedicated partner success team and continuous support'
  }
];

export default function PartnerBenefits() {
  return (
    <div className="mb-24">
      <AnimatedSection animation="slide-up">
        <h2 className="text-3xl font-bold text-center mb-12">Partner Benefits</h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <AnimatedSection
            key={index}
            animation="scale"
            delay={index * 200}
          >
            <div className="bg-[#151B2E] p-6 rounded-xl hover-lift">
              <FloatingElement delay={index * 0.2}>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-500" />
                </div>
              </FloatingElement>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}