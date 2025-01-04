import React from 'react';

interface CalendarGridProps {
  days: Array<{ date: number | null; isToday?: boolean; isSelected?: boolean }>;
  onSelectDate: (date: number) => void;
}

const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export default function CalendarGrid({ days, onSelectDate }: CalendarGridProps) {
  return (
    <div>
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAYS.map(day => (
          <div key={day} className="text-sm font-medium text-[#1a2b3b] text-center py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="aspect-square p-1">
            {day.date && (
              <button
                onClick={() => onSelectDate(day.date!)}
                className={`w-full h-full flex items-center justify-center rounded-full text-sm transition-colors
                  ${day.isSelected ? 'bg-[#0052CC] text-white' : 'hover:bg-gray-100 text-[#1a2b3b]'}
                  ${day.isToday ? 'font-bold' : 'font-medium'}
                `}
              >
                {day.date}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}