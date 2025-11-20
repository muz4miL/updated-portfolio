import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center items-start px-6 md:px-24 max-w-5xl mx-auto"
    >
      <div className="font-mono text-teal tracking-widest text-sm mb-5">
        Hi, my name is
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-4 text-glow">
        Muzamil Shiraz.
      </h1>

      <h2 className="text-4xl md:text-6xl font-bold text-slate leading-tight">
        I build things for the web.
      </h2>

      <p className="mt-6 text-slate max-w-xl text-lg">
        {/* CHANGE 1: I'm -> I&apos;m */}
        I&apos;m a software engineering student and musician specializing in
        building exceptional digital experiences. Currently, I&apos;m focused on
        the MERN stack and mastering UI/UX design.
      </p>

      <div className="flex gap-4 mt-12">
        <a
          href="#work"
          className="px-8 py-4 border border-teal text-teal font-mono text-sm rounded hover:bg-teal/10 transition-all"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;
