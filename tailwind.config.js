// const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: { // Colores personalizados
        'primary': {
          100: '#FFE6E1',
          200: '#FFC9C2',
          300: '#FFADA4',
          400: '#FF9065',
          500: '#F6836B',
          600: '#DD765F',
          700: '#B9634F',
          800: '#94503F',
          900: '#7A4032',
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],

}

