"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  Code2,
  Users,
  Rocket,
  Music,
  Camera,
  Award,
  MapPin,
  Calendar,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { StudentIcon, LaptopIcon, GlobalIcon, UIIcon } from "@/components/icons";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiPython
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// ----- ANIMATED SKILL CARD WITH COUNTER & BRAND COLORS -----
const SkillCard = ({ skill, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Color variations for each skill (fallback colors)
  const colors = [
    { bg: 'bg-orange-500/10', hover: 'group-hover:bg-orange-500/20', bar: 'from-orange-500 to-blue-500' }, // HTML (orange) + CSS (blue)
    { bg: 'bg-yellow-500/10', hover: 'group-hover:bg-yellow-500/20', bar: 'from-yellow-500 via-yellow-400 to-yellow-300' },
    { bg: 'bg-cyan-500/10', hover: 'group-hover:bg-cyan-500/20', bar: 'from-cyan-500 via-cyan-400 to-cyan-300' },
    { bg: 'bg-blue-500/10', hover: 'group-hover:bg-blue-500/20', bar: 'from-blue-500 via-blue-400 to-blue-300' },
    { bg: 'bg-blue-600/10', hover: 'group-hover:bg-blue-600/20', bar: 'from-[#306998] to-[#FFD43B]' }, // Python Blue to Python Yellow
    { bg: 'bg-orange-600/10', hover: 'group-hover:bg-orange-600/20', bar: 'from-orange-600 via-orange-500 to-orange-400' },
  ];
  const color = colors[index % colors.length];

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(easeOut * skill.level));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, skill.level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover-lift relative overflow-hidden">
        {/* Subtle brand-colored glow on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl ${color.bg}`} />

        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg ${color.bg} ${color.hover} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
              <skill.icon size={24} className={skill.brandColor} />
            </div>
            <span className="text-white font-semibold">{skill.name}</span>
          </div>
          <span className={`font-mono text-lg ${skill.brandColor} font-bold`}>{count}%</span>
        </div>

        {/* Progress Bar with brand color */}
        <div className="h-1.5 bg-lightNavy/50 rounded-full overflow-hidden relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.05 }}
            className={`h-full bg-gradient-to-r ${color.bar} rounded-full relative`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ----- TIMELINE ITEM -----
const TimelineItem = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-6 h-6 bg-navy rounded-full border-2 border-white/30 flex items-center justify-center z-10">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>

      <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover-lift">
        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate/80 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} />
            <span>{exp.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>{exp.location}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-1">
          {exp.role}
        </h3>
        <p className="text-gradient font-semibold mb-3">{exp.company}</p>

        {/* Description */}
        <p className="text-slate text-sm leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate text-xs font-mono hover:bg-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ----- INTEREST CARD -----
const InterestCard = ({ interest, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Color variations for interests
  const colors = [
    'from-violet-500/20 to-violet-500/5',
    'from-blue-500/20 to-blue-500/5',
    'from-teal-500/20 to-teal-500/5',
    'from-rose-500/20 to-rose-500/5',
    'from-indigo-500/20 to-indigo-500/5',
  ];
  const iconColors = ['text-violet-400', 'text-blue-400', 'text-teal-400', 'text-rose-400', 'text-indigo-400'];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover-lift text-center group"
    >
      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <interest.icon size={24} className={iconColors[index % iconColors.length]} />
      </div>
      <span className="text-white text-sm font-medium">{interest.name}</span>
    </motion.div>
  );
};

// ----- MAIN PAGE COMPONENT -----
const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Data
  const experiences = [
    {
      year: "2024 - Present",
      role: "Frontend Developer",
      company: "Freelance",
      location: "Peshawar, Pakistan",
      description: "Building modern, responsive web applications with React, Next.js, and Tailwind CSS. Specializing in pixel-perfect UI implementations.",
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      year: "2023 - Present",
      role: "Tech Educator & Mentor",
      company: "Community Teaching",
      location: "Peshawar, Pakistan",
      description: "Mentored 1000+ students in programming fundamentals, web development, and computer science concepts through workshops and one-on-one sessions.",
      tech: ["Teaching", "Mentorship", "Python", "Java"],
    },
    {
      year: "2019 - 2020",
      role: "YES Exchange Student",
      company: "US Department of State",
      location: "Washington, USA",
      description: "Selected for the prestigious Kennedy-Lugar Youth Exchange & Study program. Developed cross-cultural leadership skills.",
      tech: ["Leadership", "Communication", "Adaptability"],
    },
  ];

  // Skills with authentic brand logos and colors
  const skills = [
    { name: "HTML/CSS", level: 90, icon: SiHtml5, brandColor: 'text-orange-500' },
    { name: "JavaScript", level: 85, icon: SiJavascript, brandColor: 'text-yellow-400' },
    { name: "React/Next.js", level: 85, icon: SiReact, brandColor: 'text-cyan-400' },
    { name: "PostgreSQL", level: 95, icon: SiPostgresql, brandColor: 'text-blue-400' },
    { name: "Python", level: 85, icon: SiPython, brandColor: 'text-blue-500' },
    { name: "Java", level: 85, icon: FaJava, brandColor: 'text-orange-600' },
  ];

  const interests = [
    { name: "Coding", icon: Code2 },
    { name: "Music", icon: Music },
    { name: "Photography", icon: Camera },
    { name: "Teaching", icon: Users },
    { name: "Culture", icon: GlobalIcon },
  ];

  const languages = ["English", "Urdu", "Pushto", "Punjabi", "Persian"];

  return (
    <div ref={containerRef} className="min-h-screen bg-navy">
      {/* HERO HEADER */}
      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative pt-32 pb-24 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back Button */}
          <Link
            href="/#about"
            className="group inline-flex items-center gap-2 text-slate hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm uppercase tracking-widest">
              Back to Home
            </span>
          </Link>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles size={16} className="text-white/60 animate-pulse" />
              <span className="font-mono text-xs text-white/80 uppercase tracking-widest">
                About Me
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
              Hey, I'm{" "}
              <span className="text-gradient">Muzamil</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate max-w-2xl mx-auto leading-relaxed">
              Frontend Developer • Tech Educator • CS Student
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-4 py-2 bg-navy/50 rounded-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-violet-400" />
                  <span className="font-mono text-white/80 text-sm">1000+ Students Mentored</span>
                </div>
              </div>
              <div className="px-4 py-2 bg-navy/50 rounded-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <Rocket size={18} className="text-blue-400" />
                  <span className="font-mono text-white/80 text-sm">20+ Projects</span>
                </div>
              </div>
              <div className="px-4 py-2 bg-navy/50 rounded-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <GlobalIcon size={18} className="text-teal-400" />
                  <span className="font-mono text-white/80 text-sm">YES Exchange Alumni</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="space-y-24">
          {/* MY STORY - CONDENSED */}
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-gradient">My Story</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 - CS Student with Custom Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-400 flex items-center justify-center mb-4 p-2">
                    <StudentIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">CS Student</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Currently pursuing my Bachelor's degree in Computer Science (graduating 2027). Building strong foundations in algorithms, databases, and web technologies.
                  </p>
                </motion.div>

                {/* Card 2 - Global Perspective */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center mb-4 p-2">
                    <GlobalIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Global Perspective</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    YES Exchange Program alumnus (2019-2020). Lived in Washington, USA, learning that complex problems aren't always technical—they're human.
                  </p>
                </motion.div>

                {/* Card 3 - Passionate Educator with Custom Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-400 flex items-center justify-center mb-4 p-2">
                    <LaptopIcon size={32} className="text-white [&>*]:fill-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Passionate Educator</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Mentored 1000+ students in programming and web development. My greatest strength lies at the intersection of technology and education.
                  </p>
                </motion.div>

                {/* Card 4 - Frontend Developer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center mb-4 p-2">
                    <UIIcon size={44} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Frontend Developer</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Building modern, responsive web applications with React & Next.js. Completed 20+ projects with pixel-perfect UI and smooth animations.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-gradient">Technical Skills</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </section>

          {/* EXPERIENCE TIMELINE */}
          <section>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-gradient">Experience</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
            </h2>

            <div>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} exp={exp} index={index} />
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-gradient">Education</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border border-white/5"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-400 flex items-center justify-center flex-shrink-0 p-2">
                  <StudentIcon size={40} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-slate font-semibold mb-2">University in Peshawar</p>
                  <div className="flex items-center gap-2 text-sm font-mono text-slate/80">
                    <Calendar size={14} />
                    <span>2023 - 2027</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Data Structures & Algorithms", "Database Systems", "Web Technologies"].map((subject, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate text-xs font-mono"
                  >
                    <Award size={12} className="text-indigo-400" />
                    {subject}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>

          {/* LANGUAGES & INTERESTS */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-gradient">Languages</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 font-mono text-sm hover:bg-white/10 transition-colors cursor-default"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-gradient">Interests</span>
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {interests.map((interest, index) => (
                  <InterestCard key={index} interest={interest} index={index} />
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="glass-card p-10 rounded-2xl border border-white/10 max-w-2xl mx-auto">
              <Rocket size={48} className="mx-auto mb-4 text-teal-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-slate mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white font-bold rounded-lg hover:from-violet-600 hover:to-blue-600 transition-all hover-lift"
              >
                Get In Touch
                <ExternalLink size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
