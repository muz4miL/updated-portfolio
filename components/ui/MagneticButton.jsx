"use client";
import React, { useRef, useState } from "react";

/**
 * MagneticButton Component
 * 
 * Button that subtly moves toward the cursor on hover for a premium feel.
 * 
 * Props:
 * - children: Button content
 * - className: Additional CSS classes
 * - strength: Magnetic pull strength (0.1 - 1, default 0.3)
 * - All other props passed to button element
 */

const MagneticButton = ({
    children,
    className = "",
    strength = 0.3,
    ...props
}) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;

        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();

        // Calculate center of button
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`magnetic-button ${className}`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            {...props}
        >
            {children}
        </button>
    );
};

export default MagneticButton;
