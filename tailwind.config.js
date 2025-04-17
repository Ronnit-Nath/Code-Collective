/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './**/*.html',
    './**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [],
};

const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ],
};
