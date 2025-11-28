"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import { StudentIcon } from "@/components/icons";

const EducationSection = () => {
  const subjects = ["Data Structures & Algorithms", "Database Systems", "Web Technologies"];

  return (
    <section>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-gradient">Education</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 rounded-2xl border border-white/5"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400 flex items-center justify-center flex-shrink-0 p-2">
            <StudentIcon size={40} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">
              Bachelor of Computer Science
            </h3>
            <p className="text-slate font-semibold mb-2">University in Peshawar</p>
            <div className="flex items-center gap-2 text-sm font-mono text-slate/80">
              <Calendar size={14} />
              <span>2023 - 2027</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {subjects.map((subject, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate text-xs font-mono"
            >
              <Award size={12} className="text-indigo-400" />
              {subject}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
