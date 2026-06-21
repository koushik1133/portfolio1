"use client";

import React from "react";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* 3-column row: Rocket | Koushik | Person Typing */}
        <div className="footer-content footer-content--3col">
          {/* Left: Rocket */}
          <motion.div
            className="footer-lottie-asset"
            animate={{ y: [0, -16, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <dotlottie-player
              src="https://assets-v2.lottiefiles.com/a/05fe782a-1185-11ee-b4a1-377ad5371ff2/eFJr9kWegJ.lottie"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: "160px", height: "160px" }}
            />
          </motion.div>

          {/* Center: Name + Socials */}
          <div className="footer-center-block">
            <div className="footer-logo">
              <a href="#home">Koushik</a>
            </div>
            <div className="footer-social">
              <a
                href="https://linkedin.com/in/koushik-shaganti"
                className="social-link hover-target"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://github.com/koushik1133"
                className="social-link hover-target"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://x.com/Koushik992004/media"
                className="social-link hover-target"
                aria-label="Twitter/X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter" />
              </a>
            </div>
          </div>

          {/* Right: Person Typing */}
          <motion.div
            className="footer-lottie-asset"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 1.5,
            }}
            aria-hidden="true"
          >
            <dotlottie-player
              src="https://assets-v2.lottiefiles.com/a/201beb62-1189-11ee-b914-4368693c2fcc/ufktK6dC3g.lottie"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: "160px", height: "160px" }}
            />
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Koushik Goud Shaganti. All Rights
            Reserved.
          </p>
          <div className="footer-links">
            <a href="mailto:koushik9924@gmail.com">koushik9924@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
