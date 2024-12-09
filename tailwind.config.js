/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scaleUp: "scaleUp 0.5s ease-in-out",
        "fade-in": "fadeIn 1.5s ease-in-out",
        "bounce-in": "bounceIn 1s ease-in-out",
        slideRight: "slideRight 1.2s ease-in-out",
        slideLeft: "slideLeft 1.2s ease-in-out",
        slideDown: "slideDown 1.2s ease-in-out",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
