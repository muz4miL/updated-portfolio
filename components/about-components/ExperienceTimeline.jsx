"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Updated Experience data with company logos
const experiencesData = [
  {
    year: "Oct 2024",
    yearEnd: "Present",
    role: "Web Developer (Internship)",
    company: "Code Club",
    location: "Peshawar, Pakistan",
    description: "Delivered performance-driven React applications focusing on pixel-perfect Figma implementations and optimizing load times.",
    highlight1: "Figma/React",
    descriptionMid: " stack. Skills include: ",
    highlight2: "UI/UX & Next.js",
    descriptionEnd: ".",
    tech: ["React.js", "Next.js", "Figma", "Visual Web Dev"],
    logoPath: "/logos/codeclub2.png",
    accentColor: "teal",
  },
  {
    year: "Jul 2024",
    yearEnd: "Nov 2024",
    role: "English Language Teacher",
    company: "ILCC - Institute of Languages",
    location: "Peshawar, Pakistan",
    description: "Utilized cross-cultural experience (USA Exchange) to empower students to communicate effectively, focusing on literature and grammar.",
    highlight1: "5 mos Contract",
    descriptionMid: ", empowering over ",
    highlight2: "50+ students",
    descriptionEnd: ".",
    tech: ["Teaching English", "Cross-functional Leadership", "TOEFL"],
    logoPath: "/logos/illc.png",
    accentColor: "rose",
  },
  {
    year: "Aug 2024",
    yearEnd: "Aug 2024",
    role: "AI Sprint Extensive (Paid Internship)",
    company: "Bave Technologies",
    location: "Peshawar, Pakistan",
    description: "One-month intense internship focusing on core AI concepts and technologies at the Arfa Karim Incubation Center.",
    highlight1: "1 mo AI Sprint",
    descriptionMid: ", gaining exposure to industry best practices in ",
    highlight2: "AI technology",
    descriptionEnd: ".",
    tech: ["AI Concepts", "Bave Technologies"],
    logoPath: "/logos/brave.png",
    accentColor: "violet",
  },
  {
    year: "Oct 2022",
    yearEnd: "Jan 2023",
    role: "Studio Manager & Photographer (Paid Internship)",
    company: "Camouflage Studio",
    location: "Peshawar, Pakistan",
    description: "Managed studio operations and developed photography skills, specializing in commercial and portrait shoots.",
    highlight1: "4 mos Internship",
    descriptionMid: ", resulting in proficiency in ",
    highlight2: "Adobe Photoshop & Team Management",
    descriptionEnd: ".",
    tech: ["Photography", "Adobe Photoshop", "Team Management"],
    logoPath: "/logos/camouflage-studio.png",
    accentColor: "amber",
  },
];

