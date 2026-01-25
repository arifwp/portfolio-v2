"use client";

import type { MotionValue } from "framer-motion";
import { motion, useTransform } from "framer-motion";

interface Props {
  char: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}

export const AnimatedCharacter = ({ char, index, scrollYProgress }: Props) => {
  const localProgress = 0.1 + index * 0.008;

  const opacity = useTransform(scrollYProgress, (v) =>
    v >= localProgress ? 1 : 0.6,
  );

  const color = useTransform(scrollYProgress, (v) =>
    v >= localProgress ? "#0a0a0a" : "#a3a3a3",
  );

  return (
    <motion.span style={{ opacity, color }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};
