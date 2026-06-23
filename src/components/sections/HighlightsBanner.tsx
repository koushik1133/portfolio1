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
    <section className="highlights-banner-section section">
      <div className="container">
        <h2 className="highlights-title">Featured Highlights</h2>
        
        <div 
          className="banner-container"
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
              className="banner-slide"
            >
              {/* Featured Image Link */}
              <a 
                href={HIGHLIGHTS[currentIndex].url}
                target={HIGHLIGHTS[currentIndex].url !== "#" ? "_blank" : "_self"}
                rel={HIGHLIGHTS[currentIndex].url !== "#" ? "noopener noreferrer" : ""}
                className="image-container hover-target"
              >
                <Image 
                  src={HIGHLIGHTS[currentIndex].image} 
                  alt={HIGHLIGHTS[currentIndex].title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </a>
              
              <div className="banner-slide-details">
                <h3>{HIGHLIGHTS[currentIndex].title}</h3>
                <p>
                  {HIGHLIGHTS[currentIndex].subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            className="banner-arrow prev hover-target"
            onClick={handlePrev}
            aria-label="Previous Highlight"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="banner-arrow next hover-target"
            onClick={handleNext}
            aria-label="Next Highlight"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Progress Indicators */}
          <div className="banner-dots">
            {HIGHLIGHTS.map((_, idx) => (
              <div 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`banner-dot hover-target ${idx === currentIndex ? "active" : ""}`}
                style={{
                  width: idx === currentIndex ? "24px" : "8px"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
