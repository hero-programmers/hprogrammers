"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // When mounted on client, now we can show the UI
  // This is to prevent the UI from flickering
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center">
      {theme === "dark" ? (
        <button>
          <FaSun
            className="size-4"
            onClick={() => {
              setTheme("light");
            }}
          />
        </button>
      ) : (
        <button>
          <FaMoon
            className="size-4"
            onClick={() => {
              setTheme("dark");
            }}
          />
        </button>
      )}
    </div>
  );
};

export default ThemeButton;
