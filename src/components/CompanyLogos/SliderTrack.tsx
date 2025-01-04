import React from 'react';
import { companyLogos } from './logoData';
import LogoItem from './LogoItem';

export default function SliderTrack() {
  // Split logos into two rows
  const firstRow = companyLogos.slice(0, Math.ceil(companyLogos.length / 2));
  const secondRow = companyLogos.slice(Math.ceil(companyLogos.length / 2));

  return (
    <div className="flex flex-col gap-8">
      {/* First Row */}
      <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-20 after:h-full after:bg-gradient-to-l after:from-gray-50 after:to-transparent">
        <div className="flex animate-scroll hover:pause">
          {[1, 2].map((set) => (
            <div key={`set1-${set}`} className="flex items-center space-x-24 px-12">
              {firstRow.map((logo, index) => (
                <LogoItem 
                  key={`logo1-${set}-${index}`}
                  name={logo.name}
                  url={logo.url}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-20 after:h-full after:bg-gradient-to-l after:from-gray-50 after:to-transparent">
        <div className="flex animate-scroll-reverse hover:pause">
          {[1, 2].map((set) => (
            <div key={`set2-${set}`} className="flex items-center space-x-24 px-12">
              {secondRow.map((logo, index) => (
                <LogoItem 
                  key={`logo2-${set}-${index}`}
                  name={logo.name}
                  url={logo.url}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}