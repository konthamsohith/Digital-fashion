import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import ChallengeHeader from '../../components/Challenges/ChallengeHeader';
import SolutionSteps from '../../components/Challenges/SolutionSteps';
import { speedToMarketData } from '../../data/challengesData';

export default function SpeedToMarket() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ChallengeHeader {...speedToMarketData.header} />
      <SolutionSteps steps={speedToMarketData.steps} />
    </div>
  );
}