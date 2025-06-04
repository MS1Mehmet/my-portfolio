'use client';
import { FC, lazy, Suspense } from "react";
import { useIntro } from "@/components/handler/IntroContent"; // Kontext importieren
import "../styles/rainbowBorder.css";
import "../styles/glitchText.css";

const DecryptedText = lazy(() => import("@/components/animations/DecryptedText"));

const Hero: FC = () => {
  const { introDone } = useIntro(); // Zustand aus dem Context holen

  if (!introDone) return null; // ⛔️ Hero wird erst angezeigt, wenn Intro abgeschlossen ist

  return (
    <section id="Home" className="flex items-center justify-center pb-12 z-20 sm:mb-40 w-full h-screen">
      <div className="flex justify-center items-center
        sm:w-[360px]
        md:w-[767px]
        lg:w-[1000px]
        xl:w-[1260px]
        2xl:w-[1400px]
        3xl:w-[1600px]
        sm:h-[300px]
        md:h-[800px]
        lg:h-[800px]
      ">
        <Suspense fallback={<div className="text-center text-neutral-500">Lädt...</div>}>
          <DecryptedText
            text="Die Zukunft ist digital - ich gestalte sie mit - Zeile für Zeile"
            speed={70}
            maxIterations={5}
            characters='{|DE!"§*1$|}01'
            animateOn='view'
            revealDirection='start'
            sequential={true} 
            className="font-oxanium sm:text-xs md:text-2.5xl lg:text-3xl xl:text-4.5xl 2xl:text-5.5xl font-bold mb-4"
            encryptedClassName="font-oxanium sm:text-xs md:text-2.5xl lg:text-3xl xl:text-4.5xl 2xl:text-5.5xl font-bold mb-4 text-neutral-500"
          />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
