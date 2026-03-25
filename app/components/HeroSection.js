"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, MoveRight, X, Info } from 'lucide-react';

const GlowElement = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-art-blue/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-art-blue/5 rounded-full blur-[120px]" />
  </div>
);

const ParticleNetwork = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = Math.random() * 1.5 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 112, 243, 0.8)';
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 60);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 112, 243, ${(1 - distance / 130) * 0.4})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60 [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]" />;
};

export function HeroSection() {
  const [showInfo, setShowInfo] = useState(false);

  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-canvas-bg px-4 overflow-hidden">
      <ParticleNetwork />
      <GlowElement />

      <div className="z-10 container mx-auto flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-8 px-6 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3"
        >
          <Sparkles className="w-4 h-4 text-art-blue animate-pulse" />
          <span className="font-manrope text-xs font-bold tracking-[0.2em] text-art-gray uppercase">PREMIER INTRA UNIVERSITY COMPETITION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-manrope text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tighter"
        >
          PIX<span className="text-art-blue italic">ELS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl font-manrope text-lg md:text-xl text-art-gray mb-12 leading-relaxed"
        >
          The official <span className="text-white">Intra-University Graphic Design Competition</span> organized by the <span className="text-art-blue font-bold">Rotaract Club of University of Kelaniya</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button onClick={scrollToRegister} className="btn-primary group flex items-center gap-3 px-12 uppercase tracking-widest text-xs">
             Register Now
             <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
             onClick={() => setShowInfo(true)}
             className="btn-outline uppercase tracking-widest text-xs flex items-center gap-3"
          >
             Learn More
             <Info className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* 🚀 MODERN POPUP WINDOW (MODAL) */}
      <AnimatePresence>
        {showInfo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setShowInfo(false)}
               className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
               initial={{ scale: 0.9, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.9, opacity: 0, y: 20 }}
               className="relative w-full max-w-2xl bg-card-bg border border-white/10 rounded-[40px] p-12 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-art-blue/10 blur-[100px] rounded-full" />
              
              <button 
                onClick={() => setShowInfo(false)}
                className="absolute top-8 right-8 text-art-gray hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="font-manrope text-4xl font-black text-white mb-8 uppercase italic">
                ABOUT <span className="text-art-blue not-italic">PIXELS</span>
              </h3>
              
              <div className="space-y-6 text-art-gray font-inter text-lg leading-relaxed">
                <p>
                  <span className="text-white font-bold italic">PIXELS</span> is the premier intra-university graphic design competition organized by the 
                  <span className="text-art-blue"> Rotaract Club of University of Kelaniya</span>. 
                </p>
                <p>
                  This initiative aims to discover and nurture the hidden creative talents within our university community. Whether you are a master of typography or a visionary in digital art, PIXELS provides the ultimate platform to showcase your skills and redefine the standards of modern design.
                </p>
                <div className="pt-6 flex flex-wrap gap-4">
                   <div className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-xs font-manrope font-bold text-art-blue uppercase tracking-widest">Intra-University</div>
                   <div className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-xs font-manrope font-bold text-art-blue uppercase tracking-widest">UoK Edition</div>
                   <div className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-xs font-manrope font-bold text-art-blue uppercase tracking-widest">Graphic Arts</div>
                </div>
              </div>

              <button 
                onClick={() => { setShowInfo(false); scrollToRegister(); }}
                className="mt-12 w-full py-5 bg-art-blue text-white font-manrope font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:shadow-blue-glow transition-all"
              >
                Enter the Arena
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-art-gray/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block rotate-90 origin-left">
        <p className="font-manrope text-[10px] text-art-gray/20 font-bold uppercase tracking-[0.4em]">PIXELS &copy; 2026</p>
      </div>
    </section>
  );
}
