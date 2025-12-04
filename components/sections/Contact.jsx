"use client";
import React, { useRef, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollContext } from "../../context/ScrollContext";
import PremiumSocialIcon from "../ui/PremiumSocialIcon";
import XIcon from "../ui/XIcon";
import { Github, Linkedin } from "lucide-react";
import { SOCIAL_LINKS, SOCIAL_BRAND_COLORS } from "../../config/socialLinks";
import ContactForm from "../forms/ContactForm";

const Contact = () => {
  const { setIsContactVisible } = useScrollContext();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setIsContactVisible]);



  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub", brandColor: SOCIAL_BRAND_COLORS.github },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", brandColor: SOCIAL_BRAND_COLORS.linkedin },
    { icon: XIcon, href: SOCIAL_LINKS.twitter, label: "X (Twitter)", brandColor: SOCIAL_BRAND_COLORS.twitter },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 max-w-6xl mx-auto px-6 relative">
      <SectionHeader number="04" title="Get In Touch" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16 items-start">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Headline & Description */}
          <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Let's Build Something{" "}
              <span className="text-gradient block mt-2">Amazing</span>
            </h2>
            <p className="text-slate text-lg leading-relaxed max-w-lg">
              I'm currently open for new opportunities. Whether you have a question,
              a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Social Icons - Desktop Only */}
          <div className="pt-6 hidden md:block">
            <p className="font-mono text-sm text-slate/80 mb-6">Connect with me</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <PremiumSocialIcon
                  key={index}
                  Icon={social.icon}
                  href={social.href}
                  label={social.label}
                  brandColor={social.brandColor}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="relative">
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="p-8 md:p-9 rounded-2xl glass-card shadow-2xl">
            {/* Form Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-teal/10">
                <Send size={20} className="text-teal" />
              </div>
              <h3 className="font-heading text-2xl text-white font-semibold">Send a Message</h3>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Mobile Social Icons - Bottom Center */}
      <div className="md:hidden mt-12 pt-8 border-t border-white/5">
        <p className="font-mono text-sm text-slate/60 mb-6 text-center">Connect with me</p>
        <div className="flex gap-6 justify-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 active:scale-95"
              style={{ color: social.brandColor }}
            >
              <social.icon size={24} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      {/* Ambient Background Blob */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -left-32 w-96 h-96 bg-teal/10 rounded-full blur-[120px] -z-10 pointer-events-none"
      />
    </section>
  );
};

export default Contact;
