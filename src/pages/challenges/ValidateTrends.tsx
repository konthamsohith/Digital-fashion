import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import ChallengeHeader from '../../components/Challenges/ChallengeHeader';
import SolutionSteps from '../../components/Challenges/SolutionSteps';
import { validateTrendsData } from '../../data/challengesData';

export default function ValidateTrends() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ChallengeHeader {...validateTrendsData.header} />
      <SolutionSteps steps={validateTrendsData.steps} />
    </div>
  );
}