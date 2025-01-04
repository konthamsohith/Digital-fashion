import React from 'react';

interface WaveTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function WaveText({ text, className = '', delay = 0 }: WaveTextProps) {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-wave"
          style={{
            animationDelay: `${delay + index * 0.1}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}