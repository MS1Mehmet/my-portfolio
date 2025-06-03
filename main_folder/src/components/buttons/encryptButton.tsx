'use client';

import React, { useState, useRef, useCallback } from "react";
import { SiHackaday } from "react-icons/si";
import { motion } from "framer-motion";
import useSound from "use-sound";
import { useEncryptHover } from "../animations/encryptHover";

interface EncryptButtonProps {
  onClick?: () => void;
}

const clickSound = "/sound/transitionGlitch.mp3"; // liegt in public/sound/

const TARGET_TEXT = "FORCE_HACK";
const CYCLES_PER_LETTER = 5;
const SHUFFLE_TIME = 60;
const CHARS = "!@#$%^&*():{};|,.<>/?";

export default function EncryptButton({ onClick }: EncryptButtonProps) {
  // SCRAMBLE-STATE
  const [text, setText] = useState(TARGET_TEXT);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sound-Hook
  const [playClick] = useSound(clickSound, { volume: 0.5 });

  // Funktionen für Scramble
  const stopScramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  }, []);

  const scramble = useCallback(() => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      setText(
        TARGET_TEXT.split("")
          .map((char, i) =>
            pos / CYCLES_PER_LETTER > i
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  }, [stopScramble]);

  // Klick-Handler: Sound → Scramble → Parent-onClick
  const handleClick = () => {
    playClick();
    scramble();
    onClick?.();
  };

  // Hook für Hover-Events
  const ref = useEncryptHover(scramble, stopScramble);

  return (
   <motion.button
  onClick={handleClick}
  ref={ref}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="
    group relative overflow-hidden rounded-lg border border-neutral-500
    bg-neutral-700 px-8 py-4 text-xl font-mono font-medium uppercase text-neutral-300
    transition-colors hover:text-indigo-300
  "
>
  {/* Vordergrund: Icon + Text */}
  <div className="relative z-10 flex items-center gap-4">
    <SiHackaday size={24} /> {/* Icon auf 24px oder mehr setzen */}
    <span>{text}</span>
  </div>

  {/* Hintergrund-Gradient */}
  <motion.span
    initial={{ y: "100%" }}
    animate={{ y: "-100%" }}
    transition={{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "linear",
    }}
    className="
      absolute inset-0 -z-10 scale-125
      bg-gradient-to-t from-indigo-400/0 via-indigo-400/100 to-indigo-400/0
      opacity-0 transition-opacity group-hover:opacity-100
      px-8 py-4
    "
  />
</motion.button>

  );
}
