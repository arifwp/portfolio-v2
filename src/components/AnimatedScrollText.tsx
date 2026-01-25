"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { AnimatedCharacter } from "./AnimatedCharacter";

const TEXT =
  "I’m Arif, a full-stack engineer who blends engineering precision with visual sensitivity.";

export const AnimatedScrollText = () => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"],
  });

  const letters = TEXT.split("");

  return (
    <p
      ref={ref}
      className={`flex flex-wrap text-6xl xl:text-7xl font-semibold leading-none`}
    >
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
