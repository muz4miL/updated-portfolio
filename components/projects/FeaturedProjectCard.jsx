"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder, Star, Github } from "lucide-react";
import { itemVariants } from "@/lib/projects/animationVariants";
import TechStackBadge from "./TechStackBadge";

/**
 * FeaturedProjectCard Component
 * 
 * Large project card with 3D tilt effect and prominent display.
 * Typically used for featured/showcase projects.
 * Displays full tech stack with category-based color coding.
 * 
 * Props:
 * - project: Project object with title, description, tech, techStack, links, etc.
 * - index: Index for alternating layout
 */
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
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-center p-4 sm:p-6 md:p-8 rounded-2xl glass-card-strong border border-white/5 hover:border-teal/30 transition-all duration-500"
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
                    className={`relative lg:col-span-7 ${isEven ? "" : "lg:order-2"} h-48 sm:h-56 md:h-80 rounded-xl overflow-hidden`}
                >
                    {project.image ? (
                        <>
                            <Image
                                src={project.image}
                                alt={`${project.title} - Enterprise ${project.category} solution for ${project.description.substring(0, 40)}...`}
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
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-teal transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate leading-relaxed text-sm md:text-base">
                        {project.description}
                    </p>

                    {/* Tech Stack - Category-Based Display */}
                    {project.techStack && project.techStack.length > 0 ? (
                        <div className="space-y-2 pt-2">
                            <p className="text-xs font-mono text-slate/70 uppercase tracking-wider">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <TechStackBadge key={i} tech={tech} color={project.color} />
                                ))}
                            </div>
                        </div>
                    ) : (
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
                    )}

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

export default FeaturedProjectCard;
