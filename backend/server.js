const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { initializeEmbeddings, retrieveTopK } = require("./ragEngine");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Groq API config
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// Strict system prompt — restricts answers to campus context only
const SYSTEM_PROMPT = `You are a campus tour assistant for our college.
You MUST answer ONLY using the context provided below.
If the answer is NOT in the context, respond with:
"I don't have that information. Please contact the college office for assistance."

Rules:
- Do NOT answer questions unrelated to the college or campus.
- Do NOT make up or fabricate any information.
- Be clear, concise, and helpful.
- If someone asks for directions, give step-by-step walking instructions from the context.`;

// POST /chat — RAG pipeline
app.post("/chat", async (req, res) => {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "A valid 'message' string is required." });
    }

    if (!GROQ_API_KEY) {
        console.error("GROQ_API_KEY is not set in .env");
        return res.status(500).json({ error: "Server configuration error." });
    }

    try {
        // 1. Retrieve relevant documents
        const topDocs = retrieveTopK(message, 5);

        let context = "";
        if (topDocs.length > 0) {
            context = topDocs.map((d) => d.content).join("\n\n");
        } else {
            context = "No relevant campus information found for this query.";
        }

        // 2. Build messages with context
        const systemMessage = `${SYSTEM_PROMPT}\n\n--- Campus Context ---\n${context}\n--- End Context ---`;

        // 3. Call Groq
        const response = await fetch(GROQ_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    { role: "system", content: systemMessage },
                    { role: "user", content: message },
                ],
                temperature: 0.7,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Groq API error:", JSON.stringify(data, null, 2));
            return res
                .status(response.status)
                .json({ error: data.error?.message || "Groq API request failed." });
        }

        const reply = data.choices?.[0]?.message?.content?.trim();
        if (!reply) {
            console.error("Unexpected Groq response:", JSON.stringify(data, null, 2));
            return res.status(500).json({ error: "Failed to parse AI response." });
        }

        return res.json({ reply });
    } catch (err) {
        console.error("Server error:", err);
        return res.status(500).json({ error: "Internal server error." });
    }
});

// Precompute embeddings and start server
initializeEmbeddings();
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
