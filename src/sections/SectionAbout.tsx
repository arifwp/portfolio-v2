"use client";

import AnimatedLanyard from "@/components/AnimatedLanyard";
import { AnimatedScrollText } from "@/components/AnimatedScrollText";
import { ButtonAnimatedHover } from "@/components/ButtonAnimatedHover";
import { skills } from "@/constants/skill";
import { ArrowUpRight } from "lucide-react";

export const SectionAbout = () => {
  return (
    <section id="about" className="w-full p-6 relative scroll-mt-24">
      <AnimatedLanyard />

      <div className="w-full h-full gap-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* <div className="relative w-64 sm:w-100 xl:w-120 h-150 min-h-100 rounded-xl lg:rounded-2xl aspect-9/14 overflow-hidden">
          <Image
            src={"/assets/images/profile.webp"}
            fill
            alt="Profile of Arif Prasetyo"
            objectFit="cover"
            objectPosition="top"
          />
        </div> */}

        <div className="hidden lg:flex w-64 sm:w-100 xl:w-120 h-150 min-h-100" />

        {/* <AnimatedLanyard /> */}

        {/* RIGHT CONTAINER */}
        <div className="gap-6 lg:gap-12 flex flex-1 flex-col">
          <AnimatedScrollText />

          <div className="w-full gap-4 flex flex-col">
            <p className="font-medium text-base">Focus & Expertise</p>

            <div className="w-full gap-2 flex flex-wrap">
              {skills.map((item) => (
                <div
                  key={item.id}
                  className="py-2 px-3 bg-neutral-100 rounded-full text-md"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <ButtonAnimatedHover
            title="Download CV"
            iconEnd={<ArrowUpRight size={24} />}
          />
        </div>
      </div>
    </section>
  );
};
