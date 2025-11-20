import React from "react";
import { ArrowLeft, Github, ExternalLink, Folder, Eye } from "lucide-react";
import Link from "next/link";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Premium Music Store",
      description:
        "A high-end, luxury landing page for a premium music equipment store. Designed meticulously in Figma and implemented with React & Tailwind CSS to create an immersive, responsive user experience that showcases products in an elegant manner.",
      longDescription:
        "This project involved creating a complete brand experience for a luxury music store. The design process started with extensive market research and user persona development. The final implementation features smooth animations, micro-interactions, and a fully responsive layout that maintains elegance across all device sizes.",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Figma",
        "Responsive Design",
      ],
      features: [
        "Luxury UI/UX",
        "Smooth Animations",
        "Mobile-First",
        "Product Showcase",
      ],
      github: "#",
      live: "#",
      image: "/api/placeholder/600/400",
      featured: true,
    },
    {
      title: "Pizza Ordering Platform",
      description:
        "A full-stack food ordering application with real-time order tracking. Uses Firebase for backend services including authentication, database, and hosting for a seamless user experience.",
      longDescription:
        "Built as a complete food ordering solution, this platform allows users to customize pizzas, track orders in real-time, and manage their accounts. The Firebase integration provides secure authentication and real-time database updates for order status changes.",
      tech: [
        "React",
        "Firebase",
        "Tailwind CSS",
        "Context API",
        "Real-time DB",
      ],
      features: [
        "User Authentication",
        "Real-time Tracking",
        "Custom Orders",
        "Payment Integration",
      ],
      github: "#",
      live: "#",
      image: "/api/placeholder/600/400",
      featured: true,
    },
    {
      title: "Travel Packing List Manager",
      description:
        "A utility application for travelers to create and manage comprehensive packing lists. Features local storage persistence and intelligent categorization for different trip types.",
      longDescription:
        "This application solves the common problem of forgetting essential items while traveling. It includes smart categorization, checklist sharing, and offline functionality. The local storage implementation ensures data persistence across browser sessions.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage", "PWA"],
      features: [
        "Offline Functionality",
        "Smart Categories",
        "Shareable Lists",
        "Progress Tracking",
      ],
      github: "#",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Advice Generator API",
      description:
        "A clean, minimalist application that fetches random advice from an external API. Built to practice API integration and asynchronous JavaScript patterns.",
      longDescription:
        "Focusing on clean code and user experience, this project demonstrates proper API integration, error handling, and loading states. The minimalist design puts the content front and center while providing a smooth interaction experience.",
      tech: ["JavaScript", "REST API", "Async/Await", "Error Handling", "CSS3"],
      features: [
        "API Integration",
        "Error Handling",
        "Loading States",
        "Minimalist Design",
      ],
      github: "#",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Portfolio Website",
      description:
        "The very website you're viewing right now! Built with Next.js, Tailwind CSS, and modern React patterns to showcase my work and skills.",
      longDescription:
        "This portfolio represents my approach to modern web development - performance-focused, accessible, and visually engaging. It features smooth animations, responsive design, and optimized loading patterns.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
      features: [
        "Performance Optimized",
        "Accessible",
        "Responsive",
        "Modern Animations",
      ],
      github: "#",
      live: "#",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Task Management Dashboard",
      description:
        "A comprehensive task management application with drag-and-drop functionality, team collaboration features, and progress analytics.",
      longDescription:
        "Designed for both individual and team use, this dashboard includes advanced features like drag-and-drop task organization, team member assignments, progress tracking, and deadline management with notifications.",
      tech: ["React", "Node.js", "MongoDB", "Drag & Drop", "Chart.js"],
      features: [
        "Team Collaboration",
        "Drag & Drop",
        "Analytics",
        "Deadline Tracking",
      ],
      github: "#",
      live: "#",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#work"
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
            My Projects
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in frontend
            development, problem-solving, and creating meaningful user
            experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-lightNavy/20 rounded-2xl border border-slate/10 hover:border-teal/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-teal/10 to-purple-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors duration-300"></div>
                <Folder
                  size={48}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-teal/30 group-hover:text-teal/50 transition-colors"
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-teal text-navy font-mono text-xs px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Folder size={24} className="text-teal mt-1" />
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-slate hover:text-teal transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="text-slate hover:text-teal transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-teal transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-mono text-xs text-teal uppercase tracking-widest mb-2">
                    Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs text-slate/80 bg-slate/10 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="font-mono text-xs text-teal bg-teal/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-8 border-t border-slate/20">
          <p className="font-mono text-sm text-slate/60 uppercase tracking-widest mb-4">
            Like what you see?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal/10 border border-teal text-teal font-mono rounded-lg hover:bg-teal hover:text-navy transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Start a Project
            <Eye size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