// Ultra-Premium Timeline Card Component with 3D Tilt
const TimelineCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Premium accent configurations with glow colors
  const accentConfig = {
    teal: {
      accent: "text-teal-400",
      hoverBorder: "hover:border-teal-500/30",
      highlight: "text-teal-400",
      tagBg: "bg-teal-500/5",
      tagText: "text-teal-300",
      tagBorder: "border-teal-500/20",
      tagHover: "hover:bg-teal-500/10",
      glowColor: "#14b8a6",
      shadowGlow: "0 0 15px rgba(20,184,166,0.6), 0 0 30px rgba(20,184,166,0.3)",
    },
    rose: {
      accent: "text-rose-400",
      hoverBorder: "hover:border-rose-500/30",
      highlight: "text-rose-400",
      tagBg: "bg-rose-500/5",
      tagText: "text-rose-300",
      tagBorder: "border-rose-500/20",
      tagHover: "hover:bg-rose-500/10",
      glowColor: "#f43f5e",
      shadowGlow: "0 0 15px rgba(244,63,94,0.6), 0 0 30px rgba(244,63,94,0.3)",
    },
    violet: {
      accent: "text-violet-400",
      hoverBorder: "hover:border-violet-500/30",
      highlight: "text-violet-400",
      tagBg: "bg-violet-500/5",
      tagText: "text-violet-300",
      tagBorder: "border-violet-500/20",
      tagHover: "hover:bg-violet-500/10",
      glowColor: "#8b5cf6",
      shadowGlow: "0 0 15px rgba(139,92,246,0.6), 0 0 30px rgba(139,92,246,0.3)",
    },
    amber: {
      accent: "text-amber-400",
      hoverBorder: "hover:border-amber-500/30",
      highlight: "text-amber-400",
      tagBg: "bg-amber-500/5",
      tagText: "text-amber-300",
      tagBorder: "border-amber-500/20",
      tagHover: "hover:bg-amber-500/10",
      glowColor: "#fbbf24",
      shadowGlow: "0 0 15px rgba(251,191,36,0.6), 0 0 30px rgba(251,191,36,0.3)",
    },
  };

  const colors = accentConfig[exp.accentColor] || accentConfig.teal;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -2;
    const rotateYValue = ((x - centerX) / centerX) * 2;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-16 md:pl-24 pb-16 last:pb-0 group"
    >
      {/* Clean Timeline Vertical Line - No animation */}
      <div
        className="absolute left-[22px] md:left-[26px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/60 via-slate-700/40 to-transparent"
      />

      {/* Kinetic Pulse Node - Clean Logo Display */}
      <div className="absolute left-0 top-1 z-20">
        <motion.div
          className={`
            relative w-11 h-11 md:w-13 md:h-13 rounded-full 
            bg-slate-50
            border-2 border-slate-700
            ring-4 ring-slate-900
            flex items-center justify-center
            transition-all duration-300
            overflow-hidden
            shadow-lg
          `}
          style={{
            boxShadow: colors.shadowGlow,
          }}
          animate={{
            boxShadow: [
              colors.shadowGlow,
              `0 0 20px ${colors.glowColor}80, 0 0 40px ${colors.glowColor}40`,
              colors.shadowGlow,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Original Company Logo - No Filters */}
          <Image
            src={exp.logoPath}
            alt={`${exp.company} logo`}
            width={36}
            height={36}
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
          />
        </motion.div>

        {/* Horizontal Connector - Disappears on hover */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 h-[1px] w-6 md:w-10 bg-gradient-to-r from-slate-700 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
      </div>

      {/* Ultra-Premium Card with 3D Tilt */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={`
          relative 
          p-8 
          rounded-3xl 
          border border-white/10
          bg-slate-900/50 
          backdrop-blur-md
          hover:border-white/20
          hover:bg-slate-800/50
          hover:shadow-2xl
          ${colors.hoverBorder}
          transition-all duration-300
        `}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Header Section - Cleaned up, no separate date */}
        <div className="mb-5">
          <div>
            {/* Title - High Contrast White */}
            <h3 className={`text-xl md:text-2xl font-bold text-slate-100 mb-2 transition-colors`}>
              {exp.role}
            </h3>
            {/* Company & Location Row */}
            <div className="flex items-center flex-wrap gap-2">
              <span className={`text-sm font-semibold ${colors.accent} tracking-wide uppercase`}>
                {exp.company}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400">{exp.location}</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-500 font-mono">{exp.year} — {exp.yearEnd}</span>
            </div>
          </div>
        </div>

        {/* Description - With Highlighted Stats */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-2xl">
          {exp.description}{" "}
          <span className="text-white font-medium">{exp.highlight1}</span>
          {exp.descriptionMid}{" "}
          <span className={`${colors.highlight} font-mono font-medium`}>{exp.highlight2}</span>
          {exp.descriptionEnd}
        </p>

        {/* Tech Tags - Jewel-like with Glow */}
        <div className="flex flex-wrap gap-2 mt-6">
          {exp.tech.map((tech, i) => (
            <span
              key={i}
              className={`
                px-3 py-1 
                text-[11px] font-semibold tracking-wide uppercase
                rounded-md 
                ${colors.tagBg}
                ${colors.tagText}
                border ${colors.tagBorder}
                ${colors.tagHover}
                transition-colors cursor-default
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Timeline Section Component
const ExperienceTimeline = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="text-gradient">Experience</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
      </h2>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Cards */}
        <div>
          {experiencesData.map((exp, index) => (
            <TimelineCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
