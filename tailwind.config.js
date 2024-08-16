/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gugi: ["Gugi", "cursive"],
        oswald: ["Oswald , cursive"],
        eleventwenty: ['"Eleventy"', "sans-serif"],
        spacemono: ["Space Mono", "monospace"],
        ariata: ["Ariata" , "cursive"],
      },
      borderWidth: {
        0.5: "0.5px",
      },
      colors: {
        aquamarine: "#7FFFD4",
        mediumpurple: "#9370DB",
      },
      height: {
        "h-50": "50vh",
        "h-20": "20vh",
      },
    },
  },
  plugins: [],
};
