'use client'
import { motion } from 'framer-motion';
import React from 'react';

const BackGroundColor = () => {
    return (
<div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden bg-gradient-to-b from-[#01030c] via-[#010109] to-[#01030c]">
    {/* Grid-Hintergrund */}
    <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

    {/* Pulsierender Glüheffekt am unteren Rand */}
    <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#252886] via-transparent to-transparent"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
</div>
    );
}

export default BackGroundColor;
