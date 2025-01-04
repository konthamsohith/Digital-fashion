import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-in' | 'scale';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade',
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const [ref, isVisible] = useIntersectionObserver();

  const animations = {
    fade: 'scroll-fade',
    'slide-up': 'scroll-slide-up',
    'slide-in': 'scroll-slide-in',
    scale: 'scroll-scale'
  };

  const baseAnimation = animations[animation];
  const visibilityClass = isVisible ? 'visible' : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${baseAnimation} ${visibilityClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}