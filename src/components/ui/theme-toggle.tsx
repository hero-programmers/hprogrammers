"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeTransition from "../animation/theme-transition";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const DURATION = 3;

  // When mounted on client, now we can show the UI
  // This is to prevent the UI from flickering
  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 1000);

    setTimeout(() => {
      setIsAnimating(false);
    }, DURATION * 1000);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleThemeChange}>
        {theme === "dark" ? (
          <FaSun className="size-4" />
        ) : (
          <FaMoon className="size-4" />
        )}
      </button>
      {isAnimating && (
        <>
          <ThemeTransition />
        </>
      )}
    </div>
  );
};

export default ThemeButton;
