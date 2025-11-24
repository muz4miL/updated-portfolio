"use client";
import React, { useState, useRef } from "react";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PremiumSocialIcon from "../../components/ui/PremiumSocialIcon";
import XIcon from "../../components/ui/XIcon";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("shirazmuzamil2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", brandColor: "#ffffff" },
    { icon: Linkedin, href: "#", label: "LinkedIn", brandColor: "#0A66C2" },
    { icon: XIcon, href: "#", label: "X", brandColor: "#ffffff" },
  ];

  return (
    <div className="min-h-screen bg-navy relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(100, 255, 218, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(100, 255, 218, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10"
            >


              {/* Main Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-heading text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
                >
                  Have a project
                  <br />
                  in{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal via-cyan-400 to-blue-400">
                      mind?
                    </span>
                    <motion.span
                      className="absolute bottom-2 left-0 right-0 h-3 bg-teal/20 blur-sm"
                      animate={{ scaleX: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate text-xl leading-relaxed max-w-lg"
                >
                  I'm always excited to collaborate on new projects. Drop me a message and let's create something amazing together.
                </motion.p>
              </div>

              {/* Quick Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                {/* Email */}
                <div
                  onClick={handleCopy}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-teal/30 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal/0 via-teal/5 to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-teal/10 text-teal">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-teal uppercase tracking-wider mb-1">Email</p>
                        <p className="text-white font-medium">shirazmuzamil2@gmail.com</p>
                      </div>
                    </div>
                    <div className="text-slate group-hover:text-teal transition-colors">
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </div>
                  </div>
                </div>

                {/* Location & Availability */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={18} className="text-purple-400" />
                      <p className="text-xs font-mono text-purple-400 uppercase tracking-wider">Location</p>
                    </div>
                    <p className="text-white font-medium">Peshawar, PK</p>
                    <p className="text-slate text-sm mt-1">Remote worldwide</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </div>
                      <p className="text-xs font-mono text-green-400 uppercase tracking-wider">Status</p>
                    </div>
                    <p className="text-white font-medium">Available</p>
                    <p className="text-slate text-sm mt-1">Open for work</p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links - Desktop Only Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="hidden md:block"
              >
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-white font-medium">Check my code</p>
                    <div className="flex gap-3">
                      {socialLinks.map((social, i) => (
                        <PremiumSocialIcon
                          key={i}
                          Icon={social.icon}
                          href={social.href}
                          label={social.label}
                          brandColor={social.brandColor}
                          delay={i * 0.1}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* Floating Orb */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Form Header */}
                <div className="mb-8">
                  <p className="text-slate text-sm">I'll respond within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-slate mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate/50 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-slate mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate/50 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="group">
                    <label className="block text-sm font-medium text-slate mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate/50 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-teal to-cyan-400 text-navy font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(100,255,218,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-navy border-t-transparent" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                </form>

                {/* Success Message */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-start gap-3"
                    >
                      <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-green-500 font-semibold text-sm">Message sent successfully!</p>
                        <p className="text-slate text-xs mt-1">I'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {copied && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-teal text-navy text-sm font-bold shadow-lg whitespace-nowrap"
                  >
                    Email copied!
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Mobile Only - Social Links at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="md:hidden mt-16"
          >
            <div className="max-w-md mx-auto">
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <p className="text-center text-slate text-sm mb-6">Connect with me</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, i) => (
                    <PremiumSocialIcon
                      key={i}
                      Icon={social.icon}
                      href={social.href}
                      label={social.label}
                      brandColor={social.brandColor}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
