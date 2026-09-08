import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#faf8f4",
          100: "#f3efe7",
          200: "#e6dfd2",
          300: "#d3c7b3",
          400: "#b6a787",
          500: "#98885f",
          600: "#7a6b4d",
          700: "#5d5140",
          800: "#453c2e",
          900: "#2c271d",
          950: "#191510",
        },
        gold: {
          100: "#f7f0e2",
          200: "#f0e5cf",
          300: "#e6d3ab",
          400: "#d6bd8e",
          500: "#c4a05f",
          600: "#a8854a",
          700: "#876939",
        },
        cream: "#f7f3ec",
        ink: {
          DEFAULT: "#1b1712",
          soft: "#4f483c",
          mute: "#7c7261",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.32em",
      },
      boxShadow: {
        soft: "0 24px 70px -32px rgba(25,21,16,0.35)",
        lift: "0 40px 90px -40px rgba(25,21,16,0.5)",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "kenburns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.12) translate(-1.5%, 1.5%)" },
          "100%": { transform: "scale(1)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-15deg)" },
          "100%": { transform: "translateX(220%) skewX(-15deg)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out forwards",
        "fade-in": "fade-in 1.2s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
        kenburns: "kenburns 22s ease-in-out infinite",
        shine: "shine 1.1s ease-in-out",
        "fade-in-left": "fade-in-left 1s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in-right": "fade-in-right 1s cubic-bezier(0.22,1,0.36,1) both",
        "scale-in": "scale-in 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "line-grow": "line-grow 1.4s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;