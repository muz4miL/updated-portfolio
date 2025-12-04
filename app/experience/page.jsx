"use client";

// ============================================
// EXPERIENCE PAGE CONTAINER
// Kinetic Data Monolith Architecture
// Clean orchestration - no filter state needed
// ============================================

import {
  ExperienceBackground,
  ExperienceHero,
  ExperienceTimeline,
  ExperienceCTA,
} from "@/components/experience-components";

/**
 * ExperiencePage Container - Kinetic Data Monolith
 * 
 * Architecture:
 * - No filter state - single premium vertical flow
 * - Background renders once (performance optimization)
 * - Each component is self-contained
 * - Clean, minimal orchestration layer
 * 
 * Component Tree:
 * ├── ExperienceBackground (fixed ambient glows)
 * ├── ExperienceHero (header, particles, stats)
 * ├── ExperienceTimeline (data pulse stream, cards)
 * └── ExperienceCTA (magnetic effect, glass layers)
 */
const ExperiencePage = () => {
  return (
    <div className="relative min-h-screen bg-navy pt-20 md:pt-24">
      {/* 
        LAYER 0-1: Background streams (z-0, z-1)
        Deep in space, slowest, most blurred
      */}
      <ExperienceBackground />

      {/* 
        LAYER 2-4: Content (z-10)
        Hero, Timeline, CTA sit in the middle layer
        Midground streams (z-3) weave around this
      */}
      <div className="relative z-10">
        <ExperienceHero />
        <ExperienceTimeline />
        <ExperienceCTA />
      </div>

      {/* Note: Foreground streams (z-5) are in ExperienceBackground */}
    </div>
  );
};

export default ExperiencePage;
