"use client";

import { motion, MotionProps, Variants } from "framer-motion";

const TextSlideUpVarients: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  slideUp: {
    opacity: 1,
    y: 0,
  },
};

export const TextSlideUp: React.FC<
  {
    children: React.ReactNode;
    type?: "char" | "word";
    once?: boolean;
  } & MotionProps
> = ({ children, type = "char", once = true, ...rest }) => {
  const chars = children?.toString().split(type === "char" ? "" : " ");

  return (
    <motion.span
      initial="initial"
      whileInView="slideUp"
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }}
      className="inline-block overflow-hidden"
      viewport={{ once: once }}
      {...rest}
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
          {type === "word" && <>&nbsp;</>}
        </motion.span>
      ))}
    </motion.span>
  );
};
