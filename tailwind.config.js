/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'playwrite': ['Playwrite DE Grund', 'cursive']
      }
    },
    colors: {
      'magenta': { DEFAULT: '#cb3689', 100: '#290a1b', 200: '#511536', 300: '#7a1f51', 400: '#a22a6c', 500: '#cb3689', 600: '#d55d9f', 700: '#e085b7', 800: '#eaaecf', 900: '#f5d6e7' }, 'darkViolet': { DEFAULT: '#310d50', 100: '#0a0310', 200: '#130520', 300: '#1d082f', 400: '#260a3f', 500: '#310d50', 600: '#5c1997', 700: '#8827dc', 800: '#af6fe8', 900: '#d7b7f3' },
      'violet': { DEFAULT: '#55297b', 100: '#110818', 200: '#221031', 300: '#331849', 400: '#432162', 500: '#55297b', 600: '#783aae', 700: '#9a63cb', 800: '#bc97dc', 900: '#ddcbee' },
      'orchid': { DEFAULT: '#e4abdf', 100: '#3c1339', 200: '#782771', 300: '#b43aaa', 400: '#d06ec8', 500: '#e4abdf', 600: '#e9bbe5', 700: '#efccec', 800: '#f4ddf2', 900: '#faeef9' },
      'darkOrchid': { DEFAULT: '#dd99dd', 100: '#381338', 200: '#702570', 300: '#a838a8', 400: '#ca60ca', 500: '#dd99dd', 600: '#e3ace3', 700: '#eac1ea', 800: '#f1d6f1', 900: '#f8eaf8' }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio')
  ],
}

