"use client";
import { useEffect, useRef } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import ModelingTeaser from "../components/sections/ModelingTeaser";
import { useScrollContext } from "../context/ScrollContext";

export default function Home() {
  const projectsRef = useRef(null);
  const { setIsModelingVisible } = useScrollContext();

  // Track when user scrolls past Projects section
  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return;

      const projectsRect = projectsRef.current.getBoundingClientRect();
      const projectsTop = projectsRect.top;
      const windowHeight = window.innerHeight;

      // Hide icons when Projects section reaches the top of viewport
      // This ensures icons stay visible through Experience and only hide at Featured Work
      const shouldHide = projectsTop <= 100; // Hide when section header is at/near top

      setIsModelingVisible(shouldHide);
    };

    // Check on mount and on scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsModelingVisible]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* --- THE AURORA BACKGROUND --- */}
      <div className="aurora-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Hero />
        <About />
        <Experience />
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>

      {/* --- MODELING TEASER (Full Width) --- */}
      <ModelingTeaser />

      {/* --- CONTACT SECTION (Full Width) --- */}
      <Contact />

      {/* Footer Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Simple Footer Text */}
        <footer className="py-8 text-center text-slate font-mono text-xs">
          <p>Designed & Built by Muzamil Shiraz</p>
        </footer>
      </div>
    </div>
  );
}
