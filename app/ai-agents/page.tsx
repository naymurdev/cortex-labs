import AiAgents from "@/components/view/ai-agents";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Explore ContextLabs' AI agents and intelligent automation solutions. Discover how our AI technology can transform your business processes.",
};

function page() {
  return <AiAgents />;
}

export default page;
