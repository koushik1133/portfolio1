"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-glow"></div>
          <h2 className="cta-title">Let's build something extraordinary.</h2>
          <p className="cta-subtitle">Currently exploring full-time Software Engineering roles for 2026 and open to freelance opportunities.</p>
          <Link href="/contact" className="btn btn-primary cta-btn">
            Get In Touch <i className="fas fa-paper-plane"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
