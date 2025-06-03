'use client';


import { FC, useEffect, useRef } from "react";
 import { applyGlitch } from "@/components/animations/glitch";
import { useIntro } from "@/components/handler/IntroContent";

 const Header: FC = () => {
  useEffect(() => {
    applyGlitch('.glitch');
  }, []);
  const { introDone } = useIntro();         // Intro-State holen
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1) bestehende Glitch-Initialisierung
  useEffect(() => {
    applyGlitch('.glitch');
  }, []);

  // 2) Audio starten, sobald Intro vorbei ist
  useEffect(() => {
    if (introDone) {
      audioRef.current?.play().catch(() => {
        console.warn('Audio konnte nicht automatisch starten');
      });
    }
  }, [introDone]);

   return (
     <header className="flex justify-start items-start w-full z-20 pt-12" id="header">
      {/* verstecktes Audio, wird beim Intro-Button-Click gestartet */}
      <audio
        ref={audioRef}
        src="/sound/ambient-music.mp3"
        loop
        preload="auto"
       className="hidden"
     />

       <div className="flex justify-start items-start max-w-screen-xl bg-y">
         <div className="flex justify-start h-21 ">
           <h1 className="glitch font-oxanium font-medium text-white text-[clamp(1.5rem,5vw,2.5rem)] sm:text-[clamp(1.2rem,5vw,2rem)] md:text-[clamp(5rem,5vw,5rem)] ">
             Mehmet Budak
           </h1>
         </div>
       </div>
     </header>
   );
 };

 export default Header;




