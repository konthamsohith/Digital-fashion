import React from 'react';

interface MovingBackgroundProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: number;
  className?: string;
}

export default function MovingBackground({
  children,
  direction = 'left',
  speed = 20,
  className = ''
}: MovingBackgroundProps) {
  const getAnimation = () => {
    switch (direction) {
      case 'left': return `move-left ${speed}s linear infinite`;
      case 'right': return `move-right ${speed}s linear infinite`;
      case 'up': return `move-up ${speed}s linear infinite`;
      case 'down': return `move-down ${speed}s linear infinite`;
      default: return '';
    }
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ animation: getAnimation() }}
    >
      {children}
    </div>
  );
}