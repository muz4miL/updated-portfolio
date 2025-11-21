"use client";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const journeyItems = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "CodeClub Peshawar",
    year: "2025 - Present",
    description: "Building scalable UI components and collaborating on startup solutions.",
    tags: ["React", "Next.js"],
    logo: "/logos/codeclub.png",
    color: "group-hover:border-green-500/50",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]",
    bgGradient: "group-hover:bg-green-500/5"
  },
  {
    id: 2,
    title: "AI Sprint Fellow",
    company: "Brave Studios",
    year: "2024",
    description: "Rapid prototyping of AI-driven applications and LLM integration.",
    tags: ["AI", "Prototyping"],
    logo: "/logos/brave.png",
    color: "group-hover:border-red-500/50",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]",
    bgGradient: "group-hover:bg-red-500/5"
  },
  {
    id: 3,
    title: "Exchange Scholar",
    company: "U.S. Dept. of State",
    year: "2019 - 2020",
    description: "Selected for the YES program. Cultural ambassador in Wa, USA.",
    tags: ["Leadership", "Culture"],
    logo: "/logos/yes.png",
    color: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    bgGradient: "group-hover:bg-blue-500/5"
  },
  {
    id: 4,
    title: "BS Computer Science",
    company: "IMSciences",
    year: "2023 - 2027",
    description: "Specializing in Software Engineering and Modern Web Technologies.",
    tags: ["Education", "CS"],
    logo: "/logos/ims.png",
    color: "group-hover:border-teal-500/50",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)]",
    bgGradient: "group-hover:bg-teal-500/5"
  }
];

const JourneyCard = ({ item }) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-navy/40 p-5 transition-all duration-500 hover:-translate-y-1 ${item.color} ${item.glow}`}>

      {/* 1. Top Row: Tags & Glass Badge Logo */}
      <div className="flex justify-between items-start mb-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono text-teal bg-teal/10 px-2 py-1 rounded border border-teal/20">
              {tag}
            </span>
          ))}
        </div>

        {/* The Glass Badge Logo */}
        <div className={`
            relative w-14 h-14 md:w-16 md:h-16 
            rounded-xl bg-white/5 border border-white/10 
            flex items-center justify-center 
            backdrop-blur-sm
            group-hover:scale-110 transition-transform duration-500
            ${item.color}
        `}>
          <Image
            src={item.logo}
            alt={item.company}
            width={64}
            height={64}
            className="object-contain w-8 h-8 md:w-10 md:h-10 opacity-80 group-hover:opacity-100 transition-opacity"
            unoptimized
          />
        </div>
      </div>

      {/* 2. Content */}
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-teal transition-colors">
          {item.title}
        </h3>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 mb-3">
          <span className="text-sm font-medium text-slate-300">{item.company}</span>
          <span className="text-xs font-mono text-slate-500">{item.year}</span>
        </div>

        <p className="text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* 3. Subtle Gradient Background on Hover */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${item.bgGradient}`} />
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-12 max-w-6xl mx-auto px-6">
      <SectionHeader number="02" title="Journey Highlights" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {journeyItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <JourneyCard item={item} />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-3 px-5 py-2.5 border border-teal/30 rounded-lg hover:bg-teal/10 transition-all duration-300"
        >
          <span className="font-mono text-teal text-xs uppercase tracking-widest">
            View Full Timeline
          </span>
          <ArrowRight
            size={14}
            className="text-teal group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default Experience;
