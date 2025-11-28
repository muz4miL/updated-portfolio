"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, ExternalLink } from "lucide-react";
import Link from "next/link";

const AboutCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center py-12"
    >
      <div className="glass-card p-10 rounded-2xl border border-white/10 max-w-2xl mx-auto">
        <Rocket size={48} className="mx-auto mb-4 text-teal-400" />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Let's Build Something Amazing
        </h3>
        <p className="text-slate mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white font-bold rounded-lg hover:from-violet-600 hover:to-blue-600 transition-all hover-lift"
        >
          Get In Touch
          <ExternalLink size={18} />
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutCTA;
