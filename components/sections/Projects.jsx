"use client";
import React, { useRef, useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Pyramids",
      description: "Building The Future. A high-end portfolio for Architecture, Landscape Design, and Engineering Excellence.",
      tech: ["React", "Next.js", "Framer Motion"],
      link: "https://pyramids-website.vercel.app/",
      github: "#", // Add your repo link here
      image: "/images/pyramids-preview.png",
      color: "group-hover:border-teal-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)]"
    },
    {
      title: "Damosa",
      description: "Authentic Flavours & Premium Brand Experience. Features a custom global cart system with seamless WhatsApp checkout integration for instant ordering.",
      tech: ["React", "Next.js", "Tailwind"],
      link: "https://damosa-premium.vercel.app/",
      github: "#", // Add your repo link here
      image: "/images/damosa-preview.png",

      color: "group-hover:border-orange-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
    }
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
          <ProjectCard key={i} project={project} variants={cardVariants} />
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

// 3D Tilt Card Component
const ProjectCard = ({ project, variants }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setRotateX(yPct * -10); // Max rotation X
    setRotateY(xPct * 10);  // Max rotation Y
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      className="perspective-1000 h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={`
          group relative h-full flex flex-col rounded-2xl overflow-hidden
          glass-card-strong border border-white/5
          transition-all duration-300 ease-out
          ${project.color}
        `}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div
            className="absolute top-4 right-4 bg-teal text-navy font-mono text-xs px-3 py-1 rounded-full shadow-lg z-20"
            style={{ transform: "translateZ(30px)" }}
          >
            Featured
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-60 w-full overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
          <Image
            src={project.image}
            alt={`${project.title} - ${project.description.substring(0, 60)}...`}
            fill
            className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content Container with Z-Depth */}
        <div className="p-8 flex flex-col flex-grow" style={{ transform: "translateZ(20px)" }}>
          <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-teal transition-colors">
            {project.title}
          </h3>

          <p className="text-slate text-sm mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5">
            <ul className="flex flex-wrap gap-2 text-xs font-mono">
              {project.tech.map((t, index) => (
                <li key={index} className="tech-chip px-2 py-1 rounded">
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors p-2 hover:bg-teal/10 rounded-full"
                aria-label="View Source Code"
              >
                <Github size={20} />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors p-2 hover:bg-teal/10 rounded-full"
                aria-label="View Live Project"
              >
                <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none ${project.glow}`}
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
