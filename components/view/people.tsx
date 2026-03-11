"use client";
import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { TeamImage } from "@/assets/team";
import MagneticButton from "../ui/megnet-button";
import Image from "next/image";
import { Plus, X } from "lucide-react";

import { ProgressiveBlur } from "../ui/progressive-blur";
import XStreamlineIcon from "../icons/x";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProfileCardIcon from "../icons/linkedin";
import GlobeIcon from "../icons/globe";

const teamPeople = [
  {
    memberName: "Alexander Chen",
    id: 2,
    memberImage: "/team1.png",
    linkedinHref: "https://www.linkedin.com/in/naymur-rahman-ripon/",
    xHref: "https://x.com/naymur_dev",
    websiteHref: "https://naymur.com/",
    role: "Strategy Guy (Founder)",
    description: [
      "Alexander is a natural leader—wise beyond his years and always getting things done right while making an impact on his community. He's built strong connections through hard work and dedication.",
      "But, whatever you do, don't let him drive. Alexander's idea of road safety is 'Did I hit the brake or the gas?' Also, he's still unsure if it's time to sleep or time to wake up. He might just stay awake all night, then wonder why he's late for everything the next day!",
    ],
  },
  {
    memberName: "Marcus Williams",
    id: 1,
    memberImage: "/team2.png",
    role: "Web Guy (Co-Founder)",
    linkedinHref: "https://www.linkedin.com/in/naymur-rahman-ripon/",
    xHref: "https://x.com/naymur_dev",
    websiteHref: "https://naymur.com/",
    description: [
      "Marcus is a frontend developer, UI designer, and animator.",
      "He responds to messages faster than we can type them.",
      "His designs? They're... Amazing. His ability to show up on time for meetings? He's still working on that feature. We think.",
    ],
  },
  {
    memberName: "David Kumar",
    id: 3,
    linkedinHref: "https://www.linkedin.com/in/naymur-rahman-ripon/",
    xHref: "https://x.com/naymur_dev",
    websiteHref: "https://naymur.com/",
    memberImage: "/team3.png",
    role: "AI Guy (Co-Founder)",
    description: [
      "David is a genius when it comes to AI and development—solving complex problems like it's second nature. Backend? Machine learning? Scalable solutions? He's got it all covered effortlessly.",
      "But when it comes to UI/UX, that's a different story. His design choices are… questionable at best. Color theory is just an abstract concept to him, and user experience? Let's just say users experience something, but we're not sure it's good.",
      "Thankfully, his code speaks for itself—because his designs definitely shouldn't.",
    ],
  },
  {
    memberName: "Robert Thompson",
    id: 4,
    memberImage: "/team4.png",
    linkedinHref: "https://www.linkedin.com/in/naymur-rahman-ripon/",
    xHref: "https://x.com/naymur_dev",
    websiteHref: "https://naymur.com/",
    role: "Consultant (Co-Founder)",
    description: [
      "Robert is the kind of developer who doesn't say much—but when he does, it's probably a genius solution to a problem no one else even saw coming. A master of app development, he makes things work smoothly while the rest of us just nod and pretend to understand how he does it.",
      "He's reliable, skilled, and efficient… almost too efficient. We're starting to think he might actually be an AI in disguise—never causing trouble, always delivering quality work… yet somehow still debugging his own ability to talk to a girl.",
    ],
  },
];

function People() {
  const [scope, animate] = useAnimate();
  const [index, setIndex] = useState(5);
  const [open, setOpen] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  console.log(hoveredMember);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  return (
    <>
      <section
        className="sm:w-[80%] w-[92%] h-full rounded-md mx-auto py-5"
        ref={scope}
      >
        <div className="h-full w-full 2xl:flex 2xl:flex-col 2xl:pt-0 pt-32 xl:pb-0 pb-8 items-start justify-center text-white">
          <MagneticButton href="/" />

          <motion.div className="leading-[100%] 2xl:text-7xl text-6xl font-medium relative z-2 py-2.5">
            <span className="block">People</span>
          </motion.div>
          <motion.p className="max-w-5xl 2xl:text-3xl sm:text-2xl relative z-2">
            Evlogia is led by a team of engineers and analysts focused on
            building useful AI. Our leadership and advisors bring expertise in
            AI, business, and engineering to ensure our technology is practical,
            effective, and scalable.
          </motion.p>
          <div className="grid xl:grid-cols-4 grid-cols-2 w-full sm:gap-4 gap-2 2xl:mt-10">
            {teamPeople.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                layoutId={member.memberName}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className="group relative z-2 items-center cursor-pointer justify-center 2xl:h-100 md:h-96 h-80 rounded-lg space-y-2"
              >
                <figure className="relative h-full">
                  <motion.img
                    width={500}
                    height={600}
                    alt={member.memberName}
                    src={member.memberImage}
                    className="w-full h-full object-cover rounded-lg"
                    initial={{ opacity: 1 }}
                  />
                </figure>
                <ProgressiveBlur
                  className="pointer-events-none absolute bottom-0 left-0 h-[35%] w-full"
                  blurIntensity={4}
                />
                <article className="text-left flex absolute bottom-2 px-4 w-full justify-between items-center text-white p-2 mt-3 rounded-lg">
                  <div className="relative w-full">
                    <h1 className=" sm:text-xl text-sm  leading-[100%] duration-500 transition-opacity font-semibold">
                      {member.memberName}{" "}
                      <span className="sm:text-base text-sm block pt-1 text-white/80 font-normal">
                        {member.role}
                      </span>
                    </h1>
                  </div>
                </article>
                <div className="flex justify-between gap-3 p-4 bg-neutral-950 border-t border-neutral-800">
                  <XStreamlineIcon hrefLink={member.xHref} />
                  <ProfileCardIcon hrefLink={member.linkedinHref} />
                  <GlobeIcon hrefLink={member.websiteHref} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            showCloseButton={false}
            className="sm:max-w-[625px] border border-neutral-700 text-white bg-neutral-950"
          >
            <div className="grid gap-4">
              <div onClick={(e) => e.stopPropagation()}>
                <motion.div
                  // layoutId={teamPeople[index]?.memberName}
                  className="w-full rounded-2xl space-y-2 "
                >
                  <article className=" relative rounded-md bg-neutral-900 border border-neutral-800 p-4 ">
                    <motion.h1
                      initial={{ scaleY: 0.2 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0.2 }}
                      transition={{ duration: 0.2 }}
                      className="sm:text-4xl text-xl font-semibold"
                    >
                      {teamPeople[index]?.memberName}
                    </motion.h1>
                    <motion.h1
                      initial={{ scaleY: 0.2 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0.2 }}
                      transition={{ duration: 0.2 }}
                      className="sm:text-2xl text-xl font-medium"
                    >
                      {teamPeople[index]?.role}
                    </motion.h1>
                    <button
                      className=" z-2 absolute top-4 cursor-pointer text-4xl right-4"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <X className="md:w-16 w-10 md:h-16 h-10" />
                    </button>
                  </article>
                  <div className="sm:flex gap-4 p-4 ">
                    <Image
                      src={teamPeople[index]?.memberImage}
                      width={400}
                      height={400}
                      alt="single-image"
                      className="rounded-2xl mx-auto shrink-0 sm:w-32 w-full h-full aspect-square object-contain"
                    />
                    <div className="space-y-3 sm:pt-0 pt-4">
                      {teamPeople[index]?.description?.map((des, i) => (
                        <motion.p
                          key={`${des}${i}`}
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ scaleY: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.2 }}
                          className="leading-[140%] sm:text-lg text-sm"
                        >
                          {des}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}

export default People;
