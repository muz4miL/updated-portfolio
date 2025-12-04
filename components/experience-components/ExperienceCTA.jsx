"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

// ============================================
// EXPERIENCE CTA - CLEAN MINIMAL DESIGN
// No heavy glass, simple gradient card
// ============================================

const ExperienceCTA = () => {
    return (
        <section className="relative py-16 md:py-24 px-5 md:px-6">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Simple gradient card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.6) 0%, rgba(11, 17, 32, 0.8) 100%)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    {/* Subtle border */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10" />

                    {/* Subtle glow accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

                    {/* Content */}
                    <div className="relative">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 mb-6 md:mb-8"
                        >
                            <Code2 className="w-7 h-7 md:w-8 md:h-8 text-teal-400" />
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 leading-tight">
                            <span className="text-white">Ready to Build </span>
                            <span className="text-gradient">Together?</span>
                        </h2>

                        {/* Description */}
                        <p className="text-slate-400 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                            Let's collaborate on your next project. Whether you need development expertise,
                            mentorship, or a fresh perspective—I'm here to help.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                            {/* Primary CTA */}
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-2 md:gap-3 px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-teal-500 hover:bg-teal-400 text-navy font-bold text-sm md:text-base transition-all duration-300 w-full sm:w-auto justify-center shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                            >
                                <span className="uppercase tracking-wide">Start a Conversation</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/30 text-slate-300 hover:text-teal-400 font-medium text-sm md:text-base transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                <span>View Portfolio</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-teal-500/20 rounded-tl-lg" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-teal-500/20 rounded-br-lg" />
                </motion.div>

                {/* Ambient glow behind card */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
                </div>
            </div>
        </section>
    );
};

export default ExperienceCTA;
