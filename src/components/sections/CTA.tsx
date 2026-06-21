"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative gradients */}
          <div className="cta-glow cta-glow--1" />
          <div className="cta-glow cta-glow--2" />
          
          <div className="cta-content">
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to bring your ideas to life?
            </motion.h2>
            
            <motion.p 
              className="cta-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let&apos;s build something amazing together. I&apos;m currently open to new opportunities 
              and exciting projects.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="#contact" className="hover-target cta-button">
                <span className="cta-button-text">Start a Project</span>
                <span className="cta-button-icon">
                  <Rocket size={18} />
                </span>
              </a>
            </motion.div>
          </div>
          
          {/* Abstract 3D shape decorative element */}
          <motion.div 
            className="cta-decoration"
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <Image
              src="/astronaut_3d.png" 
              alt="Astronaut 3D render" 
              width={300}
              height={300}
              className="cta-floating-image"
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
