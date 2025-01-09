"use client";
import { cn } from "@/lib/utils";
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

export const SlideUp: React.FC<
  { children: React.ReactNode; className?: string } & MotionProps
> = ({ children, className, ...rest }) => {
  return (
    <span className={cn("inline-block w-full overflow-hidden", className)}>
      <motion.span
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
        className="inline-block"
        {...rest}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const BlurOut: React.FC<{ children: React.ReactNode } & MotionProps> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
