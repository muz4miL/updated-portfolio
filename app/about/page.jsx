"use client";
import React, { useRef } from "react";

// Import modular components
import {
  AboutHero,
  StoryCards,
  SkillsSection,
  ExperienceTimeline,
  EducationSection,
  InterestsLanguages,
  AboutCTA,
} from "@/components/about-components";

// ----- MAIN PAGE COMPONENT -----
const AboutPage = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
      {/* HERO HEADER */}
      <AboutHero containerRef={containerRef} />

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="space-y-24">
          {/* MY STORY - CONDENSED */}
          <StoryCards />

          {/* TECHNICAL SKILLS */}
          <SkillsSection />

          {/* EXPERIENCE TIMELINE - PREMIUM */}
          <ExperienceTimeline />

          {/* EDUCATION */}
          <EducationSection />

          {/* LANGUAGES & INTERESTS */}
          <InterestsLanguages />

          {/* CTA */}
          <AboutCTA />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
