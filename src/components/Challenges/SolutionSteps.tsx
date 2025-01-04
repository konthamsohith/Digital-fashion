import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface SolutionStepsProps {
  steps: Step[];
}

export default function SolutionSteps({ steps }: SolutionStepsProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <step.icon className="w-12 h-12 text-[#006BFF] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}