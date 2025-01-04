import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import HeroSection from '../components/ChallengesAndSolutions/HeroSection';
import SolutionsSection from '../components/ChallengesAndSolutions/SolutionsSection';
import ChallengesSection from '../components/ChallengesAndSolutions/ChallengesSection';
import NewsletterSignup from '../components/ChallengesAndSolutions/NewsletterSignup';

export default function ChallengesAndSolutions() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <HeroSection />
        <SolutionsSection />
        <ChallengesSection />
        <NewsletterSignup />
      </div>
    </div>
  );
}