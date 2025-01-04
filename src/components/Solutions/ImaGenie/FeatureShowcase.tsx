import React from 'react';

const features = [
  {
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&h=600&q=80",
    title: "AI-Powered Design Generation",
    description: "Create unique designs by combining trending elements with your brand's DNA"
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=600&q=80",
    title: "Trend Analysis & Prediction",
    description: "Stay ahead of the curve with AI-driven trend forecasting and analysis"
  }
];

export default function FeatureShowcase() {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group bg-[#151B2E] rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151B2E] to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}