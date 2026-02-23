import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark' ? (
                <FaSun className="w-5 h-5 text-yellow-400" />
            ) : (
                <FaMoon className="w-5 h-5 text-[--color-primary]" />
            )}
        </button>
    );
}
