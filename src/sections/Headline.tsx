"use client";

import { useRef } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";

const Headline = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"], {
    ease: cubicBezier(0.37, 0, 0.63, 1),
  });

  return (
    <section className="h-[800vh] relative" ref={containerRef}>
      <div className="sticky h-screen top-0 flex items-center overflow-hidden">
        <motion.p
          style={{
            x,
          }}
          className="text-nowrap w-fit text-[10rem] md:text-[20rem] lg:text-[40rem]"
        >
          Let&apos;s code_ your career & learn as one.
        </motion.p>
      </div>
    </section>
  );
};

export default Headline;
