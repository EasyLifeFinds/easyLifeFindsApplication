/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: '0' },
          '25%':{opacity:'1'},
          '50%': { opacity: '.5' },
          '75%': { opacity: '1' },
          '100%': { opacity: '0'}
        }
      }
    },
  },
  plugins: [],
}

