"use client";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Premium Music Store",
      description: "Luxury landing page with React & Tailwind",
      tech: ["React", "Tailwind", "Figma"],
      link: "#",
      featured: true,
    },
    {
      title: "Pizza Ordering App",
      description: "Full-stack food ordering platform",
      tech: ["React", "Firebase", "Node.js"],
      link: "#",
      featured: true,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="work" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeader number="03" title="Featured Work" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {featuredProjects.map((project, i) => (
          <motion.div
            key={i}
            className="group relative p-8 rounded-2xl border border-teal/10 glass-card transition-all duration-300"
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow:
                "0 0 30px rgba(100, 255, 218, 0.2), 0 0 60px rgba(100, 255, 218, 0.1)",
              borderColor: "rgba(100, 255, 218, 0.4)",
            }}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute -top-2 -right-2 bg-teal text-navy font-mono text-xs px-3 py-1 rounded-full">
                Featured
              </div>
            )}

            <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-teal transition-colors">
              {project.title}
            </h3>

            <p className="text-slate text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex justify-between items-center">
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-teal/80">
                {project.tech.map((t, index) => (
                  <li key={index} className="px-2 py-1 bg-teal/10 rounded">
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="text-slate hover:text-teal transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 px-6 py-3 border border-teal/30 rounded-lg hover:bg-teal/10 transition-all duration-300"
        >
          <span className="font-mono text-teal text-sm uppercase tracking-widest">
            View All Projects
          </span>
          <ArrowRight
            size={16}
            className="text-teal group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
