import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-gray-200/50 hover:bg-gray-200/75 dark:bg-gray-200/20 dark:hover:bg-gray-200/10 transition-colors duration-200 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4"></Sun>
      ) : (
        <Moon className="w-4 h-4"></Moon>
      )}
    </button>
  );
};

export default ThemeToggle;
