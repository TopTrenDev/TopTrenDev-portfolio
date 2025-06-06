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
    },
    colors: {
      primary: {
        200: "#ffffff", // almost white
        400: "#f97316", // dark origin
        500: "#fb923c", // light origin
        600: "#99235C", // wine
      },
      grayscale: {
        25: "#E4E2DD", // beige
        50: "#b97b34",
        100: "#efefef",
        200: "#FDFDFF",
        950: "#ea580c",
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
