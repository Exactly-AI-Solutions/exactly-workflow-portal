"use client";

import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function CopilotKitPage() {
  const suggestions = [
    {
      title: "AI Readiness",
      message: "I'd like an AI Readiness & Opportunities Report",
    },
    {
      title: "Marketing Assets",
      message: "I'd like a Marketing Assets Report",
    },
    {
      title: "ICP Check",
      message: "I'd like an ICP Check",
    },
    {
      title: "Brand Reputation Snapshot",
      message: "I'd like a Brand Reputation Snapshot",
    },
    {
      title: "Overhead Check",
      message: "I'd like an Overhead Check",
    },
    {
      title: "CRO Assessment",
      message: "I'd like a CRO Assessment",
    },
    {
      title: "Sales Tips",
      message: "I'd like Sales Tips",
    },
    {
      title: "AI in your Industry",
      message: "I'd like AI in your Industry",
    },
    {
      title: "SEO Opportunities Report",
      message: "I'd like an SEO Opportunities Report",
    },
    {
      title: "Weak CTA Detector",
      message: "I'd like a Weak CTA Detector",
    },
  ];


  return (
    // Change 1: Set page background to white by adding 'bg-white'
    <main className="min-h-screen w-full flex flex-col items-center p-4 bg-white">
      
      {/* Change 2: Increase the maximum width from 'max-w-2xl' to 'max-w-3xl' 
          (2xl is 42rem, 3xl is 48rem, which is about a 14% increase) */}
      <div className="w-full max-w-3xl h-full flex flex-col">
        
        <CopilotChat
          className="flex-1"
          labels={{
            title: "Exactly Assistant",
            initial: `Hi, I'm the **Exactly Assistant**. Feel free to request any workflows and I'll do my best to get you some output.`,
          }}
          suggestions={suggestions}
        />
      </div>
    </main>
  );
}