// src/components/animations/encryptHover.tsx
import { useRef, useEffect } from "react";

export function useEncryptHover(
  scramble: () => void,
  stopScramble: () => void
) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = ref.current;
    if (!btn) return;

    btn.addEventListener("mouseenter", scramble);
    btn.addEventListener("mouseleave", stopScramble);

    return () => {
      btn.removeEventListener("mouseenter", scramble);
      btn.removeEventListener("mouseleave", stopScramble);
    };
  }, [scramble, stopScramble]);

  return ref;
}
