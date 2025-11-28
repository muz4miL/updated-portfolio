"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Music, Camera, Users } from "lucide-react";
import { GlobalIcon } from "@/components/icons";

const languages = ["English", "Urdu", "Pushto", "Punjabi", "Persian"];

const interests = [
  { name: "Coding", icon: Code2 },
  { name: "Music", icon: Music },
  { name: "Photography", icon: Camera },
  { name: "Teaching", icon: Users },
  { name: "Culture", icon: GlobalIcon },
];

// Color variations for interests
const interestColors = [
  'from-violet-500/20 to-violet-500/5',
  'from-blue-500/20 to-blue-500/5',
  'from-teal-500/20 to-teal-500/5',
  'from-rose-500/20 to-rose-500/5',
  'from-indigo-500/20 to-indigo-500/5',
];

const iconColors = ['text-violet-400', 'text-blue-400', 'text-teal-400', 'text-rose-400', 'text-indigo-400'];

const InterestCard = ({ interest, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover-lift text-center group"
    >
      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${interestColors[index % interestColors.length]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <interest.icon size={24} className={iconColors[index % iconColors.length]} />
      </div>
      <span className="text-white text-sm font-medium">{interest.name}</span>
    </motion.div>
  );
};

const InterestsLanguages = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Languages */}
      <section>
        <h2 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-gradient">Languages</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 font-mono text-sm hover:bg-white/10 transition-colors cursor-default"
            >
              {lang}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-gradient">Interests</span>
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {interests.map((interest, index) => (
            <InterestCard key={index} interest={interest} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InterestsLanguages;
