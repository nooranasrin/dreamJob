/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,tsx}', './src/*.tsx'],
  theme: {
    extend: {
      borderRadius: {
        normal: '70px',
      },
    },
  },
  plugins: [],
};
