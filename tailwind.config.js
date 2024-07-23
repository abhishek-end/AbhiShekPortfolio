/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gugi: ["Gugi", "cursive"],
        oswald: ["Oswald , cursive"],
        eleventwenty: ['"Eleven Twenty"', "sans-serif"],
      },
      borderWidth: {
        0.5: "0.5px",
      },
      colors: {
        aquamarine: "#7FFFD4",
        mediumpurple: "#9370DB",
      },
    },
  },
  plugins: [],
};
