import React from 'react';

interface StylumiaLogoProps {
  className?: string;
}

export default function StylumiaLogo({ className = "h-8" }: StylumiaLogoProps) {
  return (
    <div className={className}>
      <span className="text-[#006BFF]">Styl</span>
      <span className="text-[#0093FF]">um</span>
      <span className="text-[#0093FF]">ia</span>
    </div>
  );
}