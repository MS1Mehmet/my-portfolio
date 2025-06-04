'use client';
import React, { useRef, useState, useEffect } from 'react';
import GlitchImage, { GlitchImageHandle } from '@/components/animations/GlitchImage';
import FakeTerminal from '@/components/animations/FakeTerminal';
import EncryptButton from '@/components/buttons/encryptButton';
import { useIntro } from '@/components/handler/IntroContent';
import Image from 'next/image';

export default function Intro() {
  const glitchRef = useRef<GlitchImageHandle>(null);
  const [showButton, setShowButton] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const { finishIntro } = useIntro(); 

    // 1) Disable scrolling während Intro sichtbar ist
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup, falls Komponente unmountet
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showIntro]);

  // Button nach 3 Sek. einblenden
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Klick-Handler: Glitch starten + Intro nach 2 Sek. verbergen
  const handleButtonClick = () => {
    glitchRef.current?.startGlitch();
    finishIntro();
    setTimeout(() => setShowIntro(false), 800);
  };

  // Hier unmounten wir Intro komplett, sobald showIntro auf false steht
  if (!showIntro) return null;

  return (
    <div className="fixed w-full h-screen z-80">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-50">
        <Image
          src="/pictures/glitch-pic.jpg"
          className="w-full h-full object-cover"
          alt="Hintergrund"
          fill
        />
      </div>

      {/* Glitch-Effekt */}
      <div className="absolute inset-0 z-60 w-full h-full pointer-events-none">
        <GlitchImage ref={glitchRef} />
      </div>

      {/* Vordergrund: Terminal + Button */}
      <div className="relative z-70 flex flex-col items-center justify-center h-full gap-8">
        <FakeTerminal />
        {showButton && (
          <EncryptButton onClick={handleButtonClick} />
        )}
      </div>
    </div>
  );
}
