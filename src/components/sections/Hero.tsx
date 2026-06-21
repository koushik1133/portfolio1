"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 55, damping: 14 },
    },
  };

  return (
    <section className="hero" id="home">
      {/* Subtle dot-grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-container">
        {/* Split row: text | lottie */}
        <div className="hero-split">
          {/* LEFT: Text */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div className="hero-badge" variants={itemVariants}>
              <span className="status-dot" />
              Available for opportunities
            </motion.div>

            {/* Headline */}
            <motion.h1 className="hero-title" variants={itemVariants}>
              Koushik Goud Shaganti
              <br />
              <span className="hero-gradient" style={{ fontSize: '0.7em', fontWeight: 500 }}>Software Engineer</span>
            </motion.h1>

            {/* Description */}
            <motion.p className="hero-description" variants={itemVariants}>
              Full-Stack Engineer &amp; AI Specialist currently at{" "}
              <strong>LANE Trailer Mfg.</strong> Senior Computer Science student
              at Iowa State University. Dean&apos;s List Scholar every semester.
            </motion.p>

            {/* CTAs */}
            <motion.div className="hero-actions" variants={itemVariants}>
              <a
                href="#contact"
                className="hero-btn-primary hover-target"
              >
                <i className="fas fa-envelope" />
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/koushik-shaganti"
                className="hero-btn-secondary hover-target"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
                LinkedIn
              </a>
              <a
                href="https://github.com/koushik1133"
                className="hero-btn-secondary hover-target"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: 3D Boy character */}
          <motion.div
            className="hero-lottie"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            aria-hidden="true"
          >
            <Image
              src="/boy_character.png"
              alt="3D Boy Character"
              width={500}
              height={500}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="stat">
            <span className="stat-number">1+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">9+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Certifications</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-hint"
        animate={{ y: [0, 9, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="hover-target" aria-label="Scroll down">
          <i className="fas fa-chevron-down" />
        </a>
      </motion.div>
    </section>
  );
}
