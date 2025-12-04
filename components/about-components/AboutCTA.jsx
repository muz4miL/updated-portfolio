"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutCTA = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic pull - REDUCED
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 100 });
  const springY = useSpring(y, { damping: 20, stiffness: 100 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 120) {
      const strength = 1 - distance / 120;
      x.set(distanceX * strength * 0.03);
      y.set(distanceY * strength * 0.03);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <div
      className="relative py-12 md:py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }}
    >
      {/* Ambient background glow - MOBILE OPTIMIZED */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-15 blur-[80px] md:blur-[100px]"
          animate={{
            scale: isHovered ? [1, 1.15, 1] : [1, 1.08, 1],
            opacity: isHovered ? [0.15, 0.25, 0.15] : [0.15, 0.2, 0.15],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: 'radial-gradient(circle, rgba(100,255,218,0.5), rgba(34,211,238,0.3), transparent)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={containerRef}
          style={{ x: springX, y: springY }}
          className="relative"
        >
          {/* Main glass container - MOBILE OPTIMIZED */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Layered glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-slate-900/20 to-slate-800/30 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 via-transparent to-cyan-500/5" />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-teal-500/20" />
            <motion.div
              className="absolute inset-0 rounded-2xl md:rounded-3xl"
              animate={{
                boxShadow: [
                  '0 0 40px rgba(100,255,218,0.1)',
                  '0 0 60px rgba(100,255,218,0.2)',
                  '0 0 40px rgba(100,255,218,0.1)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Animated scan lines */}
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              animate={{ top: ['100%', '0%'] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* Content - MOBILE OPTIMIZED */}
            <div className="relative p-8 md:p-16 text-center">

              {/* Floating code icon - SMALLER ON MOBILE */}
              <motion.div
                className="inline-block mb-6 md:mb-10"
                animate={{
                  y: [-4, 4, -4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  {/* Glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-xl md:rounded-2xl"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(100,255,218,0.3)',
                        '0 0 40px rgba(100,255,218,0.5)',
                        '0 0 20px rgba(100,255,218,0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Icon container */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-400/40 flex items-center justify-center backdrop-blur-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="md:w-10 md:h-10 text-teal-400">
                      <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Heading - SMALLER ON MOBILE */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 leading-tight">
                <span className="text-white">Ready to Create</span>
                <br />
                <span className="text-white">Something </span>
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Extraordinary?
                </span>
              </h2>

              {/* Subtitle - SMALLER ON MOBILE */}
              <p className="text-slate-400 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Let's turn your vision into reality with cutting-edge solutions and collaboration.
              </p>

              {/* CTA Button - SMALLER ON MOBILE */}
              <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center gap-2 md:gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-navy font-bold text-xs md:text-base tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(100,255,218,0.5)]"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}
                  />

                  <span className="relative z-10 uppercase">Start Your Project</span>
                  <ArrowRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 md:w-5 md:h-5"
                  />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Floating particles */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-teal-400"
                  initial={{
                    x: '50%',
                    y: '50%',
                    opacity: 0,
                  }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCTA;
