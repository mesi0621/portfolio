import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import type { MenuItem } from '../types';

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

export function NavigationBar() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const menuItems: MenuItem[] = [
        { id: 'about', label: t('nav.about'), targetSection: 'about' },
        { id: 'skills', label: t('nav.skills'), targetSection: 'skills' },
        { id: 'projects', label: t('nav.projects'), targetSection: 'projects' },
        { id: 'contact', label: t('nav.contact'), targetSection: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigate = (targetSection: string) => {
        scrollToSection(targetSection);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E14]/95 backdrop-blur-md border-b border-[#374151]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavigate('hero')}
                        className="text-2xl font-bold text-white hover:text-[#10B981] transition-colors"
                    >
                        M zeek
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigate(item.targetSection)}
                                className={`text-sm font-medium transition-colors hover:text-[#10B981] ${activeSection === item.targetSection
                                        ? 'text-[#10B981]'
                                        : 'text-gray-300'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        <div className="flex items-center space-x-2">
                            <ThemeToggle />
                            <LanguageSelector />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#151922] border-t border-[#374151]">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigate(item.targetSection)}
                                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${activeSection === item.targetSection
                                        ? 'text-[#10B981] bg-white/5'
                                        : 'text-gray-300'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="pt-2">
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
