"use client";
import React from "react";

const Cube = ({ size, animation, className, style }) => {
  const halfSize = size / 2;
  return (
    <div className={`cube-wrapper ${className}`} style={style}>
      <div
        className="cube"
        style={{
          width: size,
          height: size,
          animation: animation,
          "--half-size": `${halfSize}px`,
          willChange: "transform", // GPU acceleration hint
          transform: "translateZ(0)", // Force GPU acceleration
        }}
      >
        {/* Added stronger borders and background glow */}
        <div className="face front border-teal/40 bg-navy/80"></div>
        <div className="face back border-teal/40 bg-navy/80"></div>
        <div className="face right border-teal/40 bg-navy/80"></div>
        <div className="face left border-teal/40 bg-navy/80"></div>
        <div className="face top border-teal/40 bg-navy/80"></div>
        <div className="face bottom border-teal/40 bg-navy/80"></div>
      </div>
    </div>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. The Spotlight (Made slightly brighter) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/10 rounded-full blur-[100px]"></div>

      {/* 2. The Cubes (Optimized for mobile) */}
      <div className="scene absolute inset-0 flex items-center justify-center">
        {/* Main Center Cube - Smaller on mobile, slower animation */}
        <Cube
          size={300}
          animation="rotate-slow 40s linear infinite" // Slower on mobile = less GPU work
          className="opacity-30 hidden md:block" // Hidden on mobile
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Mobile-optimized single cube */}
        <Cube
          size={200} // Smaller
          animation="rotate-slow 50s linear infinite" // Much slower
          className="opacity-20 md:hidden" // Mobile only
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Floating Right Cube - Desktop only */}
        <Cube
          size={120}
          animation="rotate-reverse 25s linear infinite"
          className="opacity-50 hidden md:block"
          style={{ position: "absolute", left: "65%", top: "30%" }}
        />

        {/* Floating Left Cube - Desktop only */}
        <Cube
          size={80}
          animation="rotate-slow 20s linear infinite"
          className="opacity-60 hidden md:block"
          style={{ position: "absolute", left: "30%", top: "65%" }}
        />
      </div>
    </div>
  );
};

export default Background3D;
