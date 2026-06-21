import React from "react";

const SKILLS_DATA = [
  {
    category: "Languages & Core Tech",
    icon: "fas fa-code",
    skills: [
      { name: "Python", level: "proficient", icon: "fab fa-python" },
      { name: "JavaScript", level: "proficient", icon: "fab fa-js" },
      { name: "TypeScript", level: "intermediate", icon: "fab fa-js" },
      { name: "Java", level: "intermediate", icon: "fab fa-java" },
      { name: "SQL", level: "proficient", icon: "fas fa-database" },
      { name: "HTML/CSS", level: "proficient", icon: "fab fa-html5" },
      { name: "C/C++", level: "intermediate", icon: "fas fa-code" },
      { name: "C#", level: "exploring", icon: "fas fa-code" }
    ]
  },
  {
    category: "Frameworks & Tools",
    icon: "fas fa-layer-group",
    skills: [
      { name: "React", level: "proficient", icon: "fab fa-react" },
      { name: "Next.js", level: "proficient", icon: "fas fa-bolt" },
      { name: "Node.js", level: "proficient", icon: "fab fa-node-js" },
      { name: "Express", level: "proficient", icon: "fas fa-server" },
      { name: "Tailwind CSS", level: "proficient", icon: "fas fa-palette" },
      { name: "Spring Boot", level: "intermediate", icon: "fab fa-java" },
      { name: "FastAPI", level: "intermediate", icon: "fas fa-bolt" },
      { name: "WebSocket", level: "familiar", icon: "fas fa-network-wired" },
      { name: "Git/GitHub", level: "proficient", icon: "fab fa-github" }
    ]
  },
  {
    category: "Databases",
    icon: "fas fa-database",
    skills: [
      { name: "PostgreSQL", level: "proficient", icon: "fas fa-database" },
      { name: "Aurora DSQL", level: "intermediate", icon: "fas fa-database" },
      { name: "DynamoDB", level: "intermediate", icon: "fas fa-database" },
      { name: "MySQL", level: "proficient", icon: "fas fa-database" },
      { name: "MongoDB", level: "intermediate", icon: "fas fa-leaf" },
      { name: "Pinecone", level: "intermediate", icon: "fas fa-layer-group" },
      { name: "LanceDB", level: "familiar", icon: "fas fa-database" },
      { name: "Neo4j", level: "exploring", icon: "fas fa-project-diagram" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "fas fa-cloud",
    skills: [
      { name: "Vercel", level: "proficient", icon: "fas fa-triangle" },
      { name: "Supabase", level: "proficient", icon: "fas fa-database" },
      { name: "AWS", level: "proficient", icon: "fab fa-aws" },
      { name: "Cloud Run", level: "intermediate", icon: "fas fa-cloud" },
      { name: "Docker", level: "intermediate", icon: "fab fa-docker" },
      { name: "Railway", level: "intermediate", icon: "fas fa-train" },
      { name: "Agile/Scrum", level: "proficient", icon: "fas fa-users" }
    ]
  },
  {
    category: "AI/ML & Agentic",
    icon: "fas fa-brain",
    skills: [
      { name: "LLM APIs", level: "proficient", icon: "fas fa-brain" },
      { name: "Groq", level: "proficient", icon: "fas fa-microchip" },
      { name: "RAG Pipelines", level: "proficient", icon: "fas fa-project-diagram" },
      { name: "Prompt Engineering", level: "proficient", icon: "fas fa-terminal" },
      { name: "n8n Workflows", level: "proficient", icon: "fas fa-project-diagram" },
      { name: "LangChain", level: "intermediate", icon: "fas fa-link" },
      { name: "Multi-LLM Routing", level: "intermediate", icon: "fas fa-route" },
      { name: "YOLOv8", level: "familiar", icon: "fas fa-eye" },
      { name: "OpenCV", level: "familiar", icon: "fas fa-camera" }
    ]
  },
  {
    category: "AI Dev Tools",
    icon: "fas fa-robot",
    skills: [
      { name: "Claude Code", level: "proficient", icon: "fas fa-terminal" },
      { name: "Codex", level: "proficient", icon: "fas fa-code" },
      { name: "Ollama", level: "intermediate", icon: "fas fa-server" },
      { name: "Antigravity AI", level: "exploring", icon: "fas fa-robot" },
      { name: "OpenClaw", level: "exploring", icon: "fas fa-terminal" }
    ]
  }
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-heading">
          <h2>Technical Toolkit</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-legend">
          <div className="legend-item">
            <div className="legend-dot proficient"></div>
            <span>Proficient</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot intermediate"></div>
            <span>Intermediate</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot exploring"></div>
            <span>Exploring</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot familiar"></div>
            <span>Familiar</span>
          </div>
        </div>

        <div className="skills-content">
          {SKILLS_DATA.map((group) => (
            <div className="skills-category" key={group.category}>
              <div className="category-header">
                <div className="category-icon">
                  <i className={group.icon}></i>
                </div>
                <h3>{group.category}</h3>
              </div>
              <div className="skills-tag-cloud">
                {group.skills.map((skill) => (
                  <span className="skill-tag" data-level={skill.level} key={skill.name}>
                    <i className={skill.icon}></i> {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
