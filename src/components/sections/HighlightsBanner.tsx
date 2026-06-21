"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HIGHLIGHTS = [
  {
    id: "kernelhub",
    title: "KernelHub",
    subtitle: "AI Business OS",
    image: "/images/kernelhub.png",
    url: "https://javis-xtmerz2lha-uc.a.run.app"
  },
  {
    id: "trailer",
    title: "Trailer Parts Experts",
    subtitle: "Shopify Storefront",
    image: "/images/trailer.png",
    url: "https://trailerpartsexperts.com"
  },
  {
    id: "mekk",
    title: "Mekk Robot",
    subtitle: "Autonomous AI Exploration",
    image: "/images/robot.png",
    url: "#"
  }
];

export default function HighlightsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    }, 4500); // Scrolls every 4.5 seconds

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? HIGHLIGHTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
  };

  return (
    <section className="highlights-banner-section section" style={{ padding: "2rem 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "2rem", fontSize: "2rem", fontWeight: "bold", fontFamily: "var(--font-mono)" }}>Featured Highlights</h2>
        
        <div 
          className="banner-container"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "900px",
            height: "400px",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "16px",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.2)"
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 5rem"
              }}
            >
              {/* Featured Image Link */}
              <a 
                href={HIGHLIGHTS[currentIndex].url}
                target={HIGHLIGHTS[currentIndex].url !== "#" ? "_blank" : "_self"}
                rel={HIGHLIGHTS[currentIndex].url !== "#" ? "noopener noreferrer" : ""}
                className="image-container hover-target"
                style={{
                  width: "100%",
                  height: "75%",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  display: "block"
                }}
              >
                <Image 
                  src={HIGHLIGHTS[currentIndex].image} 
                  alt={HIGHLIGHTS[currentIndex].title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </a>
              
              <div style={{ marginTop: "1rem", color: "#fff" }}>
                <h3 style={{ fontSize: "1.5rem", margin: 0, fontFamily: "var(--font-mono)" }}>{HIGHLIGHTS[currentIndex].title}</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.6)", margin: "0.5rem 0 0", fontFamily: "var(--font-mono)" }}>
                  {HIGHLIGHTS[currentIndex].subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            className="hover-target"
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="hover-target"
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Progress Indicators */}
          <div style={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.5rem"
          }}>
            {HIGHLIGHTS.map((_, idx) => (
              <div 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="hover-target"
                style={{
                  width: idx === currentIndex ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: idx === currentIndex ? "#00f0ff" : "rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
