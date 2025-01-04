"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeTransition from "../animation/theme-transition";
import { AnimatePresence } from "framer-motion";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const DURATION = 5;

  // When mounted on client, now we can show the UI
  // This is to prevent the UI from flickering
  useEffect(() => {
    setMounted(true);
    console.log("re--render");
  }, []);

  const handleThemeChange = () => {
    setIsAnimating(true);
    setShowIcon(false);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 1000);

    setTimeout(() => {
      setIsAnimating(false);
      setShowIcon(true);
    }, DURATION * 1000);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center">
      {showIcon && (
        <button onClick={handleThemeChange}>
          {theme === "dark" ? (
            <FaSun className="size-4" />
          ) : (
            <FaMoon className="size-4" />
          )}
        </button>
      )}
      <AnimatePresence mode="wait" key="theme-transition">
        {isAnimating && (
          <>
            <ThemeTransition />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeButton;
