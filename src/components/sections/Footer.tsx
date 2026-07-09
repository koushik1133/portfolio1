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


/* ── City Skyline silhouette ── */
function CitySkyline({ dark }: { dark: boolean }) {
  const fill = "#1a1a1a";
  const fill2 = "#2a2a2a";
  return (
    <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", bottom: "100%", left: 0, width: "100%", pointerEvents: "none" }}>
      {/* Back row buildings */}
      <rect x="0" y="60" width="30" height="60" fill={fill} opacity="0.5" />
      <rect x="40" y="40" width="20" height="80" fill={fill} opacity="0.5" />
      <rect x="70" y="55" width="35" height="65" fill={fill} opacity="0.5" />
      <rect x="115" y="30" width="25" height="90" fill={fill} opacity="0.5" />
      <rect x="148" y="45" width="40" height="75" fill={fill} opacity="0.5" />
      <rect x="198" y="20" width="18" height="100" fill={fill} opacity="0.5" />
      <rect x="224" y="50" width="30" height="70" fill={fill} opacity="0.5" />
      <rect x="262" y="35" width="22" height="85" fill={fill} opacity="0.5" />
      {/* antenna */}
      <rect x="272" y="15" width="2" height="20" fill={fill} opacity="0.5" />
      <rect x="292" y="55" width="45" height="65" fill={fill} opacity="0.5" />
      <rect x="345" y="25" width="28" height="95" fill={fill} opacity="0.5" />
      <rect x="381" y="50" width="35" height="70" fill={fill} opacity="0.5" />
      <rect x="424" y="40" width="20" height="80" fill={fill} opacity="0.5" />
      <rect x="452" y="15" width="15" height="105" fill={fill} opacity="0.5" />
      <rect x="475" y="45" width="40" height="75" fill={fill} opacity="0.5" />
      <rect x="524" y="30" width="28" height="90" fill={fill} opacity="0.5" />
      <rect x="560" y="55" width="35" height="65" fill={fill} opacity="0.5" />
      <rect x="602" y="20" width="22" height="100" fill={fill} opacity="0.5" />
      <rect x="632" y="40" width="30" height="80" fill={fill} opacity="0.5" />
      <rect x="670" y="10" width="20" height="110" fill={fill} opacity="0.5" />
      <rect x="698" y="50" width="45" height="70" fill={fill} opacity="0.5" />
      <rect x="752" y="30" width="25" height="90" fill={fill} opacity="0.5" />
      <rect x="785" y="45" width="35" height="75" fill={fill} opacity="0.5" />
      <rect x="828" y="25" width="20" height="95" fill={fill} opacity="0.5" />
      <rect x="856" y="55" width="30" height="65" fill={fill} opacity="0.5" />
      <rect x="894" y="35" width="40" height="85" fill={fill} opacity="0.5" />
      <rect x="942" y="20" width="22" height="100" fill={fill} opacity="0.5" />
      <rect x="972" y="45" width="35" height="75" fill={fill} opacity="0.5" />
      <rect x="1015" y="30" width="28" height="90" fill={fill} opacity="0.5" />
      <rect x="1051" y="50" width="20" height="70" fill={fill} opacity="0.5" />
      <rect x="1080" y="15" width="30" height="105" fill={fill} opacity="0.5" />
      <rect x="1118" y="40" width="40" height="80" fill={fill} opacity="0.5" />
      <rect x="1166" y="25" width="22" height="95" fill={fill} opacity="0.5" />
      <rect x="1196" y="50" width="35" height="70" fill={fill} opacity="0.5" />
      <rect x="1239" y="35" width="25" height="85" fill={fill} opacity="0.5" />
      <rect x="1272" y="55" width="30" height="65" fill={fill} opacity="0.5" />
      <rect x="1310" y="20" width="20" height="100" fill={fill} opacity="0.5" />
      <rect x="1338" y="40" width="40" height="80" fill={fill} opacity="0.5" />
      <rect x="1386" y="30" width="54" height="90" fill={fill} opacity="0.5" />

      {/* Front row – darker, more prominent */}
      <rect x="0" y="75" width="50" height="45" fill={fill2} />
      <rect x="55" y="60" width="35" height="60" fill={fill2} />
      <rect x="98" y="70" width="45" height="50" fill={fill2} />
      <rect x="152" y="50" width="30" height="70" fill={fill2} />
      <rect x="190" y="65" width="50" height="55" fill={fill2} />
      <rect x="248" y="45" width="25" height="75" fill={fill2} />
      <rect x="282" y="62" width="40" height="58" fill={fill2} />
      <rect x="330" y="70" width="55" height="50" fill={fill2} />
      <rect x="393" y="42" width="28" height="78" fill={fill2} />
      <rect x="430" y="68" width="42" height="52" fill={fill2} />
      <rect x="480" y="55" width="32" height="65" fill={fill2} />
      <rect x="520" y="72" width="48" height="48" fill={fill2} />
      <rect x="576" y="48" width="26" height="72" fill={fill2} />
      <rect x="610" y="65" width="44" height="55" fill={fill2} />
      <rect x="662" y="38" width="30" height="82" fill={fill2} />
      <rect x="700" y="58" width="50" height="62" fill={fill2} />
      <rect x="758" y="70" width="36" height="50" fill={fill2} />
      <rect x="802" y="44" width="42" height="76" fill={fill2} />
      <rect x="852" y="62" width="28" height="58" fill={fill2} />
      <rect x="888" y="50" width="52" height="70" fill={fill2} />
      <rect x="948" y="68" width="35" height="52" fill={fill2} />
      <rect x="991" y="42" width="30" height="78" fill={fill2} />
      <rect x="1029" y="60" width="45" height="60" fill={fill2} />
      <rect x="1082" y="72" width="38" height="48" fill={fill2} />
      <rect x="1128" y="46" width="32" height="74" fill={fill2} />
      <rect x="1168" y="64" width="50" height="56" fill={fill2} />
      <rect x="1226" y="50" width="26" height="70" fill={fill2} />
      <rect x="1260" y="68" width="44" height="52" fill={fill2} />
      <rect x="1312" y="40" width="30" height="80" fill={fill2} />
      <rect x="1350" y="60" width="90" height="60" fill={fill2} />

      {/* Tiny windows lit up */}
      {[60,180,280,400,540,650,710,830,960,1080,1190,1300].map((x, i) => (
        <React.Fragment key={i}>
          <rect x={x+4} y={62} width={4} height={4} fill="#fbbf24" opacity="0.7" />
          <rect x={x+12} y={62} width={4} height={4} fill="#fbbf24" opacity="0.5" />
          <rect x={x+4} y={72} width={4} height={4} fill="#93c5fd" opacity="0.6" />
          <rect x={x+12} y={55} width={4} height={4} fill="#fbbf24" opacity="0.8" />
        </React.Fragment>
      ))}
    </svg>
  );
}

