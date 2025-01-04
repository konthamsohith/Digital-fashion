import React from 'react';
import { Brain, LineChart, Eye } from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'Consumer Intelligence Tool',
    description: 'AI-powered insights for better decision making',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/consumer-intelligence'
  },
  {
    icon: LineChart,
    title: 'Apollo',
    description: 'Advanced analytics and trend prediction platform',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/apollo'
  },
  {
    icon: Eye,
    title: 'ImaGenie',
    description: 'Visual AI for fashion design and trend analysis',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/imagenie'
  }
];

export default function SolutionsSection() {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <a
            key={index}
            href={solution.link}
            className="group bg-[#151B2E] rounded-xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative h-48">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151B2E] to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}