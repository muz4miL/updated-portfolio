"use client";
import React, { useState } from "react";
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (status === 'error') setStatus('idle');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || "Something went wrong. Please try again.");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center py-12 text-center space-y-4 bg-teal/5 rounded-2xl border border-teal/20"
                    >
                        <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center">
                            <CheckCircle className="text-teal w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-white">Message Sent!</h3>
                        <p className="text-slate font-mono text-sm max-w-xs">
                            Thanks for reaching out. I'll get back to you as soon as possible.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-4 text-teal hover:text-teal-300 font-mono text-xs uppercase tracking-widest underline underline-offset-4"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-mono text-teal/80 uppercase tracking-widest ml-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={status === "loading"}
                                className="w-full px-4 py-3 rounded-xl bg-slate-800/30 border border-white/5 text-white font-mono text-[15px] placeholder-slate/30 focus:border-teal focus:bg-slate-800/50 focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-mono text-teal/80 uppercase tracking-widest ml-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={status === "loading"}
                                className="w-full px-4 py-3 rounded-xl bg-slate-800/30 border border-white/5 text-white font-mono text-[15px] placeholder-slate/30 focus:border-teal focus:bg-slate-800/50 focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-mono text-teal/80 uppercase tracking-widest ml-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                disabled={status === "loading"}
                                className="w-full px-4 py-3 rounded-xl bg-slate-800/30 border border-white/5 text-white font-mono text-[15px] placeholder-slate/30 focus:border-teal focus:bg-slate-800/50 focus:shadow-[0_0_20px_rgba(100,255,218,0.1)] transition-all duration-300 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="Hello! I'd like to discuss..."
                                required
                            />
                        </div>

                        {/* Error Message */}
                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm font-mono">
                                <AlertCircle size={16} />
                                <span>{errorMessage || "Something went wrong. Please try again."}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={status === "loading"}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group w-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold font-mono py-4 rounded-xl hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
