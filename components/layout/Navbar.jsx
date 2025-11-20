// Updated Navbar with explicit styles
"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "01", name: "home", href: "/" },
    { id: "02", name: "about", href: "/about" },
    { id: "03", name: "experience", href: "/experience" },
    { id: "04", name: "work", href: "/projects" },
    { id: "05", name: "contact", href: "/contact" },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md py-4 shadow-xl border-b border-teal/10"
          : "bg-transparent py-6"
      }`}
      style={{
        background: scrolled ? "rgba(11, 17, 32, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none", // Safari support
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Explicit styling */}
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-1">
          <span className="text-teal" style={{ color: "#64ffda" }}>
            Muzamil
          </span>
          <span className="text-white" style={{ color: "#e6f1ff" }}>
            ._
          </span>
        </div>

        {/* Desktop Nav - Explicit styling */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href)}
              className="group flex items-center gap-2 transition-colors duration-300"
              style={{
                color: "#a8b2d1",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
              onMouseLeave={(e) => (e.target.style.color = "#a8b2d1")}
            >
              <span className="text-xs" style={{ color: "#64ffda" }}>
                {link.id}.
              </span>
              <span className="relative capitalize">{link.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: "#64ffda" }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Explicit styling */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full py-6 flex flex-col items-center gap-6"
          style={{
            background: "rgba(11, 17, 32, 0.98)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-3 py-2 transition-colors duration-300 capitalize"
              style={{
                color: "#e6f1ff",
                fontFamily: "var(--font-mono)",
                fontSize: "16px",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
              onMouseLeave={(e) => (e.target.style.color = "#e6f1ff")}
            >
              <span style={{ color: "#64ffda", fontSize: "14px" }}>
                {link.id}.
              </span>
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