/* ── Animated Car on Track ── */
function AnimatedCar({
  carColor,
  startX,
  duration,
  yPos,
  flip = false,
  delay = 0,
}: {
  carColor: string;
  startX: number;
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
        width: "100%",
        animation: `carDrive${flip ? "Rev" : ""} ${duration}s linear ${delay}s infinite`,
        willChange: "transform",
      }}
    >
      <div style={{ position: "absolute", width: "clamp(80px,10vw,140px)", left: `${startX}%` }}>
        <CarSVG color={carColor} flip={flip} />
      </div>
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
          0%   { transform: translateX(-220px); }
          100% { transform: translateX(110vw); }
        }
        @keyframes carDriveRev {
          0%   { transform: translateX(110vw); }
          100% { transform: translateX(-220px); }
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
            <p style={{ fontSize: "0.8rem", color: "#475569" }}>
              Built with ❤️ using Next.js & passion for cars 🏎️
            </p>
          </div>
        </div>
      </div>

      {/* ── TRACK SCENE ── */}
      <div style={{
        position: "relative",
        background: roadBg,
        height: "clamp(160px, 20vw, 230px)",
        overflow: "hidden",
      }}>
        {/* City skyline silhouette */}
        <CitySkyline dark={isDark} />

        {/* Night sky gradient top */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to bottom, ${trackBg} 0%, transparent 40%)`,
          pointerEvents: "none",
        }} />

        {/* Street lights */}
        {[8, 22, 38, 55, 72, 88].map((pct, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${pct}%`,
            bottom: "52%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "lampGlow 3s ease-in-out infinite",
            animationDelay: `${i * 0.4}s`,
          }}>
            {/* Pole */}
            <div style={{ width: "3px", height: "clamp(30px,5vw,55px)", background: "#475569" }} />
            {/* Arm */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "-12px",
              width: "15px",
              height: "3px",
              background: "#475569",
            }} />
            {/* Light */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "-20px",
              width: "10px",
              height: "6px",
              borderRadius: "3px",
              background: "#fbbf24",
              boxShadow: "0 0 8px 2px rgba(251,191,36,0.5)",
            }} />
          </div>
        ))}

        {/* Road surface */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "52%",
          background: "#111111",
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
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#e2e8f0", opacity: 0.4 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "#e2e8f0", opacity: 0.4 }} />
        </div>

        {/* Animated cars — TOP lane (left → right, above yellow line) */}
        <AnimatedCar carColor="#ef4444" startX={5}  duration={12} yPos={72} delay={0} />
        <AnimatedCar carColor="#3b82f6" startX={40} duration={9}  yPos={72} delay={3} />
        <AnimatedCar carColor="#f59e0b" startX={70} duration={14} yPos={72} delay={7} />

        {/* Animated cars — BOTTOM lane (right → left, below yellow line) */}
        <AnimatedCar carColor="#10b981" startX={5}  duration={11} yPos={6}  delay={1}  flip />
        <AnimatedCar carColor="#8b5cf6" startX={55} duration={13} yPos={6}  delay={5}  flip />

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
