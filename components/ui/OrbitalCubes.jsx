"use client";

export default function OrbitalCubes() {
  return (
    <div className="cube-system pointer-events-none">
      {/* Main Large Cube */}
      <div className="main-cube">
        <div className="cube" style={{ "--half-size": "40px" }}>
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      {/* Orbital Cube 1 */}
      <div className="orbital-cube orbital-cube-1">
        <div className="cube" style={{ "--half-size": "20px" }}>
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      {/* Orbital Cube 2 */}
      <div className="orbital-cube orbital-cube-2">
        <div className="cube" style={{ "--half-size": "15px" }}>
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    </div>
  );
}
