import React from "react";
import { ArrowLeft, Calendar, MapPin, Award } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Full Stack Developer",
      company: "Tech Startup",
      location: "Remote",
      description:
        "Leading frontend development for SaaS platform serving 10k+ users. Implemented micro-frontend architecture and improved performance by 40%.",
      tech: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
      year: "2021 - 2023",
      role: "Frontend Developer",
      company: "Digital Agency",
      location: "Karachi, PK",
      description:
        "Built responsive web applications for clients in healthcare and e-commerce. Mentored junior developers and established coding standards.",
      tech: ["Next.js", "Tailwind", "GraphQL", "MongoDB"],
    },
    {
      year: "2019 - 2020",
      role: "YES Exchange Student",
      company: "US Department of State",
      location: "Washington, USA",
      description:
        "Cultural exchange program focusing on leadership development and cross-cultural communication. Lived with host family and attended American high school.",
      tech: ["Leadership", "Communication", "Adaptability"],
    },
  ];

  const education = [
    {
      degree: "BS Computer Science",
      institution: "University of Karachi",
      year: "2020 - 2024",
      highlights: [
        "Dean&apos;s List",
        "Tech Club President",
        "Hackathon Winner",
      ],
    },
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
            From cultural exchange student to software engineer—a journey of
            continuous learning, adaptation, and building things that matter.
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
                My passion for technology began not in a computer lab, but
                through the lens of cultural exchange. Selected for the
                prestigious{" "}
                <span className="text-teal font-semibold">
                  YES Exchange Program
                </span>{" "}
                in 2019, I spent a transformative year in Washington, USA,
                living with a host family and experiencing American education
                firsthand.
              </p>
              <p>
                This experience taught me that the most complex problems
                aren&apos;t technical—they&apos;re human. Returning to Pakistan,
                I pursued Computer Science with a new perspective: technology as
                a bridge between cultures, a tool for understanding, and a
                platform for positive change.
              </p>
              <p>
                Today, I blend this cross-cultural understanding with technical
                expertise to create digital experiences that are not just
                functional, but meaningful. Whether I&apos;m architecturing a
                React application, mentoring aspiring developers, or
                contributing to open-source projects, I&apos;m driven by the
                belief that technology should serve people first.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring the
                intersection of music and technology, contributing to developer
                communities, or planning my next adventure—because the best
                solutions often come from unexpected connections.
              </p>
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
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
