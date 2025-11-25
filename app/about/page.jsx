import React from "react";
import { ArrowLeft, Calendar, MapPin, Award, Code, Database, Globe, Palette, Users, BookOpen } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Web Developer",
      company: "Freelance",
      location: "Peshawar, Pakistan",
      description:
        "Building modern, responsive web applications for clients using React, Next.js, and Tailwind CSS. Specializing in pixel-perfect UI implementations with attention to performance and accessibility.",
      tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
      year: "2023 - Present",
      role: "Tech Educator & Mentor",
      company: "Community Teaching",
      location: "Peshawar, Pakistan",
      description:
        "Mentored 1000+ students in programming fundamentals, web development, and computer science concepts. Conducted workshops and one-on-one sessions to help aspiring developers build their skills.",
      tech: ["Teaching", "Mentorship", "Python", "Java"],
    },
    {
      year: "2019 - 2020",
      role: "YES Exchange Student",
      company: "US Department of State",
      location: "Washington, USA",
      description:
        "Selected for the prestigious Kennedy-Lugar Youth Exchange & Study program. Lived with an American host family, attended high school, and developed cross-cultural leadership skills that shape my approach to problem-solving today.",
      tech: ["Leadership", "Communication", "Adaptability", "Cultural Exchange"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University in Peshawar",
      year: "2023 - 2027",
      highlights: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Web Technologies",
      ],
    },
  ];

  const skills = [
    { name: "PostgreSQL", level: 95, icon: Database },
    { name: "HTML/CSS", level: 90, icon: Code },
    { name: "Java", level: 85, icon: Code },
    { name: "Python", level: 85, icon: Code },
    { name: "Data Analysis", level: 80, icon: Database },
    { name: "Web Development", level: 70, icon: Globe },
    { name: "JavaScript", level: 65, icon: Code },
  ];

  const languages = ["English", "Urdu", "Pushto", "Punjabi", "Persian"];
  
  const interests = [
    { name: "Coding", icon: Code },
    { name: "Music", icon: Palette },
    { name: "Travel Photography", icon: Globe },
    { name: "Teaching", icon: Users },
    { name: "Exploring Cultures", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#about"
          className="group inline-flex items-center gap-2 text-slate hover:text-teal transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span className="font-mono text-sm uppercase tracking-widest">
            Back to Home
          </span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            My Story
          </h1>
          <p className="text-xl text-slate max-w-2xl mx-auto leading-relaxed">
            From cultural exchange student to web developer—a journey of
            continuous learning, teaching, and building meaningful digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-20">
          {/* Personal Journey */}
          <section>
            <h2 className="font-heading text-3xl text-white mb-8 font-semibold">
              The Journey
            </h2>
            <div className="space-y-6 text-slate text-lg leading-relaxed">
              <p>
                I&apos;m a passionate Computer Science undergraduate with practical 
                experience in teaching, programming, and creative digital media. 
                Currently pursuing my Bachelor&apos;s degree with an expected graduation 
                in 2027, I&apos;ve already built a strong foundation in both technical 
                skills and soft skills that set me apart.
              </p>
              <p>
                My journey took a transformative turn when I was selected for the 
                prestigious{" "}
                <span className="text-teal font-semibold">
                  YES Exchange Program
                </span>{" "}
                in 2019. Spending a year in Washington, USA, living with a host family 
                and experiencing American education firsthand taught me that the most 
                complex problems aren&apos;t always technical—they&apos;re human.
              </p>
              <p>
                This cross-cultural experience shaped my approach to everything I do. 
                Whether I&apos;m writing code, teaching aspiring developers, or building 
                web applications, I bring a unique perspective that values adaptability, 
                clear communication, and understanding diverse viewpoints.
              </p>
              <p>
                Having mentored over{" "}
                <span className="text-teal font-semibold">1000+ students</span> and 
                completed{" "}
                <span className="text-teal font-semibold">20+ projects</span>, I&apos;ve 
                discovered that my greatest strength lies at the intersection of 
                technology and education. When I&apos;m not coding, you&apos;ll find me 
                exploring music, capturing travel moments through photography, or 
                diving deep into different cultures and their stories.
              </p>
            </div>
          </section>
            {/* Skills Section */}
          <section>
            <h2 className="font-heading text-3xl text-white mb-8 font-semibold">
              Technical Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon size={16} className="text-teal" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="font-mono text-sm text-teal">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-lightNavy/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal to-teal/60 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section>
            <h2 className="font-heading text-3xl text-white mb-12 font-semibold">
              Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-teal/30"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-teal rounded-full border-4 border-navy"></div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-teal font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl text-white font-semibold">
                      {exp.role} • {exp.company}
                    </h3>

                    <p className="text-slate leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="font-mono text-xs text-teal bg-teal/10 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="font-heading text-3xl text-white mb-8 font-semibold">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-lightNavy/20 rounded-xl border border-slate/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="font-heading text-xl text-white font-semibold">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-teal text-sm">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-slate mb-4">{edu.institution}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="flex items-center gap-2 font-mono text-xs text-slate/80"
                      >
                        <Award size={12} className="text-teal" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="font-heading text-3xl text-white mb-8 font-semibold">
              Languages
            </h2>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-teal/10 border border-teal/30 rounded-full text-teal font-mono text-sm hover:bg-teal/20 transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="font-heading text-3xl text-white mb-8 font-semibold">
              Interests & Hobbies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-4 bg-lightNavy/20 rounded-xl border border-slate/10 text-center group hover:border-teal/30 transition-colors"
                >
                  <interest.icon size={24} className="mx-auto mb-2 text-teal group-hover:scale-110 transition-transform" />
                  <span className="text-slate text-sm">{interest.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
