"use client";
import React, { useEffect, useState } from "react";
import GridDistortion from "@/components/common/grid-distortion";
import { AnimatePresence, motion, stagger, useAnimate } from "motion/react";
import { TeamImage } from "@/assets/team";
import MagneticButton from "../ui/megnet-button";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticCloseButton from "../ui/megnet-close-button";
import Video from "next-video";
import awesomeVideo from "@/videos/field.mp4";
import VideoBg from "../common/video-bg";
import { ScrollArea } from "../ui/scroll-area";
import MeshGradient from "../common/mesh-gradient";
import HorizontalFlowBars from "../common/horizontal-flow-bar";
import { ProgressiveBlur } from "../ui/progressive-blur";
import XStreamlineIcon from "../icons/x";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProfileCardIcon from "../icons/linkedin";
import GlobeIcon from "../icons/globe";

const teamPeople = [
  {
    memberName: "Ethan Kiran D’souza",
    id: 2,
    memeberHoverImg: TeamImage.team2,
    memberImage: TeamImage.EthanSprite,
    role: "Strategy Guy (Founder)",
    description: [
      "Ethan is a natural leader—wise beyond his years and always getting things done right while making an impact on his community. He’s built strong connections through hard work and dedication.",
      "But, whatever you do, don’t let him drive. Ethan’s idea of road safety is “Did I hit the brake or the gas?” Also, he’s still unsure if it’s time to sleep or time to wake up. He might just stay awake all night, then wonder why he’s late for everything the next day!",
    ],
  },
  {
    memberName: "Naymur Rahman Ripon",
    id: 1,
    memeberHoverImg: TeamImage.team3,
    memberImage: TeamImage.NaymurSprite,
    role: "Web Guy (Co-Founder)",

    // description:
    //   "The creative genius behind all things visual. Naymur turns vague concepts into stunning designs while juggling endless revisions. Even when the vision keeps changing, he finds a way to bring it to life with precision and style.",
    description: [
      "Naymur is a frontend developer, UI designer, and animator.",
      "He responds to messages faster than we can type them.",
      "His designs? They're... Amazing. His ability to show up on time for meetings? He's still working on that feature. We think.",
    ],
  },
  {
    memberName: "Vaibhav K Salian",
    id: 3,
    memeberHoverImg: TeamImage.team1,
    memberImage: TeamImage.vaibhavSprite,
    role: "AI Guy (Co-Founder)",

    description: [
      "Vaibhav is a genius when it comes to AI and development—solving complex problems like it’s second nature. Backend? Machine learning? Scalable solutions? He’s got it all covered effortlessly.",
      "But when it comes to UI/UX, that’s a different story. His design choices are… questionable at best. Color theory is just an abstract concept to him, and user experience? Let’s just say users experience something, but we’re not sure it’s good.",
      "Thankfully, his code speaks for itself—because his designs definitely should’t.",
    ],
  },
  {
    memberName: "Joshua Jacob",
    id: 4,
    memeberHoverImg: TeamImage.team4,
    memberImage: TeamImage.joshua,
    role: "Consultant (Co-Founder)",
    description: [
      "JJ is the kind of developer who doesn’t say much—but when he does, it’s probably a genius solution to a problem no one else even saw coming. A master of app development, he makes things work smoothly while the rest of us just nod and pretend to understand how he does it.",
      "He’s reliable, skilled, and efficient… almost too efficient. We’re starting to think he might actually be an AI in disguise—never causing trouble, always delivering quality work… yet somehow still debugging his own ability to talk to a girl.",
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
      {/* <VideoBg /> */}
      {/* <MeshGradient/> */}
      <HorizontalFlowBars />

      <section
        className="sm:w-[80%] w-[92%] h-full rounded-md  mx-auto pb-5  "
        ref={scope}
      >
        <div className="h-full min-h-screen w-full 2xl:flex 2xl:flex-col 2xl:pt-0 pt-32 xl:pb-0 pb-8  items-start justify-center  text-white">
          <MagneticButton href="/" />

          <motion.div className="leading-[100%] xl:text-7xl text-6xl font-medium relative z-2 py-2.5">
            <span className="block">People</span>
          </motion.div>
          <motion.p className="max-w-(--breakpoint-lg) xl:text-3xl sm:text-2xl  relative z-2">
            Evlogia is led by a team of engineers and analysts focused on
            building useful AI. Our leadership and advisors bring expertise in
            AI, business, and engineering to ensure our technology is practical,
            effective, and scalable.
          </motion.p>
          <div className="grid xl:grid-cols-4 grid-cols-2 w-full sm:gap-4 gap-2 mt-10">
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
                className=" group relative z-2 items-center cursor-pointer justify-center 2xl:h-[30rem] md:h-96 h-80 rounded-lg overflow-hidden"
              >
                <figure className="relative h-full">
                  <motion.img
                    width={500}
                    height={600}
                    alt={member.memberName}
                    src={member.memberImage.src}
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
                    <div className="flex gap-3 pt-5">
                      <XStreamlineIcon hrefLink={member.memberImage.src} />
                      <ProfileCardIcon hrefLink={member.memberImage.src}/>
                      <GlobeIcon hrefLink={member.memberImage.src}/>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>

    
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent showCloseButton={false} className="sm:max-w-[625px] border border-neutral-700 text-white bg-neutral-950">
            <div className="grid gap-4">
              <div onClick={(e) => e.stopPropagation()}>
                <motion.div
                  // layoutId={teamPeople[index]?.memberName}
                  className="w-full rounded-2xl space-y-2 "
                >
                  <article className=" relative rounded-md  bg-zinc-900 border border-zinc-800 p-4 ">
                    <motion.h1
                      initial={{ scaleY: 0.2 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0.2 }}
                      transition={{ duration: 0.2,   }}
                      className="sm:text-4xl text-xl font-semibold"
                    >
                      {teamPeople[index]?.memberName}
                    </motion.h1>
                    <motion.h1
                      initial={{ scaleY: 0.2 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0.2 }}
                      transition={{ duration: 0.2,  }}
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
                    {/* <MagneticCloseButton
                      onClick={() => {
                        setOpen(false);
                      }}
                    /> */}
                  </article>
                  <div className="sm:flex gap-4 p-4 ">
                    <Image
                      src={teamPeople[index]?.memberImage.src}
                      width={400}
                      height={400}
                      alt="single-image"
                      className="rounded-2xl mx-auto shrink-0 sm:w-32 w-full h-full object-cover"
                    />
                    <div className="space-y-3 sm:pt-0 pt-4">
                      {teamPeople[index]?.description?.map((des, i) => (
                        <motion.p
                          key={`${des}${i}`}
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ scaleY: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.2 }}
                          className=" leading-[140%]  sm:text-lg text-sm"
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
