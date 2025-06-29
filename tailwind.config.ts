/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3B82F6',
                    dark: '#1E40AF',
                },
                background: {
                    DEFAULT: '#FFFFFF',
                    dark: '#1F2937',
                },
            },
        },
    },
    plugins: [],
};