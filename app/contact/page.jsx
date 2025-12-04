"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "../../config/socialLinks";
import dynamic from "next/dynamic";
import AboutFooter from "@/components/layout/AboutFooter";

// Dynamic import for 3D background
const ThreeBackground = dynamic(
  () => import("@/components/ui/three-background"),
  { ssr: false }
);

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
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };



  return (
    <div className="min-h-screen bg-navy relative overflow-hidden">
      {/* BACKGROUND LAYERS */}
      {/* 3D Particle Field */}
      <div className="opacity-30">
        <ThreeBackground />
      </div>

      {/* Dark vignette for text readability */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-navy/80 via-transparent to-navy" />

      {/* Subtle ambient glows */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[140px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 md:px-6 py-24 md:py-32">
        <div className="w-full max-w-6xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* LEFT SIDE - Info */}
            <div className="space-y-8 md:space-y-10">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >


                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
                  Let's Build Something{" "}
                  <span className="text-gradient">Great</span>
                </h1>

                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
                  Seeking a kinetic, high-performance UI? I'm available for project development, expert consulting, or specialized mentorship. Let's initiate contact.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {/* Email Card */}
                <div
                  onClick={handleCopy}
                  className="group relative p-5 md:p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-teal-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400">
                        <Mail size={20} className="md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">Email</p>
                        <p className="text-white font-medium text-sm md:text-base">{SOCIAL_LINKS.email}</p>
                      </div>
                    </div>
                    <div className="text-slate-400 group-hover:text-teal-400 transition-colors">
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </div>
                  </div>

                  {/* Copied Tooltip - positioned relative to email card */}
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-teal-500 text-navy text-sm font-bold shadow-lg whitespace-nowrap z-50"
                    >
                      Email copied!
                    </motion.div>
                  )}
                </div>

                {/* Location & Status Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 md:p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-violet-400" />
                      <p className="text-xs font-mono text-violet-400 uppercase tracking-wider">Location</p>
                    </div>
                    <p className="text-white font-medium text-sm md:text-base">Peshawar, PK</p>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">Remote worldwide</p>
                  </div>

                  <div className="p-5 md:p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </div>
                      <p className="text-xs font-mono text-green-400 uppercase tracking-wider">Status</p>
                    </div>
                    <p className="text-white font-medium text-sm md:text-base">Available</p>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">Open for work</p>
                  </div>
                </div>
              </motion.div>


            </div>

            {/* RIGHT SIDE - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10">
                {/* Subtle accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent rounded-full" />

                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-teal-500 hover:bg-teal-400 text-navy font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-navy border-t-transparent" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </span>
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
                        <p className="text-slate-400 text-xs mt-1">I'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-teal-500/20 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-teal-500/20 rounded-br-lg" />
              </div>
            </motion.div>
          </motion.div>



        </div>
      </div>
      < AboutFooter />
    </div>

  );
};

export default ContactPage;
