/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "color-red": "var(--color-red)",
                "color-green": "var(--color-green)",
                "color-rose-50": "var(--color-rose-50)",
                "color-rose-100": "var(--color-rose-100)",
                "color-rose-300": "var(--color-rose-300)",
                "color-rose-400": "var(--color-rose-400)",
                "color-rose-500": "var(--color-rose-500)",
                "color-rose-900": "var(--color-rose-900)",
            },
            fontFamily: {
                "red-hat": ["Red Hat Text", "serif"],
            },
        },
    },
    plugins: [],
};
