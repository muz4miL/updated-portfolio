"use client";
import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTailwindcss, SiGithub } from "react-icons/si";

const Hero = () => {
  // Intro text
  const introText = "HELLO WORLD, I'M";
  const words = introText.split(" ");

  // Rotating roles for typewriter effect
  const roles = [
    "FRONTEND DEVELOPER",
    "CS STUDENT",
    "TECH EDUCATOR",
    "YES ALUMNUS",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Timing calculations
  const letterDelay = 0.05; // 50ms per letter for intro
  const totalLetters = introText.replace(/ /g, "").length;
  const introDuration = totalLetters * letterDelay;
  const nameDelay = introDuration + 0.3;
  const typewriterStartDelay = (nameDelay + 1.5) * 1000; // ms

  // Typewriter effect
  useEffect(() => {
    if (!hasStarted) {
      const start = setTimeout(() => setHasStarted(true), typewriterStartDelay);
      return () => clearTimeout(start);
    }
    const timeout = setTimeout(() => {
      const currentRole = roles[currentRoleIndex];
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((i) => (i + 1) % roles.length);
      } else {
        const next = isDeleting
          ? currentRole.slice(0, displayedText.length - 1)
          : currentRole.slice(0, displayedText.length + 1);
        setDisplayedText(next);
      }
    }, isDeleting ? 20 : 40);
    return () => clearTimeout(timeout);
  }, [hasStarted, displayedText, isDeleting, currentRoleIndex, roles, typewriterStartDelay]);

  // Animation variants
  const letterVariants = {
    hidden: { opacity: 0, color: "#0a0f1a" },
    visible: { opacity: 1, color: "#64ffda", transition: { duration: 0.3, ease: "easeOut" } },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: letterDelay } },
  };
  const nameVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: nameDelay, duration: 1, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4"
      initial="hidden"
      animate="visible"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, Math.random() * 200 - 100], x: [0, Math.random() * 200 - 100], opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
          />
        ))}
      </div>

      {/* Intro label with text shadow */}
      <motion.div
        className="font-mono tracking-widest text-xs md:text-sm mb-4"
        variants={containerVariants}
        style={{ textShadow: "0 0 8px rgba(100,255,218,0.6)" }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-block">
            {word.split("").map((letter, li) => (
              <motion.span
                key={`${wi}-${li}`}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {wi < words.length - 1 && (
              <motion.span variants={letterVariants} className="inline-block">&nbsp;</motion.span>
            )}
          </span>
        ))}
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-[12vw] md:text-9xl font-black text-gradient tracking-tighter leading-[0.85] mb-6 select-none hover:text-glow-strong transition-all duration-300"
        variants={nameVariants}
      >
        MUZAMIL <br className="md:hidden" /> SHIRAZ
      </motion.h1>

      {/* Typewriter subtitle */}
      <motion.div
        className="text-sm md:text-xl font-bold text-slate-300 uppercase tracking-[0.2em] max-w-2xl mb-8 h-8 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: nameDelay + 1.5, duration: 0.6 }}
      >
        <span className="text-teal-400 px-2">•</span>
        <span>{displayedText}</span>
        <motion.span
          className="inline-block w-0.5 h-5 bg-teal-400 ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>

      {/* CTA button */}
      <motion.a
        href="#contact"
        className="inline-flex items-center gap-3 px-8 py-4 bg-teal/10 border-2 border-teal rounded-lg font-mono uppercase text-sm tracking-widest text-teal hover:bg-teal hover:text-navy transition-all duration-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: nameDelay + 2, duration: 0.6 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(100,255,218,0.3), 0 0 60px rgba(100,255,218,0.15)" }}
        whileTap={{ scale: 0.95 }}
      >
        Let&apos;s Talk<span className="text-xl">→</span>
      </motion.a>

      {/* Core Stack with larger icons */}
      <div className="absolute bottom-24 flex flex-col items-center gap-6">
        <span className="text-[10px] font-mono text-teal-400 tracking-widest uppercase">Core Stack</span>
        <div className="flex items-center justify-center -space-x-2">
          {[{ name: "React", Icon: SiReact, color: "#61DAFB" },
          { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
          { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
          { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" }].map((tech, i) => (
            <motion.div
              key={tech.name}
              className="relative group"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.2, zIndex: 10 }}
            >
              {/* Tooltip below */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-teal/90 backdrop-blur-sm text-navy px-3 py-1 rounded-md text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {tech.name}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-teal/90 rotate-45" />
              </div>
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-full bg-navy/50 backdrop-blur-sm border-2 border-teal/30 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:border-teal group-hover:shadow-lg group-hover:shadow-teal/50"
                style={{ borderColor: `${tech.color}40` }}
              >
                <tech.Icon className="text-[14px]" style={{ color: tech.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 text-teal-400 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
