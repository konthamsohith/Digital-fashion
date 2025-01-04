import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentMonth: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export default function CalendarHeader({ currentMonth, onPrevMonth, onNextMonth }: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-[#1a2b3b]">Select a Date & Time</h2>
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-[#1a2b3b]" />
        </button>
        <span className="text-lg font-medium text-[#1a2b3b] min-w-[160px] text-center">
          {currentMonth}
        </span>
        <button
          onClick={onNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5 text-[#1a2b3b]" />
        </button>
      </div>
    </div>
  );
}