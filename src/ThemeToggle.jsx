import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    const getSystemTheme = () => {
      if (window.matchMedia) {
        const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
        return darkModeQuery.matches ? "dark" : "light";
      }
      return "light";
    };

    if (theme === "system") {
      setCurrentTheme(getSystemTheme());
    } else {
      setCurrentTheme(theme);
    }

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        setCurrentTheme(getSystemTheme());
      }
    };
    darkModeQuery.addEventListener("change", handleChange);

    return () => {
      darkModeQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-lightAccent/25 hover:bg-lightAccent/50 dark:bg-gray-200/20 dark:hover:bg-gray-200/10 transition-colors duration-200 cursor-pointer"
    >
      {currentTheme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
