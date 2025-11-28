"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Users, Globe } from "lucide-react";

// Experience data with highlighted text spans for key stats
const experiencesData = [
  {
    year: "2024",
    yearEnd: "Present",
    role: "Frontend Developer",
    company: "Freelance",
    location: "Peshawar, Pakistan",
    // Description with highlights - we'll parse these in the component
    description: "Delivered high-performance React applications for",
    highlight1: "3+ startup clients",
    descriptionMid: ", focusing on pixel-perfect Figma implementations and optimizing load times by",
    highlight2: "20%",
    descriptionEnd: ".",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: Code2,
    isActive: true,
    accentColor: "teal",
  },
  {
    year: "2023",
    yearEnd: "Present",
    role: "Tech Educator & Mentor",
    company: "Community Teaching",
    location: "Peshawar, Pakistan",
    description: "Mentored",
    highlight1: "1000+ students",
    descriptionMid: " in programming fundamentals, web development, and computer science concepts through",
    highlight2: "workshops and one-on-one sessions",
    descriptionEnd: ".",
    tech: ["Teaching", "Mentorship", "Python", "Java"],
    icon: Users,
    isActive: true,
    accentColor: "violet",
  },
  {
    year: "2019",
    yearEnd: "2020",
    role: "YES Exchange Student",
    company: "US Department of State",
    location: "Washington, USA",
    description: "Selected for the prestigious Kennedy-Lugar Youth Exchange & Study program among",
    highlight1: "top 1% of 20,000+ applicants",
    descriptionMid: ". Developed",
    highlight2: "cross-cultural leadership skills",
    descriptionEnd: ".",
    tech: ["Leadership", "Communication", "Adaptability"],
    icon: Globe,
    isActive: false,
    accentColor: "blue",
  },
];

// Ultra-Premium Timeline Card Component
const TimelineCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const IconComponent = exp.icon;

  // Premium accent configurations with hover states
  const accentConfig = {
    teal: {
      accent: "text-teal-400",
      accentHover: "group-hover:text-teal-400",
      iconRing: "ring-slate-900",
      iconBorder: "border-slate-700",
      iconColor: "text-teal-400",
      hoverBorder: "hover:border-teal-500/30",
      hoverShadow: "hover:shadow-teal-500/10",
      badgeBg: "bg-teal-500/10",
      badgeText: "text-teal-300",
      badgeBorder: "border-teal-500/20",
      badgeGlow: "shadow-[0_0_12px_-3px_rgba(20,184,166,0.4)]",
      highlight: "text-teal-400",
      // Jewel-like tag styling
      tagBg: "bg-teal-500/5",
      tagText: "text-teal-300",
      tagBorder: "border-teal-500/20",
      tagGlow: "shadow-[0_0_10px_rgba(20,184,166,0.1)]",
      tagHover: "hover:bg-teal-500/10",
    },
    violet: {
      accent: "text-violet-400",
      accentHover: "group-hover:text-violet-400",
      iconRing: "ring-slate-900",
      iconBorder: "border-slate-700",
      iconColor: "text-violet-400",
      hoverBorder: "hover:border-violet-500/30",
      hoverShadow: "hover:shadow-violet-500/10",
      badgeBg: "bg-violet-500/10",
      badgeText: "text-violet-300",
      badgeBorder: "border-violet-500/20",
      badgeGlow: "shadow-[0_0_12px_-3px_rgba(139,92,246,0.4)]",
      highlight: "text-violet-400",
      // Jewel-like tag styling
      tagBg: "bg-violet-500/5",
      tagText: "text-violet-300",
      tagBorder: "border-violet-500/20",
      tagGlow: "shadow-[0_0_10px_rgba(139,92,246,0.1)]",
      tagHover: "hover:bg-violet-500/10",
    },
    blue: {
      accent: "text-blue-400",
      accentHover: "group-hover:text-blue-400",
      iconRing: "ring-slate-900",
      iconBorder: "border-slate-700",
      iconColor: "text-blue-400",
      hoverBorder: "hover:border-blue-500/30",
      hoverShadow: "hover:shadow-blue-500/10",
      badgeBg: "bg-blue-500/10",
      badgeText: "text-blue-300",
      badgeBorder: "border-blue-500/20",
      badgeGlow: "shadow-[0_0_12px_-3px_rgba(59,130,246,0.4)]",
      highlight: "text-blue-400",
      // Jewel-like tag styling
      tagBg: "bg-blue-500/5",
      tagText: "text-blue-300",
      tagBorder: "border-blue-500/20",
      tagGlow: "shadow-[0_0_10px_rgba(59,130,246,0.1)]",
      tagHover: "hover:bg-blue-500/10",
    },
  };

  const colors = accentConfig[exp.accentColor] || accentConfig.teal;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-16 md:pl-24 pb-16 last:pb-0 group"
    >
      {/* Timeline Vertical Line - Gradient */}
      <div className="absolute left-[22px] md:left-[26px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-slate-700 via-slate-800 to-transparent" />

      {/* Timeline Icon Node - With Ring Effect */}
      <div className="absolute left-0 top-1 z-20">
        <div className={`
          relative w-11 h-11 md:w-13 md:h-13 rounded-full 
          bg-slate-900 
          border ${colors.iconBorder}
          ring-4 ${colors.iconRing}
          flex items-center justify-center
          shadow-xl
          transition-all duration-300
        `}>
          <IconComponent size={20} className={colors.iconColor} strokeWidth={1.5} />
        </div>

        {/* Horizontal Connector */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 h-[1px] w-6 md:w-10 bg-gradient-to-r from-slate-700 to-transparent" />
      </div>

      {/* Ultra-Premium Card - Glass Border */}
      <div className={`
        relative 
        p-8 
        rounded-3xl 
        border border-white/10
        bg-slate-900/50 
        backdrop-blur-md
        hover:border-white/20
        hover:bg-slate-800/50
        hover:shadow-2xl
        ${colors.hoverShadow}
        transition-all duration-300
      `}>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-5">
          <div>
            {/* Title - High Contrast White */}
            <h3 className={`text-xl md:text-2xl font-bold text-slate-100 mb-2 ${colors.accentHover} transition-colors`}>
              {exp.role}
            </h3>
            {/* Company & Location Row */}
            <div className="flex items-center flex-wrap">
              <span className={`text-sm font-semibold ${colors.accent} tracking-wide uppercase`}>
                {exp.company}
              </span>
              <span className="text-slate-600 mx-2">|</span>
              <span className="text-xs text-slate-400">{exp.location}</span>
            </div>
          </div>
          
          {/* Date & Badge - Right Aligned */}
          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <span className="text-slate-400 text-xs font-mono">{exp.year} —</span>
            {exp.isActive ? (
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${colors.badgeBg} ${colors.badgeText} border ${colors.badgeBorder} ${colors.badgeGlow}`}>
                Present
              </span>
            ) : (
              <span className="text-slate-400 text-xs font-mono">{exp.yearEnd}</span>
            )}
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
                ${colors.tagGlow}
                ${colors.tagHover}
                transition-colors cursor-default
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
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
