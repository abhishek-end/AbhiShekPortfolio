/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // gugi: ["Gugi", "cursive"],
        oswald: ["Oswald , cursive"],
        // apple: ["Sue Ellen Francisco", "cursive"],
        // spacemono: ["Space Mono", "monospace"],
        // ariata: ["Ariata", "cursive"],
        // nhaas: ["NHaasGroteskDSPro", "Arial", "sans-serif"],
        // paytone: [ "Almarai", "sans-serif"],
      },
      backgroundImage: {
        abhishek:
          "url('https://res.cloudinary.com/dlonoxpli/image/upload/f_auto,q_auto/v1/my-images/abhishekimage')",
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
