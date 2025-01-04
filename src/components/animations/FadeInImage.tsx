import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function FadeInImage({ src, alt, className = '' }: FadeInImageProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-110'
        }`}
      />
    </div>
  );
}