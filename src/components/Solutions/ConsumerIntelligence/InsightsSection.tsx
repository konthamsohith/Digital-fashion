import React from 'react';

export default function InsightsSection() {
  return (
    <div className="mb-16">
      <div className="bg-[#151B2E] rounded-xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Market Insights</h2>
            <div className="space-y-4">
              {[
                { label: 'Market Coverage', value: '92%', color: 'bg-blue-500' },
                { label: 'Trend Accuracy', value: '88%', color: 'bg-purple-500' },
                { label: 'Data Points', value: '1M+', color: 'bg-green-500' }
              ].map((insight, index) => (
                <div key={index} className="bg-[#1E2538] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">{insight.label}</span>
                    <span className="font-semibold">{insight.value}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className={`h-full ${insight.color} rounded-full`} style={{ width: insight.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Analytics Dashboard"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}