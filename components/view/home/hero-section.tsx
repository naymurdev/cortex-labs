"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/ui/custom-cursor";
import Link from "next/link";
// import { Link } from "next-view-transitions";
import Video from "next-video";
import awesomeVideo from "@/videos/field.mp4";
import CountdownTimer from "@/components/common/countdown-timer";
import NeuralNoise from "@/components/common/neural-noise";
import MeshGradient from "@/components/common/mesh-gradient";
import HorizontalFlowBars from "@/components/common/horizontal-flow-bar";

const navItems = [
  { name: "About", href: "about" },
  { name: "People", href: "people" },
  { name: "Product", href: "products" },
  { name: "AI Agents", href: "ai-agents" },
  { name: "Contact us", href: "contact-us" },
];

function HeroSection() {
  // const [loading, setLoading] = useState(
  //   typeof window !== "undefined" ? !sessionStorage.getItem("seenLoader") : true
  const containerRef = useRef<HTMLDivElement>(null);
  // );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    // if (!loading) {
    //   sessionStorage.setItem("seenLoader", "true"); // Mark loader as seen
    // }
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % navItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <>
      <section
        className="sm:w-[80%] w-[92%] h-full rounded-md relative  mx-auto   "
        ref={containerRef}
      >
        <div className="h-full w-full flex flex-col gap-2  items-start justify-center relative  text-white">
          <CountdownTimer className="md:hidden flex text-white z-[2]" />
          <nav className="w-fit grid  place-content-center font-semibold relative z-[2] rounded-full h-fit pt-4">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              className="flex flex-wrap gap-2"
            >
              {navItems.map((item, index) => (
                <Link
                  href={`/${item?.href}`}
                  key={item?.name}
                  data-cursor-active
                  className="relative sm:p-2 py-1 sm:text-base text-xs sm:px-4 px-2 w-fit rounded-full inline-block cursor-pointer"
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  {index === activeIndex && (
                    <motion.div
                      layoutId="active-background"
                      className="absolute inset-0 -z-1 bg-gray-50 rounded-full"
                    />
                  )}
                  <span
                    className={cn(
                      "transition-all  ",
                      index === activeIndex ? "text-gray-800" : ""
                    )}
                  >
                    {item?.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          </nav>
          <h1 className="relative z-[2] leading-[100%] xl:text-8xl md:text-7xl sm:text-6xl text-4xl font-medium pb-4">
            <motion.span
              className="block"
              initial={{ filter: "blur(20px)", y: 0, opacity: 0 }}
              animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            >
              Building Intelligent
            </motion.span>
            <motion.span
              initial={{ filter: "blur(20px)", y: 0, opacity: 0 }}
              animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              className="block"
            >
              Interfaces for
            </motion.span>
            <motion.span
              initial={{ filter: "blur(20px)", y: 0, opacity: 0 }}
              animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              className="block"
            >
              Tomorrow.
            </motion.span>
          </h1>
          <motion.p
            initial={{ filter: "blur(20px)", y: 0, opacity: 0 }}
            animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            className="sm:hidden block relative  z-[2] sm:text-lg text-sm leading-[130%] text-white text-left"
          >
            Since day one, we’ve been crafting AI-driven solutions that redefine
            how businesses design, build, and scale their digital experiences.
          </motion.p>
        </div>
      </section>
      <motion.div className="flex gap-2 absolute bottom-16 sm:left-7 left-4 z-3 text-white font-semibold">
        <a href="/website_tnc.pdf" target="_blank">Privacy Policy</a>
        <span>|</span>
        <a href="/website_contactUs.pdf" target="_blank">Contact Us</a>
      </motion.div>
      <motion.p
        initial={{ filter: "blur(20px)", y: 0, opacity: 0 }}
        animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
        className=" w-[26rem] sm:block hidden  z-3 absolute bottom-16 right-7 text-lg text-white text-right"
      >
        Since day one, we’ve been crafting AI-driven solutions that redefine how
        businesses design, build, and scale their digital experiences.
      </motion.p>
      {/* <NeuralNoise /> */}
      {/* <MeshGradient /> */}
      <HorizontalFlowBars/>
      {/* <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, delay: 1 }}
        className=" fixed left-0 top-0  h-screen w-screen mx-auto "
      >
        <Video
          src={awesomeVideo}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-screen! h-screen  "
        />
      </motion.div> */}
    </>
    //   )}
    // </>
  );
}

export default HeroSection;
