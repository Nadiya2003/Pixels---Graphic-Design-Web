"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function WelcomeScreen({ onEnter }) {
  const videoRef = useRef(null);

  // Fallback: If for some reason the video is stuck, auto-enter after a safe duration (e.g., 10s)
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      onEnter();
    }, 12000); // 12 seconds fallback
    return () => clearTimeout(fallbackTimer);
  }, [onEnter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* 🎥 Background Video - Purely Visual, No Content Overflow */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={onEnter} // Automatically transition when video finishes
        className="w-full h-full object-cover"
      >
        <source src="/Videos/Logo Reveal 02.mp4" type="video/mp4" />
        {/* If the video path /Videos/... is wrong, this will fallback to onEnter via the timer above */}
      </video>

      {/* Subtle Bottom Accent (Optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-art-blue/30 to-transparent" />
      
      {/* Skip Button (Optional - Hidden by default but useful for users) */}
      <div className="absolute top-10 right-10 z-[10000]">
        <button 
           onClick={onEnter}
           className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white font-manrope font-bold text-[8px] uppercase tracking-[0.4em] rounded-full hover:bg-white/10 transition-all opacity-30 hover:opacity-100"
        >
          Skip Intro
        </button>
      </div>
    </motion.div>
  );
}