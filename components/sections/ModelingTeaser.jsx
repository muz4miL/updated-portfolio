"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ModelingTeaser = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0);
    const swiperRef = useRef(null);
    const mobileSwiperRef = useRef(null);

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
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        } else {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        } else {
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    const goToSlide = (index) => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
            swiperRef.current.slideToLoop(index);
        }
        if (mobileSwiperRef.current && !mobileSwiperRef.current.destroyed) {
            mobileSwiperRef.current.slideToLoop(index);
        }
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <>
            {/* Mobile Version - Story Card / Magazine Cover Layout */}
            <section className="relative md:hidden h-screen bg-navy overflow-hidden flex flex-col">
                {/* Compact Title at Top */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="px-6 pt-6 pb-4 relative z-20"
                >
                    <h2 className="font-heading text-3xl font-bold text-white mb-1 leading-tight">
                        BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-slate-400">THE CODE</span>
                    </h2>
                    <p className="font-mono text-teal tracking-widest text-xs">
                        CREATIVE EXPRESSION & MODELING
                    </p>
                </motion.div>

                {/* Hero Image Container with Floating Controls */}
                <div className="flex-1 relative">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => { mobileSwiperRef.current = swiper; }}
                        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                        className="h-full w-full"
                    >
                        {images.map((image, idx) => (
                            <SwiperSlide key={idx} className="h-full w-full">
                                <Link href="/book" className="block relative w-full h-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        priority={idx === 0}
                                    />
                                    <div className="absolute inset-0 bg-navy/10" />
                                    {/* Protection gradient for text readability */}
                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none z-10" />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Floating Controls - Clean & Minimal */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-8 z-20 pointer-events-none">
                        {/* Progress Dots */}
                        <div className="flex justify-center gap-1.5 mb-4 pointer-events-auto">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? "w-8 bg-teal"
                                        : "w-1 bg-white/50"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Image Counter */}
                        <div className="text-center">
                            <span className="font-mono text-sm text-white font-medium">
                                {formatNumber(currentIndex + 1)} / {formatNumber(images.length)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Fixed CTA Button at Bottom */}
                <div className="px-6 py-6 bg-gradient-to-t from-navy via-navy to-transparent relative z-20">
                    <Link href="/book">
                        <div className="glass-card-strong px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-transform cursor-pointer group w-full">
                            <span className="font-mono text-sm text-teal group-hover:underline">ENTER PORTFOLIO</span>
                            <ArrowRight size={18} className="text-teal" />
                        </div>
                    </Link>
                </div>
            </section>

            {/* Desktop Version - Side-by-Side Gallery Layout */}
            <section className="hidden md:flex relative h-screen bg-navy overflow-hidden pt-20 box-border">
                {/* Left Sidebar - Content & Controls (35%) */}
                <div className="w-[35%] h-full flex flex-col justify-center px-8 lg:px-12 xl:px-16 py-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 flex flex-col items-center text-center"
                    >
                        {/* Title Section */}
                        <div>
                            <h2 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                                BEYOND <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-slate-400">
                                    THE CODE
                                </span>
                            </h2>
                            <p className="font-mono text-teal tracking-widest text-sm lg:text-base">
                                CREATIVE EXPRESSION & MODELING
                            </p>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent"></div>

                        {/* Navigation Controls */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-teal/10 hover:border-teal/50 transition-all duration-300"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="text-white" size={20} />
                                </button>

                                {/* Center Section - Numbers & Dots */}
                                <div className="flex-1 flex flex-col items-center justify-center gap-2">
                                    {/* Numbers */}
                                    <div className="flex items-center gap-2">
                                        <span className="font-heading text-3xl text-white font-bold tracking-tight">
                                            {formatNumber(currentIndex + 1)}
                                        </span>
                                        <span className="font-mono text-base text-slate/50">
                                            / {formatNumber(images.length)}
                                        </span>
                                    </div>

                                    {/* Progress Dots */}
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
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-teal/10 hover:border-teal/50 transition-all duration-300"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="text-white" size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent"></div>

                        {/* Enter Portfolio Button */}
                        <Link href="/book">
                            <div className="glass-card-strong px-8 py-4 rounded-full inline-flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer group">
                                <span className="font-mono text-xs text-white">MUZAMIL SHIRAZ</span>
                                <span className="w-px h-4 bg-white/20"></span>
                                <span className="font-mono text-xs text-teal group-hover:underline">ENTER PORTFOLIO</span>
                                <ArrowRight size={16} className="text-teal" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Gallery - Swiper with 2 Images Visible (65%) */}
                <div
                    className="w-[65%] h-full relative px-3 py-12"
                    onMouseEnter={() => {
                        setIsPaused(true);
                        if (swiperRef.current?.autoplay) swiperRef.current.autoplay.stop();
                    }}
                    onMouseLeave={() => {
                        setIsPaused(false);
                        if (swiperRef.current?.autoplay) swiperRef.current.autoplay.start();
                    }}
                >
                    {/* The "Vogue Fade" - Blends text section into images */}
                    <div className="absolute top-0 left-0 h-full w-32 z-10 bg-gradient-to-r from-navy to-transparent pointer-events-none" />

                    {/* Swiper Carousel - Film Strip Effect */}
                    <div className="h-[85%] w-full relative z-0">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={0}
                            slidesPerView={2}
                            centeredSlides={false}
                            loop={true}
                            speed={800}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                            className="w-full h-full"
                        >
                            {images.map((image, idx) => (
                                <SwiperSlide key={idx} className="h-full">
                                    <div className="relative w-full h-full">
                                        <Link href="/book" className="block relative w-full h-full group cursor-pointer">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                                priority={idx < 2}
                                            />
                                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all duration-500" />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <p className="font-mono text-xs text-teal text-center tracking-widest">VIEW GALLERY</p>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ModelingTeaser;
