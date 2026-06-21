"use client";

import React from "react";
import { motion } from "framer-motion";

/** Animated SVG Rocket - self-contained, no CDN dependency */
export function RocketAnimation({ size = 220 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <svg
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        {/* Flame outer */}
        <motion.ellipse
          cx="100"
          cy="235"
          rx="20"
          ry="30"
          fill="url(#flameGrad)"
          animate={{ scaleY: [1, 1.3, 0.9, 1.2, 1], scaleX: [1, 0.9, 1.1, 0.95, 1], opacity: [0.9, 1, 0.8, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
          style={{ originX: "100px", originY: "235px" }}
        />
        {/* Flame inner */}
        <motion.ellipse
          cx="100"
          cy="230"
          rx="10"
          ry="18"
          fill="url(#flameInner)"
          animate={{ scaleY: [1, 1.4, 0.85, 1.3, 1], opacity: [1, 0.9, 1, 0.8, 1] }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
          style={{ originX: "100px", originY: "230px" }}
        />
        {/* Rocket body */}
        <rect x="78" y="100" width="44" height="110" rx="6" fill="url(#bodyGrad)" />
        {/* Rocket nose */}
        <path d="M100 40 L76 105 L124 105 Z" fill="url(#noseGrad)" />
        {/* Window */}
        <circle cx="100" cy="130" r="12" fill="url(#windowGrad)" />
        <circle cx="100" cy="130" r="8" fill="#1e3a5f" />
        <circle cx="97" cy="127" r="3" fill="rgba(255,255,255,0.5)" />
        {/* Left fin */}
        <path d="M78 170 L55 210 L78 200 Z" fill="url(#finGrad)" />
        {/* Right fin */}
        <path d="M122 170 L145 210 L122 200 Z" fill="url(#finGrad)" />
        {/* Stars */}
        {[
          { cx: 20, cy: 30, r: 2 },
          { cx: 165, cy: 50, r: 1.5 },
          { cx: 35, cy: 80, r: 1 },
          { cx: 180, cy: 20, r: 2.5 },
          { cx: 15, cy: 150, r: 1.5 },
          { cx: 185, cy: 130, r: 1 },
        ].map((star, i) => (
          <motion.circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="white"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 + i * 0.4, delay: i * 0.3 }}
          />
        ))}
        {/* Defs */}
        <defs>
          <linearGradient id="noseGrad" x1="76" y1="40" x2="124" y2="105" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ef4444" />
            <stop offset="1" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="bodyGrad" x1="78" y1="100" x2="122" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e2e8f0" />
            <stop offset="1" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="finGrad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#ef4444" />
            <stop offset="1" stopColor="#7f1d1d" />
          </linearGradient>
          <radialGradient id="windowGrad" cx="50%" cy="50%" r="50%">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#0369a1" />
          </radialGradient>
          <linearGradient id="flameGrad" x1="80" y1="205" x2="120" y2="265" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f97316" />
            <stop offset="0.5" stopColor="#ef4444" />
            <stop offset="1" stopColor="#fbbf24" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flameInner" x1="90" y1="212" x2="110" y2="248" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fde68a" />
            <stop offset="1" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** Animated SVG Laptop/Person Typing - self-contained */
export function LaptopAnimation({ size = 220 }: { size?: number }) {
  const cursorBlink = {
    animate: { opacity: [1, 0, 1] },
    transition: { repeat: Infinity, duration: 1 },
  };

  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <svg
        viewBox="0 0 220 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        {/* Laptop base */}
        <rect x="20" y="145" width="180" height="12" rx="6" fill="#334155" />
        {/* Laptop screen back */}
        <rect x="35" y="45" width="150" height="105" rx="8" fill="#1e293b" />
        {/* Screen */}
        <rect x="42" y="52" width="136" height="90" rx="4" fill="#0f172a" />
        {/* Code lines */}
        {[
          { y: 70, w: 80, color: "#38bdf8" },
          { y: 82, w: 110, color: "#4ade80" },
          { y: 94, w: 60, color: "#f472b6" },
          { y: 106, w: 95, color: "#a78bfa" },
          { y: 118, w: 70, color: "#38bdf8" },
          { y: 130, w: 50, color: "#4ade80" },
        ].map((line, i) => (
          <motion.rect
            key={i}
            x="52"
            y={line.y}
            width={line.w}
            height="5"
            rx="2.5"
            fill={line.color}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: line.w, opacity: [0.6, 1, 0.6] }}
            transition={{ delay: i * 0.15, duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
        {/* Blinking cursor */}
        <motion.rect
          x="52"
          y="130"
          width="3"
          height="8"
          rx="1"
          fill="#f8fafc"
          animate={cursorBlink.animate}
          transition={cursorBlink.transition}
        />
        {/* Camera dot */}
        <circle cx="110" cy="57" r="2" fill="#475569" />
        {/* Person silhouette - simple */}
        <ellipse cx="110" cy="175" rx="30" ry="8" fill="#1e293b" opacity="0.4" />
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          {/* Head */}
          <circle cx="110" cy="148" r="14" fill="#fbbf24" />
          {/* Face features */}
          <circle cx="106" cy="146" r="2" fill="#1e293b" />
          <circle cx="114" cy="146" r="2" fill="#1e293b" />
          <path d="M106 152 Q110 156 114 152" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Hair */}
          <path d="M96 143 Q100 133 110 132 Q120 133 124 143" fill="#78350f" />
        </motion.g>
        {/* Stars */}
        {[
          { cx: 10, cy: 20, r: 2 },
          { cx: 200, cy: 15, r: 1.5 },
          { cx: 5, cy: 90, r: 1 },
          { cx: 210, cy: 60, r: 2 },
        ].map((star, i) => (
          <motion.circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="white"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5 + i * 0.3, delay: i * 0.4 }}
          />
        ))}
      </svg>
    </div>
  );
}
