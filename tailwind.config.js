// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // all files in your App Router
      "./src/app/**/*.{js,ts,jsx,tsx}",
      // any components you create outside of app/
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ["Montserrat", "sans-serif"],
          playfair:   ["Playfair Display", "serif"],
        },
        colors: {
          primary:   "#1e40af",
          secondary: "#f59e0b",
        },
      },
    },
    plugins: [],
  }
  