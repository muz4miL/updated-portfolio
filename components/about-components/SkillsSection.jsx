"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiPython
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Skills data with authentic brand logos and colors
const skillsData = [
  { name: "HTML/CSS", level: 90, icon: SiHtml5, brandColor: 'text-orange-500', bar: 'from-orange-500 to-blue-500', bg: 'bg-orange-500/10', hover: 'group-hover:bg-orange-500/20' },
  { name: "JavaScript", level: 85, icon: SiJavascript, brandColor: 'text-yellow-400', bar: 'from-yellow-500 via-yellow-400 to-yellow-300', bg: 'bg-yellow-500/10', hover: 'group-hover:bg-yellow-500/20' },
  { name: "React/Next.js", level: 85, icon: SiReact, brandColor: 'text-cyan-400', bar: 'from-cyan-500 via-cyan-400 to-cyan-300', bg: 'bg-cyan-500/10', hover: 'group-hover:bg-cyan-500/20' },
  { name: "PostgreSQL", level: 95, icon: SiPostgresql, brandColor: 'text-blue-400', bar: 'from-blue-500 via-blue-400 to-blue-300', bg: 'bg-blue-500/10', hover: 'group-hover:bg-blue-500/20' },
  { name: "Python", level: 85, icon: SiPython, brandColor: 'text-blue-500', bar: 'from-[#306998] to-[#FFD43B]', bg: 'bg-blue-600/10', hover: 'group-hover:bg-blue-600/20' },
  { name: "Java", level: 85, icon: FaJava, brandColor: 'text-orange-600', bar: 'from-orange-600 via-orange-500 to-orange-400', bg: 'bg-orange-600/10', hover: 'group-hover:bg-orange-600/20' },
];

const SkillCard = ({ skill, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeOut * skill.level));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, skill.level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover-lift relative overflow-hidden">
        {/* Subtle brand-colored glow on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl ${skill.bg}`} />

        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg ${skill.bg} ${skill.hover} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
              <skill.icon size={24} className={skill.brandColor} />
            </div>
            <span className="text-white font-semibold">{skill.name}</span>
          </div>
          <span className={`font-mono text-lg ${skill.brandColor} font-bold`}>{count}%</span>
        </div>

        {/* Progress Bar with brand color */}
        <div className="h-1.5 bg-lightNavy/50 rounded-full overflow-hidden relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.05 }}
            className={`h-full bg-gradient-to-r ${skill.bar} rounded-full relative`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-gradient">Technical Skills</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
