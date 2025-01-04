import { useEffect } from 'react';

export function useMouseTrail(count: number = 20) {
  useEffect(() => {
    const trails: HTMLDivElement[] = [];

    // Create trail elements
    for (let i = 0; i < count; i++) {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      trail.style.opacity = (1 - i / count).toString();
      document.body.appendChild(trail);
      trails.push(trail);
    }

    let mouseX = 0;
    let mouseY = 0;
    const positions: { x: number; y: number }[] = Array(count).fill({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateTrails = () => {
      positions.unshift({ x: mouseX, y: mouseY });
      positions.pop();

      trails.forEach((trail, index) => {
        const pos = positions[index];
        trail.style.left = `${pos.x}px`;
        trail.style.top = `${pos.y}px`;
      });

      requestAnimationFrame(updateTrails);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updateTrails);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trails.forEach(trail => trail.remove());
    };
  }, [count]);
}