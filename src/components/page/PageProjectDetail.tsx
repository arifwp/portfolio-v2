"use client";

import { Project } from "@/constants/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CurvedLoop from "../CurvedLoop";
import { FlowingMenu } from "../FlowingMenu";

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <motion.div className="flex flex-col gap-2">
    {/* TEXT */}
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="flex items-center justify-between"
    >
      <p className="text-md font-bold text-neutral-500">{label}</p>

      <h3 className="text-md font-bold text-neutral-950">{value}</h3>
    </motion.div>

    {/* BORDER */}
    <motion.div
      variants={{
        hidden: { scaleX: 0 },
        show: {
          scaleX: 1,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      style={{ transformOrigin: "left" }}
      className="border-b-2 border-neutral-950"
    />
  </motion.div>
);

export const PageProjectDetail = ({ data }: { data: Project }) => {
  return (
    <div className="w-full p-6 gap-12 flex flex-col scroll-mt-18">
      <div className="w-full gap-8 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* TITLE & DESC PROJECT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="w-full lg:max-w-1/2 gap-2 flex flex-col"
        >
          <div className="py-2 overflow-hidden">
            <motion.h1
              variants={{
                hidden: { y: "100%" },
                show: { y: 0 },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl font-bold text-neutral-950"
            >
              {data.title}
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
              className="text-md font-light text-neutral-950"
            >
              {data.description}
            </motion.p>
          </div>
        </motion.div>

        {/* COMPANY INFO */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/3 flex flex-col gap-4"
        >
          <InfoRow label="COMPANY" value={data.company} />
          <InfoRow label="PERIODE" value={data.period} />
          <InfoRow
            label="LIVE PROJECT"
            value={
              <Link
                href={data.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-neutral-950"
              >
                VISIT SITE
              </Link>
            }
          />
        </motion.div>
      </div>

      {/* IMAGE */}
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          scale: {
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: {
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className="relative w-full h-full aspect-video"
      >
        <Image
          src={`${data.image}`}
          alt={`Image ${data.title}`}
          fill
          objectFit="contain"
        />
      </motion.div>

      {/* TECH STACK */}
      <div className="w-full gap-6 md:gap-10 flex flex-col md:flex-row items-start md:justify-between">
        <div className="w-full md:w-1/2 gap-0 flex flex-col shrink-0">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
              className="text-2xl font-bold text-neutral-950"
            >
              TECH STACK
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6,
              }}
              className="text-md font-light text-neutral-950"
            >
              Technologies and tools used to bring this project to life
            </motion.p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="gap-2 md:gap-3 lg:gap-4 flex flex-row flex-wrap items-center"
        >
          {data.techStack.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { y: 12, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="py-2 px-3 bg-neutral-100 rounded-full"
            >
              <p className="text-md text-neutral-950">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ROLE */}
      <div className="w-full gap-6 md:gap-10 flex flex-col md:flex-row items-start md:justify-between">
        <div className="w-full md:w-1/2 gap-0 flex flex-col shrink-0">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
              className="text-2xl font-bold text-neutral-950"
            >
              My Role
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6,
              }}
              className="text-md font-light text-neutral-950"
            >
              My contributions and responsibilities in this project
            </motion.p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: {
              transition: {
                delayChildren: 1,
                staggerChildren: 0.2,
              },
            },
          }}
          className="gap-4 flex flex-row flex-wrap items-center"
        >
          <div className="overflow-hidden">
            <motion.h5
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-2xl font-semibold text-neutral-950"
            >
              {data.role}
            </motion.h5>
          </div>

          {data.task.map((item) => (
            <motion.ul
              key={item.id}
              variants={{
                hidden: { y: 12, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="list-disc list-inside"
            >
              <li className="text-md text-neutral-950">{item.name}</li>
            </motion.ul>
          ))}
        </motion.div>
      </div>

      {/* TEXT HALF CIRCLE LOOP */}
      <CurvedLoop />

      {/* FLOWING MENU */}
      <div
        className="mt-24 md:mt-36 xl:mt-42"
        style={{ height: "600px", position: "relative" }}
      >
        <FlowingMenu slug={data.slug} />
      </div>
    </div>
  );
};
