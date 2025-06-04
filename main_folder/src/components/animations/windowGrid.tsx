'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function WindowGrid() {
  // Ursprungspositionen: 4 horizontale + 6 vertikale Linien
  const initialY = React.useMemo(() => [-5, 250, 650, 1000], []);
  const initialX = React.useMemo(() => [-5, 450, 950, 1450, 1915], []);

  const [posY, setPosY] = useState([...initialY]);
  const [posX, setPosX] = useState([...initialX]);

  const targetY = useRef([...initialY]);
  const targetX = useRef([...initialX]);

  const animationRef = useRef<number | null>(null);
  const activeY = useRef<[number | null, number | null]>([null, null]);
  const activeX = useRef<[number | null, number | null]>([null, null]);

  const moveLine = (current: number, target: number): number => {
    const distance = target - current;
    const step = distance * 0.1;
    return Math.abs(distance) < 0.5 ? target : current + step;
  };

  // Animations-Loop
  useEffect(() => {
    const animate = () => {
      setPosY(prevY => prevY.map((y, i) => moveLine(y, targetY.current[i])));
      setPosX(prevX => prevX.map((x, i) => moveLine(x, targetX.current[i])));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current!);
  }, []);

useEffect(() => {
  const handleMouseEnter = (e: MouseEvent) => {
    const btn = e.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;
    const left = rect.left;
    const right = rect.right;

    // Y-Achse: finde nächsten ober- und unterhalb (nutze targetY.current)
    let minTop = Infinity, minBot = Infinity;
    let idxTop: number | null = null, idxBot: number | null = null;
    targetY.current.forEach((y, i) => {
      if (y < top) {
        const d = top - y;
        if (d < minTop) { minTop = d; idxTop = i; }
      } else if (y > bottom) {
        const d = y - bottom;
        if (d < minBot) { minBot = d; idxBot = i; }
      }
    });
    if (idxTop !== null) targetY.current[idxTop] = top - 10;
    if (idxBot !== null) targetY.current[idxBot] = bottom + 10;
    activeY.current = [idxTop, idxBot];

    // X-Achse: finde nächsten links- und rechtsseitig (nutze targetX.current)
    let minLeft = Infinity, minRight = Infinity;
    let idxLeft: number | null = null, idxRight: number | null = null;
    targetX.current.forEach((x, i) => {
      if (x < left) {
        const d = left - x;
        if (d < minLeft) { minLeft = d; idxLeft = i; }
      } else if (x > right) {
        const d = x - right;
        if (d < minRight) { minRight = d; idxRight = i; }
      }
    });
    if (idxLeft !== null) targetX.current[idxLeft] = left - 10;
    if (idxRight !== null) targetX.current[idxRight] = right + 10;
    activeX.current = [idxLeft, idxRight];
  };

  const handleMouseLeave = () => {
    const [yt, yb] = activeY.current;
    if (yt !== null) targetY.current[yt] = initialY[yt];
    if (yb !== null) targetY.current[yb] = initialY[yb];
    activeY.current = [null, null];

    const [xl, xr] = activeX.current;
    if (xl !== null) targetX.current[xl] = initialX[xl];
    if (xr !== null) targetX.current[xr] = initialX[xr];
    activeX.current = [null, null];
  };

  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', handleMouseEnter as EventListener);
    btn.addEventListener('mouseleave', handleMouseLeave as EventListener);
  });

  return () => {
    buttons.forEach(btn => {
      btn.removeEventListener('mouseenter', handleMouseEnter as EventListener);
      btn.removeEventListener('mouseleave', handleMouseLeave as EventListener);
    });
  };
}, [initialX,initialY]); // leeres Dependency-Array!



  return (
    <>
      <div className="fixed inset-0 z-10 w-full h-full pointer-events-none overflow-hidden">
        {/* horizontale Linien */}
        {posY.map((y, i) => (
          <div
            key={`h${i}`}
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulseLine"
            style={{ top: y }}
          />
        ))}
        {/* vertikale Linien */}
        {posX.map((x, i) => (
          <div
            key={`v${i}`}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-[#fcfcfc] to-transparent opacity-20 animate-pulseLineY"
            style={{ left: x }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes pulseLine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-pulseLine {
          background-size: 200% 100%;
          animation: pulseLine 7s linear infinite;
        }
        @keyframes pulseLineY {
          0% { background-position: 0 -200%; }
          100% { background-position: 0 200%; }
        }
        .animate-pulseLineY {
          background-size: 100% 200%;
          animation: pulseLineY 12s linear infinite;
        }
      `}</style>
    </>
  );
}
