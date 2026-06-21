"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FEATURED_PROJECTS = [
  {
    id: "kernelhub",
    title: "KernelHub",
    subtitle: "End-to-End AI Business OS",
    description: "A full-stack AI workspace for developers and teams: chat with RAG over your files, review GitHub repos, run automations on a schedule, and manage production Kanban.",
    image: "/images/kernelhub.png",
    link: "https://javis-xtmerz2lha-uc.a.run.app",
    tags: ["Next.js 15", "Supabase", "Aurora DSQL", "DynamoDB", "Pinecone"]
  },
  {
    id: "trailer-parts",
    title: "Trailer Parts Experts",
    subtitle: "Enterprise B2B E-Commerce",
    description: "Architected a highly scalable B2B storefront using Shopify Liquid and Storefront API, processing over $2.1M in orders with seamless ERP integration and live shipping calculators.",
    image: "/images/trailer.png",
    link: "https://trailerpartsexperts.com",
    tags: ["Shopify Liquid", "Node.js", "REST APIs", "AWS"]
  }
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects-section">
      <div className="container">
        <div className="section-header-row">
          <h2 className="section-title-small">Selected Work</h2>
          <Link href="/projects" className="view-all-link">
            View all projects <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        
        <div className="featured-grid">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="featured-image-container">
                <img src={project.image} alt={project.title} className="featured-image" />
                <div className="featured-overlay">
                  <span className="featured-overlay-btn">Visit Site <i className="fas fa-external-link-alt"></i></span>
                </div>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-subtitle">{project.subtitle}</p>
                <p className="featured-desc">{project.description}</p>
                <div className="featured-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
