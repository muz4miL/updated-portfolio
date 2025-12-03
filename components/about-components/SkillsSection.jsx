"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { CheckCircle } from "lucide-react";

// Skills data with semantic proficiency levels and brand colors
const skillsData = [
  {
    name: "HTML/CSS",
    proficiency: "Expert",
    icon: SiHtml5,
    brandColor: "text-orange-500",
    glowHex: "#f97316",
    // ✅ FIX: Use Sololearn domain
    certLink: "https://www.sololearn.com/en/certificates/CC-I3V1L7C4",
  },
  {
    name: "JavaScript",
    proficiency: "Advanced",
    icon: SiJavascript,
    brandColor: "text-yellow-400",
    glowHex: "#facc15",
    // ✅ FIX: Use Sololearn domain
    certLink: "https://www.linkedin.com/in/muz4mil9/",
  },
  {
    name: "React/Next.js",
    proficiency: "Advanced",
    icon: SiReact,
    brandColor: "text-cyan-400",
    glowHex: "#22d3ee",
    // ✅ FIX: Use Frontend Masters domain
    certLink: "https://static.frontendmasters.com/ud/c/3f7cbf218a/hixpadIGiV/complete-react-v9.pdf",
  },
  {
    name: "Tailwind",
    proficiency: "Expert",
    icon: SiTailwindcss,
    brandColor: "text-cyan-400",
    glowHex: "#06b6d4",
    // ⚠️ Placeholder: You must replace 'tailwind-expert' with your actual certificate link.
    certLink: "https://www.linkedin.com/in/muz4mil9/",
  },
  {
    name: "Python",
    proficiency: "Advanced",
    icon: SiPython,
    brandColor: "text-blue-500",
    glowHex: "#3b82f6",
    certLink: null,
  },
  {
    name: "Java Object-oriented",
    proficiency: "Advanced",
    icon: FaJava,
    brandColor: "text-orange-600",
    glowHex: "#ea580c",
    certLink: null,
  },
];

const SkillBadge = ({ skill, index }) => {
  const hasCert = !!skill.certLink;
  const BadgeWrapper = hasCert ? motion.a : motion.div;

  return (
    <BadgeWrapper
      href={hasCert ? skill.certLink : undefined}
      target={hasCert ? "_blank" : undefined}
      rel={hasCert ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="group relative w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
      style={{
        boxShadow: `inset 0 0 20px ${skill.glowHex}15, 0 0 15px ${skill.glowHex}10`,
      }}
    >
      {/* Permanent subtle glow */}
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl"
        style={{
          background: `radial-gradient(circle at center, ${skill.glowHex}, transparent 70%)`,
        }}
      />

      {/* Verification Badge */}
      {hasCert && (
        <div className="absolute top-1 right-1 z-20">
          <CheckCircle
            size={12}
            className="text-cyan-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.8)]"
          />
        </div>
      )}

      {/* Icon */}
      <div className="relative z-10 mb-1">
        <skill.icon
          size={28}
          className={`${skill.brandColor} group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300`}
        />
      </div>

      {/* Skill Name */}
      <div className="relative z-10 text-center px-1">
        <p className="text-[10px] text-white/90 font-medium leading-tight mb-0.5">
          {skill.name}
        </p>
        <p className="text-[8px] text-teal-400/70 uppercase tracking-wider font-mono">
          {skill.proficiency}
        </p>
      </div>
    </BadgeWrapper>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-gradient">Technical Skills</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
        </h2>

        {/* Compact Badge Row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skillsData.map((skill, index) => (
            <SkillBadge key={index} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;