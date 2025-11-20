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
          ? "bg-navy/95 backdrop-blur-lg py-4 shadow-xl border-b border-teal/10"
          : "bg-transparent py-6"
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
              onClick={() => handleNavClick(link.href)}
              className="group flex items-center gap-2 text-lightSlate hover:text-teal transition-colors duration-300"
            >
              <span className="text-teal text-xs">{link.id}.</span>
              <span className="relative capitalize">{link.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-teal hover:text-teal/80 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-lg border-b border-teal/10 py-6 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-3 text-white hover:text-teal transition-colors duration-300 capitalize font-mono text-lg"
            >
              <span className="text-teal text-sm">{link.id}.</span>
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
