"use client";
import React from "react";
import Video from "next-video";
import awesomeVideo from "@/videos/field.mp4";
import { motion } from "motion/react";
import awesomeVideo2 from "@/videos/background1.mp4";
import awesomeVideo3 from "@/videos/background2.mp4";
import NeuralNoise from "@/components/ui/neural-noise";
import MeshGradient from "@/components/ui/mesh-gradient";
import HorizontalFlowBars from "@/components/ui/horizontal-flow-bar";
import CustomCursor from "@/components/ui/custom-cursor";
import { useBackground } from "@/contexts/background-context";
import SpiralGradient from "../ui/spiral-gradient";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { background } = useBackground();

  const renderBackground = () => {
    const isMasked = background === "mesh" || background.startsWith("video");
    const backgroundContent = (() => {
      switch (background) {
        case "video1":
          return (
            <Video
              src={awesomeVideo2}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-screen! h-screen"
            />
          );
        case "video2":
          return (
            <Video
              src={awesomeVideo3}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-screen! h-screen"
            />
          );
        case "video3":
          return (
            <Video
              src={awesomeVideo}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-screen! h-screen"
            />
          );
        case "neural":
          return <NeuralNoise />;
        case "mesh":
          return <MeshGradient />;
        case "spiral":
          return <SpiralGradient />;
        case "bars":
          return <HorizontalFlowBars />;
        default:
          return null;
      }
    })();

    return (
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, delay: 1 }}
        className={`fixed left-0 top-0 h-screen w-screen mx-auto ${
          isMasked
            ? "mask-[radial-gradient(ellipse_55%_50%_at_50%_50%,#ffffff_70%,transparent_110%)]"
            : ""
        }`}
      >
        {backgroundContent}
      </motion.div>
    );
  };

  return (
    <>
      <CustomCursor />
      {renderBackground()}
      {children}
    </>
  );
};

export default PageWrapper;
