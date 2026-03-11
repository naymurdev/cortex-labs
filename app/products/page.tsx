import Products from "@/components/view/products";
import { siteConfig } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ContextLabs' innovative AI products - NeuralFlow, QuantumSync, CloudVault, DataPulse. Discover intelligent solutions for workflow automation and business analytics.",
};

function page() {
  return <Products />;
}

export default page;
