import React from 'react';

export default function HeroSection() {
  return (
    <div className="mb-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
        ImaGenie
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&h=600&q=80"
            alt="AI Fashion Design"
            className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            ImaGenie is an AI-powered tool designed to revolutionize fashion design by analyzing millions of images and fashion attributes from runways, websites, and e-commerce platforms. It simulates clothing design ideas by predicting trends and adapting them based on your brand identity.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Design Ideas', value: '1M+' },
              { label: 'Accuracy', value: '98%' },
              { label: 'Time Saved', value: '75%' },
              { label: 'Happy Clients', value: '500+' }
            ].map((stat) => (
              <div key={stat.label} className="bg-[#151B2E] p-4 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}