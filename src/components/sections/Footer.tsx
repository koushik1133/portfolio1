"use client";

import React, { useEffect, useRef, useState } from "react";


/* ── unique SVG id generator (avoids gradient ID collisions) ── */
let _carId = 0;

/* ── Car SVG (sleek side-view) with animated lights ── */
function CarSVG({ color = "#e53e3e", flip = false }: { color?: string; flip?: boolean }) {
  const id = useRef(`car${++_carId}`).current;
  return (
    <svg
      viewBox="0 0 220 64"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
    >
      <defs>
        {/* Headlight beam cone */}
        <radialGradient id={`hl-${id}`} cx="0%" cy="50%" r="100%" fx="0%" fy="50%">
          <stop offset="0%" stopColor="#fffde7" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#fff176" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#fff176" stopOpacity="0" />
        </radialGradient>
        {/* Taillight glow */}
        <radialGradient id={`tl-${id}`} cx="100%" cy="50%" r="100%">
          <stop offset="0%" stopColor="#ff1744" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff1744" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Headlight beam (cone projecting forward) ── */}
      <polygon
        points="158,28 220,8 220,56 158,40"
        fill={`url(#hl-${id})`}
        style={{ animation: "beamFlicker 1.8s ease-in-out infinite" }}
      />

      {/* ── Tail-glow behind car ── */}
      <ellipse
        cx="12" cy="34"
        rx="18" ry="10"
        fill={`url(#tl-${id})`}
        style={{ animation: "taillightBlink 1.2s ease-in-out infinite" }}
      />

      {/* Body */}
      <rect x="10" y="28" width="148" height="20" rx="4" fill={color} />
      {/* Cabin */}
      <path d="M42 28 Q52 8 84 8 Q114 8 124 28 Z" fill={color} />
      {/* Windows */}
      <path d="M50 27 Q58 12 82 12 Q100 12 112 27 Z" fill="#b8daf5" opacity="0.85" />

      {/* ── Headlight assembly ── */}
      {/* outer glow ring */}
      <ellipse cx="157" cy="34" rx="9" ry="6"
        fill="#fffde7" opacity="0.3"
        style={{ animation: "headlightPulse 1.8s ease-in-out infinite" }}
      />
      {/* main lens */}
      <ellipse cx="157" cy="34" rx="6" ry="4" fill="#fff9c4" opacity="0.95" />
      <ellipse cx="157" cy="34" rx="3" ry="2"
        fill="#ffeb3b"
        style={{ animation: "headlightPulse 1.8s ease-in-out infinite" }}
      />

      {/* ── Taillight assembly ── */}
      {/* outer glow */}
      <rect x="7" y="27" width="12" height="14" rx="3"
        fill="#ff1744" opacity="0.25"
        style={{ animation: "taillightBlink 1.2s ease-in-out infinite" }}
      />
      {/* main lens */}
      <rect x="10" y="30" width="8" height="8" rx="2"
        fill="#ff1744"
        style={{ animation: "taillightBlink 1.2s ease-in-out infinite" }}
      />

      {/* Undercarriage */}
      <rect x="22" y="46" width="124" height="4" rx="2" fill={color} opacity="0.6" />
      {/* Front wheel */}
      <circle cx="126" cy="52" r="10" fill="#1a1a1a" />
      <circle cx="126" cy="52" r="6" fill="#444" />
      <circle cx="126" cy="52" r="2.5" fill="#888" />
      {/* Rear wheel */}
      <circle cx="42" cy="52" r="10" fill="#1a1a1a" />
      <circle cx="42" cy="52" r="6" fill="#444" />
      <circle cx="42" cy="52" r="2.5" fill="#888" />
      {/* Spoiler */}
      <rect x="12" y="23" width="3" height="10" rx="1" fill={color} opacity="0.85" />
      <rect x="8" y="22" width="11" height="3" rx="1.5" fill={color} opacity="0.95" />
    </svg>
  );
}


