import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import DashboardHeader from '../../components/Solutions/Apollo/DashboardHeader';
import AnalyticsDashboard from '../../components/Solutions/Apollo/AnalyticsDashboard';
import BenefitsList from '../../components/Solutions/Apollo/BenefitsList';
import NewsletterSignup from '../../components/Solutions/Apollo/NewsletterSignup';

export default function Apollo() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <DashboardHeader />
        <AnalyticsDashboard />
        <BenefitsList />
        <NewsletterSignup />
      </div>
    </div>
  );
}