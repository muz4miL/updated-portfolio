"use client";
import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Users, 
  Code,
  Heart,
  Star,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ============================================
// PREMIUM EXPERIENCE PAGE - MUZAMIL SHIRAZ
// ============================================

// Hero Stats Component
const HeroStat = ({ number, label, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center group"
  >
    <div className="relative inline-block mb-2">
      <Icon className="w-8 h-8 text-teal mx-auto group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 bg-teal/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{number}</div>
    <div className="text-sm text-slate font-mono uppercase tracking-wider">{label}</div>
  </motion.div>
);

// Timeline Card Component
const TimelineCard = ({ item, index, isLeft }) => {
  const categoryColors = {
    work: { bg: "from-teal/10 to-lightNavy/50", border: "border-teal/20", icon: Briefcase },
    education: { bg: "from-teal/10 to-lightNavy/50", border: "border-teal/20", icon: GraduationCap },
    exchange: { bg: "from-teal/10 to-lightNavy/50", border: "border-teal/20", icon: Globe },
    teaching: { bg: "from-teal/10 to-lightNavy/50", border: "border-teal/20", icon: Users },
  };

  const colors = categoryColors[item.category] || categoryColors.work;
  const IconComponent = colors.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-12`}
    >
      {/* Timeline Connector */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-teal rounded-full border-4 border-navy z-10 shadow-lg shadow-teal/50" />
      
      {/* Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-4" : "md:pl-4"}`}>
        <div className={`
          relative overflow-hidden rounded-2xl p-6 md:p-8
          bg-lightNavy/40 backdrop-blur-md
          border ${colors.border}
          group hover:scale-[1.02] transition-all duration-500
          hover:shadow-2xl hover:shadow-teal/20
          hover:bg-lightNavy/60
        `}>
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-teal/10 rounded-lg">
              <IconComponent size={18} className="text-teal" />
            </div>
            <span className="font-mono text-xs text-teal uppercase tracking-widest">
              {item.category}
            </span>
          </div>

          {/* Header */}
          <h3 className="font-heading text-xl md:text-2xl text-white font-bold mb-2 group-hover:text-teal transition-colors">
            {item.title}
          </h3>
          <p className="text-teal/80 font-semibold mb-4">{item.org}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2 text-slate">
              <Calendar size={14} className="text-teal/70" />
              <span>{item.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate">
              <MapPin size={14} className="text-teal/70" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Details */}
          <ul className="space-y-2 mb-6">
            {item.details.slice(0, 4).map((detail, i) => (
              <li key={i} className="flex items-start gap-3 text-slate text-sm">
                <Star size={12} className="text-teal mt-1.5 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="font-mono text-[10px] text-teal/90 bg-teal/10 px-2 py-1 rounded-full border border-teal/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Image Gallery Card
const GalleryImage = ({ alt, caption, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/90 z-10" />
    <div className="absolute inset-0 bg-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
    
    {/* Placeholder for actual images */}
    <div className="w-full h-full bg-gradient-to-br from-slate/20 to-navy flex items-center justify-center">
      <div className="text-center p-4">
        <Globe className="w-12 h-12 text-teal/50 mx-auto mb-2" />
        <p className="text-slate/50 text-sm font-mono">{alt}</p>
      </div>
    </div>
    
    {/* Caption */}
    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
      <p className="text-white text-sm font-medium">{caption}</p>
    </div>
    
    {/* Hover Border */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal/50 rounded-2xl transition-colors z-20" />
  </motion.div>
);

// Main Page Component
const ExperiencePage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Comprehensive experience data
  const experienceData = [
    {
      category: "exchange",
      title: "YES Exchange Scholar",
      org: "Kennedy-Lugar Youth Exchange & Study Program",
      date: "Aug 2019 - Jun 2020",
      location: "Washington State, USA",
      details: [
        "Selected among top 1% of 20,000+ applicants for prestigious US State Department scholarship",
        "Lived with American host family, fully immersing in cross-cultural experience",
        "Completed 100+ hours of community service across local organizations",
        "Represented Pakistan as cultural ambassador at schools and community events",
        "Developed leadership skills through active participation in student organizations",
        "Adapted to new education system while maintaining academic excellence",
      ],
      skills: ["Leadership", "Cross-Cultural Communication", "Public Speaking", "Adaptability", "Community Service"],
    },
    {
      category: "teaching",
      title: "Tech Educator & Mentor",
      org: "Community Teaching Initiative",
      date: "2023 - Present",
      location: "Peshawar, Pakistan",
      details: [
        "Mentored 1000+ students in programming fundamentals and web development",
        "Conducted hands-on workshops on Python, Java, and JavaScript",
        "Created structured learning paths for beginners to advanced developers",
        "Provided one-on-one guidance for career development in tech",
        "Built a community of aspiring developers with peer learning culture",
      ],
      skills: ["Teaching", "Mentorship", "Python", "Java", "JavaScript", "Curriculum Design"],
    },
    {
      category: "work",
      title: "Frontend Developer",
      org: "Freelance & Personal Projects",
      date: "2024 - Present",
      location: "Remote",
      details: [
        "Built 20+ production-ready web applications using React and Next.js",
        "Specialized in pixel-perfect UI implementations with Tailwind CSS",
        "Implemented complex animations using Framer Motion",
        "Optimized applications for performance and accessibility",
        "Delivered client projects with focus on clean code and best practices",
      ],
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "JavaScript"],
    },
    {
      category: "work",
      title: "AI Sprint Intern",
      org: "Brave Studios",
      date: "Aug 2024 - Sep 2024",
      location: "Karachi, Pakistan",
      details: [
        "Attended intensive workshops on AI and Machine Learning fundamentals",
        "Participated in hackathons solving real-world problems with AI",
        "Collaborated with cross-functional teams on algorithmic challenges",
        "Gained hands-on experience with Python data science stack",
      ],
      skills: ["Python", "Machine Learning", "Data Analysis", "Team Collaboration"],
    },
    {
      category: "education",
      title: "Bachelor of Computer Science",
      org: "Institute of Management Sciences (IMSciences)",
      date: "2023 - 2027",
      location: "Peshawar, Pakistan",
      details: [
        "Studying core CS: Data Structures, Algorithms, Software Engineering, Databases",
        "Active member of university tech society and programming clubs",
        "Participating in coding competitions and technical workshops",
        "Maintaining focus on Web Technologies and AI specialization",
      ],
      skills: ["Data Structures", "Algorithms", "OOP", "Database Systems", "Web Development"],
    },
  ];

  // US Exchange Gallery
  const usGalleryImages = [
    { alt: "Graduation Day", caption: "Graduation ceremony at Centralia High School" },
    { alt: "Host Family", caption: "With my amazing American host family" },
    { alt: "Community Service", caption: "100+ hours of community service" },
    { alt: "Cultural Event", caption: "Representing Pakistan at cultural events" },
    { alt: "School Friends", caption: "Lifelong friendships made in the USA" },
    { alt: "Adventures", caption: "Exploring the beautiful Pacific Northwest" },
  ];

  const filters = [
    { id: "all", label: "All Experience", icon: Star },
    { id: "exchange", label: "YES Exchange", icon: Globe },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "teaching", label: "Teaching", icon: Users },
    { id: "education", label: "Education", icon: GraduationCap },
  ];

  const filteredData = activeFilter === "all" 
    ? experienceData 
    : experienceData.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-navy">
      {/* Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 border border-teal/30 rounded-full mb-6"
            >
              <Globe className="w-4 h-4 text-teal" />
              <span className="font-mono text-sm text-teal">YES Alumnus &apos;19-&apos;20</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl md:text-7xl font-bold text-white mb-6"
            >
              My <span className="text-gradient">Journey</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate max-w-3xl mx-auto leading-relaxed"
            >
              From representing Pakistan in the USA as a YES Exchange student to mentoring 
              1000+ aspiring developers—a story of growth, learning, and impact.
            </motion.p>
          </div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
          >
            <HeroStat number="1000+" label="Students Mentored" icon={Users} />
            <HeroStat number="20+" label="Projects Built" icon={Code} />
            <HeroStat number="100+" label="Service Hours" icon={Heart} />
            <HeroStat number="1" label="Year in USA" icon={Globe} />
          </motion.div>
        </div>
      </section>

      {/* US Exchange Highlight Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-lightNavy/40 backdrop-blur-md" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,255,218,0.15),transparent_70%)]" />
            
            <div className="relative p-8 md:p-12 border border-teal/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/30 rounded-full mb-6">
                    <Award className="w-4 h-4 text-teal" />
                    <span className="font-mono text-xs text-teal uppercase">Featured Experience</span>
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                    Kennedy-Lugar YES Exchange Program
                  </h2>
                  
                  <p className="text-slate mb-6 leading-relaxed">
                    Selected among the <span className="text-teal font-semibold">top 1% of 20,000+ applicants</span> for 
                    this prestigious scholarship funded by the U.S. Department of State. I spent an unforgettable year 
                    in Washington State, living with an American host family and serving as a cultural ambassador for Pakistan.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-lightNavy/60 backdrop-blur-sm rounded-xl p-4 border border-teal/20">
                      <div className="text-2xl font-bold text-teal mb-1">100+</div>
                      <div className="text-sm text-slate">Community Service Hours</div>
                    </div>
                    <div className="bg-lightNavy/60 backdrop-blur-sm rounded-xl p-4 border border-teal/20">
                      <div className="text-2xl font-bold text-teal mb-1">10+</div>
                      <div className="text-sm text-slate">Cultural Presentations</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Leadership", "Cultural Exchange", "Public Speaking", "Adaptability", "Community Service"].map((skill) => (
                      <span key={skill} className="font-mono text-xs text-teal/90 bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Placeholder / Gallery Preview */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-lightNavy/40 backdrop-blur-md border border-teal/20">
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                      <Globe className="w-16 h-16 text-teal/50 mb-4" />
                      <p className="text-white font-medium mb-2">US Exchange Gallery</p>
                      <p className="text-slate text-sm mb-4">Add your photos from the USA experience</p>
                      <div className="font-mono text-xs text-teal/70 bg-teal/10 px-3 py-1 rounded-full">
                        /public/images/us/
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/15 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Memories from the <span className="text-gradient">USA</span>
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              A glimpse into my transformative year as a YES Exchange student in Washington State
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {usGalleryImages.map((image, index) => (
              <GalleryImage key={index} {...image} index={index} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-slate/60 font-mono text-sm"
          >
            💡 Add your photos to <code className="text-teal/70">/public/images/us/</code> to display them here
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-6 sticky top-20 z-30 bg-navy/95 backdrop-blur-lg border-y border-teal/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => setActiveFilter(id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-sm
                  border transition-all duration-300
                  ${activeFilter === id
                    ? "bg-teal text-navy border-teal shadow-lg shadow-teal/25"
                    : "text-slate border-slate/30 hover:border-teal/50 hover:text-teal"
                  }
                `}
              >
                <Icon size={14} />
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-teal/30 to-transparent" />

          {/* Timeline Cards */}
          <div className="space-y-0">
            <AnimatePresence mode="wait">
              {filteredData.map((item, index) => (
                <TimelineCard
                  key={`${activeFilter}-${index}`}
                  item={item}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="relative py-20 px-6 bg-lightNavy/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-slate">Acquired through years of learning, teaching, and building</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Code size={20} className="text-blue-400" />
                </div>
                <h3 className="font-heading text-xl text-white font-semibold">Technical</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Python", "Java", "PostgreSQL", "Framer Motion", "Git"].map((skill) => (
                  <span key={skill} className="font-mono text-xs text-blue-400/90 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-400/20">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-400/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Heart size={20} className="text-pink-400" />
                </div>
                <h3 className="font-heading text-xl text-white font-semibold">Leadership & Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Public Speaking", "Teaching", "Mentorship", "Cross-Cultural Communication", "Adaptability", "Team Leadership", "Community Building", "Time Management"].map((skill) => (
                  <span key={skill} className="font-mono text-xs text-pink-400/90 bg-pink-500/10 px-3 py-1.5 rounded-full border border-pink-400/20">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-2xl bg-lightNavy/40 backdrop-blur-md border border-teal/20 hover:border-teal/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal/10 rounded-lg">
                <Globe size={20} className="text-teal" />
              </div>
              <h3 className="font-heading text-xl text-white font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { lang: "English", level: "Fluent" },
                { lang: "Urdu", level: "Native" },
                { lang: "Pushto", level: "Native" },
                { lang: "Punjabi", level: "Conversational" },
                { lang: "Persian", level: "Basic" },
              ].map(({ lang, level }) => (
                <div key={lang} className="flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full border border-teal/20">
                  <span className="text-white font-medium">{lang}</span>
                  <span className="text-teal/70 text-xs font-mono">({level})</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Create Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-slate text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a developer, educator, or collaborator—I bring a unique 
              blend of technical skills and cross-cultural perspective to every project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-teal text-navy font-mono font-bold rounded-xl hover:shadow-lg hover:shadow-teal/25 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Get In Touch
                <ExternalLink size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-teal/50 text-teal font-mono rounded-xl hover:bg-teal/10 hover:border-teal transition-all duration-300 uppercase tracking-wider text-sm"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
