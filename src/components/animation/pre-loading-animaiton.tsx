"use client";
import Logo from "@/assets/logo";
import { useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const PreLoadingAnimation = ({ duration }: { duration: number }) => {
  const [scope, animate] = useAnimate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  const doAnimate = async () => {
    if (!wrapperRef.current || !logoWrapperRef.current) return;
    try {
      await animate(
        logoWrapperRef.current,
        { scale: 4, x: screen.width * 1.5 },
        { duration: duration - 0.2 },
      );
      await animate(
        wrapperRef.current,
        { clipPath: "circle(0% at 150% 50%)" },
        { duration: 0.2 },
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
        style={{
          clipPath: "circle(150% at 50% 50%)",
        }}
      >
        <div ref={logoWrapperRef}>
          <Logo className="size-64 md:size-full" />
        </div>
      </div>
    </div>
  );
};

export default PreLoadingAnimation;
