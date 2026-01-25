"use client";

import { projects } from "@/constants/project";
import { useCursor } from "@/hooks/useCursor";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ProjectParalaxEffect = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setVariant } = useCursor();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Text animations
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[calc(100dvh-96px)] overflow-hidden"
      // style={{ height: "100vh", minHeight: "100vh" }}
      onMouseEnter={() => setVariant("project")}
      onMouseLeave={() => setVariant("default")}
    >
      {/* Parallax Image Background */}
      <motion.div
        className="absolute inset-0 w-full"
        style={{ y: imageY, scale, height: "100vh" }}
      >
        <motion.div style={{}} className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
            quality={75}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative h-full flex flex-col justify-center p-8 md:p-16 z-20"
      >
        <motion.div
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Project Number */}
          <motion.div
            className="text-white/40 font-mono text-sm mb-4"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            0{index + 1} / 0{projects.length}
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-6xl md:text-8xl font-bold text-white mb-4 leading-none"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {project.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-neutral-50 max-w-2xl"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {project.overview}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator (only on first slide) */}
      {index === 0 && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-neutral-50/60 text-sm font-mono">SCROLL</span>
            <div className="w-px h-12 bg-linear-to-b from-white/60 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
