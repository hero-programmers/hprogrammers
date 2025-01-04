"use client";
import Logo from "@/assets/logo";
import { useAnimate } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const ThemeTransition = () => {
  const [scope, animate] = useAnimate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  const [pageTheme] = useState(theme);
  const backgroundColor =
    pageTheme === "dark" ? "bg-secondary" : "bg-background";

  const doAnimate = async () => {
    if (!wrapperRef.current || !logoWrapperRef.current) return;
    try {
      await animate(
        wrapperRef.current,
        { clipPath: "circle(150% at 50% 50%)" },
        { duration: 1 },
      );

      await animate(
        logoWrapperRef.current,
        { scale: 8, x: 1920 * 2 },
        { duration: 2 },
      );
      await animate(
        wrapperRef.current,
        { clipPath: "circle(0% at 150% 50%)" },
        { duration: 1 },
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
        className={`fixed inset-0 flex items-center justify-center ${backgroundColor}`}
      >
        <div ref={logoWrapperRef}>
          <Logo className="size-64 md:size-full" />
        </div>
      </div>
    </div>
  );
};

export default ThemeTransition;
