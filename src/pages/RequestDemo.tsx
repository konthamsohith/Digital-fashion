import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import DemoScheduler from '../components/Demo/DemoScheduler';

export default function RequestDemo() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="py-12 px-4">
        <DemoScheduler />
      </div>
    </div>
  );
}