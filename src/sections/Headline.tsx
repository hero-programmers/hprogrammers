"use client";

import { useRef } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { headline } from "@/constant";

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
    <section className="container relative h-[800vh]" ref={containerRef}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.p
          style={{
            x,
          }}
          className="w-fit text-nowrap text-[10rem] md:text-[20rem] lg:text-[30rem]"
        >
          {headline}
        </motion.p>
      </div>
    </section>
  );
};

export default Headline;
