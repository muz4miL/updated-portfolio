"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Instagram, Download, ArrowUpRight } from "lucide-react";

const ModelingPage = () => {
    // Parallax Hooks
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
    const yCol1 = useTransform(scrollY, [0, 2000], [0, -100]);
    const yCol2 = useTransform(scrollY, [0, 2000], [0, -200]);
    const yCol3 = useTransform(scrollY, [0, 2000], [0, -50]);

    // Placeholder Stats
    const stats = [
        { label: "Height", value: "6'1\"" },
        { label: "Eyes", value: "Dark Brown" },
        { label: "Hair", value: "Black" },
        { label: "Location", value: "Peshawar" },
    ];

    // Real modeling portfolio gallery - premium masonry with metadata
    const galleryImages = [
        { id: 1, src: "/modeling/11.png", alt: "Modeling Shot 1", year: "2025" },
        { id: 2, src: "/modeling/22.png", alt: "Modeling Shot 2", year: "2024" },
        { id: 3, src: "/modeling/33.png", alt: "Modeling Shot 3", year: "2024" },
        { id: 4, src: "/modeling/44.png", alt: "Modeling Shot 4", year: "2025" },
        { id: 5, src: "/modeling/65.png", alt: "Modeling Shot 5", year: "2024" },
        { id: 6, src: "/modeling/66.png", alt: "Modeling Shot 6", year: "2025" },
        { id: 7, src: "/modeling/77.png", alt: "Modeling Shot 7", year: "2024" },
        { id: 8, src: "/modeling/88.png", alt: "Modeling Shot 8", year: "2025" },
        { id: 9, src: "/modeling/99.png", alt: "Modeling Shot 9", year: "2024" },
        { id: 10, src: "/modeling/1010.png", alt: "Modeling Shot 10", year: "2025" },
        { id: 11, src: "/modeling/1111.png", alt: "Modeling Shot 11", year: "2024" },
        { id: 12, src: "/modeling/1212.png", alt: "Modeling Shot 12", year: "2025" },
        { id: 13, src: "/modeling/13.png", alt: "Modeling Shot 13", year: "2024" },
        { id: 14, src: "/modeling/1414.png", alt: "Modeling Shot 14", year: "2025" },
        { id: 15, src: "/modeling/1515.png", alt: "Modeling Shot 15", year: "2024" },
    ];

    return (
        <div className="min-h-screen bg-navy text-white selection:bg-teal selection:text-navy">
            {/* Navigation Overlay */}
            <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="group flex items-center gap-2 text-white hover:text-teal transition-colors">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm tracking-widest uppercase">Back to Code</span>
                </Link>
                <div className="font-heading font-bold text-xl tracking-tighter">MUZAMIL.M</div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Image - Parallax */}
                <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
                    <Image
                        src="/modeling/modeling-hero.png"
                        alt="Muzamil Shiraz Hero"
                        fill
                        className="object-cover object-top opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-heading text-6xl md:text-9xl font-black tracking-tighter mb-4 mix-blend-overlay text-white"
                    >
                        MUZAMIL
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="font-mono text-teal text-sm md:text-lg tracking-[0.5em] uppercase"
                    >
                        The Digital Comp Card
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="w-px h-12 bg-gradient-to-b from-teal to-transparent"></span>
                </motion.div>
            </section>

            {/* STATS & BIO SECTION */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                {/* Bio */}
                <div className="md:col-span-7 space-y-8">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                        Bridging the gap between <span className="text-teal">Technical Precision</span> and <span className="text-slate-400 italic">Creative Fluidity</span>.
                    </h2>
                    <p className="text-slate text-lg leading-relaxed max-w-2xl">
                        As a developer, I build structures with code. As a model, I bring stories to life through expression.
                        My approach to modeling is methodical yet organic—bringing the same discipline I apply to engineering
                        into every shoot, ensuring the vision is executed flawlessly.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <MagneticButton href="/#contact" className="px-8 py-4 bg-white text-navy font-bold font-mono uppercase tracking-widest hover:bg-teal transition-colors inline-block">
                            Book Now
                        </MagneticButton>
                        <MagneticButton className="px-8 py-4 border border-white/20 text-white font-mono uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center gap-2 cursor-pointer">
                            <Download size={18} /> Comp Card
                        </MagneticButton>
                    </div>
                </div>

                {/* Stats Card */}
                <div className="md:col-span-5 relative">
                    <div className="glass-card-strong p-8 rounded-sm border border-white/10 relative z-10">
                        <h3 className="font-mono text-teal text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Model Stats</h3>
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-slate text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                                    <p className="text-white font-heading text-xl">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -top-4 -right-4 w-full h-full border border-teal/30 z-0" />
                </div>
            </section>

            {/* PARALLAX MASONRY GALLERY */}
            <section className="py-24 px-4 md:px-8 max-w-[1920px] mx-auto min-h-screen">
                {/* Mobile/Tablet Layout (Standard Masonry) */}
                <div className="block lg:hidden columns-1 md:columns-2 gap-8 space-y-8">
                    {galleryImages.map((img) => (
                        <div key={img.id} className="break-inside-avoid mb-8">
                            <GalleryItem img={img} />
                        </div>
                    ))}
                </div>

                {/* Desktop Layout (Parallax Columns) */}
                <div className="hidden lg:flex gap-8 items-start justify-center">
                    <ParallaxColumn images={galleryImages.filter((_, i) => i % 3 === 0)} y={yCol1} />
                    <ParallaxColumn images={galleryImages.filter((_, i) => i % 3 === 1)} y={yCol2} />
                    <ParallaxColumn images={galleryImages.filter((_, i) => i % 3 === 2)} y={yCol3} />
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="py-32 text-center bg-lightNavy/20">
                <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8">Let&apos;s Create Art</h2>
                <Link href="mailto:hello@muzamilshiraz.com" className="inline-flex items-center gap-3 text-teal hover:text-white transition-colors font-mono text-lg tracking-widest uppercase border-b border-teal pb-1 hover:border-white">
                    Get in Touch <Mail size={20} />
                </Link>

                {/* Social Icons - Premium centered layout */}
                <div className="flex justify-center items-center gap-6 mt-12">
                    <a
                        href="https://github.com/muzamilshiraz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="group relative p-4 rounded-lg bg-lightNavy/30 border border-teal/10 backdrop-blur-sm text-slate transition-all duration-300 hover:bg-teal/10 hover:border-teal/30 hover:scale-110 hover:shadow-lg hover:shadow-teal/20"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-white transition-colors">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>

                    <a
                        href="https://linkedin.com/in/muzamilshiraz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="group relative p-4 rounded-lg bg-lightNavy/30 border border-teal/10 backdrop-blur-sm text-slate transition-all duration-300 hover:bg-teal/10 hover:border-teal/30 hover:scale-110 hover:shadow-lg hover:shadow-teal/20"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-400 transition-colors">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>

                    <a
                        href="https://x.com/muzamilshiraz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="group relative p-4 rounded-lg bg-lightNavy/30 border border-teal/10 backdrop-blur-sm text-slate transition-all duration-300 hover:bg-teal/10 hover:border-teal/30 hover:scale-110 hover:shadow-lg hover:shadow-teal/20"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-white transition-colors">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    <a
                        href="https://instagram.com/muzamilshiraz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="group relative p-4 rounded-lg bg-lightNavy/30 border border-teal/10 backdrop-blur-sm text-slate transition-all duration-300 hover:bg-teal/10 hover:border-teal/30 hover:scale-110 hover:shadow-lg hover:shadow-teal/20"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-pink-400 transition-colors">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>

                    <a
                        href="mailto:hello@muzamilshiraz.com"
                        aria-label="Email"
                        className="group relative p-4 rounded-lg bg-lightNavy/30 border border-teal/10 backdrop-blur-sm text-slate transition-all duration-300 hover:bg-teal/10 hover:border-teal/30 hover:scale-110 hover:shadow-lg hover:shadow-teal/20"
                    >
                        <Mail size={20} className="group-hover:text-red-500 transition-colors" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ModelingPage;

/* --- HELPER COMPONENTS --- */

const ParallaxColumn = ({ images, y }) => {
    return (
        <motion.div style={{ y }} className="flex flex-col gap-8 w-full">
            {images.map((img) => (
                <GalleryItem key={img.id} img={img} />
            ))}
        </motion.div>
    );
};

const GalleryItem = ({ img }) => {
    return (
        <div className="group relative w-full overflow-hidden rounded-lg">
            <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-opacity duration-700" />

            {/* Hover Card */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center p-3 rounded-lg backdrop-blur-md bg-navy/60 border border-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="font-mono text-xs text-slate tracking-widest">{img.year}</span>
                <ArrowUpRight size={14} className="text-teal" />
            </div>
        </div>
    );
};

const MagneticButton = ({ children, className, href }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.2); // Magnetic strength
        y.set((clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    if (href) {
        return (
            <Link href={href}>
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ x: springX, y: springY }}
                    className={className}
                >
                    {children}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
