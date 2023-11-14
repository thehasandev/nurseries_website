const plugin = require('tailwindcss/plugin')
// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
  })
})


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
        'roboto': ['Roboto'],
      },
      maxWidth: {
        'container': '1320px',
      },
      colors: {
        'primary': '#ff324d',
        'secondary': '#292B2C',
      },
      backgroundImage: {
        'bgOne': "url('/src/assets/banner8.png')",
        'bgTwo': "url('/src/assets/banner2.jpg')",
        'bgThree': "url('/src/assets/banner3.jpg')",
        'bgFour': "url('/src/assets/banner4.jpg')",
 
      },
    },
  },
  plugins: [rotateX],
}

