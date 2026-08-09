import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B192C",
          navy: "#0F172A",
          slate: "#1E293B",
          teal: "#0D9488",
          cyan: "#00B4D8",
          emerald: "#00C9A7",
          lightTeal: "#E0F2FE",
          mint: "#CCFBF1",
          gold: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
