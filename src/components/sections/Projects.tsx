"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "kernelhub",
    category: "sde",
    title: "KernelHub — End-to-End Business OS",
    description: "A full-stack AI workspace for developers and teams: chat with RAG over your files, review GitHub repos, run automations on a schedule, manage production Kanban, and generate landing pages.",
    tags: ["Next.js 15", "Supabase", "Aurora DSQL", "DynamoDB", "Pinecone", "Groq", "Cloud Run"],
    linkTitle: "Live",
    linkUrl: "https://javis-xtmerz2lha-uc.a.run.app",
    icon: "fas fa-laptop-code",
    image: null
  },
  {
    id: "doctor",
    category: "dsml",
    title: "Doctor Agent — Medical Triage",
    description: "AI patient triage assistant answering inquiries, running RAG context checks against medical history, performing voice intake, and handling urgent physician escalations.",
    tags: ["Next.js 15", "Groq", "Whisper", "RAG"],
    linkTitle: "Live",
    linkUrl: "#",
    icon: "fas fa-user-md",
    image: null
  },
  {
    id: "nexusos",
    category: "dsml",
    title: "NexusOS — Context Agent",
    description: "Proactive cross-device AI operating system that maintains context across wearables, mobile, desktop, and vehicles (OBD-II diagnostics) using a unified memory layer.",
    tags: ["Multi-Agent", "Memory", "Voice AI", "IoT"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-mobile-alt",
    image: null
  },
  {
    id: "openclaw",
    category: "dsml",
    title: "OpenClaw Command Center",
    description: "Privacy-first local AI command center running on personal hardware. Integrates Slack/Telegram bots, Firecrawl web search, and LanceDB semantic memory.",
    tags: ["Ollama", "Slack/Telegram", "LanceDB", "Tmux"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-terminal",
    image: null
  },
  {
    id: "cybersecurity",
    category: "dsml",
    title: "Malicious URL Detection",
    description: "End-to-end MLOps pipeline on AWS using XGBoost. Automates data ingestion, hyperparameter tracking via MLFlow, containerization, and FastAPI inference.",
    tags: ["XGBoost", "MLFlow", "Docker", "AWS"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-shield-halved",
    image: null
  },
  {
    id: "mekk",
    category: "dsml",
    title: "Mekk — Exploration Robot",
    description: "Autonomous AI exploration robot built on a custom 3D chassis. Features YOLOv8n tracking, ultrasonic sensor fusion collision avoidance, and local speech controls.",
    tags: ["Raspberry Pi", "YOLOv8", "Whisper", "OpenCV"],
    linkTitle: "Live",
    linkUrl: "#",
    icon: "fas fa-robot",
    image: null
  },
  {
    id: "trailer",
    category: "sde",
    title: "Trailer Parts Experts",
    description: "Designed a custom Shopify storefront theme via Liquid, driving a 43% surge in holiday sales transactions and executed technical SEO strategies.",
    tags: ["Full-Stack", "Shopify", "Liquid"],
    linkTitle: "Live",
    linkUrl: "https://trailerpartsexperts.com",
    icon: "fas fa-truck-moving",
    image: null
  },
  {
    id: "nldb",
    category: "dsml",
    title: "NL-to-Database Agent",
    description: "AI agent using Google Gemini to convert English instructions into SQL queries. Developed a responsive frontend and FastAPI backend for real-time execution.",
    tags: ["Gemini AI", "FastAPI", "SQL"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-database",
    image: null
  },
  {
    id: "gmail",
    category: "dsml",
    title: "AI Gmail Assistant",
    description: "Automated Gmail management agent that routes emails, generates summaries, and handles auto-labeling via multi-step agentic pipelines and workspace automation.",
    tags: ["n8n", "Gmail API", "AI Studio"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-envelope-open-text",
    image: null
  },
  {
    id: "whatsapp",
    category: "sde",
    title: "WhatsApp AI Ordering Bot",
    description: "Developed a chatbot automating restaurant ordering, menu queries, and order tracking. Connected live inventory on Google Sheets with agentic workflows.",
    tags: ["n8n", "WhatsApp API", "Sheets"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fab fa-whatsapp",
    image: null
  },
  {
    id: "arguvista",
    category: "sde",
    title: "ArguVista Analyzer",
    description: "Distributed AI inference tool using Workers AI. Achieved sub-30ms global latency with KV-based conversation memory served from Cloudflare's edge network.",
    tags: ["Cloudflare", "Llama", "KV"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-cloud",
    image: null
  },
  {
    id: "melodify",
    category: "sde",
    title: "Melodify Platform",
    description: "MERN-stack application with artist microservices, metadata management, and dynamic previews integrated via the YouTube API.",
    tags: ["React", "Node.js", "MongoDB"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-music",
    image: null
  },
  {
    id: "donkeykong",
    category: "sde",
    title: "Donkey Kong Multiplayer",
    description: "Backend architecture for real-time multiplayer gaming using WebSockets. Designed SQL/Hibernate models for low-latency matchmaking and state sync.",
    tags: ["Spring Boot", "WebSocket", "Hibernate"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-gamepad",
    image: null
  },
  {
    id: "roguelike",
    category: "sde",
    title: "Roguelike Dungeon Game",
    description: "Dungeon crawler with OOP design and file I/O. Added multiplayer support using WebSockets to reduce latency and enable real-time interactions.",
    tags: ["C/C++", "OOP", "WebSockets"],
    linkTitle: "Read Case Study",
    linkUrl: "#",
    icon: "fas fa-dungeon",
    image: null
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS.filter((p) => filter === "all" || p.category === filter);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="projects section horizontal-scroll-enabled" id="projects">
      <div className="container">
        <div className="section-heading">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="project-filters">
          <button className={`filter-button ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All Projects</button>
          <button className={`filter-button ${filter === "sde" ? "active" : ""}`} onClick={() => setFilter("sde")}>Full-Stack / Web</button>
          <button className={`filter-button ${filter === "dsml" ? "active" : ""}`} onClick={() => setFilter("dsml")}>AI & Data</button>
        </div>
        
        <div className="scroll-arrow-container">
           <button className="scroll-arrow prev-arrow" aria-label="Previous items" onClick={() => scroll("left")}>
               <i className="fas fa-chevron-left"></i>
           </button>
           <button className="scroll-arrow next-arrow" aria-label="Next items" onClick={() => scroll("right")}>
               <i className="fas fa-chevron-right"></i>
           </button>
        </div>
        
        <div className="horizontal-scroll-wrapper" ref={scrollRef}>
          <div className="scroll-content projects-grid">
            {filteredProjects.map((project) => (
              <motion.div 
                className="project-card" 
                data-category={project.category} 
                key={project.id}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="project-image" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '180px', background: '#1a1a1a', color: '#fff', fontSize: '3rem'}}>
                  {/* Using icon in place of image for now as requested by user's design */}
                  <i className={project.icon}></i>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.tags.map((tag) => (
                      <span className="tech-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.linkUrl} className="project-link hover-target">
                      <i className="fas fa-external-link-alt"></i> {project.linkTitle}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
