
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { Sun, Moon } from "lucide-react";

// Add the ripple CSS class on toggle for a global circular animation
const ThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();
  const [animating, setAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Animate circular effect + apply theme
  const handleClick = () => {
    // Get position for origin of the ripple
    const iconRect = buttonRef.current?.getBoundingClientRect();
    setAnimating(true);

    // Add class to body
    document.body.classList.add("theme-ripple-animate");
    if (iconRect) {
      // CSS vars for the ripple center
      document.documentElement.style.setProperty("--theme-ripple-x", `${iconRect.left + iconRect.width / 2}px`);
      document.documentElement.style.setProperty("--theme-ripple-y", `${iconRect.top + iconRect.height / 2}px`);
    }

    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      setAnimating(false);
      setTimeout(() => {
        document.body.classList.remove("theme-ripple-animate");
      }, 400);
    }, 380);
  };

  // Sync theme with system/local
  useEffect(() => {
    // Remove ripple after a short time, just in case
    const timeout = setTimeout(() => {
      document.body.classList.remove("theme-ripple-animate");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [actualTheme]);

  return (
    <button
      ref={buttonRef}
      aria-label="Switch theme"
      onClick={handleClick}
      className="fixed z-[9999] top-4 right-4 bg-background/95 rounded-full shadow-lg h-12 w-12 flex items-center justify-center ring-2 ring-primary/40 hover:scale-110 transition-all"
      style={{ transition: "background 0.26s, box-shadow 0.28s" }}
    >
      {actualTheme === "dark" ? (
        <Moon size={26} className="text-[#9b87f5] drop-shadow" />
      ) : (
        <Sun size={26} className="text-[#f59e42] drop-shadow" />
      )}
    </button>
  );
};
export default ThemeToggle;
