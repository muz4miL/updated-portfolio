"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-navy flex flex-col items-center justify-center text-center px-6 relative overflow-hidden selection:bg-teal selection:text-navy">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/30 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 space-y-8">
                <h1 className="font-heading text-[20vw] leading-none font-black text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    404
                </h1>

                <div className="relative space-y-6">
                    <h2 className="font-heading text-3xl md:text-5xl text-white font-bold">
                        Page Not Found
                    </h2>
                    <p className="font-mono text-slate text-sm md:text-base max-w-md mx-auto leading-relaxed">
                        The coordinates you are looking for do not exist in this sector.
                        <br />Let's get you back to base.
                    </p>

                    <div className="pt-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-teal/10 border border-teal/20 rounded-full text-teal font-mono text-sm uppercase tracking-widest hover:bg-teal hover:text-navy transition-all duration-300 group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
