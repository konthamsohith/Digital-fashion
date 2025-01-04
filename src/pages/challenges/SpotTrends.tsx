import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import ChallengeHeader from '../../components/Challenges/ChallengeHeader';
import SolutionSteps from '../../components/Challenges/SolutionSteps';
import { spotTrendsData } from '../../data/challengesData';

export default function SpotTrends() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ChallengeHeader {...spotTrendsData.header} />
      <SolutionSteps steps={spotTrendsData.steps} />
    </div>
  );
}