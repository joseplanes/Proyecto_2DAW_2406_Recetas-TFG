/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: "false", // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"] // name of one of the included themes for dark mode
    utils: true, // adds responsive and modifier utility classes
  },
}

