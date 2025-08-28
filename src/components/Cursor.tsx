import { useEffect, useRef } from "react";
import "../styles/Cursor.css";

interface clientMouse{
    clientX: number;
    clientY: number;
}
interface CursorProps {
    classList?: {
        add: (className: string) => void;
        remove: (className: string) => void;
    };
}
const Cursor: React.FC<CursorProps> = () => {
  const cursorRef = useRef<HTMLDivElement>(null); // Указываем тип

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Плавное движение
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.2);
      currentY = lerp(currentY, targetY, 0.2);

      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: clientMouse) => {
      targetX = e.clientX - 25; // центрируем (50x50 → -25)
      targetY = e.clientY - 25;
    };

    const handleMouseDown = () => {
      cursor.classList.add("pressed");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("pressed");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return <div ref={cursorRef} className="ios-cursor" />;
};

export default Cursor;
