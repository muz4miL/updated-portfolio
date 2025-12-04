import SectionHeader from "../ui/SectionHeader";
import { Monitor, Code, Smartphone, Zap, Cpu, Palette } from "lucide-react";

const Expertise = () => {
  const expertise = [
    {
      icon: Code,
      title: "Frontend Architecture",
      description:
        "Crafting scalable, performant React & Next.js applications with modern tooling and best practices.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-500/10 to-teal-500/10",
      border: "border-blue-400/30",
      glow: "blue",
      featured: false,
    },
    {
      icon: Cpu,
      title: "Full Stack Development",
      description:
        "End-to-end solution development with optimized backends and seamless frontend integration.",
      skills: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-400/30",
      glow: "purple",
      featured: true,
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Building cross-platform mobile experiences with React Native and progressive web apps.",
      skills: ["React Native", "Expo", "PWA", "App Store"],
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-400/30",
      glow: "green",
      featured: false,
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, accessibility, and superior user experience.",
      skills: ["Lighthouse", "Core Web Vitals", "Accessibility", "SEO"],
      gradient: "from-orange-500/10 to-red-500/10",
      border: "border-orange-400/30",
      glow: "orange",
      featured: false,
    },
    {
      icon: Palette,
      title: "UI/UX Engineering",
      description:
        "Creating beautiful, intuitive interfaces with modern design systems and animations.",
      skills: [
        "Figma",
        "Framer Motion",
        "Design Systems",
        "Micro-interactions",
      ],
      gradient: "from-cyan-500/10 to-blue-500/10",
      border: "border-cyan-400/30",
      glow: "cyan",
      featured: false,
    },
    {
      icon: Monitor,
      title: "DevOps & Deployment",
      description:
        "Streamlining development workflows with CI/CD, cloud platforms, and automation.",
      skills: ["Vercel", "AWS", "Docker", "GitHub Actions"],
      gradient: "from-indigo-500/10 to-purple-500/10",
      border: "border-indigo-400/30",
      glow: "indigo",
      featured: false,
    },
  ];

  return (
    <section id="expertise" className="py-32 max-w-7xl mx-auto px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-teal/5 rounded-full blur-[100px] -z-10"></div>

      <SectionHeader
        number="02"
        title="Areas of Expertise"
        subtitle="Specialized skills honed through years of practice and innovation"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {expertise.map((item, index) => (
          <div
            key={index}
            className={`group relative p-8 rounded-2xl border ${
              item.border
            } bg-gradient-to-br ${
              item.gradient
            } backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              item.featured
                ? "ring-2 ring-teal/50 shadow-xl"
                : "hover:shadow-lg"
            }`}
          >
            {/* Glow Effect */}
            {item.featured && (
              <div className="absolute inset-0 bg-teal/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            )}

            {/* Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`p-3 rounded-xl bg-white/5 border ${item.border}`}
                >
                  <item.icon size={28} className="text-teal" />
                </div>
                <span className="font-mono text-xs text-slate/40 group-hover:text-teal/60 transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-bold text-white mb-4 leading-tight">
                {item.title}
                <div className="w-12 h-1 bg-teal rounded-full mt-2 group-hover:w-16 transition-all duration-300"></div>
              </h3>

              {/* Description */}
              <p className="text-slate text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                {item.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-mono text-xs text-slate/80 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Border Effect */}
            <div
              className={`absolute inset-0 rounded-2xl border-2 ${item.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            ></div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-teal/0 group-hover:border-teal transition-all duration-500 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-teal/0 group-hover:border-teal transition-all duration-500 delay-200 rounded-bl-2xl"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 pt-8 border-t border-slate/20">
        <p className="font-mono text-sm text-slate/60 uppercase tracking-widest mb-4">
          Ready to Build Something Amazing?
        </p>
        <div className="flex justify-center gap-4">
          {["React", "Next.js", "TypeScript", "Node.js"].map((tech, index) => (
            <span
              key={index}
              className="font-mono text-xs text-teal bg-teal/10 px-3 py-1 rounded-full border border-teal/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
