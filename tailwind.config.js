/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '120': '30rem',
        '19/20': '95%'
      },
      colors: {
        'sool-gold': '#F9D537',
        'sool-black': '#1D1E23',
        'sool-white': '#FFFFFF',
        'sool-red': '#B82647',
        'sool-blue': '#0B6DB7',
        'sool-footer': '#E3DDCB'
      }
    },
  },
  plugins: [],
}