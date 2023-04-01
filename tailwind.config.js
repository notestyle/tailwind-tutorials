/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#245953",
        secondary: "#408E91",
        error: "#E49393",
        gray: "#D8D8D8",
        white: "#fafafa",
      },
    },
  },
  plugins: [],
};
