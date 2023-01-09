/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1280px",
      },

      container: {
        center: true,
      },
      colors: {
        primary: "#141943",
        secondary: "#2F80ED",
        accent: "#6A58F1",
        "green-light": "#70FF00",
      },
      borderRadius: {
        "8xl": "4rem",
      },

      fontFamily: {
        clash: "Clash Display",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
