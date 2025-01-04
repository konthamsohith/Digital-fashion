import React from 'react';
import { Globe } from 'lucide-react';

export default function TimeZoneSelector() {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-medium text-[#1a2b3b] mb-2">Time zone</h3>
      <div className="relative">
        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <select
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-[#0052CC] focus:border-transparent text-[#1a2b3b]"
          defaultValue="IST"
        >
          <option value="IST">India Standard Time (12:41pm)</option>
        </select>
      </div>
    </div>
  );
}