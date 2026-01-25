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

    // lenis.on("scroll", () => {
    //   const aboutSection = document.getElementById("about");
    //   if (!aboutSection) return;

    //   const isDesktop = window.innerWidth >= 1024;
    //   if (!isDesktop) return;

    //   const rect = aboutSection.getBoundingClientRect();
    //   const windowHeight = window.innerHeight;

    //   // Cek apakah scroll position ada di section about
    //   const isInAboutSection =
    //     rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;

    //   if (isInAboutSection) {
    //     // Perlambat scroll di section about
    //     lenis.options.duration = 5.5; // Lebih lambat
    //     lenis.options.wheelMultiplier = 1; // Lebih smooth
    //   } else {
    //     // Kecepatan normal di section lain
    //     lenis.options.duration = 1.5;
    //     lenis.options.wheelMultiplier = 0.5;
    //   }
    // });

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
