"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ModelingTeaser = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    // Real modeling portfolio images
    const images = [
        { src: "/modeling/11.png", alt: "Modeling Shot 1" },
        { src: "/modeling/22.png", alt: "Modeling Shot 2" },
        { src: "/modeling/33.png", alt: "Modeling Shot 3" },
        { src: "/modeling/44.png", alt: "Modeling Shot 4" },
        { src: "/modeling/55.png", alt: "Modeling Shot 5" },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-navy">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Section Title Overlay */}
                <div className="absolute top-10 left-6 md:left-20 z-20 pointer-events-none">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-heading text-4xl md:text-6xl font-bold text-white"
                    >
                        BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-slate-400">THE CODE</span>
                    </motion.h2>
                    <p className="font-mono text-teal mt-2 tracking-widest text-sm md:text-base">
                        CREATIVE EXPRESSION & MODELING
                    </p>
                </div>

                {/* The Film Strip */}
                <motion.div style={{ x }} className="flex gap-8 pl-[5vw]">
                    {images.map((img, i) => (
                        <Link href="/book" key={i} className="group relative h-[60vh] w-[40vh] flex-shrink-0 overflow-hidden rounded-sm cursor-pointer">
                            {/* Grayscale Filter Overlay */}
                            <div className="absolute inset-0 bg-navy/40 mix-blend-color z-10 transition-all duration-500 group-hover:bg-transparent group-hover:mix-blend-normal" />
                            <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0" />

                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Hover Reveal Text */}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="font-mono text-xs text-teal text-center tracking-widest">VIEW GALLERY</p>
                            </div>
                        </Link>
                    ))}

                    {/* "View All" Card at the end */}
                    <Link href="/book" className="group relative h-[60vh] w-[40vh] flex-shrink-0 flex items-center justify-center bg-lightNavy/30 border border-teal/20 hover:bg-teal/10 transition-colors duration-300">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full border border-teal flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <ArrowRight className="text-teal" size={24} />
                            </div>
                            <span className="font-heading text-2xl text-white">ENTER<br />PORTFOLIO</span>
                        </div>
                    </Link>
                </motion.div>

                {/* Floating Badge */}
                <Link href="/book" className="absolute bottom-10 right-6 md:right-20 z-20">
                    <div className="glass-card-strong px-6 py-3 rounded-full flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer group">
                        <span className="font-mono text-xs text-white">MUZAMIL SHIRAZ</span>
                        <span className="w-px h-4 bg-white/20"></span>
                        <span className="font-mono text-xs text-teal group-hover:underline">MODELING PORTFOLIO</span>
                        <ArrowRight size={14} className="text-teal" />
                    </div>
                </Link>

            </div>
        </section>
    );
};

export default ModelingTeaser;
