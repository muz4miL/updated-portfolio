"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// --- SUB-COMPONENT: Premium Number Counter ---
const StatCounter = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimate = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimate.current) {
          hasAnimate.current = true;

          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="group relative text-center">
      <div className="absolute -left-4 top-0 w-[1px] h-full bg-gradient-to-b from-teal/50 to-transparent hidden md:block"></div>
      <h3 className="font-heading text-4xl md:text-5xl font-bold text-white group-hover:text-teal transition-colors duration-300">
        {count}
        <span className="text-teal text-2xl">{suffix}</span>
      </h3>
      <p className="text-slate font-mono text-xs mt-2 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
};

// --- MAIN COMPONENT ---
const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* LEFT SIDE: The Hook */}
        <motion.div className="space-y-8" variants={leftVariants}>
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
        </motion.div>

        {/* RIGHT SIDE: Fixed Image (Natural Color) */}
        <motion.div
          className="flex justify-center md:justify-end"
          variants={rightVariants}
        >
          <div className="relative group w-72 h-72 mx-auto">
            {/* 1. THE BORDER FRAME */}
            <div
              className="
              absolute 
              w-full h-full 
              border-2 border-teal rounded 
              translate-x-4 translate-y-4 
              transition-transform duration-300 ease-out
              group-hover:translate-x-2 group-hover:translate-y-2
            "
            ></div>

            {/* 2. THE IMAGE WRAPPER */}
            <div
              className="
              relative 
              w-full h-full 
              bg-navy
              rounded overflow-hidden
              transition-transform duration-300 ease-out
              group-hover:-translate-x-1 group-hover:-translate-y-1
            "
            >
              {/* 3. THE IMAGE ITSELF */}
              <img
                src="me.jpeg"
                alt="Muzamil Shiraz"
                className="
                  w-full h-full
                  object-cover
                  rounded
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* STATS SECTION: With Animations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-teal/20">
        <StatCounter end={250} suffix="+" label="Students Mentored" />
        <StatCounter end={15} suffix="+" label="Projects Shipped" />
        <StatCounter end={1} suffix="yr" label="USA Exchange" />
        <StatCounter end={500} suffix="+" label="Coffees Consumed" />
      </div>
    </section>
  );
};

export default About;
