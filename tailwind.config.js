/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animation: {
      wiggleOne: 'wiggleOne 1s ease-in-out infinite',
    },
    extend: {
      keyframes: {
        wiggleOne: {
          '0%': { opacity: '0' },
          '25%':{opacity:'.5'},
          '50%': { opacity: '1' },
          '75%': { opacity: '.5' },
          '100%': { opacity: '0'}
        }
      }
    },
  },
  plugins: [],
}

