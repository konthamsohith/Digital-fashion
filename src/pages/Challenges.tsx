import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import ChallengesHeader from '../components/Challenges/ChallengesHeader';
import ChallengeGrid from '../components/Challenges/ChallengeGrid';
import ChallengeStats from '../components/Challenges/ChallengeStats';
import NewsletterSignup from '../components/Challenges/NewsletterSignup';

export default function Challenges() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ChallengesHeader />
        <ChallengeStats />
        <ChallengeGrid />
        <NewsletterSignup />
      </div>
    </div>
  );
}