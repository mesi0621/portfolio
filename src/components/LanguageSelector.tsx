import { useLanguage, SUPPORTED_LANGUAGES } from '../contexts/LanguageContext';

const LANGUAGE_FLAGS: Record<string, string> = {
    en: '🇬🇧',
    am: '🇪🇹',
};

const LANGUAGE_NAMES: Record<string, string> = {
    en: 'English',
    am: 'አማርኛ',
};

export function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="relative">
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-white/10 hover:bg-white/20 px-3 py-2 pr-8 rounded-lg cursor-pointer transition-colors focus-visible text-sm"
                aria-label="Select language"
            >
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang} value={lang} className="bg-[--color-dark-surface] text-white">
                        {LANGUAGE_FLAGS[lang]} {LANGUAGE_NAMES[lang]}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
}
