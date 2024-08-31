/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ffa51d",
        black: "#222",
        grey: "#94959B",
        "white-grey": "#f6f6f6",
        line: "#EAEAEA",
        green: "#33C390",
        yellow: "#FFC042",
        purple: "#7B61FF",
        blue: "#3865F3",
        red: "#FF4F60",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        19: "4.75rem",
        25: "6.25rem",
        26: "6.5rem",
        38: "9.5rem",
        135: "33.75rem",
        150: "37.5rem",
      },
      lineHeight: {
        11: "2.75rem",
        15: "3.75rem",
        27: "6.75rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
