import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute md:top-4 top-1 md:right-4 right-1 z-20 p-3 rounded-full glass-subtle hover-glass border-primary/20 transition-all duration-300 hover:scale-110 shadow-elegant"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-primary" />
      ) : (
        <Sun className="h-5 w-5 text-primary" />
      )}
    </button>
  );
}
