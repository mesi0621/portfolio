import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import enTranslations from '../locales/en.json';
import amTranslations from '../locales/am.json';

// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            am: { translation: amTranslations },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

const SUPPORTED_LANGUAGES = ['en', 'am'];

interface LanguageContextValue {
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

function loadLanguage(): string {
    try {
        const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
            return saved;
        }
    } catch (error) {
        console.warn('Failed to load language from localStorage:', error);
    }
    return 'en'; // Default fallback
}

function saveLanguage(language: string): void {
    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (error) {
        console.warn('Failed to save language to localStorage:', error);
    }
}

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<string>(() => loadLanguage());
    const { t } = useTranslation();

    useEffect(() => {
        // Change i18next language
        i18n.changeLanguage(language);

        // Save language to localStorage
        saveLanguage(language);
    }, [language]);

    const setLanguage = (lang: string) => {
        if (SUPPORTED_LANGUAGES.includes(lang)) {
            setLanguageState(lang);
        }
    };

    const value: LanguageContextValue = {
        language,
        setLanguage,
        t,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export { SUPPORTED_LANGUAGES };