/* ── Full cinematic night scene: Moon + Mountains ── */
function NightScene() {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        bottom: "48%",  /* sits just above the road */
        left: 0,
        width: "100%",
        height: "clamp(180px, 28vw, 340px)",
        pointerEvents: "none",
      }}
    >
      <defs>
        {/* Moon glow */}
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#fffde7" stopOpacity="1" />
          <stop offset="35%"  stopColor="#fff9c4" stopOpacity="0.95" />
          <stop offset="70%"  stopColor="#fef08a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>
        {/* Moon halo */}
        <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#e0f2fe" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0" />
        </radialGradient>
        {/* Moonlit sky */}
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#000000" />
          <stop offset="60%"  stopColor="#050a14" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        {/* Far mountain gradient */}
        <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0d1f35" />
          <stop offset="100%" stopColor="#071020" />
        </linearGradient>
        {/* Mid mountain */}
        <linearGradient id="mtnMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#060e1a" />
          <stop offset="100%" stopColor="#020509" />
        </linearGradient>
        {/* Near mountain */}
        <linearGradient id="mtnNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#030810" />
          <stop offset="100%" stopColor="#010205" />
        </linearGradient>
        {/* Ground mist */}
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1a3a5c" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1a3a5c" stopOpacity="0" />
        </linearGradient>
        {/* Moonlight road glint */}
        <linearGradient id="moonRoad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="10%"  stopColor="#fffde7" stopOpacity="0.04" />
          <stop offset="50%"  stopColor="#fffde7" stopOpacity="0.10" />
          <stop offset="90%"  stopColor="#fffde7" stopOpacity="0.04" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        {/* Star glow filter */}
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Sky background */}
      <rect x="0" y="0" width="1440" height="320" fill="url(#skyGrad)" />

      {/* ── Stars ── */}
      {[
        [80,18],[140,8],[220,25],[310,12],[390,30],[470,8],[550,20],[650,15],[730,28],[820,10],
        [900,22],[980,6],[1060,18],[1150,28],[1230,12],[1320,24],[1400,9],[1440,20],
        [50,45],[180,55],[290,40],[420,60],[530,48],[660,38],[780,55],[890,42],[1010,52],
        [1120,38],[1250,58],[1370,44],[100,70],[250,65],[450,80],[620,72],[800,68],[1000,78],
        [1200,62],[1380,75],[170,90],[380,85],[580,95],[760,88],[960,82],[1160,92],[1350,86],
      ].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 1.2 : 0.7}
          fill="#ffffff"
          opacity={0.5 + (i % 4) * 0.12}
          filter="url(#starGlow)"
          style={{ animation: `starTwinkle ${2 + (i % 5) * 0.6}s ease-in-out ${(i * 0.3) % 3}s infinite` }}
        />
      ))}

      {/* ── Moon: upper-left area ── */}
      {/* Outer halo */}
      <circle cx="110" cy="72" r="80" fill="url(#moonHalo)" />
      {/* Mid halo */}
      <circle cx="110" cy="72" r="52" fill="#e0f2fe" opacity="0.06" />
      {/* Moon disc */}
      <circle cx="110" cy="72" r="36" fill="url(#moonGlow)" />
      {/* Realistic craters */}
      <circle cx="96"  cy="60" r="5"   fill="#fef3c7" opacity="0.35" />
      <circle cx="118" cy="82" r="3.5" fill="#fef3c7" opacity="0.28" />
      <circle cx="128" cy="58" r="2.5" fill="#fef3c7" opacity="0.22" />
      <circle cx="102" cy="78" r="2"   fill="#fef3c7" opacity="0.18" />
      <circle cx="120" cy="66" r="4"   fill="#fef3c7" opacity="0.20" />
      {/* Moon shadow / terminator */}
      <ellipse cx="122" cy="72" rx="30" ry="36" fill="#0a0f1a" opacity="0.18" />
      {/* Moonlight ray — soft vertical beam down */}
      <rect x="88" y="108" width="44" height="212" fill="url(#moonRoad)" opacity="0.6" />

      {/* ── Far mountains (very pale blue-grey, far away) ── */}
      <path
        d="M0,220 L60,150 L130,180 L200,120 L280,165 L360,105 L440,150 L520,90
           L600,140 L680,85 L760,130 L840,75 L920,120 L1000,80 L1080,115
           L1160,70 L1240,110 L1320,75 L1400,120 L1440,100 L1440,320 L0,320 Z"
        fill="url(#mtnFar)"
        opacity="0.75"
      />
      {/* Snow caps on far peaks */}
      <path d="M200,120 L215,132 L185,132 Z" fill="#e2e8f0" opacity="0.12" />
      <path d="M360,105 L378,118 L342,118 Z" fill="#e2e8f0" opacity="0.10" />
      <path d="M520,90  L540,106 L500,106 Z" fill="#e2e8f0" opacity="0.13" />
      <path d="M680,85  L700,100 L660,100 Z" fill="#e2e8f0" opacity="0.11" />
      <path d="M840,75  L862,92  L818,92  Z" fill="#e2e8f0" opacity="0.14" />
      <path d="M1000,80 L1020,96 L980,96  Z" fill="#e2e8f0" opacity="0.10" />
      <path d="M1160,70 L1182,88 L1138,88 Z" fill="#e2e8f0" opacity="0.13" />

      {/* ── Mid mountains (darker, closer) ── */}
      <path
        d="M0,260 L80,195 L160,225 L240,170 L330,210 L410,155 L500,195
           L590,145 L670,185 L760,150 L840,190 L930,142 L1010,178 L1100,138
           L1180,172 L1270,135 L1360,168 L1440,145 L1440,320 L0,320 Z"
        fill="url(#mtnMid)"
        opacity="0.92"
      />
      {/* Moonlit ridge highlights on mid mountains */}
      <path
        d="M410,155 L430,164 L500,195 L590,145 L610,154"
        fill="none" stroke="#1e3a5f" strokeWidth="1.5" opacity="0.5"
      />
      <path
        d="M930,142 L950,152 L1010,178 L1100,138 L1118,148"
        fill="none" stroke="#1e3a5f" strokeWidth="1.5" opacity="0.5"
      />

      {/* ── Near mountains / foothills (darkest, closest) ── */}
      <path
        d="M0,290 L100,240 L200,268 L300,225 L400,255 L500,218
           L600,248 L700,215 L800,245 L900,210 L1000,240 L1100,205
           L1200,235 L1300,208 L1400,238 L1440,220 L1440,320 L0,320 Z"
        fill="url(#mtnNear)"
      />

      {/* ── Pine tree silhouettes on near ridge ── */}
      {[90,170,310,460,570,680,790,870,990,1090,1180,1290,1390].map((x, i) => (
        <path
          key={i}
          d={`M${x},${245+(i%3)*8} L${x+10},${270+(i%3)*8} L${x+5},${270+(i%3)*8} L${x+5},${280+(i%3)*8} L${x-5},${280+(i%3)*8} L${x-5},${270+(i%3)*8} L${x-10},${270+(i%3)*8} Z`}
          fill="#010204"
          opacity="0.9"
        />
      ))}

      {/* ── Ground mist / atmosphere ── */}
      <rect x="0" y="278" width="1440" height="42" fill="url(#mist)" />
      <ellipse cx="200" cy="300" rx="280" ry="22" fill="#0a1e35" opacity="0.18" />
      <ellipse cx="900" cy="298" rx="320" ry="20" fill="#0a1e35" opacity="0.14" />
      <ellipse cx="1300" cy="302" rx="200" ry="18" fill="#0a1e35" opacity="0.12" />
    </svg>
  );
}


