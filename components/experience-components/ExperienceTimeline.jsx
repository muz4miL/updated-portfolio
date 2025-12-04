"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Calendar,
    MapPin,
    Star,
    Briefcase,
    GraduationCap,
    Globe,
    Users
} from "lucide-react";
import Image from "next/image";

// ============================================
// EXPERIENCE TIMELINE - KINETIC DATA MONOLITH
// Single-column vertical flow with Data Pulse Stream
// ============================================

// Experience Data - Complete professional journey
const experienceData = [
    {
        category: "work",
        title: "Web Developer (Internship)",
        org: "Code Club",
        date: "Oct 2024 - Present",
        location: "Peshawar, Pakistan",
        description: "Delivered performance-driven React applications focusing on pixel-perfect Figma implementations and optimizing load times.",
        highlight1: "Figma/React",
        highlightMid: " stack. Skills include: ",
        highlight2: "UI/UX & Next.js",
        highlightEnd: ".",
        skills: ["React.js", "Next.js", "Figma", "Tailwind CSS", "TypeScript"],
        logoPath: "/logos/codeclub2.png",
        accentColor: "teal",
    },
    {
        category: "teaching",
        title: "English Language Teacher",
        org: "ILCC - Institute of Languages",
        date: "Jul 2024 - Nov 2024",
        location: "Peshawar, Pakistan",
        description: "Utilized cross-cultural experience (USA Exchange) to empower students to communicate effectively, focusing on literature and grammar.",
        highlight1: "5 mos Contract",
        highlightMid: ", empowering over ",
        highlight2: "50+ students",
        highlightEnd: ".",
        skills: ["Teaching English", "Cross-functional Leadership", "TOEFL"],
        logoPath: "/logos/illc.png",
        accentColor: "rose",
    },
    {
        category: "work",
        title: "AI Sprint Extensive (Paid Internship)",
        org: "Bave Technologies",
        date: "Aug 2024",
        location: "Peshawar, Pakistan",
        description: "One-month intense internship focusing on core AI concepts and technologies at the Arfa Karim Incubation Center.",
        highlight1: "1 mo AI Sprint",
        highlightMid: ", gaining exposure to industry best practices in ",
        highlight2: "AI technology",
        highlightEnd: ".",
        skills: ["Python", "AI Concepts", "Machine Learning"],
        logoPath: "/logos/brave.png",
        accentColor: "violet",
    },
    {
        category: "exchange",
        title: "YES Exchange Scholar",
        org: "Kennedy-Lugar Youth Exchange & Study Program",
        date: "Aug 2019 - Jun 2020",
        location: "Washington State, USA",
        description: "Selected among top 1% of 20,000+ applicants for this prestigious scholarship funded by the U.S. Department of State.",
        highlight1: "Top 1%",
        highlightMid: " of ",
        highlight2: "20,000+ applicants",
        highlightEnd: ". Cultural ambassador for Pakistan.",
        skills: ["Leadership", "Cross-Cultural Communication", "Public Speaking", "Adaptability"],
        accentColor: "amber",
    },
    {
        category: "education",
        title: "Bachelor of Computer Science",
        org: "Institute of Management Sciences (IMSciences)",
        date: "2023 - 2027",
        location: "Peshawar, Pakistan",
        description: "Studying core CS: Data Structures, Algorithms, Software Engineering, Databases. Active in tech society.",
        highlight1: "CS Degree",
        highlightMid: " with focus on ",
        highlight2: "Web Technologies & AI",
        highlightEnd: ".",
        skills: ["Data Structures", "Algorithms", "OOP", "Database Systems", "Web Development"],
        accentColor: "cyan",
    },
];

