/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-analystic": "url('/src/assets/images/bgAnalystic.svg')",
      },
      fontFamily: {
        "family-quicksand": ["Quicksand", "sans-serif"],
        "family-satoshi": ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
