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
        <div className="face front border-teal/40 bg-navy/80"></div>
        <div className="face back border-teal/40 bg-navy/80"></div>
        <div className="face right border-teal/40 bg-navy/80"></div>
        <div className="face left border-teal/40 bg-navy/80"></div>
        <div className="face top border-teal/40 bg-navy/80"></div>
        <div className="face bottom border-teal/40 bg-navy/80"> </div>
      </div>
    </div>
  );
};

const Background3D = () => {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        isolation: 'isolate',
        willChange: 'transform',
      }}
    >
      {/* Spotlight - Less blur on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/10 rounded-full blur-[40px] md:blur-[100px]"></div>

      <div className="scene absolute inset-0 flex items-center justify-center">
        <Cube
          size={300}
          animation="rotate-slow 30s linear infinite"
          className="opacity-30"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <Cube
          size={120}
          animation="rotate-reverse 20s linear infinite"
          className="opacity-50"
          style={{ position: "absolute", left: "65%", top: "30%" }}
        />

        <Cube
          size={80}
          animation="rotate-slow 15s linear infinite"
          className="opacity-60"
          style={{ position: "absolute", left: "30%", top: "65%" }}
        />
      </div>
    </div>
  );
};

export default Background3D;
