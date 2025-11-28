import "@copilotkit/react-ui/styles.css";
import React, { ReactNode } from "react";
import { CopilotKit } from "@copilotkit/react-core";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exactly AI Solutions - Workflows",
  description:
    "Experience the future of weather forecasting with our AI-powered assistant. Get personalized weather insights and forecasts.",
};


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          <CopilotKit
            runtimeUrl="/api/copilotkit"
            agent="chat-report-agent" // The name of the agent to use
            showDevConsole={false} // Show the dev console for debugging
          >
            {children}
          </CopilotKit>
      </body>
    </html>

  );
}