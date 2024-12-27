"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Types
type TextOpacityProps = {
  text: string;
  element?: React.ElementType;
  className?: string;
};

type WordProps = {
  children: string;
  progress: MotionValue;
  range: [number, number];
};

// TextOpacity component
const TextOpacity = ({
  text,
  className,
  element: Wrapper = "p",
}: TextOpacityProps) => {
  const wrapperRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["0.2 end", "end 0.9"],
  });
  return (
    <Wrapper ref={wrapperRef} className={className}>
      <span className="flex flex-wrap">
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={index} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </span>
    </Wrapper>
  );
};

// Word component
const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative text-foreground dark:text-background">
      <span className="absolute text-foreground opacity-30 dark:text-background">
        {children}
      </span>
      <motion.span style={{ opacity }}>
        {children}
        <span>&nbsp;</span>
      </motion.span>
    </span>
  );
};

export default TextOpacity;
