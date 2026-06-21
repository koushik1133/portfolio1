"use client";

import React, { useState, useRef, useEffect } from "react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "system" | "error" | "ai";
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: "System Initialized. Welcome to Koushik's Sandbox Console.", type: "system" },
    { text: "Type 'help' to see list of operational commands, or use the shortcuts below.", type: "system" }
  ]);

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const COMMANDS_LIST = ["help", "clear", "about", "skills", "projects", "experience", "contact", "stats", "sudo"];

  // Compute autocomplete suggestion
  useEffect(() => {
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) {
      setSuggestion("");
      return;
    }
    const match = COMMANDS_LIST.find(
      (cmd) => cmd.startsWith(trimmedInput) && cmd !== trimmedInput
    );
    if (match) {
      setSuggestion(match);
    } else {
      setSuggestion("");
    }
  }, [input]);

  useEffect(() => {
    // Auto scroll to bottom
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines, isLoading]);

  const executeCommand = async (commandText: string) => {
    const trimmed = commandText.trim();
    if (!trimmed) return;

    // Add input line
    const currentLines = [...lines, { text: `$ ${trimmed}`, type: "input" as const }];
    setLines(currentLines);
    setIsLoading(true);

    const parts = trimmed.split(" ");
    const primaryCmd = parts[0].toLowerCase();

    // Small delay to simulate system thinking
    setTimeout(async () => {
      switch (primaryCmd) {
        case "help":
          setLines([
            ...currentLines,
            { text: "Available commands:", type: "system" },
            { text: "  help        - Display all console operations", type: "output" },
            { text: "  clear       - Wipe terminal clean", type: "output" },
            { text: "  about       - Get Koushik's summary & engineering bio", type: "output" },
            { text: "  skills      - List languages, tools, & database stacks", type: "output" },
            { text: "  projects    - Show key AI and full-stack projects", type: "output" },
            { text: "  experience  - Show professional SDE/AI co-op roles", type: "output" },
            { text: "  contact     - Show location, email, and social networks", type: "output" },
            { text: "  stats       - Check system core credentials", type: "output" },
            { text: "  sudo        - Request superuser privileges", type: "output" }
          ]);
          setIsLoading(false);
          break;

        case "clear":
          setLines([]);
          setIsLoading(false);
          break;

        case "about":
          setLines([
            ...currentLines,
            { text: "================ KOUSHIK GOUD SHAGANTI ================", type: "system" },
            { text: "Role: Software Engineer & AI Automation Expert", type: "output" },
            { text: "Standing: Senior, Computer Science @ Iowa State University (Graduating May 2026)", type: "output" },
            { text: "Bio: Koushik thrives at the intersection of full-stack development, agentic automation, and distributed systems. He designs scalable production systems and leverages LLMs for intelligent workspace automation.", type: "output" }
          ]);
          setIsLoading(false);
          break;

        case "skills":
          setLines([
            ...currentLines,
            { text: "================ TECHNICAL SKILLS ================", type: "system" },
            { text: "Languages: Python, JavaScript, TypeScript, Java, SQL, C/C++, HTML5/CSS3", type: "output" },
            { text: "Web & Frameworks: React, Next.js, Node.js, Express, Tailwind CSS, Spring Boot, FastAPI, Flask", type: "output" },
            { text: "Cloud & DevOps: AWS, Supabase, Vercel, Docker, Railway, git, CI/CD", type: "output" },
            { text: "Databases: PostgreSQL, MySQL, MongoDB, Pinecone, LanceDB, Oracle DB", type: "output" },
            { text: "AI & Automation: LLM APIs (Gemini/Claude), RAG Pipelines, n8n Workflows, LangChain", type: "output" }
          ]);
          setIsLoading(false);
          break;

        case "projects":
          setLines([
            ...currentLines,
            { text: "================ FEATURED REPOSITORIES ================", type: "system" },
            { text: "🚀 Jarvis (Business OS) - Next.js, Supabase, Pinecone, Multi-LLM routing, NL-to-SQL", type: "output" },
            { text: "🩺 Doctor Agent (Medical Triage) - Next.js 15, Groq, Whisper, voice intake triage", type: "output" },
            { text: "📱 NexusOS (Context Agent) - Proactive cross-device AI system with unified memory", type: "output" },
            { text: "🤖 Mekk (Robot) - Autonomous exploration robot built with Raspberry Pi, YOLOv8 & OpenCV", type: "output" },
            { text: "🛡️ Malicious URL Detection - XGBoost model MLOps pipeline on AWS, Docker, MLFlow", type: "output" },
            { text: "💬 WhatsApp ordering - Food ordering system using n8n workflows and Gemini reasoning", type: "output" }
          ]);
          setIsLoading(false);
          break;

        case "experience":
          setLines([
            ...currentLines,
            { text: "================ LOGGED EXPERIENCE ================", type: "system" },
            { text: "💼 LANE Trailer Mfg. (Jan 2026 - Present) | Software Engineer Co-op", type: "output" },
            { text: "   - Engineered real-time production tracking platforms and drag-and-drop Kanban.", type: "output" },
            { text: "   - Integrated Gemini/Claude automated internal email handling pipelines.", type: "output" },
            { text: "💼 Trailer Parts Experts (Oct 2025 - Dec 2025) | SDE Client Lead", type: "output" },
            { text: "   - Built custom Liquid Shopify storefront from scratch, increasing sales 43%.", type: "output" },
            { text: "💼 Restaurant Client (Feb 2025 - May 2025) | Software AI Engineer", type: "output" },
            { text: "   - Built n8n & Gemini WhatsApp orders automation, reducing waitstaff load 40%.", type: "output" },
            { text: "💼 Cognifyz Technologies (May 2024 - Jul 2024) | Web Dev Intern", type: "output" },
            { text: "   - Developed Flask REST APIs and optimized PostgreSQL/MySQL query indexing.", type: "output" }
          ]);
          setIsLoading(false);
          break;

        case "contact":
          setLines([
            ...currentLines,
            { text: "================ CONNECT SYSTEM ================", type: "system" },
            { text: "📧 Email: koushik9924@gmail.com", type: "output" },
            { text: "📞 Phone: (515) 451-2785", type: "output" },
            { text: "📍 Location: Minnesota, USA", type: "output" },
            { text: "🔗 GitHub: github.com/koushik1133", type: "output" },
            { text: "🔗 LinkedIn: linkedin.com/in/koushik-shaganti", type: "output" }
          ]);
          setIsLoading(false);
          break;

        case "stats":
          setLines([
            ...currentLines,
            { text: "================ CORE SYSTEM CREDENTIALS ================", type: "system" },
            { text: "GPA / Standings: Senior (CS at ISU)", type: "output" },
            { text: "Academics: ICSE/IB 10/10, Junior College Pre-Engineering 94.9%", type: "output" },
            { text: "Hackathon wins / VP Blockchain Club @ AU (Coordinated domain hackathons)", type: "output" },
            { text: "Independent Client Deliveries: 8+ Deployments", type: "output" }
          ]);
          setIsLoading(false);
          break;

        case "sudo":
          setLines([
            ...currentLines,
            { text: "Permission denied. Try 'sudo override' to initiate secret protocols.", type: "error" }
          ]);
          setIsLoading(false);
          break;

        case "sudo override":
          setLines([
            ...currentLines,
            { text: "🔓 [OVERRIDE SUCCESSFUL] Secret decrypted:", type: "system" },
            { text: "✨ Koushik Goud Shaganti is currently seeking 2026 Full-time Software Engineering roles! Invite him to an interview to unlock the ultimate system capabilities.", type: "output" }
          ]);
          setIsLoading(false);
          break;

        default:
          // Forward unrecognized commands to Groq AI as a custom chat question!
          try {
            const res = await fetch("/api/chat", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                messages: [{ role: "user", content: trimmed }]
              })
            });

            if (!res.ok) {
              throw new Error("HTTP error " + res.status);
            }

            const data = await res.json();
            const aiReply = data?.choices?.[0]?.message?.content || "System error: No response received.";

            setLines((prev) => [
              ...prev,
              { text: aiReply, type: "ai" }
            ]);
          } catch (err) {
            console.error("Terminal AI error:", err);
            setLines((prev) => [
              ...prev,
              { text: "Failed to connect to AI agent. Try: help, about, skills, projects.", type: "error" }
            ]);
          } finally {
            setIsLoading(false);
          }
          break;
      }
    }, 400);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const commandText = input.trim();
    if (!commandText) return;

    setInput("");
    setHistory([...history, commandText]);
    setHistoryIndex(-1);
    executeCommand(commandText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex === history.length - 1 ? -1 : historyIndex + 1;
      setHistoryIndex(nextIndex);
      setInput(nextIndex === -1 ? "" : history[nextIndex]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestion) {
        setInput(suggestion);
        setSuggestion("");
      }
    }
  };

  const runCommandDirectly = (cmd: string) => {
    if (isLoading) return;
    executeCommand(cmd);
  };

  return (
    <section className="terminal-section" id="terminal-section">
      <div className="terminal-section-header">
        <span className="terminal-section-label">Sandbox Console Interface</span>
        <h2 className="terminal-section-title">Interactive Terminal</h2>
      </div>
      
      <div 
        className="terminal-container cursor-text" 
        onClick={() => inputRef.current?.focus()}
      >
        <div className="terminal-header">
          <div className="terminal-titlebar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="terminal-status font-mono">KOUSHIK-OS • ONLINE</span>
        </div>

        <div className="chat-terminal-body" ref={bodyRef}>
          {lines.map((line, idx) => (
            <div 
              key={idx} 
              className={`terminal-line ${
                line.type === "input" 
                  ? "terminal-line-input" 
                  : line.type === "system" 
                    ? "terminal-line-system" 
                    : line.type === "error" 
                      ? "terminal-line-error" 
                      : line.type === "ai" 
                        ? "terminal-line-ai" 
                        : "terminal-line-output"
              }`}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {line.text}
            </div>
          ))}
          {isLoading && (
            <div className="terminal-line terminal-line-system animate-pulse">
              System Agent querying Groq AI... <span className="cursor-blink">_</span>
            </div>
          )}
        </div>

        {/* Clickable Quick Command Pills */}
        <div className="terminal-shortcuts">
          <span className="terminal-shortcuts-label">Quick Shortcuts:</span>
          {["about", "skills", "projects", "experience", "contact", "stats", "help"].map((cmd) => (
            <button
              key={cmd}
              type="button"
              className="terminal-shortcut-pill hover-target"
              onClick={(e) => {
                e.stopPropagation();
                runCommandDirectly(cmd);
              }}
              disabled={isLoading}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input area */}
        <form onSubmit={handleCommandSubmit} className="terminal-input-row">
          <span className="prompt-symbol">koushik@OS:~$</span>
          <div className="terminal-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              placeholder={suggestion ? "" : "Type command (help, about, skills, projects) or query AI..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            {suggestion && (
              <span className="terminal-suggestion">
                {input}
                <span className="terminal-suggestion-ghost">{suggestion.substring(input.length)}</span>
                <span className="terminal-tab-hint">Tab</span>
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
