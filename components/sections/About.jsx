import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: The Hook (Trimmed Down) */}
        <div className="space-y-8">
          <div className="font-mono text-teal text-sm tracking-widest animate-pulse">
            01. THE JOURNEY
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            Building digital experiences that{" "}
            <span className="text-teal">bridge cultures</span> and solve real
            problems.
          </h2>

          <p className="text-slate text-lg leading-relaxed max-w-md">
            My journey into tech transformed during my{" "}
            <strong className="text-white">YES Exchange Program</strong>. Today,
            I specialize in creating accessible, high-performance applications
            that make a meaningful impact.
          </p>

          {/* Minimal CTA */}
          <div className="pt-2">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-white font-mono text-sm hover:text-teal transition-colors"
            >
              <span className="border-b border-teal pb-1">Read full bio</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform text-teal"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: The Stats (Floating / No Boxes) */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 pl-0 md:pl-12">
          {/* Stat 1 */}
          <div className="group relative">
            <div className="absolute -left-4 top-0 w-[1px] h-full bg-gradient-to-b from-teal/50 to-transparent"></div>
            <h3 className="font-heading text-5xl md:text-6xl font-bold text-white group-hover:text-teal transition-colors duration-300">
              250<span className="text-teal text-3xl">+</span>
            </h3>
            <p className="text-slate/60 font-mono text-xs mt-2 uppercase tracking-widest">
              Students Mentored
            </p>
          </div>

          {/* Stat 2 */}
          <div className="group relative">
            <div className="absolute -left-4 top-0 w-[1px] h-full bg-gradient-to-b from-teal/50 to-transparent"></div>
            <h3 className="font-heading text-5xl md:text-6xl font-bold text-white group-hover:text-teal transition-colors duration-300">
              15<span className="text-teal text-3xl">+</span>
            </h3>
            <p className="text-slate/60 font-mono text-xs mt-2 uppercase tracking-widest">
              Projects Shipped
            </p>
          </div>

          {/* Stat 3 */}
          <div className="group relative">
            <div className="absolute -left-4 top-0 w-[1px] h-full bg-gradient-to-b from-teal/50 to-transparent"></div>
            <h3 className="font-heading text-5xl md:text-6xl font-bold text-white group-hover:text-teal transition-colors duration-300">
              1<span className="text-teal text-3xl">yr</span>
            </h3>
            <p className="text-slate/60 font-mono text-xs mt-2 uppercase tracking-widest">
              USA Exchange
            </p>
          </div>

          {/* Stat 4 */}
          <div className="group relative">
            <div className="absolute -left-4 top-0 w-[1px] h-full bg-gradient-to-b from-teal/50 to-transparent"></div>
            <h3 className="font-heading text-5xl md:text-6xl font-bold text-white group-hover:text-teal transition-colors duration-300">
              500<span className="text-teal text-3xl">+</span>
            </h3>
            <p className="text-slate/60 font-mono text-xs mt-2 uppercase tracking-widest">
              Coffees Consumed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
