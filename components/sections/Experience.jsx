"use client";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { journeyItems } from "@/lib/experience/experienceData";

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
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden">
          {/* Main glass container */}
          <div className="
            absolute inset-0
            bg-gradient-to-br from-white/20 to-white/10
            flex items-center justify-center 
            shadow-[0_0_25px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.3)]
            group-hover:shadow-[0_0_40px_rgba(100,255,218,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)]
            group-hover:from-white/25 group-hover:to-white/15
            transition-all duration-500
          ">
            {/* Backdrop blur layer behind logo */}
            <div className="absolute inset-0 backdrop-blur-md" />
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Logo container - this scales */}
            <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
              <Image
                src={item.logo}
                alt={item.company}
                width={80}
                height={80}
                className="object-contain w-11 h-11 md:w-14 md:h-14 brightness-[1.3] contrast-[1.3] saturate-[1.2] drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] group-hover:brightness-[1.4] group-hover:contrast-[1.4] group-hover:drop-shadow-[0_4px_12px_rgba(100,255,218,0.5)] transition-all duration-500"
                unoptimized
              />
            </div>
          </div>
          
          {/* Border layer - on top, no color change on hover */}
          <div className="
            absolute inset-0 rounded-lg border border-white/30 
            group-hover:border-white/40
            transition-all duration-500
            pointer-events-none
          " />
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
