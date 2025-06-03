'use client';
import { FC } from "react";
import "../styles/rainbowBorder.css";
import "../styles/glitchText.css";
import DecryptedText from "@/components/animations/DecryptedText";

const projects = [
  {
    name: "RAYZE.",
    image: "/pictures/Rayze.jpg",
    description: (
      <>
        Rayze ist ein sci-fi Metroidvania Shooter in 2D.
      </>
    ),
  },
  {
    name: "codEx",
    image: "/pictures/codEx.jpg",
    description: (
      <>
        Eine Datenbank für code snippets.
      </>
    ),
  },
];

const Projects: FC = () => {
  return (
    <div
      id="Projects"
      className="mt-40 w-full flex flex-col gap-20 z-20 overflow-x-hidden pt-2 my-20"
    >
      {/*Prjekt 1 */}
      <div className="flex flex-col lg:flex-row w-full box-border px-2 gap-4">
        {/* Bild links 49% */}
        <div className=" lg:w-[90%] box-border">
          <div className="aspect-[16/9] rounded-2xl rainbow-wrapper px-1 pt-1">
            <img
              src={projects[0].image}
              alt={projects[0].name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>


        {/* Text */}
        <div className="flex flex-col lg:flex-row w-full box-border px-2 gap-4">
          <div className="max-w-[90%] ml-auto text-left ">
            <h2 className="font-oxanium sm:text-3xl lg:text-6xl font-bold pb-5">
              <span className="glitch-text" data-text={projects[0].name}>RAYZE</span>{' '}
            </h2>
            <p className="lg:text-[1.5rem] sm:text-1.5xl md:text-3xl xl:text-2.5xl 2xl:text-4xl leading-relaxed font-oxanium whitespace-normal">

              
              RAYZE ist ein sci-fi{' '}
              <span className="glitch-text" data-text="Metroidvania-Shooter">Metroidvania-Shooter</span>
              , der in einem{' '}
              <span className="glitch-text glitch-fix" data-text="Team">Team</span>{" "}
              entwickelt wurde. Ich war hauptsächlich für das{' '}
              <span className="glitch-text glitch-fix" data-text="Leveldesign">Leveldesign</span>
              , 
              <span className="glitch-text glitch-fix" data-text="Animationen">Animationen</span>{' '}
              und für die{' '}
              <span className="glitch-text glitch-fix" data-text="KI">KI</span>{" "}
              der Gegner verantwortlich. Es gab große{' '}
              <span className="glitch-text glitch-fix" data-text="Hürden">Hürden
              </span>, da wir keinen Designer hatten, doch am Ende haben wir es{' '}
              <span className="glitch-text glitch-fix" data-text="geschafft">
                geschafft
              </span>.
            </p>
          </div>
        </div>
      </div>




      {/* Porjekt 2*/}
      <div className="flex flex-col lg:flex-row-reverse w-full box-border px-2 gap-4 my-4 "> 
        
                {/*Image*/}
        <div className="w-full lg:w-[47%] box-border">
          <div className="aspect-[16/9] rounded-2xl rainbow-wrapper px-1 py-1">
            <img
              src={projects[1].image}
              alt={projects[1].name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        
        
        
        {/* Text  */}
        <div className="w-full lg:w-[49%] box-border flex items-start">
          <div className="max-w-[90%] lg:ml-0 sm:ml-auto text-left sm:mt-8 lg:mt-0">
            <h2 className="font-oxanium sm:text-5xl md:text-6xl font-bold pb-5">
              <DecryptedText
                text="codEx"
                speed={150}
                maxIterations={20}
                characters="\\|D0E/!/\#§*1$\\|01"
                animateOn="view"
                revealDirection="start"
                sequential={true}
              />
            </h2>
            <p className="lg:text-[1.5rem] sm:text-1.5xl md:text-3xl xl:text-2.5xl 2xl:text-4xl leading-relaxed font-oxanium whitespace-normal">
                
              codEx ist eine{" "}
              <span className="glitch-text" data-text="Datenbank">Datenbank</span>{' '}
              für{' '}
              <span className="glitch-text" data-text="Code-Snippets">Code-Snippets</span>{' '}
               
              die Studierenden ermöglicht, sich während des{' '}
              <span className="glitch-text" data-text="lernens">lernens</span>{' '}
              
              unkompliziert auszutauschen. Verschiedene{' '}
              <span className="glitch-text" data-text="Programmiersprachen">Programmiersprachen</span>{' '}

              lassen sich auswählen und die passenden{' '}
              <span className="glitch-text" data-text="Snippets">Snippets</span>{' '}
              auf einer gemeinsamen Plattform{' '}
              <span className="glitch-text" data-text="speichern">speichern</span>{' '}
              und{' '}
               <span className="glitch-text" data-text="verwalten">verwalten</span>
               .
            </p>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Projects;
