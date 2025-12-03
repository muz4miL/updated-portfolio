"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowLeft, Sparkles, Code2, Globe, Users } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";


// --- Optimized Counter Component ---
const Counter = ({ value, direction = "up" }) => {
  const ref = useRef(null);
  const motionValue = useSpring(direction === "down" ? value : 0, {
    damping: 15,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [isInView, value, direction, motionValue]);

  useEffect(() => {
    const updateCounter = (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    };

    motionValue.on("change", updateCounter);

    return () => {
      motionValue.clearListeners();
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

  const nameRef = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      if (nameRef.current) {
        const nameSplit = new SplitType(nameRef.current, {
          types: "chars",
          tagName: "span",
        });

        gsap.fromTo(
          nameSplit.chars,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative flex items-center pt-32 pb-24 overflow-hidden bg-transparent">

      {/* Lighter vignette for better performance */}
      <div className="absolute inset-0 pointer-events-none " />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-0 left-6 md:left-0"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md mb-8">
              <span className="text-xs font-mono text-teal-300 uppercase tracking-widest">About ME</span>
            </div>

            <h1 ref={nameRef} className="font-heading text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6 mix-blend-screen">
              MUZAMIL
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-zinc-700"></span>
              <span className="text-lg md:text-xl text-zinc-300 font-light tracking-widest uppercase">Full Stack Engineer</span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-zinc-400 text-lg leading-relaxed max-w-2xl"
            >
              I bridge the gap between <span className="text-white font-medium">design and engineering</span>.
              Currently a CS student in Pakistan, I build pixel-perfect digital experiences
              that live on the internet. Former exchange scholar, musician, and obsessed with
              UI details.
            </motion.p>
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
                      <Counter value={1000} />+
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