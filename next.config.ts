import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use the top-level property 'serverExternalPackages' for Next.js 16.0.4
  serverExternalPackages: [
    'pino', 
    'thread-stream', 
    '@copilotkit/runtime',
    '@mastra/*',
    '@ag-ui/mastra',
    '@mastra/core', 
    
    // CRITICAL FIX: Explicitly list the exact failing subpath import
    '@mastra/core/runtime-context' 
  ],
};

export default nextConfig;