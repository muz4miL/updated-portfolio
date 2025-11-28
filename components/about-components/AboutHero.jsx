"use client";
import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Sparkles, Users, Rocket } from "lucide-react";
import { GlobalIcon } from "@/components/icons";

const AboutHero = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      style={{ y: headerY, opacity: headerOpacity }}
      className="relative pt-32 pb-24 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link
          href="/#about"
          className="group inline-flex items-center gap-2 text-slate hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-widest">
            Back to Home
          </span>
        </Link>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles size={16} className="text-white/60 animate-pulse" />
            <span className="font-mono text-xs text-white/80 uppercase tracking-widest">
              About Me
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Hey, I'm{" "}
            <span className="text-gradient">Muzamil</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate max-w-2xl mx-auto leading-relaxed">
            Frontend Developer • Tech Educator • CS Student
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="px-4 py-2 bg-navy/50 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-violet-400" />
                <span className="font-mono text-white/80 text-sm">1000+ Students Mentored</span>
              </div>
            </div>
            <div className="px-4 py-2 bg-navy/50 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <Rocket size={18} className="text-blue-400" />
                <span className="font-mono text-white/80 text-sm">20+ Projects</span>
              </div>
            </div>
            <div className="px-4 py-2 bg-navy/50 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <GlobalIcon size={18} className="text-teal-400" />
                <span className="font-mono text-white/80 text-sm">YES Exchange Alumni</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutHero;
