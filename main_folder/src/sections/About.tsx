import { FC } from "react";
import GridDistortion from "@/components/animations/GridDistortion";
import InfiniteLogoSlider from "@/components/animations/InfiniteLogoSlider";

const About: FC = () => {
  return (
<div className="relative flex flex-col items-center justify-center min-h-screen px-4 mt-8"
    id="About">
<div className="w-full max-w-none mx-auto rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 z-0 lg:py-10">
     
      <div className="flex flex-col 2xl:flex-row w-full box-border px-2 gap-4">
       
        <div className=" lg:w-[90%] box-border lg:pl-12">
          <div className="aspect-[16/9] rounded-2xl rainbow-wrapper px-0.5 pt-0.5 ">
              <GridDistortion
              imageSrc="/test.jpg"
              grid={40}
              mouse={0.1}
              strength={0.1}
               relaxation={0.9}
               className="rounded-[30px]"
              />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full box-border px-2 gap-4 lg:pt-4 ">
          <div className="max-w-[90%] ml-auto text-left ">
            <h2 className="font-oxanium sm:text-3xl lg:text-6xl font-bold pb-5 pt-2">
              <span className="glitch-text" data-text="WER BIN ICH?">WER BIN ICH?</span>{' '}
            </h2>
            <p className="lg:text-[1.5rem] sm:text-1xl md:text-3xl xl:text-4xl 2xl:text-4xl py-2 leading-relaxed font-oxanium whitespace-normal">
              {' '}   
              <span className="glitch-text" data-text="Mehmet Budak – Junior Developer">Mehmet Budak – Junior Developer</span>
              {' '} 
              mit Fokus auf 
              {' '}
              <span className="glitch-text" data-text="Webentwicklung">Webentwicklung</span>,
              {' '} 
              <span className="glitch-text" data-text="3D-Grafiken">3D-Grafiken</span>
              {' '}  
              und
              {' '}
              <span className="glitch-text" data-text="UI">UI</span>.
              Momentan fokussiere ich mich auf
              {' '} 
              <span className="glitch-text" data-text="Frontend mit React">Frontend mit React</span>
              ,{' '}
              <span className="glitch-text" data-text="Tailwind CSS">Tailwind CSS</span>
              {' '} 
              und
              {' '}
              <span className="glitch-text" data-text="Three.js">Three.js</span>
              . 
              Backend steht als nächstes auf meiner Liste.
              Außerhalb vom Coding erstelle ich 3D-Modelle für Spiele und 3D Web Development. 
              Mein Ziel ist es, ein eigenes Spiel und eine Website zu entwickeln, bei denen ich am Ende sagen kann:
              <span className="glitch-text" data-text="„Wow, das habe ich gebaut.“">„Wow, das habe ich gebaut.“</span>
              {' '} 
              Nur um mir direkt danach die Frage zu stellen:
              <span className="glitch-text" data-text="„Geht das nicht noch besser?“">„Geht das nicht noch besser?“</span> 

            </p>
          </div>
        </div>
  </div>
</div>

  <div className="w-full mt-16 opacity-50 z-10  ">
        <InfiniteLogoSlider />
  </div>

</div>
  );
};

export default About;
