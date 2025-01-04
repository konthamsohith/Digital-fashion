import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface GradientTextProps {
  text: string;
  from?: string;
  to?: string;
  className?: string;
}

export default function GradientText({
  text,
  from = 'from-blue-400',
  to = 'to-purple-400',
  className = ''
}: GradientTextProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent 
        transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {text}
    </span>
  );
}