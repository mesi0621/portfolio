import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-theme';

function loadTheme(): Theme {
    try {
        const saved = localStorage.getItem(THEME_STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }
    } catch (error) {
        console.warn('Failed to load theme from localStorage:', error);
    }
    return 'dark'; // Default fallback
}

function saveTheme(theme: Theme): void {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
    }
}

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => loadTheme());

    useEffect(() => {
        // Apply theme to document body
        if (theme === 'light') {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }

        // Save theme to localStorage
        saveTheme(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const value: ThemeContextValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
