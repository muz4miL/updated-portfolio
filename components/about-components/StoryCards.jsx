"use client";
import React from "react";
import { motion } from "framer-motion";
import { StudentIcon, LaptopIcon, GlobalIcon, UIIcon } from "@/components/icons";

const storyData = [
  {
    icon: StudentIcon,
    title: "CS Student",
    description: "Currently pursuing my Bachelor's degree in Computer Science (graduating 2027). Building strong foundations in algorithms, databases, and web technologies.",
    gradient: "from-violet-500 to-violet-400",
  },
  {
    icon: GlobalIcon,
    title: "Global Perspective",
    description: "YES Exchange Program alumnus (2019-2020). Lived in Washington, USA, learning that complex problems aren't always technical—they're human.",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    icon: LaptopIcon,
    title: "Passionate Educator",
    description: "Mentored 1000+ students in programming and web development. My greatest strength lies at the intersection of technology and education.",
    gradient: "from-rose-500 to-rose-400",
    iconClass: "[&>*]:fill-white",
  },
  {
    icon: UIIcon,
    title: "Frontend Developer",
    description: "Building modern, responsive web applications with React & Next.js. Completed 20+ projects with pixel-perfect UI and smooth animations.",
    gradient: "from-teal-500 to-teal-400",
    iconSize: 44,
  },
];

const StoryCard = ({ item, index }) => {
  const IconComponent = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover-lift"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 p-2`}>
        <IconComponent size={item.iconSize || 32} className={`text-white ${item.iconClass || ''}`} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
      <p className="text-slate text-sm leading-relaxed">
        {item.description}
      </p>
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
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-gradient">My Story</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {storyData.map((item, index) => (
            <StoryCard key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StoryCards;
