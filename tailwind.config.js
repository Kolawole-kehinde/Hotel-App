/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: { 
        primary: {
          DEFAULT: "#152C5B",
           100: "#3252DF",
          200:"#183369",
        },
        secondary: {
          DEFAULT: "#B0B0B0",
          100: "#E5E5E5",
          200: "#FF498B",
        },
       
      },
    },
  },
  plugins: [],
};