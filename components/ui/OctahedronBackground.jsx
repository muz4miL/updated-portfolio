"use client";
import React from "react";

const Octahedron = ({ size, animation, className, style }) => {
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
                    // ONLY CHANGE: Rotate to make cubes look like diamonds/octahedrons
                    transform: 'rotateX(45deg) rotateZ(45deg)',
                }}
            >
                {/* EXACT SAME FACES - just rotated 45° to create octahedron appearance */}
                <div className="face front border-teal/80 bg-teal/25" style={{ borderWidth: '2px' }}></div>
                <div className="face back border-teal/80 bg-teal/20" style={{ borderWidth: '2px' }}></div>
                <div className="face right border-teal/80 bg-teal/30" style={{ borderWidth: '2px' }}></div>
                <div className="face left border-teal/80 bg-teal/25" style={{ borderWidth: '2px' }}></div>
                <div className="face top border-teal/80 bg-teal/35" style={{ borderWidth: '2px' }}></div>
                <div className="face bottom border-teal/80 bg-teal/15" style={{ borderWidth: '2px' }}></div>
            </div>
        </div>
    );
};

const OctahedronBackground = () => {
    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none z-0"
            style={{
                isolation: 'isolate',
                willChange: 'transform',
            }}
        >
            {/* Brighter teal spotlight for About page */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/15 rounded-full blur-[40px] md:blur-[100px]"></div>

            <div className="scene absolute inset-0 flex items-center justify-center">
                {/* Large center octahedron */}
                <Octahedron
                    size={300}
                    animation="rotate-slow 30s linear infinite"
                    className="opacity-40"
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />

                {/* Medium octahedron - top right */}
                <Octahedron
                    size={120}
                    animation="rotate-reverse 20s linear infinite"
                    className="opacity-50"
                    style={{ position: "absolute", left: "65%", top: "30%" }}
                />

                {/* Small octahedron - bottom left */}
                <Octahedron
                    size={80}
                    animation="rotate-slow 15s linear infinite"
                    className="opacity-55"
                    style={{ position: "absolute", left: "30%", top: "65%" }}
                />
            </div>
        </div>
    );
};

export default OctahedronBackground;