// Accent Color Configuration with glow effects
const accentConfig = {
    teal: {
        accent: "text-teal-400",
        border: "border-teal-500/20",
        hoverBorder: "hover:border-teal-500/40",
        tagBg: "bg-teal-500/5",
        tagText: "text-teal-300",
        tagBorder: "border-teal-500/20",
        glowColor: "#14b8a6",
        shadowGlow: "0 0 15px rgba(20,184,166,0.6), 0 0 30px rgba(20,184,166,0.3)",
        highlightGlow: "drop-shadow(0 0 8px rgba(20,184,166,0.8))",
    },
    rose: {
        accent: "text-rose-400",
        border: "border-rose-500/20",
        hoverBorder: "hover:border-rose-500/40",
        tagBg: "bg-rose-500/5",
        tagText: "text-rose-300",
        tagBorder: "border-rose-500/20",
        glowColor: "#f43f5e",
        shadowGlow: "0 0 15px rgba(244,63,94,0.6), 0 0 30px rgba(244,63,94,0.3)",
        highlightGlow: "drop-shadow(0 0 8px rgba(244,63,94,0.8))",
    },
    violet: {
        accent: "text-violet-400",
        border: "border-violet-500/20",
        hoverBorder: "hover:border-violet-500/40",
        tagBg: "bg-violet-500/5",
        tagText: "text-violet-300",
        tagBorder: "border-violet-500/20",
        glowColor: "#8b5cf6",
        shadowGlow: "0 0 15px rgba(139,92,246,0.6), 0 0 30px rgba(139,92,246,0.3)",
        highlightGlow: "drop-shadow(0 0 8px rgba(139,92,246,0.8))",
    },
    amber: {
        accent: "text-amber-400",
        border: "border-amber-500/20",
        hoverBorder: "hover:border-amber-500/40",
        tagBg: "bg-amber-500/5",
        tagText: "text-amber-300",
        tagBorder: "border-amber-500/20",
        glowColor: "#fbbf24",
        shadowGlow: "0 0 15px rgba(251,191,36,0.6), 0 0 30px rgba(251,191,36,0.3)",
        highlightGlow: "drop-shadow(0 0 8px rgba(251,191,36,0.8))",
    },
    cyan: {
        accent: "text-cyan-400",
        border: "border-cyan-500/20",
        hoverBorder: "hover:border-cyan-500/40",
        tagBg: "bg-cyan-500/5",
        tagText: "text-cyan-300",
        tagBorder: "border-cyan-500/20",
        glowColor: "#22d3ee",
        shadowGlow: "0 0 15px rgba(34,211,238,0.6), 0 0 30px rgba(34,211,238,0.3)",
        highlightGlow: "drop-shadow(0 0 8px rgba(34,211,238,0.8))",
    },
};

// Category Icons
const categoryIcons = {
    work: Briefcase,
    education: GraduationCap,
    exchange: Globe,
    teaching: Users,
};

