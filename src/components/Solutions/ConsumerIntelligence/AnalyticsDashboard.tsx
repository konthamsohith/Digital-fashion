import React from 'react';
import { LineChart, DollarSign, TrendingDown, BarChart2 } from 'lucide-react';

export default function AnalyticsDashboard() {
  return (
    <div className="mb-16">
      <div className="bg-[#151B2E] rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Portfolio Overview</h2>
            <p className="text-gray-400">Real-time market insights and analytics</p>
          </div>
          <div className="flex items-baseline">
            <DollarSign className="w-5 h-5 text-red-500" />
            <span className="text-2xl font-bold text-red-500">-3.38</span>
            <span className="text-gray-400 ml-2">(-1.2%)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&h=600&q=80"
                alt="Portfolio Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151B2E] to-transparent opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <LineChart className="w-full h-full text-blue-500 opacity-50" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { label: 'Revenue', value: '$24.5K', icon: DollarSign, color: 'text-green-500' },
              { label: 'Loss Prevention', value: '-15%', icon: TrendingDown, color: 'text-red-500' },
              { label: 'Market Share', value: '32%', icon: BarChart2, color: 'text-blue-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-[#1E2538] p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{stat.label}</span>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}