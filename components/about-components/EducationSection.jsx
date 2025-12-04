"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import Image from "next/image";

const EducationSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const animationFrameRef = useRef(null);
  const subjects = ["Data Structures & Algorithms", "Database Systems", "Web Technologies", "Networking", "Enterprenuership"];

  // Lightning branching algorithm
  const generateLightningPath = (startX, startY, endX, endY, segments = 8) => {
    const points = [{ x: startX, y: startY }];
    const dx = (endX - startX) / segments;
    const dy = (endY - startY) / segments;

    for (let i = 1; i < segments; i++) {
      const x = startX + dx * i + (Math.random() - 0.5) * 40;
      const y = startY + dy * i + (Math.random() - 0.5) * 40;
      points.push({ x, y });
    }
    points.push({ x: endX, y: endY });
    return points;
  };

  // Generate branch from a point
  const generateBranch = (x, y, angle, length, depth = 0) => {
    if (depth > 2 || length < 20) return [];

    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;
    const points = generateLightningPath(x, y, endX, endY, 3);

    const branches = [];
    if (Math.random() > 0.5) {
      const branchAngle = angle + (Math.random() - 0.5) * Math.PI / 2;
      branches.push(...generateBranch(endX, endY, branchAngle, length * 0.6, depth + 1));
    }

    return [points, ...branches];
  };

  // Particle class for electric sparks
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 3;
      this.vy = (Math.random() - 0.5) * 3;
      this.life = 1;
      this.decay = 0.02 + Math.random() * 0.02;
      this.size = 2 + Math.random() * 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= this.decay;
      this.vx *= 0.98;
      this.vy *= 0.98;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.life;
      ctx.fillStyle = `rgba(34, 211, 238, ${this.life})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(34, 211, 238, 0.8)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Draw lightning bolt
  const drawLightning = (ctx, points, color, width, glow = true) => {
    if (points.length < 2) return;

    ctx.save();
    if (glow) {
      ctx.shadowBlur = 15;
      ctx.shadowColor = color;
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
    ctx.restore();
  };

  // Main animation loop
  useEffect(() => {
    if (!isHovered || !canvasRef.current || !cardRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = cardRef.current.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    let particles = [];
    let lastStrike = 0;
    let strikeInterval = 2000; // Strike every 2 seconds
    let currentLightning = null;
    let currentBranches = [];
    let strikeProgress = 0;

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Generate new lightning strike
      if (timestamp - lastStrike > strikeInterval) {
        lastStrike = timestamp;
        strikeProgress = 0;

        // Random start point at top
        const startX = Math.random() * canvas.width;
        const startY = 0;

        // End point near mouse or random
        const endX = mousePos.x || Math.random() * canvas.width;
        const endY = mousePos.y || canvas.height * 0.7;

        currentLightning = generateLightningPath(startX, startY, endX, endY, 10);

        // Generate branches
        currentBranches = [];
        for (let i = 3; i < currentLightning.length - 2; i += 2) {
          if (Math.random() > 0.6) {
            const point = currentLightning[i];
            const angle = Math.random() * Math.PI * 2;
            const branches = generateBranch(point.x, point.y, angle, 50);
            currentBranches.push(...branches);
          }
        }

        // Add particles at strike point
        for (let i = 0; i < 15; i++) {
          particles.push(new Particle(endX, endY));
        }
      }

      // Animate lightning strike
      strikeProgress += 0.15;
      if (strikeProgress <= 1 && currentLightning) {
        const visiblePoints = Math.floor(currentLightning.length * Math.min(strikeProgress * 2, 1));
        const displayPoints = currentLightning.slice(0, visiblePoints);

        // Draw main bolt with glow
        drawLightning(ctx, displayPoints, 'rgba(34, 211, 238, 0.9)', 3, true);
        drawLightning(ctx, displayPoints, 'rgba(255, 255, 255, 0.6)', 1.5, true);

        // Draw branches
        if (strikeProgress > 0.5) {
          currentBranches.forEach(branch => {
            const branchProgress = (strikeProgress - 0.5) * 2;
            const visibleBranchPoints = Math.floor(branch.length * branchProgress);
            const displayBranch = branch.slice(0, visibleBranchPoints);
            drawLightning(ctx, displayBranch, 'rgba(34, 211, 238, 0.6)', 2, true);
          });
        }

        // Flash effect
        if (strikeProgress < 0.3) {
          ctx.save();
          ctx.globalAlpha = (0.3 - strikeProgress) * 0.3;
          ctx.fillStyle = 'rgba(34, 211, 238, 0.1)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.restore();
        }
      }

      // Update and draw particles
      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      // Add ambient electric particles
      if (Math.random() > 0.95) {
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, mousePos]);

  // Track mouse position
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="text-gradient">Education</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
      </h2>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden group"
      >
        {/* Premium Canvas Lightning Effect */}
        {isHovered && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{ mixBlendMode: 'screen' }}
          />
        )}

        {/* Ambient electric field glow */}
        <motion.div
          className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 pointer-events-none"
          animate={isHovered ? {
            opacity: [0.1, 0.15, 0.1],
          } : { opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.3), transparent 70%)',
          }}
        />

        {/* Subtle scan line effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              background: 'linear-gradient(transparent 50%, rgba(34,211,238,0.03) 50%)',
              backgroundSize: '100% 4px',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '0% 100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Mobile: Stacked Layout, Desktop: Horizontal */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mb-6">
            {/* IM|Sciences Logo */}
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 p-2 md:p-3 transition-all duration-300"
              animate={isHovered ? {
                boxShadow: [
                  '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(99,102,241,0.2)',
                  '0 0 30px rgba(255,255,255,0.7), 0 0 60px rgba(99,102,241,0.4)',
                  '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(99,102,241,0.2)',
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Image
                src="/logos/ims.png"
                alt="IM|Sciences logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Text Content - Always Centered */}
            <div className="flex-1 text-center">
              <motion.h3
                className="text-xl md:text-2xl font-bold text-white mb-1"
                animate={isHovered ? {
                  textShadow: [
                    '0 0 10px rgba(34,211,238,0.5)',
                    '0 0 20px rgba(34,211,238,0.8)',
                    '0 0 10px rgba(34,211,238,0.5)',
                  ]
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Bachelor of Computer Science
              </motion.h3>
              <p className="text-sm md:text-base text-indigo-400 font-semibold mb-2 tracking-wide">Institute of Management Sciences</p>
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-mono text-slate-400">
                <Calendar size={14} />
                <span>2023 - 2027</span>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full ring-2 ring-cyan-400/50 p-0.5"
                animate={isHovered ? {
                  boxShadow: [
                    '0 0 15px rgba(34,211,238,0.3)',
                    '0 0 25px rgba(34,211,238,0.6)',
                    '0 0 15px rgba(34,211,238,0.3)',
                  ]
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/profile-portrait.jpg"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Premium Subject Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-6">
            {subjects.map((subject, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(99,102,241,0.3)'
                }}
                className="
                  flex items-center gap-1.5 md:gap-2
                  px-2.5 py-1 md:px-3 md:py-1 
                  text-[10px] md:text-[11px] font-semibold tracking-wide uppercase
                  rounded-md 
                  bg-indigo-500/5
                  text-indigo-300
                  border border-indigo-500/20
                  hover:bg-indigo-500/10
                  transition-all cursor-default
                "
              >
                <Award size={12} className="text-indigo-400" />
                {subject}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
