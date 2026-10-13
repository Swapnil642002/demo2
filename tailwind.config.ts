import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f5f1",
          100: "#dce8dd",
          200: "#b9d1bc",
          300: "#8fb294",
          400: "#63906d",
          500: "#43744f",
          600: "#325c3e",
          700: "#294a33",
          800: "#12372a",
          900: "#0e2c22",
          950: "#0b211c",
        },
        maroon: {
          50: "#fbf1f2",
          100: "#f6dfe2",
          200: "#eab9c0",
          300: "#d98f9a",
          400: "#c05a6a",
          500: "#a52336",
          600: "#8c1d2e",
          700: "#731726",
          800: "#5c1220",
          900: "#470e1a",
          950: "#2e0a11",
        },
        saffron: {
          100: "#fdeecd",
          200: "#f9d99a",
          300: "#f3c168",
          400: "#e8933c",
          500: "#dd7326",
          600: "#c25e15",
        },
        ivory: {
          50: "#fdfcf9",
          100: "#faf7f0",
          200: "#f4eee1",
          300: "#e9dec7",
          400: "#d9c9a6",
        },
        gold: {
          50: "#faf6ec",
          100: "#f2e9d2",
          200: "#e4d2a4",
          300: "#d4b876",
          400: "#c9a96a",
          500: "#b9975b",
          600: "#9c7c44",
          700: "#8a6e3e",
          800: "#6f5733",
          900: "#57442a",
        },
        ink: {
          600: "#4a5560",
          700: "#334155",
          800: "#1e293b",
          900: "#12211d",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,33,28,.06), 0 12px 32px -12px rgba(11,33,28,.18)",
        lift: "0 20px 48px -16px rgba(11,33,28,.28)",
      },
      maxWidth: {
        shell: "76rem",
      },
    },
  },
  plugins: [],
};
export default config;

