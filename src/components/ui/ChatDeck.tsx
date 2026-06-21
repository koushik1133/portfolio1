"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Mic, Terminal as TerminalIcon } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant" | "system-alert";
  content: string;
}

export default function ChatDeck() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content: `Hello! I am Koushik's AI Agent. Ask me anything about Koushik's technical background, projects, work experience, or availability!

Type a question or select a quick action below to get started.`
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("toggle-chat-deck", handleToggle);
    window.addEventListener("open-chat-deck", handleOpen);
    return () => {
      window.removeEventListener("toggle-chat-deck", handleToggle);
      window.removeEventListener("open-chat-deck", handleOpen);
    };
  }, []);

  const addMessage = (role: "user" | "assistant" | "system-alert", content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(36).substring(7), role, content }
    ]);
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    if (!textToSend) {
      setInput("");
    }

    addMessage("user", text);
    setIsLoading(true);

    const lowercaseText = text.toLowerCase();
    
    // Check if it's a predefined slash command or quick action first
    if (lowercaseText === "/skills" || lowercaseText.includes("skills")) {
      setTimeout(() => {
        addMessage("assistant", `⚡ **Koushik Goud Shaganti's Tech Arsenal:**
- **Languages**: Python, JavaScript, TypeScript, Java, SQL, C/C++
- **Frontend / Web**: React, Next.js, Node.js, Express, Tailwind CSS, HTML5/CSS3
- **Cloud & DevOps**: AWS, Supabase, Vercel, Docker, Railway, git, CI/CD
- **Databases**: Supabase, PostgreSQL, MySQL, MongoDB, Pinecone, LanceDB
- **AI Automation**: Google Gemini & Claude LLM APIs, RAG Pipelines, n8n workflows, LangChain`);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lowercaseText === "/projects" || lowercaseText.includes("best project") || lowercaseText.includes("project")) {
      setTimeout(() => {
        addMessage("assistant", `🚀 **Koushik's Featured Project: Jarvis — Business OS**
Jarvis is an AI-powered operating system consolidating 8+ business tools. It features multi-LLM routing, RAG knowledge layers, a domain-aware website builder, and natural language to SQL processing. Built using Next.js, Supabase, Pinecone, and multiple hosted LLMs.

Other major projects include:
- **Doctor Agent** - Voice intake triage assistant (Next.js 15, Groq, Whisper, RAG)
- **NexusOS** - Wearable/Mobile AI system with cross-device context memory
- **OpenClaw** - Local command center bot on personal hardware
- **Mekk** - Autonomous exploration robot using YOLOv8, OpenCV, and Raspberry Pi`);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lowercaseText === "/hire" || lowercaseText.includes("why hire") || lowercaseText.includes("hire")) {
      setTimeout(() => {
        addMessage("assistant", `💼 **Why Hire Koushik Goud Shaganti?**
1. **Proven Enterprise Results**: Deployed a real-time production system from scratch for LANE Trailer Mfg, moving build units across 7 production phases via real-time drag-and-drop Kanban.
2. **Full-Stack Competency**: Strong development credentials across Next.js, React, Node.js, Spring Boot, and PostgreSQL.
3. **AI Automation Pioneer**: Experience building custom n8n systems, multi-LLM routing, RAG agents, and email automation.
4. **Academics**: BS in Computer Science (Senior, Graduating May 2026) at Iowa State University. 10/10 ICSE/IB GPA, 94.9% College Grade.`);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lowercaseText === "/contact" || lowercaseText.includes("contact")) {
      setTimeout(() => {
        addMessage("assistant", `📞 **Connect with Koushik:**
- **Email**: koushik9924@gmail.com
- **Phone**: (515) 451-2785
- **Location**: Minnesota, USA
- **GitHub**: github.com/koushik1133
- **LinkedIn**: linkedin.com/in/koushik-shaganti

Feel free to send a message via the form at the bottom of the page or reach out directly!`);
        setIsLoading(false);
      }, 500);
      return;
    }

    if (lowercaseText === "/help") {
      setTimeout(() => {
        addMessage("assistant", `Available commands:
- \`/skills\` - List technical skills
- \`/projects\` - Show featured projects
- \`/hire\` - View Koushik's value propositions
- \`/contact\` - Display contact details
- Or just type a question like "Where does Koushik go to school?" or "Tell me about LANE Trailer Mfg co-op!"`);
        setIsLoading(false);
      }, 500);
      return;
    }

    // Call Groq API route for custom queries
    try {
      // Create message list for LLM context, converting state messages format
      const apiMessages = messages
        .filter((msg) => msg.role !== "system-alert")
        .map((msg) => ({
          role: msg.role,
          content: msg.content
        }));
      
      // Append latest message
      apiMessages.push({ role: "user", content: text });

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      const aiReply = data?.choices?.[0]?.message?.content || "Sorry, I received an empty response. Please try again.";
      addMessage("assistant", aiReply);
    } catch (error) {
      console.error("Chat API error:", error);
      addMessage("system-alert", "System Error: Failed to fetch reply from Groq. Please verify your internet connection or check API logs.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const scrollTerminalSection = () => {
    setIsOpen(false);
    const terminalSec = document.getElementById("terminal-section");
    if (terminalSec) {
      terminalSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        className="chat-trigger-btn hover-target" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Koushik's AI Agent"
      >
        <span className="chat-trigger-glow"></span>
        <span className="pulse-dot"></span>
        <MessageSquare size={16} />
        <span>Agent System</span>
      </button>

      {/* Main Panel Drawer */}
      {isOpen && (
        <div className="chat-deck-container">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-header-title">KOUSHIK-AGENT-DECK</div>
              <div className="chat-status">
                <span className="chat-status-dot"></span>
                <span>SYSTEM ONLINE</span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button 
                className="chat-header-btn hover-target" 
                onClick={scrollTerminalSection}
                title="Scroll to main Command Terminal"
              >
                <TerminalIcon size={14} />
              </button>
              <button 
                className="chat-header-btn hover-target" 
                onClick={() => setIsOpen(false)}
                title="Close chat panel"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`message-bubble ${msg.role}`}
              >
                <div className="message-label">
                  {msg.role === "user" ? "USER_RECRUITER" : msg.role === "assistant" ? "SYSTEM_AGENT" : "SYSTEM_WARN"}
                </div>
                <div style={{ whiteSpace: "pre-wrap" }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message-bubble assistant animate-pulse">
                <div className="message-label">SYSTEM_AGENT</div>
                <span className="cursor-blink">_ Processing Groq Response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions Bar */}
          <div className="chat-quick-actions">
            <button className="quick-action-pill hover-target" onClick={() => handleSend("⚡ Top Skills")}>
              ⚡ Top Skills
            </button>
            <button className="quick-action-pill hover-target" onClick={() => handleSend("🚀 Best Project")}>
              🚀 Best Project
            </button>
            <button className="quick-action-pill hover-target" onClick={() => handleSend("💼 Why Hire")}>
              💼 Why Hire
            </button>
            <button className="quick-action-pill hover-target" onClick={() => handleSend("📞 Contact")}>
              📞 Contact
            </button>
          </div>

          {/* Connection Shortcuts Panel */}
          <div className="chat-connect-panel">
            <div className="chat-connect-title">Connect with Koushik</div>
            <div className="chat-connect-grid">
              <a href="https://vivek-shaganti-portfolio.vercel.app/Vivek%20Goud%20Shaganti%20CV.pdf" download className="chat-connect-link hover-target">RESUME</a>
              <a href="https://www.linkedin.com/in/koushik-shaganti" target="_blank" rel="noopener noreferrer" className="chat-connect-link hover-target">LINKEDIN</a>
              <a href="https://github.com/koushik1133" target="_blank" rel="noopener noreferrer" className="chat-connect-link hover-target">GITHUB</a>
              <a href="https://x.com/Koushik992004/media" target="_blank" rel="noopener noreferrer" className="chat-connect-link hover-target">X / TWITTER</a>
              <a href="mailto:koushik9924@gmail.com" className="chat-connect-link hover-target">EMAIL</a>
            </div>
          </div>


          {/* Input Bar */}
          <div className="chat-input-bar">
            <input
              type="text"
              className="chat-input-field"
              placeholder="Ask a question or type code..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button 
              className="chat-voice-btn hover-target" 
              title="Voice Input (visual placeholder)"
              onClick={() => addMessage("system-alert", "Mic access is visual only. Type your questions directly!")}
            >
              <Mic size={16} />
            </button>
            <button 
              className="chat-send-btn hover-target" 
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              title="Send message"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
