// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        giggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "50%": { transform: "rotate(-1deg)" },
          "75%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        giggle: "giggle 0.3s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
