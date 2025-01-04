import React from 'react';
import { BarChart2, PieChart, TrendingUp } from 'lucide-react';

export default function AnalyticsDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      <div className="lg:col-span-2 bg-[#151B2E] rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6">Predictive Analytics</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#1E2538] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Sales Performance</span>
              <span className="text-green-500">+24%</span>
            </div>
            <BarChart2 className="w-full h-32 text-blue-500" />
          </div>
          <div className="bg-[#1E2538] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Revenue Growth</span>
              <span className="text-green-500">+32%</span>
            </div>
            <TrendingUp className="w-full h-32 text-purple-500" />
          </div>
        </div>
        <div className="bg-[#1E2538] p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Market Analysis</h4>
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Current Market</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Potential Growth</span>
              </div>
            </div>
            <PieChart className="w-32 h-32 text-blue-500" />
          </div>
        </div>
      </div>
      
      <div className="bg-[#151B2E] rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6">Performance KPIs</h3>
        <div className="space-y-4">
          {[
            { label: 'Accuracy', value: '92%', color: 'bg-blue-500' },
            { label: 'Efficiency', value: '88%', color: 'bg-purple-500' },
            { label: 'ROI', value: '3.5x', color: 'bg-green-500' }
          ].map((kpi) => (
            <div key={kpi.label} className="bg-[#1E2538] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">{kpi.label}</span>
                <span className="font-semibold">{kpi.value}</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div className={`h-full ${kpi.color} rounded-full`} style={{ width: kpi.value }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}