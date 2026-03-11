import HeroSection from "@/components/view/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ContextLabs - Building Intelligent Interfaces for Tomorrow. Discover our AI-driven solutions and innovative digital experiences.",
};

export default function Page() {
  return <HeroSection />;
}
