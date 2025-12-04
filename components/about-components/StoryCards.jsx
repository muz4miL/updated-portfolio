"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { StudentIcon, LaptopIcon, GlobalIcon, UIIcon } from "@/components/icons";

const storyData = [
  {
    icon: StudentIcon,
    title: "CS Student",
    description: "Currently pursuing my Bachelor's degree in Computer Science (graduating 2027). Building strong foundations in algorithms, databases, and web technologies.",
    gradient: "from-violet-500 to-violet-400",
    glowColor: "rgba(139, 92, 246, 0.4)", // violet glow
  },
  {
    icon: GlobalIcon,
    title: "Global Perspective",
    description: "YES Exchange Program alumnus (2019-2020). Lived in Washington, USA, learning that complex problems aren't always technical—they're human.",
    gradient: "from-blue-500 to-blue-400",
    glowColor: "rgba(59, 130, 246, 0.4)", // blue glow
  },
  {
    icon: LaptopIcon,
    title: "Passionate Educator",
    description: "Mentored 1000+ students in programming and web development. My greatest strength lies at the intersection of technology and education.",
    gradient: "from-rose-500 to-rose-400",
    iconClass: "[&>*]:fill-white",
    glowColor: "rgba(244, 63, 94, 0.4)", // rose glow
  },
  {
    icon: UIIcon,
    title: "Frontend Developer",
    description: "Building modern, responsive web applications with React & Next.js. Completed 20+ projects with pixel-perfect UI and smooth animations.",
    gradient: "from-teal-500 to-teal-400",
    iconSize: 44,
    glowColor: "rgba(20, 184, 166, 0.4)", // teal glow
  },
];

const StoryCard = ({ item, index }) => {
  const IconComponent = item.icon;
  const cardRef = useRef(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animation for smooth following
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Create radial gradient that follows mouse
  const background = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseXSpring}px ${mouseYSpring}px,
      rgba(100, 255, 218, 0.08),
      transparent 80%
    )
  `;

  // Handle mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-300 backdrop-blur-sm hover:border-white/10"
    >
      {/* HoloSpotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      {/* Card content - MOBILE OPTIMIZED */}
      <div className="relative z-10 p-5 md:p-6">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 md:mb-4 p-2 transition-all duration-300 group-hover:scale-110`}
          style={{
            boxShadow: `0 0 20px 0 ${item.glowColor}, 0 0 40px 0 ${item.glowColor.replace('0.4', '0.2')}`
          }}
        >
          <IconComponent className={`text-white ${item.iconClass || ''} w-6 h-6 md:w-8 md:h-8`} />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const StoryCards = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
          <span className="text-gradient">My Story</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {storyData.map((item, index) => (
            <StoryCard key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StoryCards;
