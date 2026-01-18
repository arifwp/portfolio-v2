"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { AnimatedCharacter } from "./AnimatedCharacter";

interface Props {
  text: string;
  className?: string;
}

export const AnimatedScrollText = ({ text, className }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"],
  });

  const letters = text.split("");

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {letters.map((char, i) => (
        <AnimatedCharacter
          key={i}
          char={char}
          index={i}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};
