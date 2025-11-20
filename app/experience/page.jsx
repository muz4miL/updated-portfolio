"use client";
import React, { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Award } from "lucide-react";
import Link from "next/link";

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experienceData = [
    {
      category: "work",
      title: "Frontend Developer",
      org: "Personal Projects",
      date: "Jun 2025 - Present",
      location: "Remote",
      details: [
        "Built multiple React and Tailwind CSS projects focusing on responsive UI and modern design patterns",
        "Delivered high-quality, maintainable code with focus on clean architecture and best practices",
        "Experimented with modern libraries like Framer Motion, Vite, and Next.js 14",
        "Implemented responsive designs that work seamlessly across all device sizes",
        "Optimized applications for performance and accessibility standards",
      ],
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
      ],
    },
    {
      category: "work",
      title: "AI Sprint Intern",
      org: "Brave Studios",
      date: "Aug 2024 - Sep 2024",
      location: "Karachi, Pakistan",
      details: [
        "Attended intensive workshops on AI and Machine Learning fundamentals",
        "Participated in interactive coding challenges and hackathons",
        "Collaborated with a team to solve complex algorithmic problems",
        "Gained hands-on experience with Python data science libraries",
        "Presented project findings to senior developers and mentors",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "Team Collaboration",
        "Problem Solving",
      ],
    },
    {
      category: "education",
      title: "BS Computer Science",
      org: "Institute of Management Sciences",
      date: "2023 - 2027",
      location: "Peshawar, Pakistan",
      details: [
        "Studying core Computer Science concepts: Data Structures, Algorithms, Software Engineering",
        "Active member of the university tech society and programming clubs",
        "Maintaining focus on programming fundamentals and software development principles",
        "Participating in coding competitions and technical workshops",
        "Expected graduation with focus on Web Technologies and AI",
      ],
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "Database Systems",
        "Web Development",
      ],
    },
    {
      category: "experience",
      title: "YES Exchange Student",
      org: "Centralia High School",
      date: "Aug 2019 - Jun 2020",
      location: "Washington, USA",
      details: [
        "Selected for highly competitive full scholarship exchange program funded by US State Department",
        "Focused on leadership development, cross-cultural teamwork, and adaptability skills",
        "Completed over 100 hours of community service in local organizations",
        "Adapted to American education system while maintaining academic excellence",
        "Developed strong communication and interpersonal skills in multicultural environment",
      ],
      skills: [
        "Leadership",
        "Cross-cultural Communication",
        "Adaptability",
        "Community Service",
      ],
    },
  ];

  const categories = ["All", "Work", "Education", "Experience"];

  const filteredData =
    activeTab === 0
      ? experienceData
      : experienceData.filter(
          (item) => item.category === categories[activeTab].toLowerCase()
        );

  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#experience"
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
            My Journey
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            A comprehensive timeline of my professional growth, education, and
            transformative experiences that shaped my journey in technology.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-mono text-sm border transition-all duration-300 ${
                activeTab === index
                  ? "bg-teal text-navy border-teal"
                  : "text-slate border-slate/30 hover:border-teal hover:text-teal"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-teal/30"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-teal rounded-full border-4 border-navy"></div>

              <div className="bg-lightNavy/20 rounded-2xl p-8 border border-slate/10 hover:border-teal/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl text-white font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-teal text-lg font-semibold">
                      {item.org}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-2 lg:mt-0">
                    <div className="flex items-center gap-2 text-sm text-teal font-mono">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate font-mono">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <ul className="space-y-3 mb-6">
                  {item.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-3 text-slate"
                    >
                      <Award
                        size={16}
                        className="text-teal mt-1 flex-shrink-0"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="font-mono text-xs text-teal bg-teal/10 px-3 py-1 rounded-full border border-teal/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-8 border-t border-slate/20">
          <p className="font-mono text-sm text-slate/60 uppercase tracking-widest mb-4">
            Ready to work together?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal/10 border border-teal text-teal font-mono rounded-lg hover:bg-teal hover:text-navy transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
