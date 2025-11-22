"use client";
import React, { useState, useRef, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Calendar, Copy, Check, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "../ui/Magnetic";
import { useScrollContext } from "../../context/ScrollContext";
import PremiumSocialIcon from "../ui/PremiumSocialIcon";
import XIcon from "../ui/XIcon";

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

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("bcs.230302211@imsciences.edu.pk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", brandColor: "#ffffff" },
    { icon: Linkedin, href: "#", label: "LinkedIn", brandColor: "#0A66C2" },
    { icon: XIcon, href: "#", label: "X (Twitter)", brandColor: "#ffffff" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 max-w-5xl mx-auto px-6 relative overflow-hidden">
      <SectionHeader number="04" title="Get In Touch" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 relative z-10">
        {/* Left Column */}
        <div className="space-y-10">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              I&apos;m currently open for new opportunities. Whether you have a question,
              a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>
          {/* Contact Details */}
          <div className="space-y-6">
            {/* Email */}
            <div className="group relative">
              <div
                onClick={handleCopy}
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-teal/5 cursor-pointer transition-all duration-300 border border-transparent hover:border-teal/20"
              >
                <div className="p-3 rounded-lg bg-teal/10 text-teal">
                  <Mail size={24} />
                </div>
                <div className="flex-grow overflow-hidden">
                  <p className="font-mono text-xs text-teal uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium text-sm md:text-lg truncate">bcs.230302211@imsciences.edu.pk</p>
                </div>
                <div className="text-slate group-hover:text-teal transition-colors">
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </div>
              </div>
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-10 right-4 bg-teal text-navy text-xs font-bold px-3 py-1 rounded shadow-lg"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-transparent">
              <div className="p-3 rounded-lg bg-teal/10 text-teal">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-mono text-xs text-teal uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-medium text-lg">Peshawar, Pakistan</p>
              </div>
            </div>
          </div>
          {/* Social Links - Premium Edition */}
          <div className="pt-8 border-t border-white/5">
            <p className="font-mono text-sm text-slate mb-6 text-center font-bold" style={{ textShadow: '0 2px 10px rgba(100, 255, 218, 0.3)' }}>Connect with me</p>
            <div className="flex gap-4 justify-center">
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
        <div className="relative mx-4 md:mx-0">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal/20 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div
            className="p-8 rounded-2xl border border-white/20 relative overflow-hidden backdrop-blur-[30px] bg-navy/60 shadow-xl"
            style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(0,255,200,0.05))' }}
          >
            <h3 className="font-heading text-2xl text-white mb-6">Send a Message 🚀</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-teal/80 uppercase tracking-widest ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/30 border border-white/5 text-white font-mono text-[15px] placeholder-slate/30 focus:border-teal focus:bg-slate-800/50 focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300 outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-teal/80 uppercase tracking-widest ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/30 border border-white/5 text-white font-mono text-[15px] placeholder-slate/30 focus:border-teal focus:bg-slate-800/50 focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300 outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-teal/80 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/30 border border-white/5 text-white font-mono text-[15px] placeholder-slate/30 focus:border-teal focus:bg-slate-800/50 focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300 outline-none resize-none"
                  placeholder="Hello! I'd like to discuss..."
                  required
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-teal-400 to-teal-500 text-navy font-bold font-mono py-4 rounded-xl hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Send Message</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Animated Background Blob */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -right-20 w-96 h-96 bg-teal/10 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default Contact;
