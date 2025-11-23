"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Instagram, Download } from "lucide-react";

const ModelingPage = () => {
    // Placeholder Stats
    const stats = [
        { label: "Height", value: "6'1\"" },
        { label: "Eyes", value: "Dark Brown" },
        { label: "Hair", value: "Black" },
        { label: "Location", value: "Peshawar" },
    ];

    // Real modeling portfolio gallery - expanded for fuller showcase
    const galleryImages = [
        { src: "/modeling/11.png", alt: "Modeling Shot 1", span: "row-span-2" },
        { src: "/modeling/22.png", alt: "Modeling Shot 2", span: "row-span-1" },
        { src: "/modeling/33.png", alt: "Modeling Shot 3", span: "row-span-1" },
        { src: "/modeling/44.png", alt: "Modeling Shot 4", span: "row-span-2" },
        { src: "/modeling/55.png", alt: "Modeling Shot 5", span: "row-span-1" },
        { src: "/modeling/66.png", alt: "Modeling Shot 6", span: "row-span-1" },
        { src: "/modeling/77.png", alt: "Modeling Shot 7", span: "row-span-2" },
        { src: "/modeling/88.png", alt: "Modeling Shot 8", span: "row-span-1" },
        { src: "/modeling/99.png", alt: "Modeling Shot 9", span: "row-span-1" },
        { src: "/modeling/1010.png", alt: "Modeling Shot 10", span: "row-span-2" },
        { src: "/modeling/1111.png", alt: "Modeling Shot 11", span: "row-span-1" },
        { src: "/modeling/1212.png", alt: "Modeling Shot 12", span: "row-span-1" },
        { src: "/modeling/1313.png", alt: "Modeling Shot 13", span: "row-span-1" },
        { src: "/modeling/1414.png", alt: "Modeling Shot 14", span: "row-span-2" },
        { src: "/modeling/1515.png", alt: "Modeling Shot 15", span: "row-span-1" },
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
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/modeling/modeling-hero.png"
                        alt="Muzamil Shiraz Hero"
                        fill
                        className="object-cover object-top opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
                </div>

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
                        <Link href="/#contact" className="px-8 py-4 bg-white text-navy font-bold font-mono uppercase tracking-widest hover:bg-teal transition-colors">
                            Book Now
                        </Link>
                        <button className="px-8 py-4 border border-white/20 text-white font-mono uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center gap-2">
                            <Download size={18} /> Comp Card
                        </button>
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

            {/* MASONRY GALLERY */}
            <section className="py-12 px-4 md:px-8 max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[400px]">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative group overflow-hidden bg-lightNavy ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />

                            {/* Hover Info */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-navy/90 to-transparent">
                                <p className="font-mono text-teal text-xs tracking-widest uppercase">Editorial</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="py-32 text-center bg-lightNavy/20">
                <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8">Let&apos;s Create Art</h2>
                <Link href="mailto:hello@muzamilshiraz.com" className="inline-flex items-center gap-3 text-teal hover:text-white transition-colors font-mono text-lg tracking-widest uppercase border-b border-teal pb-1 hover:border-white">
                    Get in Touch <Mail size={20} />
                </Link>
            </section>
        </div>
    );
};

export default ModelingPage;
