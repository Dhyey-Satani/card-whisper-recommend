
import React, { createContext, useContext, useEffect, useState } from "react";

// Types of theme
type Theme = "light" | "dark" | "system";
type ActualTheme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  actualTheme: ActualTheme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const getSystemTheme = (): ActualTheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem("theme") as Theme) || "system";
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);

  const [actualTheme, setActualTheme] = useState<ActualTheme>(
    theme === "system" ? getSystemTheme() : (theme as ActualTheme)
  );

  // Set theme root class and persist
  useEffect(() => {
    const applyTheme = (toApply: Theme) => {
      let next: ActualTheme;
      if (toApply === "system") {
        next = getSystemTheme();
      } else {
        next = toApply;
      }
      setActualTheme(next);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(next);

      document.body.style.transition = "background 0.25s, color 0.25s"; // Smooth transition
    };
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Respond to system theme changes
  useEffect(() => {
    if (theme !== "system") return;
    const listener = (e: MediaQueryListEvent) => {
      setActualTheme(e.matches ? "dark" : "light");
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(e.matches ? "dark" : "light");
    };
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [theme]);

  const setTheme = (next: Theme) => setThemeState(next);

  return (
    <ThemeContext.Provider value={{ theme, actualTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
