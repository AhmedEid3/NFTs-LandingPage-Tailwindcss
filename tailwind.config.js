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
        danger: "#FF0000",
        "green-light": "#70FF00",
        "cyan-light": "#69eacb",
        "primary-light": "#eaccf8",
        "primary-medium": "#402475",
      },
      borderRadius: {
        "8xl": "4rem",
      },

      fontFamily: {
        clash: "Clash Display",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
