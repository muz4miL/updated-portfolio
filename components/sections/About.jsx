"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, Users, Rocket, Globe, Coffee } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// --- SUB-COMPONENT: Premium Stat Card ---
const StatCard = ({ end, suffix, label, Icon, delay }) => {
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
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "backOut" }
        }
      }}
      className="glass-card p-4 rounded-xl relative group hover-lift hover-glow transition-all duration-300 border border-teal/10"
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-navy rounded-full border border-teal/20 flex items-center justify-center group-hover:border-teal/50 transition-colors z-10">
        <Icon size={18} className="text-teal group-hover:scale-110 transition-transform duration-300" />
      </div>

      <div className="mt-3 text-center relative z-0">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-teal transition-colors duration-300">
          {count}
          <span className="text-teal text-lg ml-0.5">{suffix}</span>
        </h3>
        <p className="text-slate font-mono text-[10px] mt-1 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section id="about" ref={containerRef} className="py-16 max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* LEFT SIDE: The Hook */}
        <div className="space-y-3">
          <motion.div variants={itemVariants} className="font-mono text-teal text-xs tracking-widest flex items-center gap-2">
            <span className="w-8 h-[1px] bg-teal"></span>
            01. ABOUT ME
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            Frontend Developer. <br />
            <span className="text-gradient relative inline-block">
              Tech Educator.
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-teal/30 rounded-full"></span>
            </span>{" "}
            <br />
            YES Alumnus.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate text-base leading-relaxed max-w-md">
            Specializing in pixel-perfect, accessible React interfaces. My <strong className="text-white hover:text-teal transition-colors cursor-default">YES Exchange</strong> experience taught me adaptability—vital for solving complex UI challenges. Passionate about crafting smooth, high-performance web experiences.
          </motion.p>

          {/* Minimal CTA */}
          <motion.div variants={itemVariants} className="pt-1">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-white font-mono text-sm hover:text-teal transition-colors relative"
            >
              <span className="relative">
                Read full bio
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-teal group-hover:w-full transition-all duration-300"></span>
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform text-teal"
              />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Compact Image with Parallax */}
        <motion.div
          className="flex justify-center md:justify-end relative"
          variants={itemVariants}
          style={{ y }}
        >
          <div className="relative group w-60 h-60 md:w-64 md:h-64">
            {/* 1. THE BORDER FRAME - Restored Original Style */}
            <div
              className="
              absolute 
              w-full h-full 
              border-2 border-teal rounded
              translate-x-4 translate-y-4
              transition-transform duration-300 ease-out
              group-hover:translate-x-3 group-hover:translate-y-3
              z-0
            "
            ></div>

            {/* 2. THE IMAGE WRAPPER - Restored Original Style */}
            <div
              className="
              relative 
              w-full h-full 
              bg-navy
              rounded overflow-hidden
              transition-transform duration-300 ease-out
              group-hover:-translate-x-1.5 group-hover:-translate-y-1.5
              z-10
            "
            >
              {/* 3. THE IMAGE ITSELF */}
              <img
                src="me.jpeg"
                alt="Muzamil Shiraz"
                className="
                  w-full h-full
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* STATS SECTION: Glass Cards - Compact */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-8 pt-6 border-t border-teal/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <StatCard end={250} suffix="+" label="Developers Trained" Icon={Users} />
        <StatCard end={15} suffix="+" label="Production Deploys" Icon={Rocket} />
        <StatCard end={1} suffix="" label="Global Exchange" Icon={Globe} />
        <StatCard end={500} suffix="+" label="Coffees Consumed" Icon={Coffee} />
      </motion.div>
    </section>
  );
};

export default About;
