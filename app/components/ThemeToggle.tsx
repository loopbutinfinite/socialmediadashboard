'use client';

import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="flex items-center  justify-between md:justify-end md:gap-2 w-full pt-4 md:pt-0">
            <span className="text-md font-bold text-slate-400 dark:text-slate-300">
                {isDark ? "Dark Mode" : "Light Mode"}
            </span>

            <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={isDark}
                className={`relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isDark
                        ? 'bg-gradient-to-r from-blue-400 via-teal-400 to-green-400'
                        : 'bg-slate-300'
                }`}
            >
                <span className="sr-only">Toggle theme</span>
                <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out ${
                        isDark
                            ? 'translate-x-6 bg-slate-900'
                            : 'translate-x-0 bg-white'
                    }`}
                />
            </button>
        </div>
    );
};

export default ThemeToggle;