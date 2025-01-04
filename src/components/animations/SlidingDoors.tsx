import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SlidingDoorsProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function SlidingDoors({
  children,
  direction = 'left',
  delay = 0,
  className = ''
}: SlidingDoorsProps) {
  const [ref, isVisible] = useIntersectionObserver();

  const slideClass = direction === 'left' 
    ? 'translate-x-[-100%]' 
    : 'translate-x-[100%]';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transform transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-x-0' : slideClass
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}