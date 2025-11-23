"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ModelingTeaser = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0);

    const images = [
        { src: "/modeling/11.png", alt: "Modeling Shot 1" },
        { src: "/modeling/22.png", alt: "Modeling Shot 2" },
        { src: "/modeling/33.png", alt: "Modeling Shot 3" },
        { src: "/modeling/44.png", alt: "Modeling Shot 4" },
        { src: "/modeling/88.png", alt: "Modeling Shot 5" },
        { src: "/modeling/65.png", alt: "Modeling Shot 6" },
        { src: "/modeling/66.png", alt: "Modeling Shot 7" },
        { src: "/modeling/77.png", alt: "Modeling Shot 8" },
    ];

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setDirection(1);
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused, images.length]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const getVisibleImages = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(images[(currentIndex + i) % images.length]);
        }
        return visible;
    };

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <section className="relative min-h-screen bg-navy py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-2">
                        BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-slate-400">THE CODE</span>
                    </h2>
                    <p className="font-mono text-teal tracking-widest text-sm md:text-base">
                        CREATIVE EXPRESSION & MODELING
                    </p>
                </motion.div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="md:hidden relative h-[70vh] rounded-lg overflow-hidden">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="absolute inset-0 group cursor-pointer"
                                >
                                    <Link href="/book">
                                        <Image
                                            src={images[currentIndex].src}
                                            alt={images[currentIndex].alt}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all duration-500" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/90 to-transparent">
                                            <p className="font-mono text-xs text-teal text-center tracking-widest">TAP TO VIEW GALLERY</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {getVisibleImages().map((img, idx) => (
                            <div key={`container-${idx}`} className="hidden md:block relative h-[60vh] rounded-lg overflow-hidden">
                                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                    <motion.div
                                        key={`${currentIndex}-${idx}`}
                                        custom={direction}
                                        initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                            delay: idx * 0.05
                                        }}
                                        className="absolute inset-0 group cursor-pointer"
                                    >
                                        <Link href="/book">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all duration-500" />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <p className="font-mono text-xs text-teal text-center tracking-widest">VIEW GALLERY</p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Elegant Single-Line Navigation */}
                    <div className="hidden md:flex items-center justify-center gap-6 mt-12">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-teal/10 hover:border-teal/50 transition-all duration-300"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="text-white" size={20} />
                        </button>

                        <span className="font-heading text-3xl text-white font-bold tracking-tight min-w-[3.5rem] text-right">
                            {formatNumber(currentIndex + 1)}
                        </span>

                        <div className="flex gap-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? "w-10 bg-teal"
                                        : "w-1.5 bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <span className="font-mono text-base text-slate/50 min-w-[3.5rem] text-left">
                            {formatNumber(images.length)}
                        </span>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-teal/10 hover:border-teal/50 transition-all duration-300"
                            aria-label="Next"
                        >
                            <ChevronRight className="text-white" size={20} />
                        </button>
                    </div>

                    {/* ENTER PORTFOLIO Button */}
                    <div className="hidden md:flex justify-center mt-8">
                        <Link href="/book">
                            <div className="glass-card-strong px-8 py-3 rounded-full flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer group">
                                <span className="font-mono text-xs text-white">MUZAMIL SHIRAZ</span>
                                <span className="w-px h-4 bg-white/20"></span>
                                <span className="font-mono text-xs text-teal group-hover:underline">ENTER PORTFOLIO</span>
                                <ArrowRight size={14} className="text-teal" />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center active:bg-white/5 active:border-teal/50 transition-all duration-300"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="text-white" size={20} />
                        </button>

                        <div className="flex gap-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? "w-8 bg-teal"
                                        : "w-1.5 bg-white/20"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center active:bg-white/5 active:border-teal/50 transition-all duration-300"
                            aria-label="Next"
                        >
                            <ChevronRight className="text-white" size={20} />
                        </button>
                    </div>

                    <div className="flex md:hidden justify-center mt-8">
                        <Link href="/book">
                            <div className="glass-card-strong px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer group">
                                <span className="font-mono text-xs text-teal group-hover:underline">ENTER PORTFOLIO</span>
                                <ArrowRight size={16} className="text-teal" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

            {/* Premium Diagonal Transition Bridge */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-lightNavy"></div>
                <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 L1200,60 L1200,120 L0,120 Z" fill="#0A192F" opacity="0.5"></path>
                    <path d="M0,20 L1200,80 L1200,120 L0,120 Z" fill="#112240" opacity="0.8"></path>
                </svg>
            </div>
        </section>
    );
};

export default ModelingTeaser;
