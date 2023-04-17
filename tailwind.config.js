/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "family-quicksand": ["Quicksand", "sans-serif"],
        "family-satoshi": ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
