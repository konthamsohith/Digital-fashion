import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="relative w-24 h-24 mb-8">
      {/* Outer ring */}
      <div className="absolute inset-0 border-4 border-t-[#006BFF] border-r-[#0093FF] border-b-[#0093FF] border-l-transparent rounded-full animate-spin"></div>
      
      {/* Inner dots */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-[#006BFF] rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}