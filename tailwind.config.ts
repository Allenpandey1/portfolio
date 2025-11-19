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
        primary: "#00d4ff",
        accent: "#8338ec",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        'section': '120px',
      },
    },
  },
  plugins: [],
};
export default config;

