"use client";
import Logo from "@/assets/logo";
import { useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const PageTransition = () => {
  const [scope, animate] = useAnimate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  const doAnimate = async () => {
    if (!wrapperRef.current || !logoWrapperRef.current) return;
    try {
      await animate(
        wrapperRef.current,
        { clipPath: "circle(150% at 50% 50%)" },
        { duration: 0.8 },
      );

      await animate(
        logoWrapperRef.current,
        { scale: 8, x: 1920 * 2 },
        { duration: 1 },
      );
      await animate(
        wrapperRef.current,
        { clipPath: "circle(0% at 150% 50%)" },
        { duration: 0.8 },
      );
    } catch {}
  };

  useEffect(() => {
    doAnimate();
  });

  return (
    <div key={"theme-transition"} ref={scope}>
      <div
        ref={wrapperRef}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
      >
        <div ref={logoWrapperRef}>
          <Logo className="size-64 md:size-full" />
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
