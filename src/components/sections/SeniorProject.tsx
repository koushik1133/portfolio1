"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SeniorProject() {
  return (
    <section className="senior-project-section">
      <div className="container">
        <motion.div 
          className="senior-project-wrapper"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="senior-project-content">
            <h2 className="senior-project-label">Senior Design Project</h2>
            <h3 className="senior-project-title">Mekk — Autonomous AI Robot</h3>
            <p className="senior-project-desc">
              As the culmination of my Computer Science degree, I engineered an autonomous AI exploration robot built on a custom 3D chassis. The project features YOLOv8n object tracking, ultrasonic sensor fusion for collision avoidance, and local speech controls powered by Whisper.
            </p>
            <div className="featured-tags">
              <span className="tag">Raspberry Pi</span>
              <span className="tag">YOLOv8</span>
              <span className="tag">Whisper</span>
              <span className="tag">OpenCV</span>
            </div>
            
            <Link href="/projects" className="btn btn-primary mt-4">
              Explore Technical Details <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          <div className="senior-project-image-box">
            <img 
              src="/images/robot.jpg" 
              alt="Mekk — Autonomous AI Robot" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
