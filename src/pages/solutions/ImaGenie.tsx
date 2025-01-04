import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import HeroSection from '../../components/Solutions/ImaGenie/HeroSection';
import FeatureShowcase from '../../components/Solutions/ImaGenie/FeatureShowcase';
import NewsletterSignup from '../../components/Solutions/ImaGenie/NewsletterSignup';

export default function ImaGenie() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <HeroSection />
        <FeatureShowcase />
        <NewsletterSignup />
      </div>
    </div>
  );
}