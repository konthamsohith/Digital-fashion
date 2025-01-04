import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import ChallengeHeader from '../../components/Challenges/ChallengeHeader';
import SolutionSteps from '../../components/Challenges/SolutionSteps';
import { whiteSpaceData } from '../../data/challengesData';

export default function WhiteSpace() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ChallengeHeader {...whiteSpaceData.header} />
      <SolutionSteps steps={whiteSpaceData.steps} />
    </div>
  );
}