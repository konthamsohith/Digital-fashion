import React from 'react';
import { Box, Settings, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Box,
    title: "Inventory Management",
    description: "Optimize stock levels and reduce waste with AI-powered predictions",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation tools",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Track and analyze performance metrics in real-time",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80"
  }
];

export default function BenefitsList() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-[#151B2E] rounded-xl overflow-hidden">
            <img 
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}