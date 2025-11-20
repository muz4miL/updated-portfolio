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

      {/* 2. The Cubes (Opacity increased from 10% to 40-60%) */}
      <div className="scene absolute inset-0 flex items-center justify-center">
        {/* Main Center Cube */}
        <Cube
          size={300}
          animation="rotate-slow 30s linear infinite"
          className="opacity-30" // Visible now!
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Floating Right Cube */}
        <Cube
          size={120}
          animation="rotate-reverse 20s linear infinite"
          className="opacity-50" // Brighter
          style={{ position: "absolute", left: "65%", top: "30%" }}
        />

        {/* Floating Left Cube */}
        <Cube
          size={80}
          animation="rotate-slow 15s linear infinite"
          className="opacity-60" // Brightest
          style={{ position: "absolute", left: "30%", top: "65%" }}
        />
      </div>
    </div>
  );
};

export default Background3D;
