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
    { id: "03", name: "experience", href: "/experience" }, // Changed to experience page
    { id: "04", name: "work", href: "/projects" }, // Changed to projects page
    { id: "05", name: "contact", href: "/contact" }, // Changed to contact page
  ];

  const handleNavClick = (href, name) => {
    setIsMenuOpen(false);

    // Navigate to all pages using Next.js router
    router.push(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-4 shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-1">
          <span className="text-teal">Muzamil</span>
          <span className="text-white">._</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href, link.name)}
              className="group flex items-center gap-2 text-lightSlate hover:text-teal transition-colors"
            >
              <span className="text-teal text-xs">{link.id}.</span>
              <span className="relative">{link.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-teal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-nav py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href, link.name)}
              className="text-white"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
