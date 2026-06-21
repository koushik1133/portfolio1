"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RecentExperience() {
  return (
    <section className="recent-experience-section">
      <div className="container">
        <div className="section-header-row">
          <h2 className="section-title-small">Current Role</h2>
          <Link href="/experience" className="view-all-link">
            View all experience <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        
        <motion.div 
          className="recent-exp-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="exp-timeline-dot"></div>
          <div className="exp-content-wrapper">
            <div className="exp-header">
              <div>
                <h3 className="exp-title">Software Engineer -- AI Systems and Automation</h3>
                <p className="exp-company">LANE Trailer Mfg. • IA, USA</p>
              </div>
              <div className="exp-date">Jan 2026 — Present</div>
            </div>
            <p className="exp-description">
              Leading the development of highly scalable full-stack applications and deploying autonomous AI agents to transform enterprise operations. I architect robust systems that integrate complex business logic with modern tech stacks.
            </p>
            <div className="featured-tags">
              <span className="tag">Full-Stack</span>
              <span className="tag">AI Agents</span>
              <span className="tag">Enterprise Architecture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
