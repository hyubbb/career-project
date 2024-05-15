/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        fall: {
          "0%": { bottom: "100px", opacity: "0.0" },
          "100%": { bottom: "0px", opacity: "1.0" },
        },
        open: {
          "0%": { height: 0 },
          "100%": { height: "250px" },
        },
      },
    },
  },
  plugins: [],
};
