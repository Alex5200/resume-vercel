import React, { useEffect, useRef } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Плавное движение
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.2);
      currentY = lerp(currentY, targetY, 0.2);

      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      targetX = e.clientX - 25; // центрируем (50x50 → -25)
      targetY = e.clientY - 25;
    };

    const handleMouseDown = () => {
      cursor.classList.add('pressed');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('pressed');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div className="ios-cursor" ref={cursorRef}></div>;
};

export default Cursor;