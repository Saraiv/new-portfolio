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
        background: "rbg(var(--background))",
        foreground: "rbg(var(--foreground))",
        accent: "rbg(var(--accent))",
      },
      boxShadow: {
        "glass-inset": "inset 5px 5px 10px rgba(0, 0, 0, 0.1)",
        "glass-sm": "inset 5px 5px 20px rgba(0, 0, 0, 0.3)"
      },
      fontSize: {
        title: "20rem"
      },
      textColor: {
        "txt-foreground": "rgb(var(--background))",
      },
    },
  },
  plugins: [],
};
export default config;
