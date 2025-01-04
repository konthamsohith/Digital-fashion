import React from 'react';
import Button from '../../Button';

interface TimeSlotsProps {
  selectedDate: number | null;
  onSelectTime: (time: string) => void;
}

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '2:00 PM', '3:00 PM', '4:00 PM'
];

export default function TimeSlots({ selectedDate, onSelectTime }: TimeSlotsProps) {
  if (!selectedDate) return null;

  return (
    <div className="mt-8 border-t pt-8">
      <h3 className="text-lg font-semibold text-[#1a2b3b] mb-4">
        Available Times for December {selectedDate}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {TIME_SLOTS.map((time) => (
          <Button
            key={time}
            variant="outline"
            onClick={() => onSelectTime(time)}
            className="!py-4 !px-6 text-[#0052CC] border-[#0052CC] hover:bg-[#0052CC] hover:text-white"
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
}