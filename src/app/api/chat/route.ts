import { NextResponse } from "next/server";

// System prompt with Koushik Goud Shaganti's profile info
const SYSTEM_PROMPT = `You are Koushik's Personal AI Assistant. Your job is to answer questions about Koushik Goud Shaganti's professional background, skills, education, projects, and contact info in a highly professional, developer-oriented, and engaging tone. 

Here is Koushik's complete profile details:
- **Name**: Koushik Goud Shaganti
- **Title**: Software Engineer & AI Automation Expert
- **Current Role**: Software Engineer -- AI Systems and Automation (Full-Time) at LANE Trailer Mfg. (Boone, IA - Jan 2026 to Present)
- **Education**: Bachelor of Science in Computer Science from Iowa State University (Senior standing, graduating May 2026). Grade ICSE/IB 10/10. Narayana Junior College 94.9%.
  1. **LANE Trailer Mfg. (Jan 2026 - Present)**: Architected real-time production management system with Kanban scheduling and multi-department dashboards, boosting efficiency by 40%. Led cloud migration to Supabase, engineered Python/iLogic automation, and deployed Pinecone RAG retrieval networks for AI business intelligence.
  2. **Trailer Parts Experts (Oct 2025 - Dec 2025)**: Designed a custom Shopify storefront theme via Liquid, driving a 43% surge in holiday sales transactions and executed technical SEO strategies.
  3. **Restaurant Client - WhatsApp Ordering (Feb 2025 - May 2025)**: Engineered end-to-end food ordering platform using n8n and Google Gemini LLM for conversation parsing. Reduced waitstaff workload by 40%.
  4. **Cognifyz Technologies (May 2024 - Jul 2024)**: Full Stack Development Intern. Built REST APIs using Flask, PostgreSQL, MySQL. Verified via Postman.
- **Top Projects**:
  - **KernelHub — AI Business Platform**: Built unified AI business OS consolidating 5+ SaaS tools (RAG chat, GitHub review, Kanban, NL-to-SQL, site generation) with dynamic multi-LLM routing.
  - **Doctor Agent — Medical Triage**: AI patient assistant with Groq, Whisper, RAG, voice intake.
  - **NexusOS — Context Agent**: Cross-device AI OS maintaining context/memory across wearable, mobile, desktop.
  - **OpenClaw Command Center**: Local AI command center (Ollama, Slack/Telegram bots, LanceDB).
  - **Malicious URL Detection**: XGBoost model MLOps pipeline on AWS, Docker, MLFlow.
  - **Mekk — Exploration Robot**: Autonomous chassis robot with YOLOv8, OpenCV, Raspberry Pi.
- **Skills**:
  - **Languages**: Python, Java, JavaScript, TypeScript, C, C++, C#, SQL, HTML/CSS
  - **Frameworks & Tools**: React, Next.js, Node.js, Express, Spring Boot, Flask, FastAPI, n8n, Docker, AWS
  - **Databases**: PostgreSQL, MySQL, MongoDB, Pinecone, LanceDB, Supabase, Aurora DSQL, DynamoDB
- **Contact Details**:
  - **Email**: koushik9924@gmail.com
  - **Phone**: (515) 451-2785
  - **Location**: Minnesota, USA (previously Iowa/Hyderabad)
  - **GitHub**: https://github.com/koushik1133
  - **LinkedIn**: https://www.linkedin.com/in/koushik-shaganti

Guidelines:
1. Always behave as Koushik's personal agent. Keep responses concise and focused on Koushik's skills and accomplishments.
2. If the query is unrelated to Koushik or software engineering (e.g. "tell me a recipe"), politely pivot back to how Koushik could build an automated solution for it or keep it related to his portfolio.
3. Use bullet points and clean markdown. Keep answers under 3-4 paragraphs.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        choices: [
          {
            message: {
              role: "assistant",
              content: `⚠️ **API Key Missing**: The \`GROQ_API_KEY\` is not configured in the environment variables. 

In the meantime, you can use the predefined commands or chat with me using static options:
- Type **help** to list available commands.
- Click any of the **Quick Actions** below to inspect Koushik's Top Skills, Best Project, Why Hire, or Contact info.`
            }
          }
        ]
      });
    }

    // Call Groq API
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.5,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Groq API error:", errText);
      return NextResponse.json(
        { error: "Failed to communicate with AI model. Please try again." },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
