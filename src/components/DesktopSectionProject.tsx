import { projects } from "@/constants/project";
import { useCursor } from "@/hooks/useCursor";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const DesktopSectionProject = ({
  setActiveIndex,
  sectionRef,
  slideHeight,
}: {
  setActiveIndex: Dispatch<SetStateAction<number>>;
  sectionRef: RefObject<HTMLElement | null>;
  slideHeight: number;
}) => {
  const { setVariant } = useCursor();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const index = Math.round(v * (projects.length - 1));
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(projects.length - 1) * slideHeight],
  );

  return (
    <div
      className="relative flex-1 overflow-hidden"
      onMouseEnter={() => setVariant("project")}
      onMouseLeave={() => setVariant("default")}
    >
      <motion.div
        className="absolute top-0 left-0 w-full"
        style={{
          height: projects.length * slideHeight,
          y,
        }}
      >
        {projects.map((project) => (
          <Link key={project.id} href={`project/${project.slug}`}>
            <div className="relative w-full h-[calc(100vh-96px)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};
