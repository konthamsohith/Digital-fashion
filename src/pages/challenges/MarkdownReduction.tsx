import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import ChallengeHeader from '../../components/Challenges/ChallengeHeader';
import SolutionSteps from '../../components/Challenges/SolutionSteps';
import { markdownData } from '../../data/challengesData';

export default function MarkdownReduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ChallengeHeader {...markdownData.header} />
      <SolutionSteps steps={markdownData.steps} />
    </div>
  );
}