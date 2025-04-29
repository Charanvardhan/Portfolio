/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',    // or 'media'
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
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
