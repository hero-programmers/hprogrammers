"use client";
import { motion } from "framer-motion";

export const SlideIn = ({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) => {
  const x = direction === "left" ? "-100%" : "100%";
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", x }}
      whileInView={{ opacity: 1, filter: "blur(0)", x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};
