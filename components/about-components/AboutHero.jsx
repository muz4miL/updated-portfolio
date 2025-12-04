"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowLeft, Code2, Globe, Users } from "lucide-react";

// --- Optimized Counter Component (FIXED for Mobile) ---
const Counter = ({ value, direction = "up" }) => {
    const ref = useRef(null);
    // Use a sensible default spring animation
    const motionValue = useSpring(0, {
        damping: 15,
        stiffness: 100,
    });
    // Use margin: "0px" for wider detection range
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        // If the element is visible, set the motionValue to the target value
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const updateCounter = (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(
                    Math.floor(latest)
                );
            }
        };

        const unsubscribe = motionValue.on("change", updateCounter);

        // Set initial text content immediately to prevent empty span on load
        if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US").format(0);
        }

        return () => {
            unsubscribe();
        };
    }, [motionValue]);

    return <span ref={ref} />;
};

// --- Glass Card with memoization ---
const GlassCard = React.memo(({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className={`
        relative overflow-hidden rounded-3xl p-6
        border border-white/10 bg-white/[0.03] backdrop-blur-xl
        hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300
        shadow-xl shadow-black/40
        ${className}
    `}
    >
        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${className}`} />
        <div className="relative z-10 h-full">
            {children}
        </div>
    </motion.div>
));

GlassCard.displayName = 'GlassCard';

const AboutHero = ({ containerRef }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const container = useRef(null);

    // Split name into characters for staggered animation
    const name = "MUZAMIL";
    const nameChars = name.split("");

    // Framer Motion variants for staggered character reveal
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
            },
        },
    };

    const charVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 1.2,
                ease: [0.2, 0.8, 0.4, 1.2], // Aggressive bounce for high-impact reveal
            },
        },
    };

    return (
        <section ref={container} className="relative flex items-center pt-6 pb-24 md:pt-32 overflow-hidden bg-transparent">

            {/* Lighter vignette for better performance */}
            <div className="absolute inset-0 pointer-events-none " />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 left-6 md:left-0"
                >
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                        prefetch={false}
                    >
                        <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                        <span className="tracking-widest uppercase text-xs font-mono">Back Home</span>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mt-16">

                    {/* Left Column: Text */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-start text-left"
                        style={{ y, opacity }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Staggered Character Reveal for Name with Kinetic Gradient */}
                        <motion.h1
                            className="font-heading text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
                            style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, #22d3ee 50%, #a78bfa 100%)',
                                backgroundSize: '200% 200%',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'gradient-shift 8s ease infinite',
                                textShadow: '0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(34,211,238,0.2)',
                            }}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {nameChars.map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={charVariants}
                                    style={{ display: "inline-block" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-px w-12 bg-zinc-700"></span>
                            <span className="text-lg md:text-xl text-zinc-300 font-light tracking-widest uppercase">SENIOR FRONTEND ARCHITECT</span>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-zinc-400 text-lg leading-relaxed max-w-2xl"
                        >
                            I architect pixel-perfect digital experiences, specializing in kinetic UIs using <strong className="text-zinc-300">React, Next.js, and Framer Motion</strong>. My passion is bridging <strong className="text-zinc-300">design and engineering</strong> to deliver Awwwards-level detail.
                        </motion.p>

                        {/* 🚨 REMOVED: Social Media Icons were here. They are now moved to the page footer. */}

                    </motion.div>


                    {/* Right Column: Stats Grid */}
                    <div className="lg:col-span-5 w-full">
                        <div className="grid grid-cols-2 gap-3">
                            <GlassCard className="col-span-2 aspect-[2/1] from-violet-500/20 to-purple-500/5">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="p-2 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-violet-300">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <div className="text-5xl font-bold text-white mb-1 tracking-tight flex items-center gap-1">
                                            <Counter value={150} />+
                                        </div>
                                        <p className="text-sm text-zinc-400 font-mono uppercase tracking-wider">Students Mentored</p>
                                    </div>
                                </div>
                            </GlassCard>

                            <GlassCard className="aspect-square from-blue-500/20 to-cyan-500/5 delay-100">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="p-2 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-300">
                                        <Code2 size={20} />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-1"><Counter value={20} />+</div>
                                        <p className="text-xs text-zinc-500 font-mono uppercase">Projects</p>
                                    </div>
                                </div>
                            </GlassCard>

                            <GlassCard className="aspect-square from-teal-500/20 to-emerald-500/5 delay-200">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="p-2 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-teal-300">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-1">YES</div>
                                        <p className="text-xs text-zinc-500 font-mono uppercase">Alumnus</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default React.memo(AboutHero);