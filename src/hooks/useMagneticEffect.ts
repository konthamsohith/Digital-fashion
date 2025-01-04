import { useEffect, useRef } from 'react';

export function useMagneticEffect() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        const power = (maxDistance - distance) / maxDistance;
        const x = deltaX * power * 0.3;
        const y = deltaY * power * 0.3;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
      } else {
        element.style.transform = '';
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = '';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return elementRef;
}