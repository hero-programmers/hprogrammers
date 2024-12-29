"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  // When mounted on client, now we can show the UI
  // This is to prevent the UI from flickering
  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setIsAnimating(false);
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleThemeChange}>
        {theme === "dark" ? (
          <FaSun
            className="size-4"
            onClick={() => {
              setTheme("light");
            }}
          />
        ) : (
          <FaMoon
            className="size-4"
            onClick={() => {
              setTheme("dark");
            }}
          />
        )}
      </button>
      {isAnimating && (
        <>
          <motion.div
            className="fixed inset-0 z-[49] bg-gray-200 dark:bg-secondary"
            initial={{ clipPath: "circle(150% at 50% 50%)" }}
            animate={{ clipPath: "circle(0% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 1 }}
          />
        </>
      )}
    </div>
  );
};

export default ThemeButton;
