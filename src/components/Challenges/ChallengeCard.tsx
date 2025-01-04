import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ChallengeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: {
    accuracy: string;
    impact: string;
  };
  link: string;
}

export default function ChallengeCard({ icon: Icon, title, description, stats, link }: ChallengeCardProps) {
  return (
    <div className="bg-[#151B2E] rounded-xl p-6 hover:shadow-xl transition-shadow group">
      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#1E2538] p-3 rounded-lg">
          <div className="text-sm text-gray-400">Accuracy</div>
          <div className="text-lg font-semibold text-blue-500">{stats.accuracy}</div>
        </div>
        <div className="bg-[#1E2538] p-3 rounded-lg">
          <div className="text-sm text-gray-400">Impact</div>
          <div className="text-lg font-semibold text-green-500">{stats.impact}</div>
        </div>
      </div>
      <a
        href={link}
        className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}