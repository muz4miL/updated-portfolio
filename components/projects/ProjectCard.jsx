"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Folder, Github } from "lucide-react";
import { itemVariants } from "@/lib/projects/animationVariants";
import TechStackBadge from "./TechStackBadge";

/**
 * ProjectCard Component
 * 
 * Regular project card for grid display.
 * Used for non-featured projects with compact layout.
 * Displays tech stack with category-based color coding.
 * 
 * Props:
 * - project: Project object with title, description, tech, techStack, links, etc.
 */
const ProjectCard = ({ project }) => {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative h-full"
        >
            <div className="h-full flex flex-col rounded-xl glass-card border border-white/5 hover:border-teal/20 hover-lift transition-all duration-300 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-40 sm:h-44 md:h-48 bg-gradient-to-br from-lightNavy to-navy overflow-hidden">
                    {project.image ? (
                        <>
                            <Image
                                src={project.image}
                                alt={`${project.title} - ${project.description.substring(0, 50)}...`}
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
                <div className="flex flex-col flex-grow p-4 sm:p-5">
                    {/* Title */}
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-teal transition-colors mb-2">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate text-sm leading-relaxed flex-grow mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tech Stack Badges - Full Stack Display */}
                    {project.techStack && project.techStack.length > 0 ? (
                        <div className="mb-4 pb-4 border-b border-white/5">
                            <p className="text-xs font-mono text-slate/70 mb-2 uppercase tracking-wider">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <TechStackBadge key={i} tech={tech} color={project.color} />
                                ))}
                            </div>
                        </div>
                    ) : (
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
                    )}

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

export default ProjectCard;
