"use client";
import React, { useEffect, useState } from "react";

const Preloader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log("Preloader mounted - starting animation");
    const timeout = setTimeout(() => {
      console.log("Starting animations");
      setIsMounted(true);
    }, 100);

    const finishTimeout = setTimeout(() => {
      console.log("Finishing preloader");
      finishLoading();
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(finishTimeout);
    };
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* HEXAGON PATH */}
          <path
            d="M50,5 L95,27 L95,72 L50,95 L5,72 L5,27 Z"
            fill="none"
            stroke="#64ffda"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw-premium"
            style={{
              strokeDasharray: 300,
              strokeDashoffset: 300,
            }}
          />

          {/* M LETTER */}
          <text
            x="50"
            y="66"
            fontSize="42"
            fontWeight="800"
            textAnchor="middle"
            fill="#64ffda"
            className="font-heading animate-m-premium"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            M
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
