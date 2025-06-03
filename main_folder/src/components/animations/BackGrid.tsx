"use client";

import React, { useEffect, useState } from "react";

const BackGrid = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Mausbewegung zur Parallax-Steuerung
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 6; // -10 bis 10 px
      const offsetY = (e.clientY / innerHeight - 0.5) * 20; // -10 bis 10 px
      setMouseOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 h-[50vh] z-0 pointer-events-none">
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 40px",
          backgroundPosition: `${mouseOffset.x}px ${mouseOffset.y}px`,
          transform: `
            perspective(700px)
            scaleX(3.5)
            scaleY(3)
            scaleZ(1.5)
            rotateX(60deg)
            translateX(${mouseOffset.x}px)
            translateY(${mouseOffset.y}px)
          `,
          transformOrigin: "center bottom",
          maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)",
          filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))",
          transition: "transform 0.05s ease-out",
        }}
      />
    </div>
  );
};

export default BackGrid;
