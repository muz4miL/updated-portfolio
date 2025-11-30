"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PremiumSocialIcon from "../../components/ui/PremiumSocialIcon";
import XIcon from "../../components/ui/XIcon";
import { SOCIAL_LINKS, SOCIAL_BRAND_COLORS } from "../../config/socialLinks";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub", brandColor: SOCIAL_BRAND_COLORS.github },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", brandColor: SOCIAL_BRAND_COLORS.linkedin },
    { icon: XIcon, href: SOCIAL_LINKS.twitter, label: "X", brandColor: SOCIAL_BRAND_COLORS.twitter },
  ];

  // Premium Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth "Apple-like" ease
      },
    },
  };

  const ghostVariants = {
    initial: { opacity: 0, rotate: -15, x: 100 },
    animate: {
      opacity: 0.03,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" }
    },
    float: {
      y: [0, -20, 0],
      rotate: [-15, -10, -15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-navy relative overflow-hidden selection:bg-teal/30">
      {/* Optimized Background Layers */}

      {/* 1. Engineering Grid - Hardware Accelerated */}
      <div className="absolute inset-0 z-0 transform-gpu">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{ opacity: 0.6 }}
        />
      </div>

      {/* 2. Noise Overlay - Optimized Opacity */}
      <div className="fixed inset-0 z-[1] opacity-[0.07] pointer-events-none mix-blend-overlay transform-gpu"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* 3. Ambient Glows - Will-Change for Performance */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob will-change-transform"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000 will-change-transform"></div>
      </div>

      {/* 4. The Code Ghost - Animated */}
      <motion.div
        variants={ghostVariants}
        initial="initial"
        animate={["animate", "float"]}
        className="absolute top-1/3 right-0 -translate-y-1/2 translate-x-1/4 z-[0] pointer-events-none select-none"
      >
        <span className="font-mono text-[20rem] md:text-[30rem] font-bold text-white leading-none">
          {"/>"}
        </span>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-7xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side - Hero Content */}
            <div className="space-y-10">
              {/* Main Heading */}
              <motion.div variants={itemVariants}>
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 md:mt-3">
                  Turning concepts
                  <br />
                  into{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal via-cyan-400 to-blue-400">
                      Reality
                    </span>
                    <motion.span
                      className="absolute bottom-2 left-0 right-0 h-3 bg-teal/20 blur-sm"
                      animate={{ scaleX: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </span>
                </h1>

                <p className="text-slate text-xl leading-relaxed max-w-lg">
                  Bridging the gap between design and engineering. I craft pixel-perfect, responsive interfaces that focus on user experience and performance.
                </p>
              </motion.div>

              {/* Quick Contact Cards */}
              <motion.div variants={itemVariants} className="space-y-4">
                {/* Email */}
                <div
                  onClick={handleCopy}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-teal/30 transition-all duration-300 cursor-pointer overflow-hidden transform-gpu"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal/0 via-teal/5 to-teal/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-teal/10 text-teal">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-teal uppercase tracking-wider mb-1">Email</p>
                        <p className="text-white font-medium">{SOCIAL_LINKS.email}</p>
                      </div>
                    </div>
                    <div className="text-slate group-hover:text-teal transition-colors">
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </div>
                  </div>
                </div>

                {/* Location & Availability */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={18} className="text-purple-400" />
                      <p className="text-xs font-mono text-purple-400 uppercase tracking-wider">Location</p>
                    </div>
                    <p className="text-white font-medium">Peshawar, PK</p>
                    <p className="text-slate text-sm mt-1">Remote worldwide</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors">
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
            </div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={itemVariants}
              className="relative md:mt-10"
            >
              {/* Floating Orb */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal/20 rounded-full blur-3xl pointer-events-none opacity-50" />

              <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <motion.div variants={itemVariants} className="group">
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
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={itemVariants} className="group">
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
                  </motion.div>

                  {/* Message Input */}
                  <motion.div variants={itemVariants} className="group">
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
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                  </motion.button>
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
          </motion.div>

          {/* Mobile Only - Social Links at Bottom */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
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
