
import React from "react";
import { useTheme } from "./ThemeProvider";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { Sun, Moon, Settings } from "lucide-react";

// Helper
const LABELS = {
  light: "Light Mode",
  dark: "Dark Mode",
  system: "System Mode",
};
const ICONS = {
  light: <Sun className="h-4 w-4" />,
  dark: <Moon className="h-4 w-4" />,
  system: <Settings className="h-4 w-4" />,
};

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Theme"
          className="rounded-full p-2 focus:outline-none focus-visible:ring bg-muted hover:bg-accent transition-colors"
          title="Change theme"
        >
          {ICONS[theme]}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(["system", "light", "dark"] as const).map((key) => (
          <DropdownMenuItem
            key={key}
            onClick={() => setTheme(key)}
            className={theme === key ? "font-semibold bg-accent" : ""}
            aria-checked={theme === key}
            role="menuitemradio"
          >
            <span className="flex items-center gap-2">
              {ICONS[key]}
              {LABELS[key]}
            </span>
            {theme === key && (
              <span className="ml-auto text-xs">(Active)</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
