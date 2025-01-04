"use client";
import Logo from "@/assets/logo";
import { useAnimate } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeTransition = () => {
  const [scope, animate] = useAnimate();
  const { theme } = useTheme();
  const [pageTheme] = useState(theme);
  const backgroundColor =
    pageTheme === "dark" ? "bg-secondary" : "bg-background";

  useEffect(() => {
    const doAnimate = async () => {
      try {
        await animate(
          "div",
          { clipPath: "circle(150% at 50% 50%)" },
          { duration: 1 },
        );

        await animate("div", { scale: 6, x: 1920 * 1.5 }, { duration: 1 });
        await animate(
          "div",
          { clipPath: "circle(0% at 50% 50%)" },
          { duration: 1 },
        );
      } catch {}
    };
    doAnimate();
  });

  return (
    <div key={"theme-transition"} ref={scope}>
      <div
        className={`fixed inset-0 flex items-center justify-center ${backgroundColor}`}
      >
        <Logo />
      </div>
    </div>
  );
};

export default ThemeTransition;
