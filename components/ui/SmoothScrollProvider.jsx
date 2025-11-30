"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * SmoothScrollProvider - Awwwards-level "Butter" Scrolling
 * 
 * Wraps the entire app with Lenis smooth scroll.
 * Features:
 * - Silky-smooth momentum scrolling
 * - Properly handles mobile touch devices
 * - Compatible with horizontal scroll elements (Swiper, etc.)
 * - Optimized requestAnimationFrame loop for React
 */
export default function SmoothScrollProvider({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            duration: 1.2, // Scroll duration for that "heavy" feel (1.2s)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
            orientation: "vertical", // Only affect vertical scroll
            gestureOrientation: "vertical", // Only capture vertical gestures
            smoothWheel: true, // Smooth mouse wheel
            smoothTouch: false, // Disable on touch to prevent conflict with native mobile scroll
            wheelMultiplier: 1, // Sensitivity (1 = normal)
            touchMultiplier: 2, // Touch scroll speed
            infinite: false, // No infinite scroll
        });

        lenisRef.current = lenis;

        // requestAnimationFrame loop - CRITICAL for React/Next.js
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
