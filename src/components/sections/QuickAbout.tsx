"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function QuickAbout() {
  return (
    <section className="quick-about-section">
      <div className="container">
        <div className="quick-about-grid">
          <motion.div 
            className="quick-about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="quick-about-heading">
              Engineering <span className="highlight-text">Enterprise AI</span> & Full-Stack Systems.
            </h2>
          </motion.div>
          
          <motion.div 
            className="quick-about-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="quick-about-text">
              I am a Senior Computer Science student at Iowa State University and a Software Engineer Co-op at LANE Trailer Manufacturing. I specialize in architecting highly scalable full-stack applications and deploying autonomous AI agents that transform enterprise operations.
            </p>
            <Link href="/about" className="btn btn-outline quick-about-btn">
              Read my full story <i className="fas fa-arrow-right"></i>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
