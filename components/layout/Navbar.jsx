"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body Scroll Lock when Menu is Open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { id: "01", name: "home", href: "/" },
    { id: "02", name: "about", href: "/about" },
    { id: "03", name: "experience", href: "/experience" },
    { id: "04", name: "work", href: "/projects" },
    { id: "05", name: "book", href: "/book" },
    { id: "06", name: "contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`relative md:fixed top-0 w-full z-[101] transition-all duration-300 
          ${isMenuOpen ? 'bg-transparent shadow-none border-none' : 'bg-navy/85 backdrop-blur-md shadow-lg border-b border-teal/10'} h-20
          ${scrolled
            ? "md:bg-navy/85 md:backdrop-blur-md md:shadow-lg md:border-b md:border-teal/10"
            : "md:bg-transparent md:shadow-none md:border-none md:h-24"
          }`}
      >
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          {/* --- LOGO SECTION --- */}
          <Link
            href="/"
            className={`group flex items-center gap-3 relative z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            {/* The Animated Hexagon Icon */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full absolute inset-0 transition-all duration-300 group-hover:scale-110"
              >
                <defs>
                  <linearGradient
                    id="navHexGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#64ffda" stopOpacity="1" />
                    <stop offset="100%" stopColor="#64ffda" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Hexagon Path with Draw Animation on Hover */}
                <path
                  d="M50,5 L95,27 L95,72 L50,95 L5,72 L5,27 Z"
                  fill="none"
                  stroke="url(#navHexGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-all duration-1000 ${isLogoHovered ? "animate-draw-premium" : ""
                    }`}
                  style={{
                    strokeDasharray: isLogoHovered ? 300 : 0,
                    strokeDashoffset: isLogoHovered ? 300 : 0,
                  }}
                />
              </svg>

              {/* M Letter with Hover Animation */}
              <span className="relative font-heading font-bold text-teal text-xl transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                M
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`group flex items-center gap-2 transition-colors duration-300 ${pathname === link.href
                  ? "text-teal"
                  : "text-slate-400 hover:text-teal"
                  }`}
              >
                <span className="text-teal">{link.id}.</span>
                <span className="relative group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            className="md:hidden text-teal hover:text-white transition-colors relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY MENU (Outside Nav to avoid backdrop-filter issues) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0b1120] z-[100] flex items-center justify-center md:hidden"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-teal/5 rounded-full blur-3xl" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal/5 rounded-full blur-3xl" />
            </div>

            <motion.div
              className="flex flex-col items-center gap-8 relative z-10"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex flex-col items-center group"
                  >
                    <span className="text-teal font-mono text-sm mb-2 tracking-widest">
                      {link.id}.
                    </span>
                    <span className="text-4xl font-heading font-bold text-white group-hover:text-teal transition-colors relative">
                      {link.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-teal transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
