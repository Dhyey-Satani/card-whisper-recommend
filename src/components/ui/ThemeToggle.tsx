
import React, { useEffect, useRef } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import gsap from "gsap";

// SVG paths designed for morphing (matching node count)
const sunPath =
  "M12 2V6 M12 18V22 M4.93 4.93L7.76 7.76 M16.24 16.24L19.07 19.07 M2 12H6 M18 12H22 M4.93 19.07L7.76 16.24 M16.24 7.76L19.07 4.93 M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8z";
const moonPath =
  "M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z M21 12.79A9 9 0 1 1 11.21 3";

// Helper: get next theme
const cycleTheme = (theme: "light" | "dark" | "system"): "light" | "dark" | "system" =>
  theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();
  const iconRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Animate icon morph on theme change
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        duration: 0.58,
        morphSVG: actualTheme === "dark" ? moonPath : sunPath,
        rotate: actualTheme === "dark" ? 20 : 0,
        ease: "elastic.out(1, 0.55)",
      });
    }
    // Animate sliding effect from top right
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { boxShadow: "0 0 0 0 rgba(155,135,245,0.22)", scale: 0.9 },
        {
          boxShadow:
            "0 8px 24px 0 rgba(155,135,245,0.24), 0 2px 8px 0 rgba(0,0,0,0.07)",
          scale: 1,
          background:
            actualTheme === "dark"
              ? "rgba(55, 65, 81, 0.18)"
              : "rgba(205, 207, 250, 0.11)",
          duration: 0.48,
          ease: "power2.out",
        }
      );
    }
  }, [actualTheme]);

  // Click handler
  const handleClick = () => {
    setTheme(cycleTheme(theme));
  };

  return (
    <button
      ref={containerRef}
      aria-label="Switch theme"
      onClick={handleClick}
      className="fixed z-50 top-4 right-4 bg-background/95 rounded-full shadow-lg h-14 w-14 flex items-center justify-center ring-1 ring-primary/30"
      style={{ transition: "background 0.26s, box-shadow 0.28s" }}
    >
      <svg
        width="33"
        height="33"
        viewBox="0 0 24 24"
        className="transition-all"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          ref={iconRef}
          d={actualTheme === "dark" ? moonPath : sunPath}
          fill="none"
          stroke={actualTheme === "dark" ? "#9b87f5" : "#f59e42"}
        />
      </svg>
    </button>
  );
};
export default ThemeToggle;
