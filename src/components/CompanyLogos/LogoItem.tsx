import React from 'react';

interface LogoItemProps {
  name: string;
  url: string;
}

export default function LogoItem({ name, url }: LogoItemProps) {
  return (
    <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300">
      <img
        src={url}
        alt={name}
        className="max-h-full max-w-full object-contain rounded-[10px]"
      />
    </div>
  );
}