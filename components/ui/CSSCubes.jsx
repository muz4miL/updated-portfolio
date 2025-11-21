"use client";

export default function CSSCubes() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large Center Cube */}
      <div className="scene absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="cube-wrapper animate-rotate-slow"
          style={{ "--half-size": "60px", width: "120px", height: "120px" }}
        >
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>

      {/* Small Cube 1 */}
      <div className="scene absolute top-1/3 left-1/4">
        <div
          className="cube-wrapper animate-rotate-reverse"
          style={{ "--half-size": "30px", width: "60px", height: "60px" }}
        >
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>

      {/* Small Cube 2 */}
      <div className="scene absolute bottom-1/3 right-1/4">
        <div
          className="cube-wrapper animate-rotate-slow"
          style={{ "--half-size": "40px", width: "80px", height: "80px" }}
        >
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
