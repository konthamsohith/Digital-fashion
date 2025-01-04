import React from 'react';
import { Brain, TrendingUp } from 'lucide-react';

export default function AboutMission() {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why We Are Here</h2>
          <p className="text-gray-400">
            In 2015-16, we identified gaps in available technology for fashion forecasting and demand planning, 
            which were largely subjective. These traditional methods failed to address fundamental challenges 
            in trend spotting and forecasting.
          </p>
          <p className="text-gray-400">
            The result? Over $750 billion of annual global wastage due to poor decision-making, with 
            full-price sell-through rates stagnating around 50%.
          </p>
          <div className="bg-[#151B2E] p-6 rounded-xl">
            <Brain className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">What We Do</h3>
            <p className="text-gray-400">
              We develop AI-driven products that enable consumer-centric decision-making at internet scale.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-[#151B2E] p-6 rounded-xl">
            <TrendingUp className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Demand Sensing</li>
              <li>• Trend Discovery</li>
              <li>• Trend Validation</li>
              <li>• Demand Forecasting</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
            alt="AI Technology"
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}