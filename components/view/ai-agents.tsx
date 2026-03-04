"use client";
import React, { useEffect } from "react";
import GridDistortion from "@/components/common/grid-distortion";
import { motion, stagger, useAnimate } from "motion/react";
import { CornerUpLeft } from "lucide-react";
import Link from "next/link";
import Floating, { FloatingElement } from "../ui/parallax-floating";
import { TeamImage } from "@/assets/team";
import VariableFontCursorProximity from "../ui/text-font-cursor-proximity";
import { cn } from "@/lib/utils";
import MagneticButton from "../ui/megnet-button";
import VideoBg from "../common/video-bg";
import MeshGradient from "../common/mesh-gradient";
import HorizontalFlowBars from "../common/horizontal-flow-bar";

function AiAgents() {
  const [scope, animate] = useAnimate();

  return (
    <>
      {/* <div className="absolute h-screen w-full top-0  z-1 left-0 [mask-image:radial-gradient(50%_60%,black,rgba(0,0,0,.3),transparent)]">
        <GridDistortion
          imageSrc="/liquidbg.jpg"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="h-full w-full"
        />
      </div> */}

      {/* <VideoBg /> */}
      {/* <MeshGradient/> */}
      <HorizontalFlowBars/>

      <section
        className="sm:w-[80%] w-[92%] h-full rounded-md  mx-auto   "
        ref={scope}
      >
        <div className="h-full min-h-screen w-full 2xl:flex 2xl:flex-col 2xl:pt-0 pt-32 xl:pb-0 pb-8  items-start justify-center  text-white ">
          <MagneticButton href="/" />

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="leading-[100%] xl:text-7xl py-1.5 text-6xl font-medium relative z-2"
          >
            <span className="block">AI Agents</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-(--breakpoint-lg) xl:text-3xl sm:text-2xl relative z-2"
          >
            Our AI agents automate work by understanding, reasoning, and taking
            action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1 }}
            className=" flex flex-wrap items-start relative z-2 pt-4 gap-4 text-gray-100"
          >
            <div className="lg:flex-1">
              <h2 className="text-2xl font-semibold pb-2">Capabilities</h2>
              <ul className="list-disc list-inside pl-2">
                <li>
                  Task Automation – Handles repetitive and complex workflows.
                </li>
                <li>
                  Decision-Making – Learns and adapts to improve over time.
                </li>
                <li>
                  Conversational AI – Manages customer support and operations.
                </li>
                <li>
                  Real-Time Data Processing – Retrieves and processes
                  information on demand.
                </li>
                <li>
                  Multi-Agent Collaboration – AI systems that work together
                  efficiently.
                </li>
              </ul>
            </div>
            <div className="lg:flex-1 ">
              <h2 className="text-2xl font-semibold pb-2">
                Use Cases & Industries
              </h2>
              <p>
                Industries we work with: healthcare, finance, legal, logistics,
                and more. Our AI helps automate workflows, improve customer
                interactions, and streamline operations.
              </p>
            </div>
            <div className="lg:flex-1">
              <h2 className="text-2xl font-semibold pb-2">
                Types of AI Agents We Offer
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  Customer Support Agents – Handle inquiries, scheduling, and
                  issue resolution.
                </li>
                <li>
                  Operational AI Agents – Manage business processes and data
                  entry.
                </li>
                <li>
                  Strategic AI Advisors – Provide insights and assist in
                  decision-making.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AiAgents;
