import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const stats = [
  { icon: TrendingUp, label: 'Accuracy Rate', value: '95%' },
  { icon: Clock, label: 'Time Saved', value: '60%' },
  { icon: DollarSign, label: 'Cost Reduction', value: '40%' },
  { icon: Users, label: 'Client Success', value: '92%' }
];

export default function ChallengeStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="bg-[#151B2E] rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <stat.icon className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-blue-500 mb-2">{stat.value}</div>
          <div className="text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}