/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivoryMist: '#FAF8F4',
        charcoalBlack: '#0C0C0C',
        mutedGold: '#C6AA70',
      },
      fontFamily: {
        larken: ['Larken', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
