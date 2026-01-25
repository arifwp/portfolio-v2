"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { menuItems } from "./Navbar";

export const MobileNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(false);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-fit p-4 gap-8 bg-neutral-950 z-50 flex justify-around md:hidden rounded-xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-32"
      }`}
    >
      {menuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="text-md font-semibold text-white"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
