"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloadScreenProps {
  onComplete: () => void;
}

export const PreloadScreen = ({ onComplete }: PreloadScreenProps) => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [animateToNavbar, setAnimateToNavbar] = useState(false);

  useEffect(() => {
    // countdown from 0 to 100
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // after countdown complete show text
          setTimeout(() => setShowText(true), 300);
          return 100;
        }
        return prev + 5; // Increment 5
      });
    }, 30); // 30ms per increment

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // after showing text, wait for a sec then animate to navbar
    if (showText) {
      setTimeout(() => {
        setAnimateToNavbar(true);
        // onComplete getting called right after reposition animation complete
        setTimeout(() => {
          onComplete();
        }, 800); // reposition animation duration
      }, 1200); // time for text show in center
    }
  }, [showText, onComplete]);

  if (animateToNavbar && count === 100 && showText) {
    return (
      <>
        {/* Background transparant */}
        <div className="fixed inset-0 z-[9999] bg-transparent pointer-events-none" />

        <motion.h2
          initial={{
            position: "fixed",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            fontSize: "clamp(3.75rem, 8vw, 6rem)",
            zIndex: 10000,
          }}
          animate={{
            top: "36px", // 36px = half of navbar height (navbar height = 72px)
            left: "24px", // 24px padding
            x: "0%",
            y: "-50%", // center vertical with transform
            fontSize: "1.5rem", // text-2xl
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-bold whitespace-nowrap"
        >
          PORTFOLIO
        </motion.h2>
      </>
    );
  }

  return (
    <>
      {/* preload gone - after animateToNavbar true */}
      {!animateToNavbar && (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center pointer-events-none">
          {/* Countdown */}
          {!showText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-8xl font-bold"
            >
              {count}
            </motion.div>
          )}

          {showText && (
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl md:text-8xl font-bold"
            >
              PORTFOLIO
            </motion.h1>
          )}
        </div>
      )}
    </>
  );
};
