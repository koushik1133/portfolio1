"use client";

import React, { useEffect, useRef, useState } from "react";


/* ── unique SVG id generator (avoids gradient ID collisions) ── */
let _carId = 0;

/* ── Car SVG (sleek side-view) with animated lights ── */
/* ── Car SVG (sleek side-view) with animated lights ── */
function CarSVG({ color = "#e53e3e", flip = false, isDark = true }: { color?: string; flip?: boolean; isDark?: boolean }) {
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

      {/* ── Headlight beam (cone projecting forward) — ON at night, OFF during day ── */}
      {isDark && (
        <polygon
          points="158,28 220,8 220,56 158,40"
          fill={`url(#hl-${id})`}
          style={{ animation: "beamFlicker 1.8s ease-in-out infinite" }}
        />
      )}

      {/* ── Tail-glow behind car — ON at night, OFF during day ── */}
      {isDark && (
        <ellipse
          cx="12" cy="34"
          rx="18" ry="10"
          fill={`url(#tl-${id})`}
          style={{ animation: "taillightBlink 1.2s ease-in-out infinite" }}
        />
      )}

      {/* Body */}
      <rect x="10" y="28" width="148" height="20" rx="4" fill={color} />
      {/* Cabin */}
      <path d="M42 28 Q52 8 84 8 Q114 8 124 28 Z" fill={color} />
      {/* Windows */}
      <path d="M50 27 Q58 12 82 12 Q100 12 112 27 Z" fill="#b8daf5" opacity="0.85" />

      {/* ── Headlight assembly ── */}
      {/* outer glow ring */}
      <ellipse cx="157" cy="34" rx="9" ry="6"
        fill="#fffde7" opacity={isDark ? 0.3 : 0}
        style={isDark ? { animation: "headlightPulse 1.8s ease-in-out infinite" } : {}}
      />
      {/* main lens */}
      <ellipse cx="157" cy="34" rx="6" ry="4" fill={isDark ? "#fff9c4" : "#e5e7eb"} opacity="0.95" />
      <ellipse cx="157" cy="34" rx="3" ry="2"
        fill={isDark ? "#ffeb3b" : "#d1d5db"}
        style={isDark ? { animation: "headlightPulse 1.8s ease-in-out infinite" } : {}}
      />

      {/* ── Taillight assembly ── */}
      {/* outer glow */}
      <rect x="7" y="27" width="12" height="14" rx="3"
        fill="#ff1744" opacity={isDark ? 0.25 : 0}
        style={isDark ? { animation: "taillightBlink 1.2s ease-in-out infinite" } : {}}
      />
      {/* main lens */}
      <rect x="10" y="30" width="8" height="8" rx="2"
        fill={isDark ? "#ff1744" : "#991b1b"}
        style={isDark ? { animation: "taillightBlink 1.2s ease-in-out infinite" } : {}}
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


/* ── Full cinematic night/day scene: Moon + Mountains ── */
function SkyScene({ isDark }: { isDark: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "calc(100% - 2px)",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        {/* Realistic grey moon base gradient */}
        <radialGradient id="moonGreyGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="60%"  stopColor="#f3f4f6" />
          <stop offset="85%"  stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#d1d5db" />
        </radialGradient>
        {/* Sun gradient */}
        <radialGradient id="sunGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="25%"  stopColor="#fef08a" />
          <stop offset="70%"  stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ea580c" />
        </radialGradient>
        {/* Moonlit sky */}
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#000000" />
          <stop offset="50%"  stopColor="#020810" />
          <stop offset="80%"  stopColor="#050e1c" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        {/* Day sky */}
        <linearGradient id="skyGradDay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#7ec8f8" />
          <stop offset="45%"  stopColor="#add7f6" />
          <stop offset="75%"  stopColor="#d6eafd" />
          <stop offset="100%" stopColor="#f0f7fe" />
        </linearGradient>
        {/* Far mountain */}
        <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={isDark ? "#0d1f35" : "#576b82"} />
          <stop offset="100%" stopColor={isDark ? "#04101e" : "#3b4d61"} />
        </linearGradient>
        {/* Mid mountain */}
        <linearGradient id="mtnMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={isDark ? "#050c18" : "#3b4d61"} />
          <stop offset="100%" stopColor={isDark ? "#010408" : "#243242"} />
        </linearGradient>
        {/* Near mountain */}
        <linearGradient id="mtnNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={isDark ? "#020609" : "#243242"} />
          <stop offset="100%" stopColor={isDark ? "#010203" : "#131d27"} />
        </linearGradient>
        {/* Ground mist */}
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={isDark ? "#1a3a5c" : "#bae6fd"} stopOpacity={isDark ? "0.28" : "0.35"} />
          <stop offset="100%" stopColor={isDark ? "#1a3a5c" : "#bae6fd"} stopOpacity="0" />
        </linearGradient>
        {/* Star glow filter */}
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="0.7" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Full sky */}
      <rect x="0" y="0" width="1440" height="500" fill={isDark ? "url(#skyGrad)" : "url(#skyGradDay)"} />

      {/* ── Stars: visible only at night ── */}
      {isDark && [
        [80,12],[145,5],[230,18],[325,8],[400,22],[478,5],[558,15],[662,10],[738,24],[825,7],
        [905,18],[985,4],[1065,14],[1158,22],[1238,8],[1328,20],[1408,6],
        [55,38],[188,48],[298,34],[428,52],[538,42],[665,32],[788,48],[895,36],[1015,46],
        [1125,32],[1258,52],[1375,38],
        [110,65],[255,58],[458,72],[628,64],[808,60],[1008,70],[1208,55],[1385,68],
        [175,88],[385,82],[590,92],[762,84],[962,78],[1162,90],[1358,80],
        [60,110],[280,105],[480,118],[680,108],[880,115],[1080,106],[1280,112],[1420,110],
      ].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 6 === 0 ? 1.4 : i % 3 === 0 ? 1.0 : 0.6}
          fill="#ffffff"
          opacity={0.45 + (i % 5) * 0.10}
          filter="url(#starGlow)"
          style={{ animation: `starTwinkle ${1.8 + (i % 6) * 0.5}s ease-in-out ${(i * 0.28) % 3.5}s infinite` }}
        />
      ))}

      {/* ── Moon (Night) / Sun (Day) ── */}
      {isDark ? (
        /* Realistic Clean Illustrated Moon matching reference image exactly */
        <g transform="translate(130, 145) scale(0.7) translate(-130, -90)">
          {/* Main Moon Disc */}
          <circle cx="130" cy="90" r="44" fill="url(#moonGreyGrad)" />

          {/* Clean Rounded Craters & Maria */}
          <circle cx="120" cy="65" r="9" fill="#cbd2d6" opacity="0.85" />
          <circle cx="140" cy="80" r="7" fill="#cbd2d6" opacity="0.85" />
          
          <circle cx="114" cy="92" r="5" fill="#cbd2d6" opacity="0.75" />
          <circle cx="136" cy="112" r="7.5" fill="#cbd2d6" opacity="0.75" />
          <circle cx="106" cy="108" r="4" fill="#cbd2d6" opacity="0.70" />

          {/* Small crater clusters */}
          <circle cx="100" cy="74" r="2.2" fill="#cbd2d6" opacity="0.8" />
          <circle cx="104" cy="78" r="1.8" fill="#cbd2d6" opacity="0.8" />
          <circle cx="98" cy="82" r="2.8" fill="#cbd2d6" opacity="0.8" />

          <circle cx="146" cy="65" r="3.5" fill="#cbd2d6" opacity="0.8" />
          <circle cx="150" cy="71" r="2.2" fill="#cbd2d6" opacity="0.8" />

          <circle cx="156" cy="90" r="3.2" fill="#cbd2d6" opacity="0.75" />
          <circle cx="158" cy="96" r="2.2" fill="#cbd2d6" opacity="0.75" />
          <circle cx="154" cy="102" r="1.8" fill="#cbd2d6" opacity="0.75" />

          <circle cx="134" cy="126" r="2.5" fill="#cbd2d6" opacity="0.8" />
          <circle cx="138" cy="128" r="1.8" fill="#cbd2d6" opacity="0.8" />

          {/* Individual detailed ovals/shadows matching the reference style */}
          <ellipse cx="124" cy="122" rx="4.5" ry="3.5" fill="#cbd2d6" opacity="0.85" />
          <ellipse cx="142" cy="116" rx="5.5" ry="4.5" fill="#cbd2d6" opacity="0.85" />
          
          {/* Inner shaded parts for Tycho/large crater depth */}
          <circle cx="120" cy="66" r="6" fill="#adb5bd" opacity="0.45" />
          <circle cx="140" cy="81" r="4.5" fill="#adb5bd" opacity="0.45" />
          <circle cx="136" cy="112" r="5" fill="#adb5bd" opacity="0.45" />

          {/* 3D Darker Crescent Shadow on the Right side */}
          <path d="M130,46 A44,44 0 0,1 174,90 A44,44 0 0,1 130,134 A44,40 0 0,0 130,46 Z" fill="#6b7280" opacity="0.18" />
        </g>
      ) : (
        /* Sunny Day Sun */
        <g transform="translate(130, 145) scale(0.7) translate(-130, -90)">
          {/* Outer ray glow */}
          <circle cx="130" cy="90" r="75" fill="#fef08a" opacity="0.28" />
          {/* Mid glow */}
          <circle cx="130" cy="90" r="58" fill="#f59e0b" opacity="0.4" />
          {/* Sun body */}
          <circle cx="130" cy="90" r="44" fill="url(#sunGrad)" />
        </g>
      )}

      {/* ── Far mountains — tall & dramatic ── */}
      <path
        d="M0,360 L70,250 L150,295 L240,205 L330,260 L420,175 L510,235
           L600,155 L690,220 L780,140 L870,195 L960,130 L1050,180
           L1140,120 L1230,168 L1320,118 L1410,162 L1440,145 L1440,500 L0,500 Z"
        fill="url(#mtnFar)"
        opacity="0.80"
      />
      {/* Snow caps on far peaks */}
      <path d="M240,205 L260,222 L220,222 Z" fill={isDark ? "#dde8f0" : "#ffffff"} opacity={isDark ? 0.18 : 0.4} />
      <path d="M420,175 L442,195 L398,195 Z" fill={isDark ? "#dde8f0" : "#ffffff"} opacity={isDark ? 0.15 : 0.35} />
      <path d="M600,155 L624,176 L576,176 Z" fill={isDark ? "#dde8f0" : "#ffffff"} opacity={isDark ? 0.18 : 0.4} />
      <path d="M780,140 L805,162 L755,162 Z" fill={isDark ? "#dde8f0" : "#ffffff"} opacity={isDark ? 0.20 : 0.45} />
      <path d="M960,130 L986,154 L934,154 Z" fill={isDark ? "#dde8f0" : "#ffffff"} opacity={isDark ? 0.18 : 0.4} />
      <path d="M1140,120 L1168,144 L1112,144 Z" fill={isDark ? "#dde8f0" : "#ffffff"} opacity={isDark ? 0.20 : 0.45} />
      <path d="M1320,118 L1346,142 L1294,142 Z" fill={isDark ? "#dde8f0" : "#ffffff"} opacity={isDark ? 0.16 : 0.35} />

      {/* ── Mid mountains ── */}
      <path
        d="M0,420 L90,330 L180,368 L270,295 L370,345 L460,272 L560,318
           L660,250 L755,300 L850,240 L950,285 L1050,228 L1150,270
           L1250,215 L1350,258 L1440,230 L1440,500 L0,500 Z"
        fill="url(#mtnMid)"
        opacity="0.95"
      />
      {/* ridge highlight */}
      <path d="M460,272 L490,286 L560,318 L660,250 L682,262"
        fill="none" stroke={isDark ? "#1a3254" : "#94a3b8"} strokeWidth="2" opacity="0.55" />
      <path d="M1050,228 L1078,242 L1150,270 L1250,215 L1272,226"
        fill="none" stroke={isDark ? "#1a3254" : "#94a3b8"} strokeWidth="2" opacity="0.55" />

      {/* ── Near foothills ── */}
      <path
        d="M0,460 L110,398 L220,428 L330,380 L440,415 L550,370
           L660,405 L770,362 L880,400 L990,355 L1100,390 L1210,348
           L1320,384 L1440,355 L1440,500 L0,500 Z"
        fill="url(#mtnNear)"
      />

      {/* ── Pine trees ── */}
      {[85,175,305,435,545,660,770,875,985,1095,1195,1308,1408].map((x, i) => {
        const base = 395 + (i % 3) * 10;
        return (
          <path
            key={i}
            d={`M${x},${base-40} L${x+14},${base} L${x+7},${base} L${x+7},${base+16} L${x-7},${base+16} L${x-7},${base} L${x-14},${base} Z`}
            fill={isDark ? "#010305" : "#0d2719"}
            opacity="0.95"
          />
        );
      })}

      {/* ── Ground mist / valley fog ── */}
      <rect x="0" y="455" width="1440" height="45" fill="url(#mist)" />
      <ellipse cx="220"  cy="468" rx="320" ry="22" fill={isDark ? "#071525" : "#e0f2fe"} opacity="0.22" />
      <ellipse cx="820"  cy="465" rx="380" ry="20" fill={isDark ? "#071525" : "#e0f2fe"} opacity="0.18" />
      <ellipse cx="1300" cy="470" rx="240" ry="18" fill={isDark ? "#071525" : "#e0f2fe"} opacity="0.15" />
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
  isDark = true,
}: {
  carColor: string;
  duration: number;
  yPos: number;
  flip?: boolean;
  delay?: number;
  isDark?: boolean;
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
      <CarSVG color={carColor} flip={flip} isDark={isDark} />
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

  const trackBg = isDark ? "#000000" : "#ffffff";
  const roadBg = isDark ? "#0d0d0d" : "#1e293b";

  const handleThemeToggle = () => {
    const themeToggleBtn = document.getElementById("themeToggle");
    if (themeToggleBtn) {
      themeToggleBtn.click();
    } else {
      const body = document.body;
      if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      }
      const event = new Event("class-change");
      body.dispatchEvent(event);
      document.documentElement.dispatchEvent(event);
    }
  };

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
        /* ── Moon float ── */
        @keyframes moonFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>

      {/* ── UPPER FOOTER (info content) ── */}
      <div style={{
        background: trackBg,
        color: isDark ? "#e2e8f0" : "#1e293b",
        padding: "2rem 2rem 0",
        position: "relative",
        borderTop: isDark ? "none" : "1px solid #e2e8f0",
      }}>
        {/* Stars — active only at night */}
        {isDark && [...Array(40)].map((_, i) => (
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
            borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
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
              <p style={{ fontSize: "0.85rem", color: isDark ? "#94a3b8" : "#475569", lineHeight: 1.7, maxWidth: "220px" }}>
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
                    color: isDark ? "#94a3b8" : "#475569", textDecoration: "none", fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                    onMouseLeave={e => (e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569")}
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
                    color: isDark ? "#94a3b8" : "#475569", textDecoration: "none", fontSize: "0.9rem",
                    display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a78bfa")}
                    onMouseLeave={e => (e.currentTarget.style.color = isDark ? "#94a3b8" : "#475569")}
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
                background: isDark ? "rgba(96,165,250,0.08)" : "rgba(37,99,235,0.05)",
                border: isDark ? "1px solid rgba(96,165,250,0.15)" : "1px solid rgba(37,99,235,0.12)",
                borderRadius: "12px",
                padding: "1rem",
                fontSize: "0.85rem",
                color: isDark ? "#cbd5e1" : "#334155",
                lineHeight: 1.7,
              }}>
                🚀 Working on <strong style={{ color: isDark ? "#60a5fa" : "#2563eb" }}>KernelHub, NexousOS & OpenClaw</strong><br />
                <span style={{ color: isDark ? "#fbbf24" : "#b45309", fontSize: "0.78rem" }}>● In Progress</span><br /><br />
                📍 Looking for opportunities in Software Development & AI & Full-Stack roles.
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
            <p style={{ fontSize: "0.8rem", color: isDark ? "#475569" : "#64748b" }}>
              © {new Date().getFullYear()} Koushik Goud Shaganti — All Rights Reserved.
            </p>

          </div>
        </div>
      </div>

      {/* ── TRACK SCENE — Cinematic night/day with mountains ── */}
      <div style={{
        position: "relative",
        background: isDark ? "#000" : "#7dd3fc",
        height: "clamp(340px, 42vw, 460px)",
        overflow: "hidden",
      }}>
        {/* Try Theme Mode Interactive Button */}
        <button
          onClick={handleThemeToggle}
          className="hover-target"
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            zIndex: 20,
            background: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
            border: isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "999px",
            padding: "0.6rem 1.4rem",
            fontSize: "0.85rem",
            fontWeight: "600",
            color: isDark ? "#ffffff" : "#0f172a",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "all 0.3s ease",
            boxShadow: isDark ? "0 4px 12px rgba(0,0,0,0.2)" : "0 4px 12px rgba(0,0,0,0.06)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = isDark ? "rgba(255, 255, 255, 0.22)" : "rgba(0, 0, 0, 0.15)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {isDark ? "Try Light Mode ☀️" : "Try Dark Mode 🌙"}
        </button>

        {/* Mountain + Moon/Sun sky scene */}
        <SkyScene isDark={isDark} />

        {/* Subtle dark overlay at very top to blend into upper footer — hidden or soft in light mode */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "30px",
          background: isDark 
            ? "linear-gradient(to bottom, #000 0%, transparent 100%)"
            : "linear-gradient(to bottom, var(--bg-color, #ffffff) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }} />

        {/* Street lights — active at night, inactive bulb with no glowing cone during day */}
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
            bottom: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            {/* Pole */}
            <div style={{ width: "3px", height: "clamp(30px,5vw,55px)", background: isDark ? "#333" : "#64748b" }} />
            {/* Arm */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "-12px",
              width: "15px",
              height: "3px",
              background: isDark ? "#333" : "#64748b",
            }} />
            {/* Light bulb — animated independently only in dark mode */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "-20px",
              width: "10px",
              height: "6px",
              borderRadius: "3px",
              background: isDark ? "#fbbf24" : "#cbd5e1",
              animation: isDark ? `${anim} ${dur} ease-in-out ${delay} infinite` : "none",
            }} />
            {/* Ground cone of light — visible/flickering only at night */}
            {isDark && (
              <div style={{
                position: "absolute",
                top: "6px",
                left: "-30px",
                width: "30px",
                height: "clamp(28px,4vw,50px)",
                background: "radial-gradient(ellipse at top, rgba(251,191,36,0.18) 0%, transparent 80%)",
                animation: `${anim} ${dur} ease-in-out ${delay} infinite`,
              }} />
            )}
          </div>
        ))}

        {/* Road surface */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: isDark 
            ? "linear-gradient(180deg, #080808 0%, #111 50%, #0d0d0d 100%)"
            : "linear-gradient(180deg, #22252a 0%, #374151 50%, #1f2937 100%)",
        }}>

          {/* Center dividing dashes — STATIC yellow line */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: 0, right: 0,
            height: "3px",
            backgroundImage: "repeating-linear-gradient(90deg, #fbbf24 0, #fbbf24 40px, transparent 40px, transparent 80px)",
            backgroundSize: "80px 3px",
            transform: "translateY(-50%)",
            opacity: 0.7,
          }} />

          {/* Lane marker top — STATIC */}
          <div style={{
            position: "absolute",
            top: "20%",
            left: 0, right: 0,
            height: "2px",
            backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 30px, transparent 30px, transparent 60px)",
            backgroundSize: "60px 2px",
          }} />

          {/* Lane marker bottom — STATIC */}
          <div style={{
            position: "absolute",
            bottom: "20%",
            left: 0, right: 0,
            height: "2px",
            backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 30px, transparent 30px, transparent 60px)",
            backgroundSize: "60px 2px",
          }} />

          {/* Road edges */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#e2e8f0", opacity: 0.3 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "#e2e8f0", opacity: 0.3 }} />
          {/* Moonlight glint — soft shimmer strip (Visible only at night) */}
          {isDark && (
            <div style={{
              position: "absolute",
              top: "48%", left: "3%", right: "3%",
              height: "4px",
              background: "linear-gradient(90deg, transparent, rgba(255,253,231,0.08) 20%, rgba(255,253,231,0.14) 50%, rgba(255,253,231,0.08) 80%, transparent)",
              borderRadius: "4px",
            }} />
          )}
        </div>

        {/* TOP lane — 3 cars going left → right, above yellow center line */}
        <AnimatedCar carColor="#ef4444" duration={10} yPos={112} delay={0}    isDark={isDark} />
        <AnimatedCar carColor="#3b82f6" duration={10} yPos={112} delay={-3.3} isDark={isDark} />
        <AnimatedCar carColor="#f59e0b" duration={10} yPos={112} delay={-6.6} isDark={isDark} />

        {/* BOTTOM lane — 3 cars going right → left, below yellow center line */}
        <AnimatedCar carColor="#10b981" duration={11} yPos={8}   delay={0}    flip isDark={isDark} />
        <AnimatedCar carColor="#8b5cf6" duration={11} yPos={8}   delay={-3.7} flip isDark={isDark} />
        <AnimatedCar carColor="#e11d48" duration={11} yPos={8}   delay={-7.3} flip isDark={isDark} />

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
