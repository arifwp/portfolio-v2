"use client";

import { ButtonAnimatedHover } from "@/components/ButtonAnimatedHover";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SocialMedia {
  id: number;
  name: string;
  link: string;
}

const socialMedias: SocialMedia[] = [
  {
    id: 1,
    name: "LINKEDIN",
    link: "https://linkedin.com/in/arif-wahyu-prasetyo",
  },
  {
    id: 2,
    name: "GITHUB",
    link: "https://github.com/arifwp",
  },
];

export const SectionContact = () => {
  return (
    <section id="contact" className="relative w-full scroll-mt-24">
      <div className="min-h-[calc(100vh-96px)] gap-12 flex flex-col items-center mt-24 md:mt-0 px-6 pt-24 pb-6">
        <h3 className="gap-4 flex flex-col text-center text-5xl sm:text-7xl md:text-8xl font-bold text-neutral-950">
          {"LET'S TAAA"}
          <span>AAALLLKKK!</span>
        </h3>

        <Link
          href="mailto:arif.wpras@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonAnimatedHover
            title="CONTACT NOW"
            iconEnd={<ArrowRight size={24} />}
            className="py-4 lg:p-6! lg:text-2xl"
          />
        </Link>

        {/* IMAGE */}
        <div className="relative w-64 md:w-100 min-h-100 rounded-full aspect-9/16 overflow-hidden">
          <Image
            src={"/assets/images/portrait.webp"}
            fill
            alt="Profile of Arif Prasetyo"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        {/* SOCIAL MEDIAS */}
        <div className="w-full gap-6 lg:gap-8 flex items-center justify-center">
          {socialMedias.map((item) => (
            <motion.div
              key={item.id}
              className="relative gap-2 flex items-center justify-center"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-2xl md:text-4xl font-semibold text-neutral-950"
              >
                {item.name}

                {/* underline */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-neutral-950"
                  variants={{
                    rest: { scaleX: 0, originX: 0 },
                    hover: { scaleX: 1, originX: 0 },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </Link>

              <ArrowUpRight className="w-6 h-6 md:w-9 md:h-9 aspect-square" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="w-full gap-4 flex flex-col sm:flex-row items-center justify-between text-base font-semibold text-neutral-950">
          <p>©2025 BDSN.CLUB</p>

          <p
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="cursor-pointer"
          >
            GO BACK TO TOP
          </p>
        </div>
      </div>
    </section>
  );
};
