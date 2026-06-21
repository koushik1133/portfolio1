"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-heading">
          <h2>Education</h2>
          <div className="underline"></div>
        </div>
        <div className="experience-timeline">
          
          {/* Iowa State University */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-icon">
               <i className="fas fa-university"></i>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="company-logo company-logo--bordered" style={{ borderColor: '#cc0000' }}>
                  <Image src="/assets/logos/isu.png" alt="ISU Logo" width={48} height={48} />
                </div>
                <div className="education-info">
                  <h3 className="degree">Bachelor of Science in Computer Science</h3>
                  <h4 className="university-name">Iowa State University</h4>
                  <span className="duration"><i className="far fa-calendar-alt"></i> Aug 2022 - May 2026</span>
                  <p className="location"><i className="fas fa-map-marker-alt"></i> Ames, IA</p>
                </div>
              </div>
              <div className="education-description">
                <p>
                  Senior standing with a strong focus on Artificial Intelligence, Full-Stack Development, and Systems Architecture.
                  Consistently applying coursework to real-world co-ops and deploying production applications.
                </p>
              </div>
            </div>
          </motion.div>



        </div>
      </div>
    </section>
  );
}
