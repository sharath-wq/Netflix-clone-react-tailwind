/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: { sans: ["Roboto", "sans-serif"] },
        extend: {
            boxShadow: {
                "3xl": "0 0 1rem rgba(0,0,0,.6), 0 6px 6px rgba(0,0,0,.5)",
            },
        },
    },
    plugins: [],
};
