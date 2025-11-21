"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * 
 * Triggers animations when elements enter the viewport using Intersection Observer.
 * 
 * Props:
 * - children: Content to reveal
 * - animation: Type of animation ('fade-up', 'fade-left', 'fade-right', 'scale')
 * - delay: Animation delay in ms (0, 100, 200, 300, 400, 500)
 * - threshold: Percentage of element visible before triggering (0-1)
 */

const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.2,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optionally unobserve after revealing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  // Map animation types to CSS classes
  const animationClass = {
    "fade-up": "animate-fade-in-up",
    "fade-left": "animate-fade-in-left",
    "fade-right": "animate-fade-in-right",
    scale: "animate-scale-in",
  }[animation];

  // Map delay to CSS classes
  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${!isVisible ? "reveal-hidden" : ""} ${
        isVisible ? animationClass : ""
      } ${isVisible ? delayClass : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
