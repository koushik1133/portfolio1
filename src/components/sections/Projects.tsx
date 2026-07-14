"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "kernelhub",
    category: "sde",
    title: "KernelHub — End-to-End Business OS",
    description: "A full-stack AI workspace: chat with RAG over your files, review GitHub repos, run automations, manage production Kanban, and generate landing pages.",
    tags: ["Next.js 15", "Supabase", "Aurora DSQL", "DynamoDB", "Pinecone", "Groq", "Cloud Run"],
    linkTitle: "Live",
    linkUrl: "https://javis-xtmerz2lha-uc.a.run.app",
    icon: "fas fa-laptop-code",
  },
  {
    id: "doctor",
    category: "dsml",
    title: "Doctor Agent — Medical Triage",
    description: "AI patient triage assistant: answers inquiries, runs RAG context checks against medical history, performs voice intake, and handles urgent physician escalations.",
    tags: ["Next.js 15", "Groq", "Whisper", "RAG"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-user-md",
  },
  {
    id: "nexusos",
    category: "dsml",
    title: "NexusOS — Context Agent",
    description: "Proactive cross-device AI OS maintaining context across wearables, mobile, desktop, and vehicles (OBD-II diagnostics) via a unified memory layer.",
    tags: ["Multi-Agent", "Memory", "Voice AI", "IoT"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-mobile-alt",
  },
  {
    id: "openclaw",
    category: "dsml",
    title: "OpenClaw Command Center",
    description: "Privacy-first local AI command center on personal hardware. Integrates Slack/Telegram bots, Firecrawl web search, and LanceDB semantic memory.",
    tags: ["Ollama", "Slack/Telegram", "LanceDB", "Tmux"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-terminal",
  },
  {
    id: "cybersecurity",
    category: "dsml",
    title: "Malicious URL Detection",
    description: "End-to-end MLOps pipeline on AWS using XGBoost. Automates data ingestion, hyperparameter tracking via MLFlow, containerization, and FastAPI inference.",
    tags: ["XGBoost", "MLFlow", "Docker", "AWS"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-shield-halved",
  },
  {
    id: "mekk",
    category: "dsml",
    title: "Mekk — Exploration Robot",
    description: "Autonomous AI exploration robot on a custom 3D chassis. Features YOLOv8n tracking, ultrasonic sensor fusion, and local speech controls via Whisper.",
    tags: ["Raspberry Pi", "YOLOv8", "Whisper", "OpenCV"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-robot",
  },
  {
    id: "trailer",
    category: "sde",
    title: "Trailer Parts Experts",
    description: "Custom Shopify storefront theme via Liquid, driving a 43% surge in holiday sales and executing technical SEO strategies for regional traffic.",
    tags: ["Full-Stack", "Shopify", "Liquid"],
    linkTitle: "Live",
    linkUrl: "https://trailerpartsexperts.com",
    icon: "fas fa-truck-moving",
  },
  {
    id: "nldb",
    category: "dsml",
    title: "NL-to-Database Agent",
    description: "AI agent using Google Gemini to convert English instructions into SQL queries. Responsive frontend and FastAPI backend for real-time execution.",
    tags: ["Gemini AI", "FastAPI", "SQL"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-database",
  },
  {
    id: "gmail",
    category: "dsml",
    title: "AI Gmail Assistant",
    description: "Automated Gmail agent that routes emails, generates summaries, and handles auto-labeling via multi-step agentic pipelines and workspace automation.",
    tags: ["n8n", "Gmail API", "AI Studio"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-envelope-open-text",
  },
  {
    id: "whatsapp",
    category: "sde",
    title: "WhatsApp AI Ordering Bot",
    description: "Chatbot automating restaurant ordering, menu queries, and order tracking. Connected live inventory on Google Sheets with agentic workflows.",
    tags: ["n8n", "WhatsApp API", "Sheets"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fab fa-whatsapp",
  },
  {
    id: "arguvista",
    category: "sde",
    title: "ArguVista Analyzer",
    description: "Distributed AI inference tool using Workers AI. Sub-30ms global latency with KV-based conversation memory served from Cloudflare's edge network.",
    tags: ["Cloudflare", "Llama", "KV"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-cloud",
  },
  {
    id: "melodify",
    category: "sde",
    title: "Melodify Platform",
    description: "MERN-stack application with artist microservices, metadata management, and dynamic previews integrated via the YouTube API.",
    tags: ["React", "Node.js", "MongoDB"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-music",
  },
  {
    id: "donkeykong",
    category: "sde",
    title: "Donkey Kong Multiplayer",
    description: "Backend for real-time multiplayer gaming using WebSockets. SQL/Hibernate models for low-latency matchmaking and state sync.",
    tags: ["Spring Boot", "WebSocket", "Hibernate"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-gamepad",
  },
  {
    id: "roguelike",
    category: "sde",
    title: "Roguelike Dungeon Game",
    description: "Dungeon crawler with OOP design and file I/O. Multiplayer support using WebSockets for real-time interactions.",
    tags: ["C/C++", "OOP", "WebSockets"],
    linkTitle: "Coming Soon",
    linkUrl: null,
    icon: "fas fa-dungeon",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Touch-swipe tracking for scroll container
  const touchStartX = useRef<number | null>(null);

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "all" || p.category === filter
  );

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Use card width so we scroll exactly one card on mobile
      const cardWidth =
        scrollRef.current.querySelector<HTMLElement>(".project-card")
          ?.offsetWidth ?? 360;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="projects section horizontal-scroll-enabled"
      id="projects"
    >
      <div className="container">
        <div className="section-heading">
          <h2>My Projects</h2>
          <div className="underline" />
        </div>

        {/* Filter buttons */}
        <div className="project-filters" role="group" aria-label="Filter projects">
          {[
            { key: "all", label: "All Projects" },
            { key: "sde", label: "Full-Stack / Web" },
            { key: "dsml", label: "AI & Data" },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`filter-button ${filter === key ? "active" : ""}`}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Scroll arrows */}
        <div className="scroll-arrow-container" aria-hidden="true">
          <button
            className="scroll-arrow prev-arrow"
            aria-label="Scroll projects left"
            onClick={() => scroll("left")}
          >
            <i className="fas fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            className="scroll-arrow next-arrow"
            aria-label="Scroll projects right"
            onClick={() => scroll("right")}
          >
            <i className="fas fa-chevron-right" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable card rail */}
        <div
          className="horizontal-scroll-wrapper"
          ref={scrollRef}
        >
          <div className="scroll-content projects-grid">
            {filteredProjects.map((project) => {
              const hasLink = Boolean(project.linkUrl);
              return (
                <motion.div
                  className="project-card"
                  data-category={project.category}
                  key={project.id}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  {/* Icon banner */}
                  <div
                    className="project-image"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "160px",
                      background: "var(--bg-color-alt)",
                      color: "var(--text-color)",
                      fontSize: "2.8rem",
                    }}
                  >
                    <i className={project.icon} aria-hidden="true" />
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech-stack">
                      {project.tags.map((tag) => (
                        <span className="tech-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {hasLink ? (
                        <a
                          href={project.linkUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link hover-target"
                          aria-label={`${project.linkTitle} — ${project.title}`}
                        >
                          <i
                            className="fas fa-external-link-alt"
                            aria-hidden="true"
                          />{" "}
                          {project.linkTitle}
                        </a>
                      ) : (
                        <span
                          className="project-link project-link--disabled"
                          aria-label="Coming soon"
                        >
                          <i className="fas fa-clock" aria-hidden="true" />{" "}
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
