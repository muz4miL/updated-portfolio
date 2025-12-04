"use client";
import React from "react";
import { motion } from "framer-motion";
import PremiumSocialIcon from "../ui/PremiumSocialIcon";
import XIcon from "../ui/XIcon";
import { Github, Linkedin } from "lucide-react";
import { SOCIAL_LINKS, SOCIAL_BRAND_COLORS } from "../../config/socialLinks";

const AboutFooter = () => {
    const socialLinks = [
        { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub", brandColor: SOCIAL_BRAND_COLORS.github },
        { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", brandColor: SOCIAL_BRAND_COLORS.linkedin },
        { icon: XIcon, href: SOCIAL_LINKS.twitter, label: "X (Twitter)", brandColor: SOCIAL_BRAND_COLORS.twitter },
    ];

    return (
        <footer className="relative mt-24 border-t border-white/5 md:hidden ">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex gap-4 order-2 md:order-1"
                    >
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
                    </motion.div>

                    {/* Footer Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center md:text-right order-1 md:order-2"
                    >
                        <p className="font-mono text-xs text-slate/60">
                            Designed & Built by{" "}
                            <span className="text-teal font-semibold">Muzamil Shiraz</span>
                        </p>
                        <p className="font-mono text-[10px] text-slate/40 mt-1">
                            © {new Date().getFullYear()} All rights reserved
                        </p>
                    </motion.div>

                </div>
            </div>

            {/* Ambient glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-teal/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        </footer>
    );
};

export default AboutFooter;
