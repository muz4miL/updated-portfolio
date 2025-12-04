"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Three.js
const ThreeBackground = dynamic(
    () => import("@/components/ui/three-background"),
    { ssr: false }
);

// ============================================
// EXPERIENCE BACKGROUND COMPONENT  
// Subtle 3D atmosphere - text-focused design
// ============================================

const ExperienceBackground = () => {
    return (
        <>
            {/* Dark base for contrast */}
            <div className="fixed inset-0 z-0 bg-navy" />

            {/* 3D Particle Field - Subtle */}
            <ThreeBackground />

            {/* Dark vignette for text readability */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-navy/60 via-transparent to-navy/80" />

            {/* Subtle ambient glows - reduced opacity */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[140px] animate-pulse"
                    style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px] animate-pulse"
                    style={{ animationDuration: '10s', animationDelay: '2s' }} />
            </div>
        </>
    );
};

export default ExperienceBackground;
