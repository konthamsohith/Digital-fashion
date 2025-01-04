import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  staggerDelay?: number;
}

export default function SplitText({
  text,
  className = '',
  charClassName = '',
  staggerDelay = 50
}: SplitTextProps) {
  const [ref, isVisible] = useIntersectionObserver();
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (isVisible) {
      charsRef.current.forEach((char, index) => {
        if (char) {
          char.style.transitionDelay = `${index * staggerDelay}ms`;
          char.style.opacity = '1';
          char.style.transform = 'translateY(0) rotate(0deg)';
        }
      });
    }
  }, [isVisible, staggerDelay]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          ref={el => (charsRef.current[index] = el)}
          className={`inline-block opacity-0 translate-y-4 rotate-12 transition-all duration-500 ${charClassName}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}