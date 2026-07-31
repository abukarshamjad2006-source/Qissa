import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0E1B15",
          900: "#132A20",
          800: "#1E3A2C",
          700: "#284A38",
          600: "#345C46",
        },
        cream: {
          50: "#FBF8F1",
          100: "#F3EDDF",
          200: "#EAE1CC",
        },
        gold: {
          300: "#E1CA9C",
          400: "#CBA968",
          500: "#B08D4E",
          600: "#8F7140",
        },
        ink: {
          900: "#15170F",
        },
      },
      fontFamily: {
        display: ["var(--font-kufi)", "sans-serif"],
        body: ["var(--font-plex)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
