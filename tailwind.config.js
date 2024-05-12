// const { addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
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
    require("daisyui"),
    // addDynamicIconSelectors(),
  ],

  daisyui: {
    themes: "false", // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"] // name of one of the included themes for dark mode
    utils: true, // adds responsive and modifier utility classes
  },
}

