"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-heading">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="experience-timeline">
          
          {/* LANE Trailer Mfg */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-icon">
              🚀
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="company-logo">
                  <Image src="/assets/logos/lane.png" alt="LANE Trailer Mfg." width={48} height={48} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Software Engineer -- AI Systems and Automation</h3>
                  <h4 className="company-name">LANE Trailer Mfg.</h4>
                  <span className="job-duration"><i className="far fa-calendar-alt"></i> Jan 2026 - Present</span>
                  <p className="company-location"><i className="fas fa-map-marker-alt"></i> IA, USA</p>
                </div>
              </div>
              <div className="job-description">
                <ul>
                  <li>Architected real-time production management system with Kanban scheduling and multi-department dashboards, boosting shop efficiency by 40%.</li>
                  <li>Led cloud migration of paper-based spec sheets and dealer records to Supabase, building model-aware spec sheet engine with seamless data access across departments.</li>
                  <li>Built quote-to-production automation with RBAC and real-time Undo/Redo state management, converting approved orders into production backlog entries.</li>
                  <li>Engineered Python and iLogic automation for Autodesk Inventor workflows and Excel BOM tooling, reducing manual engineering time by 80%.</li>
                  <li>Developed n8n workflow automation using Claude/Gemini APIs, eliminating 60%+ of repetitive processes and freeing engineering teams for high-value work.</li>
                  <li>Deployed RAG retrieval networks with Pinecone enabling autonomous agent queries and context-aware business intelligence across production and sales.</li>
                  <li>Built and shipped dealer locator page and extended platform with reporting tools, user management, and cloud-based file storage.</li>
                </ul>
              </div>
              <div className="experience-tech-stack">
                <h5>Tech Stack:</h5>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Supabase</span>
                  <span className="tech-tag">n8n</span>
                  <span className="tech-tag">Pinecone RAG</span>
                  <span className="tech-tag">Gemini & Claude</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trailer Parts Experts */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-icon">
              💻
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="company-logo">
                  <Image src="/assets/logos/trailer_parts.png" alt="Trailer Parts Experts" width={48} height={48} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Software Engineer — Client Project</h3>
                  <h4 className="company-name">Trailer Parts Experts</h4>
                  <span className="job-duration"><i className="far fa-calendar-alt"></i> Oct 2025 - Dec 2025</span>
                  <p className="company-location"><i className="fas fa-map-marker-alt"></i> Remote</p>
                </div>
              </div>
              <div className="job-description">
                <ul>
                  <li>Designed and built a fully custom Shopify e-commerce website entirely from scratch, taking the project from zero to a fully operational revenue-generating storefront.</li>
                  <li>Developed a custom Shopify theme from the ground up using Liquid templating, HTML5, CSS3, and JavaScript, providing a unique branded identity tailored to the trailer parts industry.</li>
                  <li>Executed a full SEO strategy covering keyword-rich product titles, meta descriptions, alt tags, and GEO-targeted content to capture regional search traffic.</li>
                  <li>Optimized storefront performance via image compression, lazy loading, critical CSS inlining, and script deferral to achieve fast page loads and full mobile responsiveness.</li>
                  <li>Delivered measurable business impact, contributing to a 43 percent increase in online sales over a three-month post-launch period.</li>
                </ul>
              </div>
              <div className="experience-tech-stack">
                <h5>Tech Stack:</h5>
                <div className="tech-tags">
                  <span className="tech-tag">Shopify</span>
                  <span className="tech-tag">Liquid</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">HTML5/CSS3</span>
                  <span className="tech-tag">SEO</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Ordering System */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-icon">
              🤖
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="company-logo">
                  <Image src="/assets/logos/restaurant.png" alt="Restaurant Client" width={48} height={48} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Software AI Engineer — WhatsApp Ordering System</h3>
                  <h4 className="company-name">Restaurant Client</h4>
                  <span className="job-duration"><i className="far fa-calendar-alt"></i> Feb 2025 - May 2025</span>
                  <p className="company-location"><i className="fas fa-map-marker-alt"></i> Hyderabad, India</p>
                </div>
              </div>
              <div className="job-description">
                <ul>
                  <li>Designed, built, and physically deployed an end-to-end WhatsApp-based food ordering and operations management system, replacing manual paper-based processes with a fully automated digital platform.</li>
                  <li>Built the entire automation workflow using n8n integrated with Google Gemini LLM for natural language parsing, order modifications, and conversational customer support.</li>
                  <li>Engineered automated order routing directly to kitchen display queues, reducing waitstaff workload by over 40 percent and eliminating handwritten tickets.</li>
                  <li>Deployed a Gemini-powered sales analytics agent running on the historical order database to surface actionable insights like top dishes, peak traffic windows, and restocking recommendations.</li>
                </ul>
              </div>
              <div className="experience-tech-stack">
                <h5>Tech Stack:</h5>
                <div className="tech-tags">
                  <span className="tech-tag">n8n</span>
                  <span className="tech-tag">Gemini LLM</span>
                  <span className="tech-tag">WhatsApp API</span>
                  <span className="tech-tag">Automation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cognifyz Technologies Intern */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-icon">
              🧠
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="company-logo">
                  <Image src="/assets/logos/cognifyz.png" alt="Cognifyz Technologies" width={48} height={48} />
                </div>
                <div className="company-info">
                  <h3 className="job-title">Full Stack Development Intern</h3>
                  <h4 className="company-name">Cognifyz Technologies</h4>
                  <span className="job-duration"><i className="far fa-calendar-alt"></i> May 2024 - Jul 2024</span>
                  <p className="company-location"><i className="fas fa-map-marker-alt"></i> Remote</p>
                </div>
              </div>
              <div className="job-description">
                <ul>
                  <li>Completed a full-stack internship contributing to the design and delivery of production-grade web applications and AI-integrated modules.</li>
                  <li>Developed and maintained RESTful APIs using Python and Flask, implementing endpoints for data ingestion, processing, and validation verified with Postman.</li>
                  <li>Designed and optimized database schemas and query logic for PostgreSQL and MySQL backends, applying indexing to improve response times.</li>
                  <li>Operated within a CI/CD pipeline environment where merged code automatically triggered test suites and staged deployments.</li>
                </ul>
              </div>
              <div className="experience-tech-stack">
                <h5>Tech Stack:</h5>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">CI/CD</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
