/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        larken: ['Larken', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        ivory: "#FAF8F4",
        charcoal: "#0C0C0C",
        gold: "#C6AA70",
      },
    },
  },
  plugins: [],
};
