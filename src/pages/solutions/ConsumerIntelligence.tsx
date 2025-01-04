import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import AnalyticsDashboard from '../../components/Solutions/ConsumerIntelligence/AnalyticsDashboard';
import BenefitsSection from '../../components/Solutions/ConsumerIntelligence/BenefitsSection';
import InsightsSection from '../../components/Solutions/ConsumerIntelligence/InsightsSection';
import NewsletterSignup from '../../components/Solutions/ConsumerIntelligence/NewsletterSignup';

export default function ConsumerIntelligence() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnalyticsDashboard />
        <BenefitsSection />
        <InsightsSection />
        <NewsletterSignup />
      </div>
    </div>
  );
}