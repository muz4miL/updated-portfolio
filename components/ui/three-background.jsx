"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

/**
 * Optimized 3D Particle Stars - Background Ambient Effect
 * Reduced particle count for better performance
 */
function StarField(props) {
    const ref = useRef();

    // Reduced to 2000 particles for better performance
    const sphere = useMemo(() => random.inSphere(new Float32Array(2000 * 3), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#64ffda"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.25}
                />
            </Points>
        </group>
    );
}

/**
 * Optimized 3D Canvas Background
 * Balanced opacity for visibility without overwhelming content
 */
export const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
