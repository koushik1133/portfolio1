"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HIGHLIGHTS = [
  {
    id: "kernelhub",
    title: "KernelHub",
    subtitle: "AI Business OS",
    image: "/images/kernelhub.png",
    url: "https://javis-xtmerz2lha-uc.a.run.app",
  },
  {
    id: "trailer",
    title: "Trailer Parts Experts",
    subtitle: "Shopify Storefront",
    image: "/images/trailer.png",
    url: "https://trailerpartsexperts.com",
  },
  {
    id: "mekk",
    title: "Mekk Robot",
    subtitle: "Autonomous AI Exploration",
    image: "/images/robot.png",
    url: "#",
  },
];

export default function HighlightsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch-swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? HIGHLIGHTS.length - 1 : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  // ── Touch-swipe handlers ──────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only treat as horizontal swipe if horizontal delta > vertical (prevents scroll hijack)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) handleNext();
      else handlePrev();
    }

    touchStartX.current = null;
    touchStartY.current = null;
    setTimeout(() => setIsPaused(false), 6000);
  };

  const current = HIGHLIGHTS[currentIndex];

  return (
    <section className="highlights-banner-section section" id="highlights">
      <div className="container">
        <h2 className="highlights-title">Featured Highlights</h2>

        <div
          className="banner-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="banner-slide"
            >
              {/* Featured Image */}
              <a
                href={current.url !== "#" ? current.url : undefined}
                target={current.url !== "#" ? "_blank" : undefined}
                rel={current.url !== "#" ? "noopener noreferrer" : undefined}
                aria-label={`View ${current.title}`}
                className="image-container hover-target"
                style={{ pointerEvents: current.url === "#" ? "none" : "auto" }}
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </a>

              <div className="banner-slide-details">
                <h3>{current.title}</h3>
                <p>{current.subtitle}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className="banner-arrow prev hover-target"
            onClick={handlePrev}
            aria-label="Previous Highlight"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          <button
            className="banner-arrow next hover-target"
            onClick={handleNext}
            aria-label="Next Highlight"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>

          {/* Dot indicators — wrapped for proper touch targets */}
          <div className="banner-dots" role="tablist" aria-label="Slide indicators">
            {HIGHLIGHTS.map((h, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Go to slide ${idx + 1}: ${h.title}`}
                onClick={() => { setCurrentIndex(idx); setIsPaused(true); setTimeout(() => setIsPaused(false), 6000); }}
                className={`banner-dot hover-target ${idx === currentIndex ? "active" : ""}`}
                style={{ width: idx === currentIndex ? "24px" : "8px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
