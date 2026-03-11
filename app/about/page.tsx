import React from "react";
import About from "@/components/view/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ContextLabs - our mission to build intelligent AI interfaces and solutions. Discover our approach to AI-driven digital experiences.",
};

function page() {
  return <About />;
}

export default page;
