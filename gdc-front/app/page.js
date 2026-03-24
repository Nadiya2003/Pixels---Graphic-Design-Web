"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { HeaderSection } from "./components/HeaderSection";
import { HeroSection } from "./components/HeroSection";
import { TimelineSection } from "./components/TimelineSection";
import { PrizesSection } from "./components/PrizesSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { TeamSection } from "./components/TeamSection";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  const [isWelcomeActive, setIsWelcomeActive] = useState(true);

  // Auto-scrolling to top on enter
  const handleEnter = () => {
    setIsWelcomeActive(false);
    // Use a small delay for smooth scroll after transition
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isWelcomeActive && (
          <WelcomeScreen key="welcome" onEnter={handleEnter} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isWelcomeActive ? 0 : 1,
          transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }
        }}
        className={isWelcomeActive ? 'pointer-events-none' : ''}
      >
        <HeaderSection />
        <main className={`w-full min-h-screen bg-canvas-bg text-white selection:bg-art-blue/30 selection:text-white ${isWelcomeActive ? 'overflow-hidden h-screen' : ''}`}>
          <HeroSection />
          <TimelineSection />
          <PrizesSection />
          <RegistrationSection />
          <TeamSection />
          <FooterSection />
        </main>
      </motion.div>
    </>
  );
}
