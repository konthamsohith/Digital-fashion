import React, { useState } from 'react';
import { Clock, Video } from 'lucide-react';
import CalendarHeader from './Calendar/CalendarHeader';
import CalendarGrid from './Calendar/CalendarGrid';
import TimeZoneSelector from './Calendar/TimeZoneSelector';
import TimeSlots from './Calendar/TimeSlots';
import DemoHeader from './DemoHeader';
import Button from '../Button';

export default function DemoScheduler() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(11); // December
  const [year, setYear] = useState(2024);
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentMonth = `${months[currentMonthIndex]} ${year}`;

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setYear(year - 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setYear(year + 1);
    } else {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      const dateString = `${months[currentMonthIndex]} ${selectedDate}, ${year}`;
      alert(`Demo scheduled for ${dateString} at ${selectedTime}`);
      // Here you would typically make an API call to schedule the demo
    }
  };

  // Calculate first day of month offset (0 = Monday, 6 = Sunday)
  const getFirstDayOffset = () => {
    const firstDay = new Date(year, currentMonthIndex, 1).getDay();
    // Convert Sunday (0) to 6, and other days to 0-5
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  // Get number of days in current month
  const getDaysInMonth = () => {
    return new Date(year, currentMonthIndex + 1, 0).getDate();
  };

  const generateDays = () => {
    const offset = getFirstDayOffset();
    const daysInMonth = getDaysInMonth();
    const today = new Date();
    const isCurrentMonth = today.getMonth() === currentMonthIndex && today.getFullYear() === year;
    const currentDate = today.getDate();

    return Array.from({ length: 42 }, (_, i) => {
      const dayNumber = i - offset + 1;
      if (dayNumber < 1 || dayNumber > daysInMonth) {
        return { date: null, isToday: false, isSelected: false };
      }
      return {
        date: dayNumber,
        isToday: isCurrentMonth && dayNumber === currentDate,
        isSelected: dayNumber === selectedDate
      };
    });
  };

  return (
    <div className="max-w-3xl mx-auto relative">
      <div className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs py-1 px-2 rounded transform rotate-12">
        Powered by Calendly
      </div>
      
      <DemoHeader />

      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-start gap-6 mb-8">
          <div className="flex-shrink-0">
            <Clock className="w-6 h-6 text-[#1a2b3b]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1a2b3b] mb-1">Schedule a Demo</h3>
            <p className="text-gray-600">30 min</p>
          </div>
        </div>

        <div className="flex items-start gap-6 mb-12">
          <div className="flex-shrink-0">
            <Video className="w-6 h-6 text-[#1a2b3b]" />
          </div>
          <p className="text-gray-600">
            Web conferencing details provided upon confirmation.
          </p>
        </div>

        <CalendarHeader
          currentMonth={currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />

        <CalendarGrid
          days={generateDays()}
          onSelectDate={handleDateSelect}
        />

        <TimeSlots
          selectedDate={selectedDate}
          onSelectTime={handleTimeSelect}
        />

        {selectedTime && (
          <div className="mt-8 text-center">
            <Button
              variant="solid"
              onClick={handleSchedule}
              className="!bg-[#0052CC] hover:!bg-[#0747A6] !px-8"
            >
              Schedule Demo
            </Button>
          </div>
        )}

        <TimeZoneSelector />
      </div>
    </div>
  );
}