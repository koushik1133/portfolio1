"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────────── */
// 7 rows × 53 cols — matches GitHub's full-year grid exactly
// Pre-seeded pattern: random base activity + "KOUSHIK" name outline
const COLS = 53;
const ROWS = 7;

// Pixel-font map for each letter (5 cols wide + 1 space gap)
const LETTERS: Record<string, number[][]> = {
  K: [
    [1,0,0,0,1],
    [1,0,0,1,0],
    [1,0,1,0,0],
    [1,1,0,0,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1],
  ],
  O: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  U: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  S: [
    [0,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,0],
  ],
  H: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
  I: [
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [1,1,1,1,1],
  ],
};

// Build a 7×53 boolean grid from "KOUSHIK" centered in 53 cols
function buildNameGrid(): boolean[][] {
  const name = ["K", "O", "U", "S", "H", "I", "K"];
  const letterWidth = 5;
  const gap = 1;
  const totalWidth = name.length * letterWidth + (name.length - 1) * gap;
  const startCol = Math.floor((COLS - totalWidth) / 2);

  const grid: boolean[][] = Array.from({ length: ROWS }, () =>
    Array(COLS).fill(false)
  );

  name.forEach((char, idx) => {
    const letter = LETTERS[char];
    const colOffset = startCol + idx * (letterWidth + gap);
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < letterWidth; c++) {
        if (letter[r][c]) grid[r][colOffset + c] = true;
      }
    }
  });

  return grid;
}

// Build activity levels: 0=empty, 1-3=base noise, 4=name highlight
function buildInitialActivity(): number[][] {
  const nameGrid = buildNameGrid();
  return Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => {
      if (nameGrid[r][c]) return 4;
      // Very light background noise so the name pops
      // Use deterministic pseudo-random to prevent Next.js hydration errors!
      const x = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
      const rand = x - Math.floor(x);
      
      if (rand < 0.85) return 0;
      if (rand < 0.95) return 1;
      return 2;
    })
  );
}

const LEVEL_COLORS_DARK = [
  "#161b22", // 0: empty
  "#0e4429", // 1: very light
  "#006d32", // 2: light
  "#26a641", // 3: medium
  "#39d353", // 4: bright (name)
];
const LEVEL_COLORS_LIGHT = [
  "#ebedf0", // 0: empty
  "#9be9a8", // 1: very light
  "#40c463", // 2: light
  "#30a14e", // 3: medium
  "#216e39", // 4: bright (name)
];
const HOVER_COLOR_DARK = "#58e87a";
const HOVER_COLOR_LIGHT = "#1a7f37";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/* ─── Component ─────────────────────────────────────────────── */
export default function GithubGridGame() {
  const [activity, setActivity] = useState<number[][]>(() => buildInitialActivity());
  const [hovered, setHovered] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [total, setTotal] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect theme
  useEffect(() => {
    const check = () => setIsDark(document.body.classList.contains("dark-theme"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Count total contributions
  useEffect(() => {
    let count = 0;
    activity.forEach(row => row.forEach(v => { if (v > 0) count++; }));
    setTotal(count);
  }, [activity]);

  const handleCellEnter = useCallback((r: number, c: number) => {
    const key = `${r}-${c}`;
    setHovered(key);
    setActivity(prev => {
      const next = prev.map(row => [...row]);
      next[r][c] = 4;
      return next;
    });
  }, []);

  const handleCellLeave = useCallback(() => setHovered(null), []);

  const handleReset = useCallback(() => {
    setActivity(buildInitialActivity());
  }, []);

  const colors = isDark ? LEVEL_COLORS_DARK : LEVEL_COLORS_LIGHT;
  const hoverColor = isDark ? HOVER_COLOR_DARK : HOVER_COLOR_LIGHT;

  // Month labels (evenly spread across 53 weeks)
  const monthLabels = MONTHS.map((m, i) => ({
    label: m,
    col: Math.round((i * COLS) / 12),
  }));

  return (
    <section className="interactive-grid-section" id="interactive-grid">
      <div className="ig-container">
        {/* Header */}
        <motion.div
          className="ig-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="ig-title">Code Activity</h2>
          <div className="underline" />
          <p className="ig-subtitle">
            Hover to light up cells · Your cursor draws contributions
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="ig-card"
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Grid Scroll Wrapper */}
          <div className="ig-grid-wrapper">
            {/* Month row */}
            <div className="ig-months">
              {monthLabels.map(({ label, col }) => (
                <span
                  key={label}
                  className="ig-month-label"
                  style={{ gridColumn: col + 1 }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Grid */}
            <div
              className="ig-grid"
              style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
            >
              {activity.map((row, r) =>
                row.map((level, c) => {
                  const key = `${r}-${c}`;
                  const isHov = hovered === key;
                  const bg = isHov ? hoverColor : colors[level];
                  return (
                    <div
                      key={key}
                      className="ig-cell"
                      style={{
                        backgroundColor: bg,
                        boxShadow: isHov
                          ? `0 0 10px ${hoverColor}88`
                          : level === 4
                          ? `0 0 4px ${colors[4]}55`
                          : "none",
                      }}
                      onMouseEnter={() => handleCellEnter(r, c)}
                      onMouseLeave={handleCellLeave}
                      title={`${level} contribution${level !== 1 ? "s" : ""}`}
                    />
                  );
                })
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="ig-footer">
            <span className="ig-stat">
              <strong className="ig-stat-count">{total}</strong> active cells this year
            </span>
            <div className="ig-footer-right">
              <button className="ig-reset-btn hover-target" onClick={handleReset}>
                Reset
              </button>
              <div className="ig-legend">
                <span>Less</span>
                {colors.map((c, i) => (
                  <div
                    key={i}
                    className="ig-legend-dot"
                    style={{ backgroundColor: c }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
