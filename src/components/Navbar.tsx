"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Menu {
  id: number;
  name: string;
  href: string;
}

export const menuItems: Menu[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  const [showNavbarContent, setShowNavbarContent] = useState(false);

  useEffect(() => {
    const menuTimer = setTimeout(() => {
      setShowNavbarContent(true);
    }, 500);

    return () => {
      clearTimeout(menuTimer);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full p-6 h-18 bg-white flex flex-row items-center justify-between z-[998]">
      <h2 className="text-2xl font-bold leading-none">PORTFOLIO</h2>

      {/* Menu items */}
      {showNavbarContent && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="gap-4 flex-row hidden sm:flex"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { y: -100, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={item.href} className="text-lg">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
