"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Code, Heart } from "lucide-react";

/* =====================================================
   SUPER-LIGHT PARTICLES (CSS animation only)
   ===================================================== */
const FloatingParticles = ({ count = 12 }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(count)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-teal-400/20 animate-pulse"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    animationDelay: `${i * 0.2}s`,
                }}
            />
        ))}
    </div>
);

/* =====================================================
   HEXAGON COLOR TOKENS (same as before)
   ===================================================== */
const hexagonColors = {
    violet: {
        border: "border-violet-400",
        glow: "shadow-[0_0_20px_rgba(139,92,246,0.4),0_0_40px_rgba(139,92,246,0.2)]",
        hoverGlow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6),0_0_60px_rgba(139,92,246,0.3)]",
        innerGlow: "shadow-[inset_0_0_20px_rgba(139,92,246,0.2)]",
        iconColor: "text-violet-400",
        numberGradient: "from-violet-300 to-violet-500",
    },
    teal: {
        border: "border-teal-400",
        glow: "shadow-[0_0_20px_rgba(20,184,166,0.4),0_0_40px_rgba(20,184,166,0.2)]",
        hoverGlow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.6),0_0_60px_rgba(20,184,166,0.3)]",
        innerGlow: "shadow-[inset_0_0_20px_rgba(20,184,166,0.2)]",
        iconColor: "text-teal-400",
        numberGradient: "from-teal-300 to-teal-500",
    },
    cyan: {
        border: "border-cyan-400",
        glow: "shadow-[0_0_20px_rgba(34,211,238,0.4),0_0_40px_rgba(34,211,238,0.2)]",
        hoverGlow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.3)]",
        innerGlow: "shadow-[inset_0_0_20px_rgba(34,211,238,0.2)]",
        iconColor: "text-cyan-400",
        numberGradient: "from-cyan-300 to-cyan-500",
    },
    rose: {
        border: "border-rose-400",
        glow: "shadow-[0_0_20px_rgba(244,63,94,0.4),0_0_40px_rgba(244,63,94,0.2)]",
        hoverGlow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.6),0_0_60px_rgba(244,63,94,0.3)]",
        innerGlow: "shadow-[inset_0_0_20px_rgba(244,63,94,0.2)]",
        iconColor: "text-rose-400",
        numberGradient: "from-rose-300 to-rose-500",
    },
};

/* =====================================================
   FloatingHexagon (final polished version)
   ===================================================== */
const FloatingHexagon = ({ number, label, icon: Icon, flagPath, delay = 0, hexColor = "teal" }) => {
    const colors = hexagonColors[hexColor] ?? hexagonColors.teal;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay, duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.04 }}
            className="relative group"
        >
            <div className="relative w-32 h-36 md:w-40 md:h-44 flex items-center justify-center">

                {/* Glow + Hover Glow */}
                <div
                    className={`absolute inset-0 clip-hex ${colors.glow} ${colors.hoverGlow} opacity-60 group-hover:opacity-100 transition-all duration-500`}
                />

                {/* Hexagon body */}
                <div
                    className={`absolute inset-[2px] md:inset-[3px] clip-hex bg-slate-900/60 backdrop-blur-md border-2 ${colors.border} ${colors.innerGlow} group-hover:bg-slate-800/70 transition-all duration-500`}
                >
                    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 py-6">

                        {/* ICON OR FLAG — upgraded */}
                        <div className="mb-3 md:mb-4 flex items-center justify-center">
                            {flagPath ? (
                                <div className="w-8 h-8 md:w-10 md:h-10 relative rounded-full overflow-hidden border border-white/40 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                                    <Image
                                        src={flagPath}
                                        alt={`${label} flag`}
                                        fill
                                        sizes="40px"
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <Icon className={`w-7 h-7 md:w-9 md:h-9 ${colors.iconColor}`} />
                            )}
                        </div>

                        {/* Number */}
                        <div className={`text-2xl md:text-3xl font-bold mb-1 md:mb-2 bg-gradient-to-b ${colors.numberGradient} bg-clip-text text-transparent`}>
                            {number}
                        </div>

                        {/* Label */}
                        <div className="text-[9px] md:text-[11px] text-slate-300 tracking-widest uppercase text-center font-mono">
                            {label}
                        </div>
                    </div>
                </div>

                {/* Rotating border ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 clip-hex opacity-20"
                >
                    <div className={`w-full h-full border ${colors.border}`} />
                </motion.div>
            </div>
        </motion.div>
    );
};

/* =====================================================
   Stats Data
   ===================================================== */
const statsData = [
    { number: "1000+", label: "Students Mentored", icon: Users, delay: 0.25, hexColor: "violet" },
    { number: "20+", label: "Projects Built", icon: Code, delay: 0.35, hexColor: "teal" },
    { number: "100+", label: "Service Hours", icon: Heart, delay: 0.45, hexColor: "rose" },
    { number: "1", label: "Year in USA", flagPath: "/images/usa-flag.png", delay: 0.55, hexColor: "cyan" },
];

/* =====================================================
   MAIN COMPONENT
   ===================================================== */
const ExperienceHero = () => {
    return (
        <section className="relative py-12 md:py-20 px-5 md:px-6 overflow-x-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 }}
                        className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
                    >
                        My <span className="text-gradient">Journey</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="text-sm md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        From representing Pakistan in the USA as a YES Exchange student to mentoring
                        1000+ aspiring developers — a refined story of growth, craft, and impact.
                    </motion.p>
                </div>

                {/* Hexagon Cluster */}
                <div className="relative overflow-x-hidden">
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto px-4">
                        <div className="flex gap-4 md:gap-6">
                            <FloatingHexagon {...statsData[0]} />
                            <FloatingHexagon {...statsData[1]} />
                        </div>

                        <div className="flex gap-4 md:gap-6 md:translate-x-[-20px]">
                            <FloatingHexagon {...statsData[2]} />
                            <FloatingHexagon {...statsData[3]} />
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-radial from-teal-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl -z-10" />
                </div>
            </div>
        </section>
    );
};

export default ExperienceHero;
