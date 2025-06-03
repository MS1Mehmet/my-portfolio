"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="fixed inset-0 z-10 w-full h-full pointer-events-none overflow-hidden ">
      
      <div className="relative w-full h-full">
     

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1}
          particleDensity={3}
          className="w-full h-full"
          particleColor="#f57a1a"
        />
      </div>
    </div>
  );
}

export default SparklesPreview;
