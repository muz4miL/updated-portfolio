"use client";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Experience = () => {
  const highlights = [
    {
      title: "Frontend Developer",
      org: "Personal Projects",
      date: "2025 - Present",
      type: "work",
    },
    {
      title: "AI Sprint Intern",
      org: "Brave Studios",
      date: "2024",
      type: "work",
    },
    {
      title: "BS Computer Science",
      org: "IMSciences",
      date: "2023 - 2027",
      type: "education",
    },
    {
      title: "YES Exchange",
      org: "USA Program",
      date: "2019 - 2020",
      type: "experience",
    },
  ];

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeader number="02" title="Journey Highlights" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="group p-6 rounded-xl border border-slate/10 hover:border-teal/30 bg-navy/30 hover:bg-lightNavy/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-heading text-lg font-bold text-white group-hover:text-teal transition-colors">
                {item.title}
              </h3>
              <span className="font-mono text-xs text-teal bg-teal/10 px-2 py-1 rounded">
                {item.type}
              </span>
            </div>
            <p className="text-teal font-mono text-sm mb-2">{item.org}</p>
            <p className="text-slate text-xs">{item.date}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-3 px-6 py-3 border border-teal/30 rounded-lg hover:bg-teal/10 transition-all duration-300"
        >
          <span className="font-mono text-teal text-sm uppercase tracking-widest">
            View Full Timeline
          </span>
          <ArrowRight
            size={16}
            className="text-teal group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default Experience;
