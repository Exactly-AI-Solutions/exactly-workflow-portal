import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";
import { MastraAgent } from "@ag-ui/mastra"
import { MastraClient } from "@mastra/client-js";

export const POST = async (req: NextRequest) => {
  const baseUrl = process.env.MASTRA_BASE_URL || "http://localhost:4111";
  const mastraClient = new MastraClient({ baseUrl });
  const mastraAgents = await MastraAgent.getRemoteAgents({ mastraClient });

  try {
    // Debug: list available agents at runtime startup
    // This helps diagnose "agent not found" issues due to stale server or import failures
    // Will print, for example: [ 'sample_agent' ]
    // Remove if too chatty once confirmed working
    //console.log("[CopilotKit] Available agents:", Object.keys(mastraAgents || {}));
  } catch {}


  const runtime = new CopilotRuntime({
    agents: mastraAgents,
  });

  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: new ExperimentalEmptyAdapter(),
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};