import React from 'react';
import { Target, TrendingUp, Search, DollarSign, Clock, BarChart2, Globe, LineChart, Layout } from 'lucide-react';

const challenges = [
  {
    title: 'Spot Winning Consumer Trends',
    icon: Target,
    path: '/challenges/spot-trends'
  },
  {
    title: 'Validate Trends',
    icon: TrendingUp,
    path: '/challenges/validate-trends'
  },
  {
    title: 'Spot White Space Opportunities',
    icon: Search,
    path: '/challenges/white-space'
  },
  {
    title: 'Reduce Markdown And Inventory',
    icon: DollarSign,
    path: '/challenges/reduce-markdown'
  },
  {
    title: 'Improve Speed To Market',
    icon: Clock,
    path: '/challenges/speed-to-market'
  },
  {
    title: 'Improve Full Price Sell Through',
    icon: BarChart2,
    path: '/challenges/sell-through'
  },
  {
    title: 'Enter New Markets/Categories',
    icon: Globe,
    path: '/challenges/new-markets'
  },
  {
    title: 'Predict New Product Demand',
    icon: LineChart,
    path: '/challenges/predict-demand'
  },
  {
    title: 'Balance Assortment Width And Depth',
    icon: Layout,
    path: '/challenges/balance-assortment'
  }
];

interface ChallengesDropdownProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ChallengesDropdown({ onMouseEnter, onMouseLeave }: ChallengesDropdownProps) {
  return (
    <div 
      className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-lg py-2 mt-2 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-orientation="vertical"
    >
      {challenges.map((challenge, index) => (
        <a
          key={index}
          href={challenge.path}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
          role="menuitem"
        >
          <challenge.icon className="w-5 h-5 text-[#006BFF] group-hover:text-[#0093FF]" />
          <span className="text-gray-900 group-hover:text-[#006BFF] transition-colors">
            {challenge.title}
          </span>
        </a>
      ))}
    </div>
  );
}