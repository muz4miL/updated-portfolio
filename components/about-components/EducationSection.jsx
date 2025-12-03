"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import Image from "next/image";

const EducationSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const subjects = ["Data Structures & Algorithms", "Database Systems", "Web Technologies", "Networking", "Enterprenuership"];

  return (
    <section>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-gradient">Education</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative glass-card p-8 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden group"
      >
        {/* Premium Realistic Lightning Effect - Only on Hover */}
        {isHovered && (
          <>
            {/* Main lightning arc with branches */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 1, 0.8, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
            >
              <svg className="w-full h-full" style={{ filter: 'drop-shadow(0 0 4px rgba(34,211,238,0.8))' }}>
                {/* Main arc */}
                <motion.path
                  d="M 50,10 L 80,40 L 100,35 L 150,70 L 180,65 L 250,100 L 300,95 L 400,140 L 500,135 L 650,180"
                  stroke="rgba(34,211,238,0.9)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 1, 1, 0.5, 0]
                  }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                />

                {/* Branch 1 */}
                <motion.path
                  d="M 150,70 L 170,90 L 190,110"
                  stroke="rgba(34,211,238,0.7)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 0.8, 0.8, 0]
                  }}
                  transition={{ duration: 0.2, delay: 0.15, repeat: Infinity, repeatDelay: 3 }}
                />

                {/* Branch 2 */}
                <motion.path
                  d="M 300,95 L 320,120 L 340,145"
                  stroke="rgba(34,211,238,0.6)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 0.7, 0.7, 0]
                  }}
                  transition={{ duration: 0.15, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
                />

                {/* Secondary glow arc */}
                <motion.path
                  d="M 50,10 L 80,40 L 100,35 L 150,70 L 180,65 L 250,100 L 300,95 L 400,140 L 500,135 L 650,180"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 0.6, 0.6, 0]
                  }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                />
              </svg>
            </motion.div>

            {/* Subtle flash effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none bg-cyan-400/5"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 0.2,
                delay: 0.15,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />

            {/* Glitch overlay - more subtle */}
            <motion.div
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              animate={{
                opacity: [0, 0.05, 0, 0.08, 0],
                x: [0, -1, 1, -0.5, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 3.5,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10" />
            </motion.div>
          </>
        )}

        {/* Subtle ambient glow */}
        <div
          className="absolute inset-0 opacity-10 blur-3xl transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(99,102,241,0.4), transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start gap-8 mb-6">
            {/* IM|Sciences Logo - Clean */}
            <div
              className="w-20 h-20 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 p-3 transition-all duration-300"
              style={{
                boxShadow: isHovered
                  ? '0 0 25px rgba(255,255,255,0.6), 0 0 50px rgba(99,102,241,0.3)'
                  : '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(99,102,241,0.2)'
              }}
            >
              <Image
                src="/logos/ims.png"
                alt="IM|Sciences logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Centered Text Content */}
            <div className="flex-1 text-center">
              <motion.h3
                className="text-2xl font-bold text-white mb-1"
                animate={isHovered ? {
                  textShadow: [
                    '0 0 10px rgba(34,211,238,0.5)',
                    '0 0 20px rgba(34,211,238,0.3)',
                    '0 0 10px rgba(34,211,238,0.5)',
                  ]
                } : {}}
                transition={{ duration: 0.5 }}
              >
                Bachelor of Computer Science
              </motion.h3>
              <p className="text-indigo-400 font-semibold mb-2 tracking-wide">Institute of Management Sciences</p>
              <div className="flex items-center justify-center gap-2 text-sm font-mono text-slate-400">
                <Calendar size={14} />
                <span>2023 - 2027</span>
              </div>
            </div>

            {/* Profile Image - Clean, no hover effects */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-full ring-2 ring-cyan-400/50 p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/profile-portrait.jpg"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Premium Subject Tags - Centered */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {subjects.map((subject, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(99,102,241,0.3)'
                }}
                className="
                  flex items-center gap-2
                  px-3 py-1 
                  text-[11px] font-semibold tracking-wide uppercase
                  rounded-md 
                  bg-indigo-500/5
                  text-indigo-300
                  border border-indigo-500/20
                  hover:bg-indigo-500/10
                  transition-all cursor-default
                "
              >
                <Award size={12} className="text-indigo-400" />
                {subject}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
