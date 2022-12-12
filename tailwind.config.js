/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "theme-primary": "#1A0B2E",
        "theme-secondary": "#11071F",
        "theme-tertiary": "#7127BA",
      },
    },
  },
  plugins: [],
};
