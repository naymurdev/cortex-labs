"use client";
import React, { useEffect } from "react";
import GridDistortion from "@/components/ui/grid-distortion";
import { motion, stagger, useAnimate } from "motion/react";
import { CornerUpLeft, MoveRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import Floating, { FloatingElement } from "../ui/parallax-floating";
import { TeamImage } from "@/assets/team";
import VariableFontCursorProximity from "../ui/text-font-cursor-proximity";
import { cn } from "@/lib/utils";
import MagneticButton from "../ui/megnet-button";
import MeshGradient from "../ui/mesh-gradient";
import HorizontalFlowBars from "../ui/horizontal-flow-bar";

function Products() {
  const [scope, animate] = useAnimate();

  return (
    <>
      <section
        className="sm:w-[80%] w-[92%] h-full rounded-md  mx-auto   "
        ref={scope}
      >
        <div className="h-full min-h-screen w-full xl:flex xl:flex-col xl:pt-0 pt-32 xl:pb-0 pb-8 items-start justify-center text-white space-y-5">
          <div className="space-y-4">
            <MagneticButton href="/" />

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="leading-[100%] xl:text-7xl text-6xl font-medium relative z-2 py-2.5"
            >
              <span className="block">Products</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-(--breakpoint-lg) xl:text-3xl md:text-2xl text-lg relative z-2"
            >
              We build AI-driven products some for solving industry problems,
              others just for fun.
            </motion.p>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-4 py-4 max-w-(--breakpoint-xl)">
            <a
              href="https://certifi.evlogia.ai"
              target="_blank"
              className="bg-white/20 backdrop-blur-xl relative z-2  p-4 rounded-lg"
            >
              {/* <MoveRight className="absolute right-4 top-4" /> */}
              <MoveUpRight className="absolute right-4 top-4" />
              <h1 className="text-2xl uppercase pb-2 font-medium">
                NeuralFlow
              </h1>
              <p className="text-xl">
                AI-powered workflow automation for seamless business processes.
              </p>
            </a>
            <div className="bg-white/20 backdrop-blur-xl relative z-2  p-4 rounded-lg">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </span>
              </div>
              <h1 className="text-2xl uppercase  pb-2 font-medium">
                QuantumSync
              </h1>
              <p className=" text-xl">
                Real-time data synchronization across distributed systems.
              </p>
            </div>
            <a
              href="https://ui-layouts.com/"
              target="_blank"
              className="bg-white/20 backdrop-blur-xl relative z-2  p-4 rounded-lg"
            >
              <MoveUpRight className="absolute right-4 top-4" />
              <h1 className="text-2xl uppercase  pb-2 font-medium">
                CloudVault
              </h1>
              <p className=" text-xl">
                Secure cloud storage with advanced encryption and AI insights.
              </p>
            </a>
            <a
              href="https://tools.ui-layouts.com/"
              target="_blank"
              className="bg-white/20 backdrop-blur-xl relative z-2  p-4 rounded-lg"
            >
              <MoveUpRight className="absolute right-4 top-4" />
              <h1 className="text-2xl uppercase  pb-2 font-medium">
                DataPulse
              </h1>
              <p className=" text-xl">
                Analytics platform for real-time business intelligence.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
