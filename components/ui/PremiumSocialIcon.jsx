"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const PremiumSocialIcon = ({ Icon, href, label, brandColor = "#64ffda", delay = 0 }) => {
    const iconRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!iconRef.current) return;
        const rect = iconRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        setRotateX((mouseY / rect.height) * -15);
        setRotateY((mouseX / rect.width) * 15);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
            style={{ perspective: 1000 }}
        >
            {/* Orbiting Particles */}
            {isHovered && (
                <>
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full pointer-events-none"
                            style={{
                                backgroundColor: brandColor,
                                x: "-50%",
                                y: "-50%",
                            }}
                            animate={{
                                x: [
                                    Math.cos((i * 2 * Math.PI) / 3) * 35,
                                    Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * 35,
                                    Math.cos((i * 2 * Math.PI) / 3) * 35,
                                ],
                                y: [
                                    Math.sin((i * 2 * Math.PI) / 3) * 35,
                                    Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * 35,
                                    Math.sin((i * 2 * Math.PI) / 3) * 35,
                                ],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </>
            )}

            {/* Main Icon Container */}
            <motion.a
                ref={iconRef}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative block"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                {/* Radial Glow Background - No Square Artifacts */}
                <div
                    className="absolute -inset-4 transition-opacity duration-500 pointer-events-none rounded-full"
                    style={{
                        backgroundImage: isHovered
                            ? `radial-gradient(circle, ${brandColor}50 0%, ${brandColor}30 30%, ${brandColor}10 50%, transparent 70%)`
                            : 'none',
                        filter: 'blur(24px)',
                        opacity: isHovered ? 1 : 0,
                    }}
                />

                {/* Glass Card with Dynamic Border */}
                <motion.div
                    className="relative p-4 rounded-2xl glass-card transition-all duration-500 overflow-visible"
                    style={{
                        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                        transformStyle: "preserve-3d",
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: isHovered ? brandColor : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: isHovered
                            ? `0 0 20px ${brandColor}40, 0 0 40px ${brandColor}20`
                            : 'none',
                    }}
                >
                    {/* Holographic Shimmer Overlay */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"
                        style={{
                            backgroundImage: `linear-gradient(135deg, 
                transparent 0%, 
                ${brandColor}1A 25%, 
                ${brandColor}40 50%, 
                ${brandColor}1A 75%, 
                transparent 100%)`,
                            backgroundSize: "200% 200%",
                        }}
                        animate={{
                            backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Icon */}
                    <motion.div
                        className="relative transition-colors duration-500"
                        style={{
                            transform: "translateZ(20px)",
                            color: isHovered ? brandColor : '#8892b0',
                        }}
                    >
                        <Icon size={22} strokeWidth={1.5} />
                    </motion.div>

                    {/* Tooltip */}
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                        <div
                            className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg text-navy relative"
                            style={{ backgroundColor: brandColor }}
                        >
                            {label}
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
                                style={{ backgroundColor: brandColor }}
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.a>

            {/* Pulsing Ring on Hover */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                    style={{ borderColor: `${brandColor}60` }}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )}
        </motion.div>
    );
};

export default PremiumSocialIcon;
