"use client";

import { motion } from "framer-motion";

export default function ParticleEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Partikel 1 */}
      <motion.div
        className="absolute w-[4px] h-[4px] bg-blue-500 rounded-full animate-pulse"
        initial={{ x: "-10vw", y: "15vh" }}     
        animate={{ 
          x: "110vw", 
          y: ["15vh", "25vh", "35vh"],  // Bewegungen in Y Richtung
        }}      
        transition={{ 
          duration: 25, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
      {/* Partikel 2 */}
      <motion.div
        className="absolute w-[4px] h-[4px] bg-blue-500 rounded-full animate-pulse"
        initial={{ x: "-8vw", y: "25vh" }}     
        animate={{ 
          x: "110vw", 
          y: ["25vh", "20vh", "30vh"],  
        }}      
        transition={{ 
          duration: 22, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
      {/* Partikel 3 */}
      <motion.div
        className="absolute w-[4px] h-[4px] bg-blue-500 rounded-full animate-pulse"
        initial={{ x: "-6vw", y: "35vh" }}     
        animate={{ 
          x: "110vw", 
          y: ["35vh", "50vh", "40vh"], 
        }}      
        transition={{ 
          duration: 12, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
      {/* Partikel 4 */}
      <motion.div
        className="absolute w-[4px] h-[4px] bg-blue-500 rounded-full animate-pulse"
        initial={{ x: "-12vw", y: "45vh" }}     
        animate={{ 
          x: "110vw", 
          y: ["45vh", "40vh", "60vh"],  
        }}      
        transition={{ 
          duration: 28, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
      {/* Partikel 5 */}
      <motion.div
        className="absolute w-[4px] h-[4px] bg-blue-500 rounded-full animate-pulse"
        initial={{ x: "-9vw", y: "55vh" }}     
        animate={{ 
          x: "110vw", 
          y: ["55vh", "65vh", "70vh"],  
        }}      
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
      {/* Partikel 6 */}
      <motion.div
        className="absolute w-[4px] h-[4px] bg-blue-500 rounded-full animate-pulse"
        initial={{ x: "-7vw", y: "65vh" }}     
        animate={{ 
          x: "110vw", 
          y: ["65vh", "60vh", "80vh"], 
        }}      
        transition={{ 
          duration: 15, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
      {/* Partikel 7 */}
      <motion.div
        className="absolute w-[4px] h-[4px] bg-blue-500 rounded-full animate-pulse"
        initial={{ x: "-5vw", y: "75vh" }}     
        animate={{ 
          x: "110vw", 
          y: ["75vh", "90vh", "85vh"],  
        }}      
        transition={{ 
          duration: 18, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
      {/* Partikel 8 */}
      <motion.div
        className="absolute w-[4px] h-[4px] bg-blue-500 rounded-full animate-pulse"
        initial={{ x: "-10vw", y: "85vh" }}     
        animate={{ 
          x: "110vw", 
          y: ["85vh", "95vh", "100vh"], 
        }}      
        transition={{ 
          duration: 15, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />
    </div>
  );
}
