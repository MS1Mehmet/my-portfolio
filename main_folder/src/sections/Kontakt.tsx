
'use client'
import { FC } from "react";
import Image from 'next/image';
import { useIntro } from "@/components/handler/IntroContent";

const Kontakt: FC = () => {

    const { introDone } = useIntro(); // Zustand aus dem Context holen
  
    if (!introDone) return null; // ⛔️ Hero wird erst angezeigt, wenn Intro abgeschlossen ist

  return <section id="Kontakt" className="w-full lg:mt-10 px-6 lg:py-24 flex flex-col items-center text-center z-20">
  <h2 className="text-4xl md:text-6xl font-oxanium font-bold text-white mb-6 glitch-text" data-glitch="Kontakt">Kontakt</h2>
  
  <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl">
    Du möchtest mit mir arbeiten, hast Fragen oder Feedback? Schreib mir einfach!
  </p>

  <div className="flex flex-col gap-2 text-white text-lg font-oxanium">
    <span><strong>E-Mail:</strong> <a href="mailto:Mehmet.Budak@haw-hamburg.de" className="underline hover:text-cyan-400">Mehmet.Budak@haw-hamburg.de</a></span>
    <span><strong>Standort:</strong> Hamburg, Deutschland</span>
    <h1>CODE - TRAILER</h1>
  </div>

  <div className="flex gap-6 mt-10">
    {/* Beispiel-Icons: */}
    <a href="https://github.com/MS1Mehmet" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
     <Image src="/GitHub.svg" className="width " alt={"Das Logo von Github"} width={128} height={128}/>
    </a>
    <a href="https://www.youtube.com/watch?v=fuWZkY3xrUk&ab_channel=Cyberzs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
      <Image src="/youtube.svg" className="width " alt={"Das Logo von Youtube"} width={128} height={128}/>
    </a>
    {/* weitere Links bei Bedarf */}
  </div>
</section>
};

export default Kontakt;
