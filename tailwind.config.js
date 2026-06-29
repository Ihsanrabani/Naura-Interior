/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7A5C45",
          light: "#9A7560",
          dark: "#5E4535",
        },
        secondary: {
          DEFAULT: "#EFE7DD",
          dark: "#DDD0C4",
        },
        accent: {
          DEFAULT: "#C7A17A",
          light: "#D8B899",
          dark: "#A8855E",
        },
        dark: {
          DEFAULT: "#222222",
          light: "#444444",
          lighter: "#666666",
        },
        light: {
          DEFAULT: "#EFE7DD",
          dark: "#DDD0C4",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, rgba(34,34,34,0.92) 0%, rgba(34,34,34,0.75) 50%, rgba(122,92,69,0.3) 100%)",
      },
    },
  },
  plugins: [],
};
