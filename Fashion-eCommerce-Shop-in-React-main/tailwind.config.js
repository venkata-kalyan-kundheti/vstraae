/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5a0f1a",
        secondary: "#8b1c2c",
        gold: "#d4af37",
        cream: "#f5e6d3",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
