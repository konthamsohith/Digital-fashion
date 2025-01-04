import React, { ReactNode, useEffect, useRef } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';

interface ScrollTriggerProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollTrigger({ children, className = '' }: ScrollTriggerProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove('hidden-up', 'hidden-down');
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
          element.classList.add(scrollDirection === 'up' ? 'hidden-down' : 'hidden-up');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [scrollDirection]);

  return (
    <div ref={elementRef} className={`scroll-trigger ${className}`}>
      {children}
    </div>
  );
}