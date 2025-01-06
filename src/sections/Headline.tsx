"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { headline } from "@/constant";

const Headline = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      className="relative mx-auto my-12 h-fit max-w-screen-2xl py-2"
      ref={containerRef}
    >
      <div className="mx-4 flex h-fit items-center overflow-hidden">
        <motion.p
          initial={{
            translateX: "0%",
          }}
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-fit items-center gap-4 text-nowrap pr-4 text-7xl !leading-loose md:text-8xl lg:text-9xl"
        >
          <span className="inline-block">{headline}</span>
          <span className="inline-block">{headline}</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Headline;
