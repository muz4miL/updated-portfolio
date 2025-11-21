"use client";
import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <SectionHeader number="04" title="Get In Touch" />

      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Let&apos;s Build Something Amazing
        </h2>
        <p className="text-slate text-lg max-w-2xl mx-auto leading-relaxed">
          Although I&apos;m not currently looking for new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Quick Contact Form */}
        <div className="space-y-6">
          <h3 className="font-heading text-2xl text-white mb-6">
            Say Hello 👋
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-navy border border-slate/20 rounded-lg text-white placeholder-slate/50 focus:border-teal focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-navy border border-slate/20 rounded-lg text-white placeholder-slate/50 focus:border-teal focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-navy border border-slate/20 rounded-lg text-white placeholder-slate/50 focus:border-teal focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-teal/10 border border-teal text-teal font-mono py-3 rounded-lg hover:bg-teal hover:text-navy transition-all duration-300 uppercase tracking-widest text-sm"
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 0 30px rgba(100, 255, 218, 0.3), 0 0 60px rgba(100, 255, 218, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate hover:text-teal transition-colors">
              <Mail size={20} className="text-teal" />
              <div>
                <p className="font-mono text-xs text-teal uppercase tracking-widest">
                  Email
                </p>
                <p className="text-white">muzamil@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate hover:text-teal transition-colors">
              <MapPin size={20} className="text-teal" />
              <div>
                <p className="font-mono text-xs text-teal uppercase tracking-widest">
                  Location
                </p>
                <p className="text-white">Karachi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate hover:text-teal transition-colors">
              <Calendar size={20} className="text-teal" />
              <div>
                <p className="font-mono text-xs text-teal uppercase tracking-widest">
                  Availability
                </p>
                <p className="text-white">Open for discussions</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate/20">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-white font-mono text-sm hover:text-teal transition-colors"
            >
              <span className="border-b border-teal pb-1">
                More contact options
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform text-teal"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
