"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import MagneticButton from "../ui/megnet-button";
import { LiquidGlassCard } from "../ui/liquid-glass";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "NeuralFlow",
    description:
      "AI-powered workflow automation for seamless business processes.",
    img: "/neuralflow.png",
  },
  {
    id: 2,
    name: "QuantumSync",
    description: "Real-time data synchronization across distributed systems.",
    img: "/quantumsync.png",
    status: "active",
  },
  {
    id: 3,
    name: "DataPulse",
    description: "Analytics platform for real-time business intelligence.",
    img: "/datapulse.png",
  },
  {
    id: 4,
    name: "CloudVault",
    description:
      "Secure cloud storage with advanced encryption and AI insights.",
    img: "/cloudvault.png",
  },
];

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
          <div className="grid 2xl:grid-cols-2 sm:grid-cols-2 gap-4 py-4 max-w-6xl">
            {products.map((product, index) => (
              <LiquidGlassCard
                key={product.id}
                glowIntensity="sm"
                shadowIntensity="sm"
                borderRadius="12px"
                blurIntensity="sm"
                draggable={false}
                className="lg:p-5 sm:p-3 p-4 wfull"
              >
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="flex gap-2"
                >
                  <div className="shrink-0">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="lg:w-20 w-16 lg:h-20 h-16 rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between ">
                      <div className="flex items-center gap-2">
                        <h1 className="lg:text-2xl text-xl uppercase pb-2 font-semibold">
                          {product.name}
                        </h1>
                      </div>
                      {product.status === "active" && (
                        <div className="flex items-center gap-2">
                          <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-white"></span>
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="lg:text-xl">{product.description}</p>
                  </div>
                </motion.div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
