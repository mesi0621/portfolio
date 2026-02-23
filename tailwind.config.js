/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8B5CF6',
                    dark: '#7C3AED',
                    light: '#A78BFA',
                },
                dark: {
                    bg: '#0F172A',
                    surface: '#1E293B',
                    border: '#334155',
                },
                light: {
                    bg: '#F8FAFC',
                    surface: '#FFFFFF',
                    border: '#E2E8F0',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
