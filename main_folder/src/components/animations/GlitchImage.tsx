'use client';
import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { PowerGlitch } from "powerglitch";

export interface GlitchImageHandle {
  startGlitch: () => void;
}

const GlitchImage = forwardRef<GlitchImageHandle>((props, ref) => {
  const divRef = useRef<HTMLDivElement>(null);
  const glitchInstanceRef = useRef<{ startGlitch: () => void } | null>(null);

  useEffect(() => {
    if (divRef.current) {
      glitchInstanceRef.current = PowerGlitch.glitch(divRef.current, {
        playMode: "manual",
      });
    }
  }, []);

  // Expose startGlitch method to parent via ref
  useImperativeHandle(ref, () => ({
    startGlitch() {
      glitchInstanceRef.current?.startGlitch();
    },
  }));

  return (
    <div
      ref={divRef}
      style={{
        display: "grid",
        width: "100vw",
        height: "100vh",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr",
      }}
    >
      <img
        src="/pictures/glitch-pic.jpg"
        alt="Glitch"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
});

GlitchImage.displayName = "GlitchImage";
export default GlitchImage;
