"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Folder, Star, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================
// PROJECT DATA
// ============================================
const allProjects = [
  // === FEATURED CLIENT WORK ===
  {
    title: "Damosa",
    description:
      "Authentic Flavours & Premium Brand Experience. A luxury showcase featuring a custom global cart system with seamless WhatsApp checkout integration for instant ordering.",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
    link: "https://damosa-premium.vercel.app/",
    github: null,
    image: "/images/damosa-preview.png",
    category: "Client Work",
    featured: true,
    year: "2024",
    color: "#F97316",
  },
  {
    title: "Pyramids",
    description:
      "Building The Future. A high-end portfolio for Architecture, Landscape Design, and Engineering Excellence. Features smooth scroll animations and immersive UI.",
    tech: ["React", "Next.js", "Framer Motion", "GSAP"],
    link: "https://pyramids-website.vercel.app/",
    github: null,
    image: "/images/pyramids-preview.png",
    category: "Client Work",
    featured: true,
    year: "2024",
    color: "#14B8A6",
  },
  // === PORTFOLIO VERSIONS ===
  {
    title: "Portfolio v2",
    description:
      "You're looking at it. A premium developer portfolio with 3D elements, glassmorphism, aurora backgrounds, and micro-interactions throughout.",
    tech: ["Next.js 16", "React 19", "Tailwind v4", "Framer Motion"],
    link: "/",
    github: "https://github.com/muz4miL/updated-portfolio",
    image: "/images/portfolio-v2-preview.png", // Add your screenshot
    category: "Personal",
    featured: true,
    year: "2024",
    color: "#64FFDA",
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio website. Built from scratch with vanilla technologies to understand the fundamentals before moving to frameworks. Clean, minimal design with smooth animations.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    link: "https://muzamilshiraz.me",
    github: null,
    image: "/images/portfolio-v1-preview.png", // Add your screenshot
    category: "Personal",
    featured: true,
    year: "2023",
    color: "#8B5CF6",
  },
  // === REACT PROJECTS ===
  {
    title: "Premium Landing Page",
    description:
      "Designed a premium landing page for a music store using Figma and implemented it using React and Tailwind CSS. Features modern UI patterns and responsive design.",
    tech: ["React", "Tailwind CSS", "Figma"],
    link: "https://premium-landing-demo.vercel.app", // Update with your actual URL
    github: null,
    image: "/images/landing-page-preview.png", // Add your screenshot
    category: "Personal",
    featured: false,
    year: "2023",
    color: "#A855F7",
  },
  {
    title: "Pizza Ordering Website",
    description:
      "Developed a full-stack pizza ordering website using React, Tailwind CSS, and Firebase for authentication and real-time database management.",
    tech: ["React", "Tailwind CSS", "Firebase", "Auth"],
    link: "https://pizza-ordering-demo.vercel.app", // Update with your actual URL
    github: null,
    image: "/images/pizza-app-preview.png", // Add your screenshot
    category: "Personal",
    featured: false,
    year: "2023",
    color: "#EF4444",
  },
  {
    title: "Todo App",
    description:
      "A responsive todo application built with React and Tailwind CSS. Features task creation, completion tracking, and local storage persistence.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    link: "https://todo-app-demo.vercel.app", // Update with your actual URL
    github: null,
    image: "/images/todo-app-preview.png", // Add your screenshot
    category: "Personal",
    featured: false,
    year: "2023",
    color: "#3B82F6",
  },
  {
    title: "Travel List App",
    description:
      "A travel packing list app built with React and Tailwind CSS. Plan and organize your trips with an intuitive drag-and-drop interface.",
    tech: ["React", "Tailwind CSS"],
    link: "https://travel-list-demo.vercel.app", // Update with your actual URL
    github: null,
    image: "/images/travel-list-preview.png", // Add your screenshot
    category: "Personal",
    featured: false,
    year: "2023",
    color: "#F59E0B",
  },
];

const categories = ["All", "Client Work", "Personal"];

