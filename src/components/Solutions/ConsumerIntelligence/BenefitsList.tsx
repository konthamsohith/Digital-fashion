import React from 'react';

const benefits = [
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&h=400&q=80",
    title: "Optimize your fashion business with Consumer Intelligence",
    description: "Make data-driven decisions with our comprehensive analytics platform. Track trends, monitor competition, and identify growth opportunities in real-time."
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&h=400&q=80",
    title: "A one-stop solution for fashion brands and retail companies",
    description: "Integrate powerful analytics tools with your existing systems. Get insights on customer behavior, inventory management, and market trends all in one place."
  }
];

export default function BenefitsList() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Benefits</h2>
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-[#151B2E] rounded-xl p-6 flex flex-col md:flex-row gap-8">
            <img 
              src={benefit.image} 
              alt={benefit.title}
              className="w-full md:w-1/3 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}