import React from 'react';
import { Target, TrendingUp, Search, DollarSign, Clock, BarChart2 } from 'lucide-react';
import ChallengeCard from './ChallengeCard';

const challenges = [
  {
    icon: Target,
    title: 'Spot Winning Consumer Trends',
    description: 'Identify and capitalize on emerging trends before your competitors.',
    stats: { accuracy: '95%', impact: '+40% Revenue' },
    link: '/challenges/spot-trends'
  },
  {
    icon: TrendingUp,
    title: 'Validate Trends',
    description: 'Ensure your trend predictions are accurate with data-driven validation.',
    stats: { accuracy: '98%', impact: '200+ Markets' },
    link: '/challenges/validate-trends'
  },
  {
    icon: Search,
    title: 'Spot White Space Opportunities',
    description: 'Identify untapped market opportunities in your assortment.',
    stats: { accuracy: '89%', impact: '3x Growth' },
    link: '/challenges/white-space'
  },
  {
    icon: DollarSign,
    title: 'Reduce Markdown And Inventory',
    description: 'Optimize inventory levels and reduce markdowns with predictive analytics.',
    stats: { accuracy: '92%', impact: '-40% Markdown' },
    link: '/challenges/reduce-markdown'
  },
  {
    icon: Clock,
    title: 'Improve Speed To Market',
    description: 'Accelerate your product development and launch cycles.',
    stats: { accuracy: '80%', impact: '60% Faster' },
    link: '/challenges/speed-to-market'
  },
  {
    icon: BarChart2,
    title: 'Improve Full Price Sell Through',
    description: 'Maximize full-price sales and reduce discounting needs.',
    stats: { accuracy: '95%', impact: '+55% Sales' },
    link: '/challenges/sell-through'
  }
];

export default function ChallengeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {challenges.map((challenge, index) => (
        <ChallengeCard key={index} {...challenge} />
      ))}
    </div>
  );
}