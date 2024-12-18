"use client";

import { useEffect, useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

const Headline = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"], {
    ease: easeInOut,
  });

  return (
    <section className="h-[800vh] relative" ref={containerRef}>
      <div className="sticky h-screen top-0 flex items-center overflow-hidden">
        <motion.p
          style={{
            x,
          }}
          className="text-nowrap w-fit text-[20rem] md:text-[40rem]"
        >
          Let&apos;s code_ your career & learn as one.
        </motion.p>
      </div>
    </section>
  );
};

export default Headline;
