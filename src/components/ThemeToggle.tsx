import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
      onClick={toggleTheme}
    >
      {darkMode ? (
        <SunIcon className="w-5 h-5 text-yellow-400" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
