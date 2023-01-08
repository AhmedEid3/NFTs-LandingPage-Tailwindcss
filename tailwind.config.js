/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#141943",
        secondary: "#2F80ED",
      },
      borderRadius: {
        "8xl": "4rem",
      },
    },
  },
  plugins: [],
};
