
'use client';
import { FC } from "react";
import BackGroundColor from "@/components/animations/BackgroundColor";
import BackGrid from "@/components/animations/BackGrid";
import WindowGrid from "@/components/animations/windowGrid";
import SparklesPreview from "@/components/animations/sparkleBackground";
import Threads from "@/components/animations/Threads";


const Backgrounds: FC = () => {
  return (
    <div className="   ">
        <BackGroundColor/>
            <div className="with-[100%] -z-10 fixed inset-0 opacity-50 ">
           <Threads
            color={[0.2, 0.7, 1]}
            amplitude={2.3}
            distance={0.1}
            enableMouseInteraction={false}
            />
         </div>
         <BackGrid/>
        <SparklesPreview/>
        <WindowGrid/>
      </div>
  );
};



export default Backgrounds;
