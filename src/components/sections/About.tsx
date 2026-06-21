import React from "react";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-heading">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
             <div className="about-lottie-wrap">
               <dotlottie-player
                 src="https://assets-v2.lottiefiles.com/a/201beb62-1189-11ee-b914-4368693c2fcc/ufktK6dC3g.lottie"
                 background="transparent"
                 speed="1"
                 loop
                 autoplay
                 style={{ width: "100%", height: "100%" }}
               />
             </div>
          </div>
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              I am a Senior Computer Science student at Iowa State University (graduating May 2026), specializing in Full-Stack development, AI/Agentic systems, and cloud automation. My journey in tech began with a deep curiosity for building scalable solutions that bridge the gap between software engineering and artificial intelligence.
            </p>
            <p>
              Currently, I am working as a Software Engineer at LANE Trailer Mfg., where I engineer enterprise production management platforms and implement AI agents using Google Gemini and Claude. By integrating AI-driven workflows, I've successfully optimized manual processes and transformed operational capabilities.
            </p>
            <p>
              Beyond the enterprise, I build and deploy independent products ranging from B2B e-commerce platforms (Shopify) to end-to-end WhatsApp automation tools for local businesses. I thrive at the intersection of modern web development and AI, constantly experimenting with multi-LLM architectures, RAG pipelines, and agentic workflows.
            </p>
            <div className="about-details">
              <div className="detail-row">
                <div className="detail-item">
                  <span className="detail-icon"><i className="fas fa-code"></i></span>
                  <div className="detail-content">
                    <h4>Full Stack Development</h4>
                    <p>Building responsive web apps with Next.js, React, and Node.js</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon"><i className="fas fa-robot"></i></span>
                  <div className="detail-content">
                    <h4>AI Automation</h4>
                    <p>Deploying autonomous agents and multi-LLM pipelines</p>
                  </div>
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-item">
                  <span className="detail-icon"><i className="fas fa-database"></i></span>
                  <div className="detail-content">
                    <h4>Cloud & Backend</h4>
                    <p>Architecting scalable solutions with AWS, Supabase, and PostgreSQL</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon"><i className="fas fa-industry"></i></span>
                  <div className="detail-content">
                    <h4>Enterprise Operations</h4>
                    <p>Delivering digital transformation for manufacturing and B2B clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
