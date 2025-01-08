"use client";
import { motion, MotionProps } from "framer-motion";

export const FadeIn: React.FC<{ children: React.ReactNode } & MotionProps> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp: React.FC<{ children: React.ReactNode } & MotionProps> = ({
  children,
  ...rest
}) => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
        {...rest}
      >
        {children}
      </motion.div>
    </div>
  );
};
