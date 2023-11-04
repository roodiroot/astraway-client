/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        accent: "#4469FF",
        fiolet: "#2F2D78",
        lite: "#8385A3",
      },
      maxWidth: {
        "8xl": "1427px",
      },
    },
  },
  plugins: [],
};
