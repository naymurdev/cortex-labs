"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import MagneticButton from "../ui/megnet-button";
import { CornerRightDown, MoveUpRight } from "lucide-react";
import Marquee from "../ui/marquee";
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
function ContactUs() {
  const [scope, animate] = useAnimate();

  return (
    <>
      <section
        className="sm:w-[80%] w-[92%] h-full rounded-md  mx-auto   "
        ref={scope}
      >
        <div className="h-full min-h-screen w-full flex flex-col  items-start justify-center  text-white space-y-5 pt-32">
          <MagneticButton href="/" />

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="leading-[100%] xl:text-7xl text-6xl font-medium relative z-2 py-1.5"
          >
            <span className="block">Contact us</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-(--breakpoint-lg) md:text-3xl sm:text-2xl  relative z-2 flex  gap-3"
          >
            Reach out to us at{" "}
            <a
              href="mailto:naymur@ui-layouts.com"
              className="relative flex gap-2 items-center font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {" "}
              naymur@ui-layouts.com <MoveUpRight />
            </a>{" "}
          </motion.p>
          <motion.footer
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="sm:py-10 py-8 w-full space-y-4 relative z-2"
          >
            <p className="flex gap-2 sm:text-base text-xs">
              Let’s see if we’re a good fit with a 15 min call{" "}
              <CornerRightDown />
            </p>
            <a
              href="https://cal.com/ui-layouts"
              target="_blank"
              className="2xl:w-[50%] xl:w-[60%] md:w-[70%] w-full  flex items-center rounded-full duration-300 p-2 hover:p-0 transition-all xl:h-36 sm:h-24 h-20  backdrop-blur-xl "
            >
              <div className="flex items-center overflow-hidden h-full [box-shadow:inset_0px_0px_0px_0px_rgba(24, 24, 24, 0.911)]  bg-linear-to-b from-black/40 to-white/10 rounded-full">
                <Marquee className="[--duration:10s]">
                  {reviews.map((review) => (
                    <div
                      className="flex items-center gap-6 font-medium marquee"
                      key={review?.name}
                    >
                      <h1
                        className=" xl:text-8xl sm:text-4xl text-3xl"
                        key={review?.name}
                      >
                        Book A Call
                      </h1>
                      <span className="w-4 h-4 bg-white rounded-full"></span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </a>
            <p>©2025 Evlogia Labs Pvt Ltd. All rights reserved</p>
          </motion.footer>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
