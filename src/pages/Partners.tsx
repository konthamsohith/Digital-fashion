import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import PartnerHero from '../components/Partners/PartnerHero';
import PartnerBenefits from '../components/Partners/PartnerBenefits';
import PartnerProcess from '../components/Partners/PartnerProcess';
import PartnerTestimonials from '../components/Partners/PartnerTestimonials';
import PartnerContact from '../components/Partners/PartnerContact';

export default function Partners() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <PartnerHero />
        <PartnerBenefits />
        <PartnerProcess />
        <PartnerTestimonials />
        <PartnerContact />
      </div>
    </div>
  );
}