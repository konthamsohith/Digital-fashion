import React from 'react';

interface MovingGradientProps {
  children: React.ReactNode;
  className?: string;
}

export default function MovingGradient({ children, className = '' }: MovingGradientProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-gradient-shift" />
      {children}
    </div>
  );
}