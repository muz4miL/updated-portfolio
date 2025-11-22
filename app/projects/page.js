"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const allProjects = [
    {
        title: "Damosa",
        description: "Authentic Flavours & Premium Brand Experience. A luxury showcase for residential and commercial developments.",
        tech: ["React", "Next.js", "Tailwind"],
        link: "https://damosa-premium.vercel.app/",
        image: "/images/damosa-preview.png",
        category: "Web App",
        featured: true,
    },
    {
        title: "Pyramids",
        description: "Building The Future. A high-end portfolio for Architecture, Landscape Design, and Engineering Excellence.",
        tech: ["React", "Next.js", "Framer Motion"],
        link: "https://pyramids-website.vercel.app/",
        image: "/images/pyramids-preview.png",
        category: "Portfolio",
        featured: true,
    },
    // Placeholder for future projects
    {
        title: "Portfolio v1",
        description: "My previous portfolio website built with HTML/CSS and Vanilla JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#",
        image: null, // Placeholder
        category: "Website",
        featured: false,
    }
];

const ProjectsPage = () => {
    return (
        <main className="min-h-screen bg-navy text-slate selection:bg-teal selection:text-navy">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-2 text-teal hover:text-white transition-colors">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm">Back to Home</span>
                    </Link>
                    <div className="font-heading text-xl font-bold text-white">
                        All Projects
                    </div>
                    <div className="w-20" /> {/* Spacer for centering */}
                </div>
            </header>

            <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
                {/* Intro */}
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                        The Archive
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto text-slate/80">
                        A complete list of things I’ve built. From premium client work to experimental side projects.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-lightNavy rounded-xl overflow-hidden border border-white/5 hover:border-teal/30 transition-colors duration-300"
                        >
                            {/* Image Area */}
                            <div className="relative h-48 bg-navy/50 overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate/20 font-mono text-4xl font-bold">
                                        M
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-teal transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.link !== "#" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate hover:text-teal transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-sm text-slate mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, index) => (
                                        <span key={index} className="text-xs font-mono text-teal/80 bg-teal/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
