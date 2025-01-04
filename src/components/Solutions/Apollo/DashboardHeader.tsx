import React from 'react';
import { Settings, Bell, Search } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="bg-[#151B2E] rounded-xl p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="font-bold">A</span>
          </div>
          <h1 className="text-2xl font-bold">APOLLO</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-400" />
          <Bell className="w-5 h-5 text-gray-400" />
          <Settings className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="flex space-x-4">
        {['Analytics', 'Orders', 'Reports', 'More'].map((item) => (
          <button
            key={item}
            className="px-4 py-2 rounded-lg hover:bg-[#1E2538] transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}