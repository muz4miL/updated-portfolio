import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      {/* 1. Top Label */}
      <div className="font-mono text-teal-400 tracking-widest text-xs md:text-sm mb-4 animate-pulse">
        HELLO WORLD, I&apos;M
      </div>

      {/* 2. The Massive Name */}
      <h1 className="text-[12vw] md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-6 select-none mix-blend-overlay opacity-90">
        MUZAMIL <br className="md:hidden" /> SHIRAZ
      </h1>

      {/* 3. The Subtitle */}
      <h2 className="text-sm md:text-xl font-bold text-slate-300 uppercase tracking-[0.2em] max-w-2xl mb-12">
        Software Engineer <span className="text-teal-400 px-2">•</span> Front
        End & App Developer
      </h2>

      {/* 4. "Core Stack" Section */}
      <div className="absolute bottom-24 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] font-mono text-teal-400 tracking-widest uppercase">
          Core Stack
        </span>
        <div className="flex flex-wrap justify-center gap-6 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using text as placeholders for logos to keep it clean */}
          <span className="font-bold text-slate-300 text-xs md:text-sm">
            REACT
          </span>
          <span className="font-bold text-slate-300 text-xs md:text-sm">
            NEXT.JS
          </span>
          <span className="font-bold text-slate-300 text-xs md:text-sm">
            TAILWIND
          </span>
          <span className="font-bold text-slate-300 text-xs md:text-sm">
            GITHUB
          </span>
        </div>
      </div>

      {/* 5. The Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce text-teal-400">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
