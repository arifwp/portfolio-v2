"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export const ContainerSmoothScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Durasi animasi scroll (semakin besar semakin smooth)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.5, // Kecepatan scroll (1 = normal)
      //smoothTouch: false,   // Smooth scroll di touch devices (false = better mobile UX)
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
