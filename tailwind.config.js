import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #29c26f",
      },
      colors: {
        green: {
          200: "#f0fff4", // light mint green
          400: "#22c55e", // medium green (like Tailwind's emerald-500)
          500: "#4ade80", // soft green
          600: "#166534", // deep forest green
        },
        grayscale: {
          25: "#E4E2DD", // beige
          50: "#4CAF50", // brown-gold
          100: "#efefef", // light gray
          200: "#FDFDFF", // off white
          950: "#022c22", // deep green-black
        },
        secondary: "#22c55e",
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
