import { NextRequest } from "next/server";
import { StreamingTextResponse } from "ai";

export const runtime = "edge";

const WORKFLOW_API_URL =
  process.env.WORKFLOW_API_URL || "http://localhost:8000";

export const runtime =
  process.env.NODE_ENV === "production"
    ? "edge"
    : "nodejs";

export async function POST(req: NextRequest) {
  const { messages, conversationId } = await req.json();
  const lastUserMessage = messages[messages.length - 1]?.content;

  const response = await fetch(
    `${WORKFLOW_API_URL}/chat/stream`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        conversation_id: conversationId ?? null,
        user_message: lastUserMessage,
      }),
    }
  );

  if (!response.body) {
    throw new Error("No streaming body from Workflow API");
  }

  // 🔑 Pipe the stream directly
  return new StreamingTextResponse(response.body);
}

