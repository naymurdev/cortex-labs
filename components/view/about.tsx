"use client";
import React from "react";
import GridDistortion from "@/components/common/grid-distortion";
import { motion } from "motion/react";
import { CornerUpLeft } from "lucide-react";
import Link from "next/link";
import MagneticButton from "../ui/megnet-button";
import Video from "next-video";
import awesomeVideo from "@/videos/field.mp4";
import VideoBg from "../common/video-bg";
import MeshGradient from "../common/mesh-gradient";
import HorizontalFlowBars from "../common/horizontal-flow-bar";
function About() {
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

      <section className="sm:w-[80%] w-[92%] h-full rounded-md  mx-auto   ">
        <div className="h-full min-h-screen w-full xl:flex xl:flex-col xl:pt-0 pt-32  items-start justify-center  text-white space-y-5">
          <MagneticButton href="/" />

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="leading-[100%] xl:text-7xl text-6xl font-medium relative z-2"
          >
            <span className="block">About</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-(--breakpoint-lg) xl:text-3xl md:text-2xl text-lg relative z-2"
          >
            We are a lean ops team of engineers and analysts focused on
            practical AI solutions. Our work spans natural language processing
            (NLP), machine learning (ML), and multi-agent systems to build AI
            that handles real-world tasks like customer support, operations, and
            data processing.
          </motion.p>

          <div className="flex flex-wrap lg:gap-2 gap-4 max-w-(--breakpoint-lg) py-8 ">
            <div>
              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-lg"
              >
                Vision
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-2xl relative z-2"
              >
                Build AI that makes work easier and businesses more efficient.
              </motion.p>
            </div>
            <div>
              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.6 }}
                className="text-lg relative z-2"
              >
                Mission
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.6 }}
                className=" text-2xl relative z-2"
              >
                Develop practical, scalable AI automation that reduces costs and
                improves decision-making.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
