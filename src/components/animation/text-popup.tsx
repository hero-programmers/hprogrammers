"use client";

import { motion, Variants } from "framer-motion";

const TextSlideUpVarients: Variants = {
  initial: {
    y: 50,
  },
  slideUp: {
    y: 0,
  },
};

export const TextSlideUp: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const chars = children?.toString().split("");

  return (
    <motion.span
      initial="initial"
      whileInView="slideUp"
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }}
      className="inline-block overflow-hidden"
    >
      {chars?.map((char, i) => (
        <motion.span
          className="inline-block"
          variants={TextSlideUpVarients}
          transition={{
            type: "spring",
            duration: 0.2,
            ease: "easeInOut",
          }}
          key={i}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
