"use client";
import React from "react";
import { motion } from "framer-motion";

/* =====================================================
   EXTRAORDINARY STAT CARD WITH PREMIUM MINIMALIST DESIGN
   ===================================================== */
const ExtraordinaryStatCard = ({ number, label, gradient, delay, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
                delay, 
                duration: 0.7, 
                type: "spring",
                stiffness: 80,
                damping: 15
            }}
            whileHover={{ 
                scale: 1.05,
                z: 50,
                transition: { duration: 0.3 }
            }}
            className="group relative"
            style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d"
            }}
        >
            <div 
                className="relative h-full overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-2xl shadow-2xl transition-all duration-500"
                style={{
                    border: `1px solid rgba(255, 255, 255, 0.1)`,
                    boxShadow: `
                        0 0 20px ${gradient[0]}40,
                        0 0 40px ${gradient[1]}20,
                        0 8px 32px rgba(0, 0, 0, 0.4)
                    `
                }}
            >
                
                {/* Subtle glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 md:p-8 h-full min-h-[180px] md:min-h-[220px]">
                    
                    {/* Static number with refined gradient */}
                    <div className="mb-4">
                        <div 
                            className="text-5xl md:text-7xl font-black tracking-tighter"
                            style={{
                                background: `linear-gradient(135deg, #ffffff 10%, ${gradient[0]} 50%, ${gradient[1]} 90%)`,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                                textShadow: `0 0 10px ${gradient[0]}60`
                            }}
                        >
                            {number}
                        </div>
                    </div>

                    {/* Label with subtle glow */}
                    <div className="relative">
                        <p 
                            className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90"
                            style={{
                                textShadow: `0 0 10px ${gradient[0]}40, 0 2px 4px rgba(0,0,0,0.5)`
                            }}
                        >
                            {label}
                        </p>
                    </div>

                    {/* Bottom accent line */}
                    <div 
                        className="absolute bottom-0 left-1/4 right-1/4 h-1 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background: `linear-gradient(90deg, transparent, ${gradient[0]}, ${gradient[1]}, transparent)`
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

/* =====================================================
   STATS DATA WITH VIBRANT GRADIENTS
   ===================================================== */
const statsData = [
    { 
        number: "150+", 
        label: "Students Mentored", 
        gradient: ["#a855f7", "#ec4899", "#f97316"],
        delay: 0.1 
    },
    { 
        number: "15+", 
        label: "Projects Built", 
        gradient: ["#14b8a6", "#06b6d4", "#3b82f6"],
        delay: 0.2 
    },
    { 
        number: "200+", 
        label: "Service Hours", 
        gradient: ["#f43f5e", "#fb923c", "#fbbf24"],
        delay: 0.3 
    },
    { 
        number: "1", 
        label: "Year in USA", 
        gradient: ["#22d3ee", "#6366f1", "#a78bfa"],
        delay: 0.4 
    },
];

/* =====================================================
   MAIN COMPONENT
   ===================================================== */
const ExperienceHero = () => {
    return (
        <>
            <style jsx global>{`
                @keyframes gradientShift {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    50% { transform: scale(1.1) rotate(5deg); }
                }
            `}</style>
            
            <section className="relative py-10 md:py-16 px-4 md:px-6 overflow-hidden">
                {/* Ambient background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                            className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 md:mb-6"
                        >
                            My <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400">Journey</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
                        >
                            From representing Pakistan in the USA as a YES Exchange student to mentoring
                            1000+ aspiring developers — a refined story of growth, craft, and impact.
                        </motion.p>
                    </div>

                    {/* Extraordinary Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                        {statsData.map((stat, index) => (
                            <ExtraordinaryStatCard key={index} {...stat} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExperienceHero;