// Premium Timeline Card - Single Column with 3D Tilt
const TimelineCard = ({ item, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const colors = accentConfig[item.accentColor] || accentConfig.teal;
    const IconComponent = categoryIcons[item.category] || Briefcase;

    // 3D Tilt calculation
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateX(((y - centerY) / centerY) * -3);
        setRotateY(((x - centerX) / centerX) * 3);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative pl-10 md:pl-20 pb-10 md:pb-14 last:pb-0 group"
        >
            {/* Kinetic Pulse Node - Company Logo */}
            <div className="absolute left-0 top-1 z-20">
                <motion.div
                    className="relative w-8 h-8 md:w-11 md:h-11 rounded-full bg-slate-50 border-2 border-slate-700 ring-2 md:ring-4 ring-navy flex items-center justify-center overflow-hidden shadow-lg"
                    style={{ boxShadow: colors.shadowGlow }}
                    animate={{
                        boxShadow: [
                            colors.shadowGlow,
                            `0 0 20px ${colors.glowColor}80, 0 0 40px ${colors.glowColor}40`,
                            colors.shadowGlow,
                        ],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    {item.logoPath ? (
                        <Image
                            src={item.logoPath}
                            alt={`${item.org} logo`}
                            width={36}
                            height={36}
                            className="w-5 h-5 md:w-7 md:h-7 object-contain"
                        />
                    ) : (
                        <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${colors.accent}`} />
                    )}
                </motion.div>

                {/* Horizontal Connector Line */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 h-[1px] w-4 md:w-8 bg-gradient-to-r from-slate-600 to-transparent group-hover:from-teal-500/50 transition-colors duration-300" />
            </div>

            {/* Premium Card with 3D Tilt */}
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
          relative overflow-hidden rounded-xl md:rounded-2xl p-5 md:p-8
          bg-white/[0.02] border ${colors.border} ${colors.hoverBorder}
          backdrop-blur-xl
          hover:bg-white/[0.06]
          hover:shadow-2xl hover:shadow-black/20
          transition-all duration-400
        `}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
                {/* Ambient Hover Glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${colors.glowColor}10, transparent 70%)`,
                    }}
                />

                {/* Header: Category Badge */}
                <div className="relative flex items-center gap-2 mb-3 md:mb-4">
                    <div className={`p-1.5 md:p-2 ${colors.tagBg} rounded-lg border ${colors.tagBorder}`}>
                        <IconComponent size={12} className={`md:w-4 md:h-4 ${colors.accent}`} />
                    </div>
                    <span className={`font-mono text-[9px] md:text-xs ${colors.accent} uppercase tracking-[0.2em]`}>
                        {item.category}
                    </span>
                </div>

                {/* Title & Organization */}
                <h3 className="relative font-heading text-lg md:text-2xl text-white font-bold mb-1 md:mb-2 leading-tight tracking-tight">
                    {item.role || item.title}
                </h3>
                <p className={`relative ${colors.accent} font-semibold text-sm md:text-base mb-2 md:mb-3`}>
                    {item.company || item.org}
                </p>

                {/* Meta: Date & Location */}
                <div className="relative flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-5 text-[10px] md:text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                        <Calendar size={10} className={`md:w-3 md:h-3 ${colors.accent} opacity-60`} />
                        <span className="font-mono">{item.yearEnd ? `${item.year} — ${item.yearEnd}` : item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin size={10} className={`md:w-3 md:h-3 ${colors.accent} opacity-60`} />
                        <span>{item.location}</span>
                    </div>
                </div>

                {/* Description with Highlighted Stats - THE 10/10 UPGRADE */}
                <p className="relative text-slate-300 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 max-w-2xl">
                    {item.description}{" "}
                    <span
                        className="text-white font-bold"
                        style={{ filter: colors.highlightGlow }}
                    >
                        {item.highlight1}
                    </span>
                    {item.highlightMid}{" "}
                    <span
                        className={`${colors.accent} font-mono font-bold`}
                        style={{ filter: colors.highlightGlow }}
                    >
                        {item.highlight2}
                    </span>
                    {item.highlightEnd}
                </p>

                {/* Tech Tags - Jewel-like */}
                <div className="relative flex flex-wrap gap-1.5 md:gap-2">
                    {item.skills?.map((skill, i) => (
                        <span
                            key={i}
                            className={`
                px-2 py-0.5 md:px-3 md:py-1
                text-[8px] md:text-[10px] font-semibold tracking-wide uppercase
                rounded md:rounded-md
                ${colors.tagBg} ${colors.tagText}
                border ${colors.tagBorder}
                hover:bg-white/5
                transition-colors cursor-default
              `}
                        >
                            {skill}
                        </span>
                    )) || item.tech?.map((tech, i) => (
                        <span
                            key={i}
                            className={`
                px-2 py-0.5 md:px-3 md:py-1
                text-[8px] md:text-[10px] font-semibold tracking-wide uppercase
                rounded md:rounded-md
                ${colors.tagBg} ${colors.tagText}
                border ${colors.tagBorder}
                hover:bg-white/5
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

// Data Pulse Stream - Animated Timeline Line
const DataPulseStream = () => (
    <>
        {/* Base Glow Line */}
        <div className="absolute left-[15px] md:left-[21px] top-0 bottom-0 w-[3px] md:w-[4px] rounded-full bg-gradient-to-b from-teal-500/30 via-cyan-400/20 to-violet-500/30" />

        {/* Animated Pulse Particles */}
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute left-[14px] md:left-[20px] w-[5px] md:w-[6px] h-8 md:h-12 rounded-full bg-gradient-to-b from-teal-400 via-cyan-300 to-transparent blur-[1px]"
                initial={{ top: "-5%", opacity: 0 }}
                animate={{
                    top: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "linear",
                }}
            />
        ))}

        {/* Bright Core Line */}
        <div className="absolute left-[16px] md:left-[22px] top-0 bottom-0 w-[1px] md:w-[2px] bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />
    </>
);

/**
 * ExperienceTimeline - Kinetic Data Monolith
 * Single-column vertical flow with animated Data Pulse Stream
 */
const ExperienceTimeline = () => {
    return (
        <section className="relative py-10 md:py-16 px-5 md:px-6">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-14"
                >
                    <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 flex items-center gap-3">
                        <span className="text-gradient">Experience</span>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl">
                        A timeline of growth, learning, and impact across continents.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Data Pulse Stream - Visible on all devices */}
                    <DataPulseStream />

                    {/* Timeline Cards */}
                    <div>
                        {experienceData.map((item, index) => (
                            <TimelineCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
