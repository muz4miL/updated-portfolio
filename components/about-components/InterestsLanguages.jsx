"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Music, Camera, Users } from "lucide-react";
import { GlobalIcon } from "@/components/icons";

// --- Configuration ---
const languages = [
  { name: "English", level: "Fluent / Bilingual", color: "text-cyan-400" },
  { name: "Urdu", level: "Native", color: "text-emerald-400" },
  { name: "Pushto", level: "Native", color: "text-violet-400" },
  { name: "Punjabi", level: "Basic", color: "text-amber-400" },
  { name: "Persian", level: "Conversational", color: "text-rose-400" },
];

const interests = [
  { name: "Coding", icon: Code2, color: "text-cyan-400", shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]" },
  { name: "Music", icon: Music, color: "text-violet-400", shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.3)]" },
  { name: "Photography", icon: Camera, color: "text-amber-400", shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]" },
  { name: "Teaching", icon: Users, color: "text-emerald-400", shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]" },
  { name: "Culture", icon: GlobalIcon, color: "text-rose-400", shadow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,113,133,0.3)]" },
];

// --- 1. 3D Tilt Card Component - MOBILE OPTIMIZED ---
const TiltCard = ({ interest, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      style={{ perspective: 1000 }}
      className="flex-grow min-w-[110px] md:min-w-[140px] max-w-[140px] md:max-w-[180px]"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`
          group relative w-full aspect-square
          flex flex-col items-center justify-center gap-2 md:gap-3
          rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 
          hover:border-white/20 hover:bg-white/[0.08] 
          transition-colors duration-300
          ${interest.shadow}
        `}
      >
        <div style={{ transform: "translateZ(30px)" }} className={`
          p-2 md:p-3 rounded-lg md:rounded-xl bg-white/5 ${interest.color}
          group-hover:scale-110 transition-transform duration-300
        `}>
          <interest.icon className="w-5 h-5 md:w-7 md:h-7" />
        </div>

        <span style={{ transform: "translateZ(20px)" }} className="text-xs md:text-sm text-zinc-400 font-medium group-hover:text-white transition-colors">
          {interest.name}
        </span>
      </motion.div>
    </motion.div>
  );
};

// --- 2. Liquid Menu Component - MOBILE OPTIMIZED ---
const LanguageList = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col relative" onMouseLeave={() => setHoveredIndex(null)}>
      {languages.map((lang, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          className="relative flex items-center justify-between py-3 md:py-4 px-3 md:px-4 cursor-default z-10"
        >
          {/* The Liquid Hover Background */}
          {hoveredIndex === index && (
            <motion.div
              layoutId="hover-bg"
              className="absolute inset-0 bg-white/[0.06] rounded-lg md:rounded-xl border border-white/5 -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}

          <div className="flex items-center gap-3 md:gap-4">
            <span className={`font-mono text-[10px] md:text-xs transition-colors ${hoveredIndex === index ? "text-teal-400" : "text-zinc-600"}`}>
              0{index + 1}
            </span>
            <span className={`font-medium text-sm md:text-base tracking-wide transition-colors ${hoveredIndex === index ? "text-white" : "text-zinc-300"}`}>
              {lang.name}
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <span className={`text-[10px] md:text-xs font-mono uppercase tracking-wider transition-colors ${hoveredIndex === index ? "text-white" : "text-zinc-500"}`}>
              {lang.level}
            </span>
            {/* Dynamic Status Dot */}
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${hoveredIndex === index ? lang.color + " shadow-[0_0_10px_currentColor] scale-125" : "bg-zinc-700"}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 3. Main Section - MOBILE OPTIMIZED ---
const InterestsLanguages = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">

        {/* Left: Languages with Liquid Motion */}
        <div className="md:col-span-5">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
            <span className="text-gradient">Languages</span>
          </h2>
          <LanguageList />
        </div>

        {/* Right: Interests with 3D Tilt */}
        <div className="md:col-span-7">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
            <span className="text-gradient">Interests</span>
          </h2>

          <div className="flex flex-wrap gap-3 md:gap-4 justify-start md:justify-center">
            {interests.map((interest, index) => (
              <TiltCard key={index} interest={interest} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InterestsLanguages;