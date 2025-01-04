import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import ChallengeHeader from '../../components/Challenges/ChallengeHeader';
import SolutionSteps from '../../components/Challenges/SolutionSteps';
import { sellThroughData } from '../../data/challengesData';

export default function SellThrough() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ChallengeHeader {...sellThroughData.header} />
      <SolutionSteps steps={sellThroughData.steps} />
    </div>
  );
}