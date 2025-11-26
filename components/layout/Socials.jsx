"use client";
import React, { useState, useEffect } from "react";
import { Github, Instagram, Linkedin, Facebook, Mail } from "lucide-react";
import { useScrollContext } from "../../context/ScrollContext";
import { usePathname } from "next/navigation";
import XIcon from "../ui/XIcon";

const Socials = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isContactVisible, isModelingVisible } = useScrollContext();
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  // Trigger fade-in animation on mount (after hero section animations)
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/muz4miL",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/muz4mil9/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <XIcon size={18} />,
      href: "https://x.com/muz4mil9",
      label: "X (Twitter)",
      color: "hover:text-white",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com/muz4mil9",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: <Mail size={18} />,
      href: "mailto:shirazmuzamil2@gmail.com",
      label: "Email",
      color: "hover:text-teal",
    },
  ];

  // Determine if social icons should be visible
  const shouldHide = isContactVisible || isContactPage || isModelingVisible;

  return (
    <>
      {/* Desktop Sidebar - Hides when Contact visible OR on Contact page OR ModelingTeaser visible */}
      <div
        className={`
          fixed bottom-0 left-6 xl:left-12 hidden md:flex flex-col items-center gap-6 z-50 
          transition-all duration-700 ease-out
          ${!isMounted || shouldHide ? 'opacity-0 -translate-x-12' : 'opacity-100 translate-x-0'}
        `}
        aria-hidden={shouldHide}
      >
        {/* Social Icons List */}
        <ul className="flex flex-col gap-5">
          {socialLinks.map((item, index) => (
            <li
              key={index}
              className="group relative"
              style={{
                animation: isMounted ? `slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.2 + index * 0.1}s both` : 'none'
              }}
            >
              {/* Hover Tooltip */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-navy border border-teal/30 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-white font-mono text-xs whitespace-nowrap">
                    {item.label}
                  </span>
                  <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-teal/30 rotate-45"></div>
                </div>
              </div>

              {/* Social Icon */}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`
                  block 
                  p-3
                  rounded-lg
                  bg-lightNavy/30
                  border border-teal/10
                  backdrop-blur-sm
                  text-slate
                  transition-all duration-300
                  hover:bg-teal/10
                  hover:border-teal/30
                  hover:scale-110
                  hover:shadow-lg
                  hover:shadow-teal/20
                  group-hover:text-white
                  ${item.color}
                `}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* The Vertical Line with Gradient */}
        <div
          className="w-[1px] h-20 bg-gradient-to-b from-teal/50 via-slate/30 to-transparent"
          style={{
            animation: isMounted ? 'fadeInScale 0.8s ease-out 0.9s both' : 'none'
          }}
        ></div>
      </div>

      {/* Mobile Bottom Bar - Shows ONLY when Contact is visible */}
      {isContactVisible && (
        <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-navy/95 backdrop-blur-lg border-t border-teal/20">
          <div className="container mx-auto px-6 py-3">
            <ul className="flex justify-around items-center">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="
                      block 
                      p-3
                      rounded-lg
                      text-slate
                      transition-all duration-300
                      hover:bg-teal/10
                      hover:text-teal
                      active:scale-95
                    "
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Socials;
