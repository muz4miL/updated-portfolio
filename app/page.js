import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import ModelingTeaser from "../components/sections/ModelingTeaser";

export default function Home() {
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
        <Projects />
      </div>

      {/* --- MODELING TEASER (Full Width) --- */}
      <ModelingTeaser />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Contact />

        {/* Simple Footer Text */}
        <footer className="py-8 text-center text-slate font-mono text-xs">
          <p>Designed & Built by Muzamil Shiraz</p>
        </footer>
      </div>
    </div>
  );
}