/* ── Animated Car on Track ── */
/* ── Animated Car on Track ──
 *  The car div ITSELF is animated so it always enters from off-screen.
 *  Negative delay = animation starts mid-cycle → staggered spacing.
 */
function AnimatedCar({
  carColor,
  duration,
  yPos,
  flip = false,
  delay = 0,
}: {
  carColor: string;
  duration: number;
  yPos: number;
  flip?: boolean;
  delay?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: yPos,
        left: 0,
        width: "clamp(80px,10vw,130px)",
        /* Animate the car div itself – always starts from -130px (off left edge) */
        animation: `${flip ? "carDriveRev" : "carDrive"} ${duration}s linear ${delay}s infinite`,
        willChange: "transform",
      }}
    >
      <CarSVG color={carColor} flip={flip} />
    </div>
  );
}

/* ──────────────────────────────────────── MAIN FOOTER ── */
export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark-theme") ||
      document.body.classList.contains("dark-theme"));
    check();
    const mo = new MutationObserver(check);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    mo.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const trackBg = "#000000";
  const roadBg = "#0d0d0d";

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>
      {/* ── CSS keyframes (inline so no globals needed) ── */}
      <style>{`
        @keyframes carDrive {
          /* starts fully off-screen left, exits fully off-screen right */
          0%   { transform: translateX(-160px); }
          100% { transform: translateX(calc(100vw + 160px)); }
        }
        @keyframes carDriveRev {
          /* starts fully off-screen right, exits fully off-screen left */
          0%   { transform: translateX(calc(100vw + 160px)); }
          100% { transform: translateX(-160px); }
        }
        @keyframes dashMove {
          0%   { background-position: 0 0; }
          100% { background-position: 80px 0; }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes lampGlow {
          0%, 100% { filter: drop-shadow(0 0 4px #fbbf24); }
          50%       { filter: drop-shadow(0 0 12px #fbbf24); }
        }
        /* ── Horror flicker variants ── */
        /* Lamp 0: steady normal glow */
        @keyframes flicker0 {
          0%,100% { opacity:1;   filter: drop-shadow(0 0 8px #fbbf24) drop-shadow(0 0 20px #f59e0b); }
          50%     { opacity:0.85;filter: drop-shadow(0 0 4px #fbbf24); }
        }
        /* Lamp 1: slow dim — goes almost dead */
        @keyframes flicker1 {
          0%,40%  { opacity:1;    filter: drop-shadow(0 0 10px #fbbf24); }
          45%     { opacity:0.05; filter: none; }
          50%     { opacity:0.9;  filter: drop-shadow(0 0 6px #fbbf24); }
          55%     { opacity:0.05; filter: none; }
          60%,100%{ opacity:1;    filter: drop-shadow(0 0 10px #fbbf24); }
        }
        /* Lamp 2: rapid stutter — horror buzz */
        @keyframes flicker2 {
          0%      { opacity:1; }
          10%     { opacity:0; }
          11%     { opacity:1; }
          13%     { opacity:0; }
          14%     { opacity:1; }
          30%     { opacity:1; }
          31%     { opacity:0; }
          32%     { opacity:1; }
          50%,100%{ opacity:1; }
        }
        /* Lamp 3: dead — completely off most of the time */
        @keyframes flicker3 {
          0%,5%   { opacity:1;    filter: drop-shadow(0 0 8px #fbbf24); }
          6%,70%  { opacity:0;    filter: none; }
          71%     { opacity:0.6;  filter: drop-shadow(0 0 3px #fbbf24); }
          73%     { opacity:0;    filter: none; }
          74%,78% { opacity:0.8;  filter: drop-shadow(0 0 6px #fbbf24); }
          79%,100%{ opacity:0;    filter: none; }
        }
        /* Lamp 4: eerie slow pulse with colour shift to cold white */
        @keyframes flicker4 {
          0%,100% { opacity:1;   filter: drop-shadow(0 0 6px #fbbf24) drop-shadow(0 0 14px #f59e0b); }
          30%     { opacity:0.5; filter: drop-shadow(0 0 4px #e0f2fe) drop-shadow(0 0 10px #bae6fd); }
          60%     { opacity:0.1; filter: none; }
          70%     { opacity:0.9; filter: drop-shadow(0 0 12px #fbbf24); }
        }
        /* Lamp 5: single sharp blink then long off */
        @keyframes flicker5 {
          0%,20%  { opacity:1;   filter: drop-shadow(0 0 10px #fbbf24); }
          21%     { opacity:0;   filter: none; }
          22%     { opacity:1;   filter: drop-shadow(0 0 16px #fbbf24); }
          23%     { opacity:0;   filter: none; }
          24%,100%{ opacity:1;   filter: drop-shadow(0 0 8px #fbbf24); }
        }
        /* ── Car light animations ── */
        @keyframes headlightPulse {
          0%, 100% { opacity: 1;    filter: drop-shadow(0 0 6px #fffde7) drop-shadow(0 0 12px #ffeb3b); }
          50%       { opacity: 0.7; filter: drop-shadow(0 0 14px #fffde7) drop-shadow(0 0 28px #ffeb3b); }
        }
        @keyframes taillightBlink {
          0%, 45%      { opacity: 1;   filter: drop-shadow(0 0 8px #ff1744) drop-shadow(0 0 16px #ff174480); }
          50%, 95%     { opacity: 0.2; filter: none; }
          100%         { opacity: 1;   filter: drop-shadow(0 0 8px #ff1744); }
        }
        @keyframes beamFlicker {
          0%, 100% { opacity: 0.75; }
          30%      { opacity: 0.55; }
          60%      { opacity: 0.85; }
          80%      { opacity: 0.65; }
        }
      `}</style>

      {/* ── UPPER FOOTER (info content) ── */}
      <div style={{
        background: trackBg,
        color: "#e2e8f0",
        padding: "3.5rem 2rem 0",
        position: "relative",
      }}>
        {/* Stars */}
        {[...Array(40)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            top: `${Math.random() * 70}%`,
            left: `${Math.random() * 100}%`,
            width: Math.random() > 0.7 ? "2px" : "1px",
            height: Math.random() > 0.7 ? "2px" : "1px",
            borderRadius: "50%",
            background: "#fff",
            animation: `starTwinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
          }} />
        ))}

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Main grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}>
            {/* Brand */}
            <div>
              <div style={{
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.75rem",
              }}>Koushik</div>
              <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.7, maxWidth: "220px" }}>
                Building intelligent systems at the intersection of AI & software engineering.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#64748b", marginBottom: "1rem" }}>Navigation</h4>
              {["Home","About","Experience","Projects","Skills","Contact"].map(link => (
                <div key={link} style={{ marginBottom: "0.5rem" }}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                  >{link}</a>
                </div>
              ))}
            </div>

            {/* Connect */}
            <div>
              <h4 style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#64748b", marginBottom: "1rem" }}>Connect</h4>
              {[
                { label: "GitHub", href: "https://github.com/koushik1133", icon: "fab fa-github" },
                { label: "LinkedIn", href: "https://linkedin.com/in/koushik-shaganti", icon: "fab fa-linkedin" },
                { label: "Twitter / X", href: "https://x.com/Koushik992004", icon: "fab fa-x-twitter" },
                { label: "Email", href: "mailto:koushik9924@gmail.com", icon: "fas fa-envelope" },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: "0.55rem" }}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                    color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem",
                    display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a78bfa")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <i className={item.icon} style={{ width: "16px" }} />
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Fun fact */}
            <div>
              <h4 style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#64748b", marginBottom: "1rem" }}>Currently</h4>
              <div style={{
                background: "rgba(96,165,250,0.08)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "12px",
                padding: "1rem",
                fontSize: "0.85rem",
                color: "#cbd5e1",
                lineHeight: 1.7,
              }}>
                🚀 Building <strong style={{ color: "#60a5fa" }}>NexusOS</strong><br />
                <span style={{ color: "#fbbf24", fontSize: "0.78rem" }}>● In Progress</span><br /><br />
                📍 Looking for opportunities in AI/ML & Full-Stack roles.
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.2rem 0",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}>
            <p style={{ fontSize: "0.8rem", color: "#475569" }}>
              © {new Date().getFullYear()} Koushik Goud Shaganti — All Rights Reserved.
            </p>

          </div>
        </div>
      </div>

      {/* ── TRACK SCENE — Cinematic night with mountains ── */}
      <div style={{
        position: "relative",
        background: "#000",
        height: "clamp(220px, 28vw, 320px)",
        overflow: "hidden",
      }}>
        {/* Mountain + Moon night scene */}
        <NightScene />

        {/* Subtle dark overlay at very top to blend into upper footer */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "30px",
          background: "linear-gradient(to bottom, #000 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }} />

        {/* Street lights — each lamp has its own horror-flicker animation */}
        {[
          { pct: 8,  anim: "flicker0", dur: "4s",   delay: "0s"   },
          { pct: 22, anim: "flicker1", dur: "6s",   delay: "1.2s" },
          { pct: 38, anim: "flicker2", dur: "2.5s", delay: "0.3s" },
          { pct: 55, anim: "flicker3", dur: "9s",   delay: "0s"   },
          { pct: 72, anim: "flicker4", dur: "7s",   delay: "2.1s" },
          { pct: 88, anim: "flicker5", dur: "5s",   delay: "0.8s" },
        ].map(({ pct, anim, dur, delay }, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${pct}%`,
            bottom: "52%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            {/* Pole */}
            <div style={{ width: "3px", height: "clamp(30px,5vw,55px)", background: "#333" }} />
            {/* Arm */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "-12px",
              width: "15px",
              height: "3px",
              background: "#333",
            }} />
            {/* Light bulb — animated independently */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "-20px",
              width: "10px",
              height: "6px",
              borderRadius: "3px",
              background: "#fbbf24",
              animation: `${anim} ${dur} ease-in-out ${delay} infinite`,
            }} />
            {/* Ground cone of light — flickers with same animation */}
            <div style={{
              position: "absolute",
              top: "6px",
              left: "-30px",
              width: "30px",
              height: "clamp(28px,4vw,50px)",
              background: "radial-gradient(ellipse at top, rgba(251,191,36,0.18) 0%, transparent 80%)",
              animation: `${anim} ${dur} ease-in-out ${delay} infinite`,
            }} />
          </div>
        ))}

        {/* Road surface */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "48%",
          background: "linear-gradient(180deg, #0a0a0a 0%, #111 60%, #0d0d0d 100%)",
        }}>
          {/* Road texture lines */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: "repeating-linear-gradient(90deg, transparent 0, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)",
          }} />

          {/* Center dividing dashes */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: 0, right: 0,
            height: "3px",
            backgroundImage: "repeating-linear-gradient(90deg, #fbbf24 0, #fbbf24 40px, transparent 40px, transparent 80px)",
            backgroundSize: "80px 3px",
            animation: "dashMove 1s linear infinite",
            transform: "translateY(-50%)",
            opacity: 0.7,
          }} />

          {/* Lane marker top */}
          <div style={{
            position: "absolute",
            top: "20%",
            left: 0, right: 0,
            height: "2px",
            backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0, rgba(255,255,255,0.25) 30px, transparent 30px, transparent 60px)",
            backgroundSize: "60px 2px",
            animation: "dashMove 1.4s linear infinite",
          }} />

          {/* Lane marker bottom */}
          <div style={{
            position: "absolute",
            bottom: "20%",
            left: 0, right: 0,
            height: "2px",
            backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0, rgba(255,255,255,0.25) 30px, transparent 30px, transparent 60px)",
            backgroundSize: "60px 2px",
            animation: "dashMove 1.8s linear infinite",
          }} />

          {/* Road edges */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#e2e8f0", opacity: 0.3 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "#e2e8f0", opacity: 0.3 }} />
          {/* Moonlight glint — soft shimmer strip */}
          <div style={{
            position: "absolute",
            top: "48%", left: "3%", right: "3%",
            height: "4px",
            background: "linear-gradient(90deg, transparent, rgba(255,253,231,0.08) 20%, rgba(255,253,231,0.14) 50%, rgba(255,253,231,0.08) 80%, transparent)",
            borderRadius: "4px",
          }} />
        </div>

        {/* TOP lane — 3 cars going left → right, above yellow center line */}
        <AnimatedCar carColor="#ef4444" duration={10} yPos={100} delay={0}    />
        <AnimatedCar carColor="#3b82f6" duration={10} yPos={100} delay={-3.3} />
        <AnimatedCar carColor="#f59e0b" duration={10} yPos={100} delay={-6.6} />

        {/* BOTTOM lane — 3 cars going right → left, below yellow center line */}
        <AnimatedCar carColor="#10b981" duration={11} yPos={8}   delay={0}    flip />
        <AnimatedCar carColor="#8b5cf6" duration={11} yPos={8}   delay={-3.7} flip />
        <AnimatedCar carColor="#e11d48" duration={11} yPos={8}   delay={-7.3} flip />

      </div>

      {/* ── Finishing kerb strip ── */}
      <div style={{
        height: "8px",
        backgroundImage: "repeating-linear-gradient(90deg, #ef4444 0, #ef4444 20px, #fff 20px, #fff 40px)",
        opacity: 0.85,
      }} />
    </footer>
  );
}
