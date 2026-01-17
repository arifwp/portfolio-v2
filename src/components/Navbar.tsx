"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
  //   const router = useRouter();

  return (
    <nav className="fixed top-0 w-full h-24 p-6 flex flex-row items-center justify-between">
      <motion.h2
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl font-bold"
      >
        PORTFOLIO
      </motion.h2>

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
              hidden: { y: -100 },
              show: { y: 0 },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link href={item.href} className="text-sm">
              <p>{item.name}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};
