import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import AboutHero from '../components/About/AboutHero';
import AboutMission from '../components/About/AboutMission';
import AboutTeam from '../components/About/AboutTeam';
import AboutVision from '../components/About/AboutVision';
import AboutStats from '../components/About/AboutStats';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AboutHero />
        <AboutMission />
        <AboutStats />
        <AboutTeam />
        <AboutVision />
      </div>
    </div>
  );
}