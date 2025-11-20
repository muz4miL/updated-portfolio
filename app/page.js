import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      {/* Simple Footer Text */}
      <footer className="py-8 text-center text-slate font-mono text-xs">
        <p>Designed & Built by Muzamil Shiraz</p>
      </footer>
    </div>
  );
}
