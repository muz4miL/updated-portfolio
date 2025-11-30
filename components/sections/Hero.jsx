"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTailwindcss, SiGithub } from "react-icons/si";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const Hero = () => {
  // Refs for GSAP animations
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const typewriterRef = useRef(null);
  const ctaRef = useRef(null);

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

  // GSAP Power Mode Animations
  useGSAP(() => {
    // Intro text: Magnetic letter reveal with SplitType
    if (introRef.current) {
      const split = new SplitType(introRef.current, {
        types: 'chars',
        tagName: 'span'
      });

      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
          color: "#0a0f1a",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          color: "#64ffda",
          duration: 0.8,
          stagger: {
            amount: 0.6,
            from: "start",
            ease: "power3.out"
          },
          ease: "back.out(1.7)",
        }
      );
    }

    // Name: Premium SplitType elastic reveal with magnetic hover
    if (nameRef.current) {
      const nameSplit = new SplitType(nameRef.current, {
        types: 'chars',
        tagName: 'span'
      });

      // Style each character for proper display
      nameSplit.chars.forEach((char) => {
        char.style.display = 'inline-block';
        char.style.transformOrigin = 'bottom center';
      });

      // Premium elastic reveal animation
      gsap.fromTo(
        nameSplit.chars,
        {
          y: 120,
          opacity: 0,
          rotateX: -90,
          scale: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1.6,
          delay: 0.8,
          stagger: {
            each: 0.04,
            from: "start",
          },
          ease: "elastic.out(1, 0.6)",
          clearProps: "all" // Clear inline styles after animation
        }
      );

      // Magnetic hover effect on each character
      nameSplit.chars.forEach((char) => {
        char.style.cursor = 'default';

        char.addEventListener('mouseenter', () => {
          gsap.to(char, {
            y: -15,
            scale: 1.3,
            color: "#5eead4",
            duration: 0.4,
            ease: "back.out(2)"
          });
        });

        char.addEventListener('mouseleave', () => {
          gsap.to(char, {
            y: 0,
            scale: 1,
            color: "inherit",
            duration: 0.5,
            ease: "elastic.out(1, 0.4)"
          });
        });
      });
    }

    // Typewriter container fade-in
    if (typewriterRef.current) {
      gsap.fromTo(
        typewriterRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 2.5, ease: "power3.out" }
      );
    }

    // CTA button with bounce
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 3,
          ease: "back.out(2)"
        }
      );
    }
  }, []);

  // Typewriter effect - starts after GSAP animations
  useEffect(() => {
    if (!hasStarted) {
      const start = setTimeout(() => setHasStarted(true), 2500);
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
  }, [hasStarted, displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4"
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

      {/* Intro label with GSAP magnetic reveal */}
      <div
        ref={introRef}
        className="font-mono tracking-widest text-xs md:text-sm mb-4"
        style={{ textShadow: "0 0 8px rgba(100,255,218,0.6)" }}
      >
        HELLO WORLD, I&apos;M
      </div>

      {/* Name with premium elastic reveal + magnetic hover */}
      <h1
        ref={nameRef}
        className="text-[12vw] md:text-9xl font-black text-gradient tracking-tighter leading-[0.85] mb-6 select-none transition-all duration-300"
      >
        MUZAMIL SHIRAZ
      </h1>

      {/* Typewriter subtitle */}
      <div
        ref={typewriterRef}
        className="text-sm md:text-xl font-bold text-slate-300 uppercase tracking-[0.2em] max-w-2xl mb-8 h-8 flex items-center justify-center"
      >
        <span className="text-teal-400 px-2">•</span>
        <span>{displayedText}</span>
        <motion.span
          className="inline-block w-0.5 h-5 bg-teal-400 ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>

      {/* CTA button */}
      <a
        ref={ctaRef}
        href="#contact"
        className="inline-flex items-center gap-3 px-8 py-4 bg-teal/10 border-2 border-teal rounded-lg font-mono uppercase text-sm tracking-widest text-teal hover:bg-teal hover:text-navy transition-all duration-300 mb-16 cursor-pointer"
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.05,
            boxShadow: "0 0 30px rgba(100,255,218,0.3), 0 0 60px rgba(100,255,218,0.15)",
            duration: 0.3
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3
          });
        }}
      >
        Let&apos;s Talk<span className="text-xl">→</span>
      </a>

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
              transition={{ delay: 3.2 + i * 0.1, duration: 0.3 }}
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
    </section>
  );
};

export default Hero;
