"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Folder } from "lucide-react";
import { motion } from "framer-motion";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import ProjectCard from "@/components/projects/ProjectCard";
import { allProjects, categories } from "@/lib/projects/projectsData";
import { containerVariants, fadeInUp } from "@/lib/projects/animationVariants";

/**
 * Projects Page Component
 * 
 * Main page that displays all projects with filtering capability.
 * - Featured projects shown with large 3D cards
 * - Other projects displayed in grid layout
 * - Category filtering available
 */
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
                            key={`featured-${activeCategory}`}
                            className="mb-24"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="font-mono text-teal text-sm uppercase tracking-widest mb-8"
                            >
                                ✦ Featured Projects
                            </motion.h2>

                            <div className="space-y-12">
                                {filteredFeatured.map((project, i) => (
                                    <FeaturedProjectCard
                                        key={project.title}
                                        project={project}
                                        index={i}
                                    />
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* Other Projects */}
                    {filteredOther.length > 0 && (
                        <motion.section
                            key={`other-${activeCategory}`}
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.h2
                                variants={fadeInUp}
                                className="font-mono text-teal text-sm uppercase tracking-widest mb-8"
                            >
                                ✦ Other Noteworthy Projects
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredOther.map((project) => (
                                    <ProjectCard key={project.title} project={project} />
                                ))}
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
