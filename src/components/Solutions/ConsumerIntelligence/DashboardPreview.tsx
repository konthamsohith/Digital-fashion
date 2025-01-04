import React from 'react';
import { LineChart, DollarSign } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <div className="bg-[#151B2E] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Portfolio</h3>
            <div className="flex items-baseline">
              <DollarSign className="w-4 h-4 text-red-500" />
              <span className="text-2xl font-bold text-red-500">-3.38</span>
              <span className="text-gray-400 ml-2">(-1.2%)</span>
            </div>
          </div>
          <LineChart className="w-6 h-6 text-gray-400" />
        </div>
        <div className="space-y-4">
          <img 
            src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&h=300&q=80" 
            alt="Red Dress Analytics"
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#1E2538] p-3 rounded-lg">
              <div className="text-sm text-gray-400">Revenue</div>
              <div className="text-lg font-semibold">$24.5K</div>
            </div>
            <div className="bg-[#1E2538] p-3 rounded-lg">
              <div className="text-sm text-gray-400">Orders</div>
              <div className="text-lg font-semibold">2149</div>
            </div>
            <div className="bg-[#1E2538] p-3 rounded-lg">
              <div className="text-sm text-gray-400">Returns</div>
              <div className="text-lg font-semibold">12%</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#151B2E] rounded-xl p-6">
        <img 
          src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=500&h=400&q=80"
          alt="Analytics Dashboard"
          className="w-full rounded-lg mb-4"
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1E2538] p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Market Share</h4>
            <div className="flex items-center space-x-2">
              <div className="w-2/3 h-2 bg-blue-500 rounded"></div>
              <span>65%</span>
            </div>
          </div>
          <div className="bg-[#1E2538] p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Growth Rate</h4>
            <div className="flex items-center space-x-2">
              <div className="w-1/2 h-2 bg-green-500 rounded"></div>
              <span>42%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}