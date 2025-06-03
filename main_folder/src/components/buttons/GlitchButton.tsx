import React, { useState, useEffect, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import useSound from 'use-sound';

const clickSound = '/sound/buttonGlitch.mp3'; // Correct path for public folder assets

interface GlitchButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export function GlitchButton({ children, isActive, onClick }: GlitchButtonProps) {
  const [glitching, setGlitching] = useState(false);
  const [play] = useSound(clickSound); // Load the sound

const handleClick = () => {
  requestAnimationFrame(() => {
    play(); // Sound async starten
    setGlitching(true); // CSS-Animation triggern
    requestAnimationFrame(() => {
      onClick(); // Scroll-Vorgang
    });
  });
};

  useEffect(() => {
    if (glitching) {
      const timer = setTimeout(() => {
        setGlitching(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [glitching]);

  return (
    <StyledButton
      className={`${glitching ? 'glitch' : ''} ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <button data-text={children}>{children}</button>
    </StyledButton>
  );
}


const glitch = keyframes`
  0% { clip-path: inset(80% -6px 0 0); transform: translate(-20px, -10px); }
  10% { clip-path: inset(10% -6px 85% 0); transform: translate(10px, 10px); }
  20% { clip-path: inset(80% -6px 0 0); transform: translate(-10px, 10px); }
  30% { clip-path: inset(10% -6px 85% 0); transform: translate(0px, 5px); }
  40% { clip-path: inset(50% -6px 30% 0); transform: translate(-5px, 0); }
  50% { clip-path: inset(10% -6px 85% 0); transform: translate(5px, 0); }
  60% { clip-path: inset(40% -6px 43% 0); transform: translate(5px, 10px); }
  70% { clip-path: inset(50% -6px 30% 0); transform: translate(-10px, 10px); }
  80% { clip-path: inset(80% -6px 5% 0); transform: translate(20px, -10px); }
  90% { clip-path: inset(80% -6px 0 0); transform: translate(-10px, 0); }
  100% { clip-path: inset(80% -6px 0 0); transform: translate(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const StyledButton = styled.div`
  position: relative;
  display: inline-block;

  button,
  button::after {
    padding: 0.75rem 1rem; /* ~12px 16px */
    font-size: clamp(0.75rem, 1vw, 1rem); /* skaliert zwischen 12px–16px */
    background: #1a032e;
    border: 0.125rem solid transparent; /* 2px */
    color: #fff;
    letter-spacing: 0.2em; /* ~3px */
    line-height: 1;
    box-shadow: 0.375rem 0 0 #1a032e; /* 6px */
    outline: none;
    position: relative;
    cursor: pointer;
    transition: border 0.3s, box-shadow 0.3s;
    overflow: hidden;
    border-top-left-radius: 1.25rem; /* 20px */
    border-top-right-radius: 0.1875rem; /* 3px */
    border-bottom-left-radius: 0.0625rem; /* 1px */
    border-bottom-right-radius: 0.125rem; /* 2px */
  }

  button::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 3%, #280c42 3%, #401568 5%, #280c42 5%);
    text-shadow: -0.1875rem -0.1875rem 0 #f8f005, 0.1875rem 0.1875rem 0 #2a9fa5; /* ~3px */
    clip-path: inset(50% 50% 50% 50%);
    display: block;
    pointer-events: none;
  }

  &.glitch button::after {
    animation: ${glitch} 1s steps(2, end);
  }

  &.active button {
    box-shadow: 0 0 0.75rem #6b2da4; /* 12px */
  }

  &.active button::before {
    content: "";
    position: absolute;
    top: 0.125rem;  /* 2px */
    bottom: 0.125rem;
    right: 0.125rem;
    width: 0.25rem; /* 4px */
    background: linear-gradient(to bottom, #00e6f6, #ff013c, #00e6f6);
    box-shadow: 0 0 0.5rem #00e6f6; /* 8px */
    animation: ${pulse} 1.2s infinite;
    z-index: 1;
  }
`;
