"use client";
import { Mail, Zap } from "lucide-react";
import { Link } from "next-view-transitions";
import React from "react";
import { motion } from "motion/react";
import LocationTimeDisplay from "@/components/common/LocationTimeDisplay";
import CountdownTimer from "@/components/common/countdown-timer";
import Image from "next/image";

function Headers() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: .5 }}
        className=" fixed md:top-1.5 top-0 w-full   z-50  font-satoshi text-white"
      >
        <nav className="sm:w-[98%] w-[92%] py-2  mx-auto flex text-white items-center  justify-between rounded-md p-1 relative">
          <Link className="flex items-center space-x-2 " href="/">
            {/* <span className="text-3xl font-semibold text-white">Evlogia</span> */}
            <Image src={"/evlogialogo.png"} width={100} height={100} alt="logo" />
          </Link>
          <div className="flex items-center gap-2">
            <CountdownTimer className="md:flex hidden" />
            <span className="text-white md:inline-block hidden">|</span>
            <LocationTimeDisplay />
            <Link
              href="/contact-us"
              data-cursor-active
              className="border w-8 hover:w-[7.4rem] relative hover:border-blue-500 hover:bg-blue-600 overflow-hidden flex justify-end group items-center gap-2 transition-all duration-300 border-zinc-800 rounded-full p-2 px-2 bg-zinc-900"
            >
              <span className="text-sm absolute right-[1.9rem] shrink-0 whitespace-nowrap  pointer-events-none">
                Get in touch
              </span>
              <Mail size={14} className="shrink-0" />
            </Link>
          </div>
        </nav>
      </motion.header>
    </>
  );
}

export default Headers;
