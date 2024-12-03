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
                "rose-50": "var(--rose-50)",
                "rose-100": "var(--rose-100)",
                "rose-300": "var(--rose-300)",
                "rose-400": "var(--rose-400)",
                "rose-500": "var(--rose-500)",
                "rose-900": "var(--rose-900)",
            },
        },
    },
    plugins: [],
};