// ============================================
// ANIMATION VARIANTS
// ============================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ============================================
// FEATURED PROJECT CARD (Large, with 3D tilt)
// ============================================
const FeaturedProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(y * -10);
    setRotateY(x * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-center p-6 md:p-8 rounded-2xl glass-card-strong border border-white/5 hover:border-teal/30 transition-all duration-500"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Accent glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${isHovered ? "50%" : "0%"} 50%, ${project.color}10, transparent 60%)`,
          }}
        />

        {/* Image Section */}
        <div
          className={`relative lg:col-span-7 ${isEven ? "" : "lg:order-2"} h-64 md:h-80 rounded-xl overflow-hidden`}
        >
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-500" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-lightNavy to-navy flex items-center justify-center">
              <Folder
                size={80}
                className="text-teal/20 group-hover:text-teal/40 transition-colors duration-300"
              />
            </div>
          )}

          {/* Featured badge */}
          <div
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/90 text-navy font-mono text-xs font-bold"
            style={{ transform: "translateZ(30px)" }}
          >
            <Star size={12} fill="currentColor" />
            Featured
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"} space-y-4 relative z-10`}
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Category & Year */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-teal">{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-slate/50" />
            <span className="text-slate/60">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white group-hover:text-teal transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate leading-relaxed text-sm md:text-base">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="tech-chip text-xs font-mono px-3 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target={project.link.startsWith("/") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-teal font-mono text-sm hover:text-white transition-colors"
              >
                <span>View Project</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// REGULAR PROJECT CARD (Grid style - Premium)
// ============================================
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative h-full"
    >
      <div className="h-full flex flex-col rounded-xl glass-card border border-white/5 hover:border-teal/20 hover-lift transition-all duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative h-48 bg-gradient-to-br from-lightNavy to-navy overflow-hidden">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-300" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${project.color}20` }}
              >
                <Folder size={32} style={{ color: project.color }} className="group-hover:scale-110 transition-transform" />
              </div>
            </div>
          )}
          
          {/* Year badge */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-navy/80 backdrop-blur-sm text-xs font-mono text-slate">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
          {/* Title */}
          <h3 className="font-heading text-lg font-bold text-white group-hover:text-teal transition-colors mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate text-sm leading-relaxed flex-grow mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 3).map((t, i) => (
              <span 
                key={i} 
                className="text-[10px] font-mono px-2 py-1 rounded-md"
                style={{ 
                  backgroundColor: `${project.color}15`,
                  color: project.color 
                }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate/10 text-slate">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-3 border-t border-white/5">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-teal/10 border border-teal/30 text-teal text-xs font-mono uppercase tracking-wider hover:bg-teal hover:text-navy transition-all duration-300"
              >
                <span>View Live</span>
                <ExternalLink size={12} className="group-hover/btn:rotate-12 transition-transform" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-white/10 text-slate hover:text-teal hover:border-teal/30 transition-all"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredProjects = allProjects.filter((p) => p.featured);
  const otherProjects = allProjects.filter((p) => !p.featured);

  const filteredFeatured =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  const filteredOther =
    activeCategory === "All"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen">
      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-slate hover:text-teal transition-colors mb-16"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="font-mono text-sm uppercase tracking-widest">
                Back to Home
              </span>
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.div
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-teal text-lg">04.</span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
                The Archive
              </h1>
              <div className="hidden md:block h-[1px] bg-slate/20 flex-grow max-w-xs" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-slate text-lg max-w-2xl leading-relaxed"
            >
              A curated collection of projects I&apos;ve crafted. From premium client
              work to experimental side projects—each one represents a step in my
              journey as a developer.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest border transition-all duration-300 ${activeCategory === cat ? "bg-teal text-navy border-teal" : "bg-transparent text-slate border-slate/20 hover:border-teal/50 hover:text-teal"}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured Projects */}
          {filteredFeatured.length > 0 && (
            <motion.section
              className="mb-24"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-mono text-teal text-sm uppercase tracking-widest mb-8"
              >
                ✦ Featured Projects
              </motion.h2>

              <div className="space-y-12">
                <AnimatePresence mode="wait">
                  {filteredFeatured.map((project, i) => (
                    <FeaturedProjectCard
                      key={project.title}
                      project={project}
                      index={i}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </motion.section>
          )}

          {/* Other Projects */}
          {filteredOther.length > 0 && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <motion.h2
                variants={fadeInUp}
                className="font-mono text-teal text-sm uppercase tracking-widest mb-8"
              >
                ✦ Other Noteworthy Projects
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="wait">
                  {filteredOther.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </AnimatePresence>
              </div>
            </motion.section>
          )}

          {/* Empty State */}
          {filteredFeatured.length === 0 && filteredOther.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Folder size={60} className="mx-auto text-slate/30 mb-6" />
              <p className="text-slate font-mono">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* Footer CTA */}
          <motion.div
            className="text-center mt-24 pt-16 border-t border-slate/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-slate mb-8 max-w-md mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal/10 border-2 border-teal rounded-lg font-mono uppercase text-sm tracking-widest text-teal hover:bg-teal hover:text-navy transition-all duration-300"
            >
              Get In Touch
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
