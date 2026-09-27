import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nuit: "#0B1B3A",
        corail: "#FF6B4A",
        creme: "#FAF8F5",
      },
      fontFamily: {
        titre: ["var(--font-titre)"],
        texte: ["var(--font-texte)"],
      },
    },
  },
  plugins: [],
};
export default config;
