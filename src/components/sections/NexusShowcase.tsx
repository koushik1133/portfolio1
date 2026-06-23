"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NexusShowcase() {
  return (
    <section className="senior-project-section" style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div 
          className="senior-project-wrapper reverse"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="senior-project-image-box">
            <img 
              src="/astronaut_3d.png" 
              alt="NexusOS — Ambient Context Agent" 
            />
          </div>

          <div className="senior-project-content">
            <h2 className="senior-project-label">Featured AI Agent Project <span className="tag" style={{background: "rgba(234, 67, 53, 0.1)", color: "#ea4335", marginLeft: "10px", fontSize: "0.8rem", padding: "4px 8px"}}>In Progress</span></h2>
            <h3 className="senior-project-title">NexusOS — Ambient Context Agent</h3>
            <p className="senior-project-desc">
              A proactive cross-device AI operating system that maintains context across wearables, mobile, desktop, and vehicles (OBD-II diagnostics). Built with a hierarchical memory layer and custom voice interfaces to deliver proactive, ambient intelligence.
            </p>
            <div className="featured-tags">
              <span className="tag">Multi-Agent</span>
              <span className="tag">Vector Memory</span>
              <span className="tag">Speech AI</span>
              <span className="tag">IoT (OBD-II)</span>
            </div>
            
            <Link href="/projects" className="btn btn-primary mt-4">
              Explore Technical Details <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
