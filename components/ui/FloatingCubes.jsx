"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Cube({ position, rotationSpeed }) {
  const meshRef = useRef();
  const edgesRef = useRef();

  // Create a shared geometry instance
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * rotationSpeed * 0.7;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x += delta * rotationSpeed;
      edgesRef.current.rotation.y += delta * rotationSpeed * 0.7;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group position={position}>
        {/* Glass Cube */}
        <mesh ref={meshRef} geometry={boxGeometry}>
          <meshPhysicalMaterial
            transmission={0.8}
            thickness={0.5}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            color="#0b1120"
            ior={1.5}
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* Teal Edges */}
        <lineSegments ref={edgesRef} geometry={edgesGeometry}>
          <lineBasicMaterial
            color="#64ffda"
            transparent
            opacity={0.8}
            linewidth={1}
          />
        </lineSegments>
      </group>
    </Float>
  );
}

function CubeGroup() {
  const cubes = [
    { position: [3, 1, -5], rotationSpeed: 0.2 },
    { position: [-3, -1, -7], rotationSpeed: 0.3 },
    { position: [2, -2, -9], rotationSpeed: 0.15 },
    { position: [-2, 2, -6], rotationSpeed: 0.25 },
  ];

  return (
    <>
      {cubes.map((cube, index) => (
        <Cube
          key={index}
          position={cube.position}
          rotationSpeed={cube.rotationSpeed}
        />
      ))}
    </>
  );
}

export default function FloatingCubes() {
  return (
    <div className="absolute inset-0 h-screen pointer-events-none z-0">
      <Canvas
        camera={{
          position: [0, 0, 12],
          fov: 50,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#64ffda"
        />

        <CubeGroup />
      </Canvas>
    </div>
  );
}
