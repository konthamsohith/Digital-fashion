import React from 'react';
import { MessageSquare, FileCheck, Users, Rocket } from 'lucide-react';
import AnimatedSection from '../animations/AnimatedSection';

const steps = [
  {
    icon: MessageSquare,
    title: 'Initial Discussion',
    description: 'Connect with our partnership team to explore collaboration opportunities'
  },
  {
    icon: FileCheck,
    title: 'Agreement',
    description: 'Review and finalize partnership terms and conditions'
  },
  {
    icon: Users,
    title: 'Onboarding',
    description: 'Complete partner onboarding and technical integration'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Go live with joint marketing and sales initiatives'
  }
];

export default function PartnerProcess() {
  return (
    <div className="mb-24">
      <AnimatedSection animation="slide-up">
        <h2 className="text-3xl font-bold text-center mb-12">Partnership Process</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <AnimatedSection
            key={index}
            animation="slide-in"
            delay={index * 200}
          >
            <div className="relative">
              <div className="bg-[#151B2E] p-6 rounded-xl hover-lift">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-purple-500 animate-float" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}