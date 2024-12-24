"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();

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
