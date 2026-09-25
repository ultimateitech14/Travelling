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
        obsidian: {
          DEFAULT: "#080807",
          dark: "#060605",
          light: "#0d0d0b",
        },
        surface: {
          1: "#0e0e0c",
          2: "#141410",
          3: "#1a1a16",
        },
        olive: {
          DEFAULT: "#4e7f68",
          light: "#72a98b",
          dim: "#2d493f",
          dark: "#1c2f28",
          pale: "rgba(78, 127, 104, 0.14)",
          glow: "rgba(114, 169, 139, 0.25)",
        },
        gold: {
          DEFAULT: "#4e7f68",
          light: "#72a98b",
          dim: "#2d493f",
          pale: "rgba(78, 127, 104, 0.14)",
        },
        ivory: {
          DEFAULT: "#f5f1e6",
          muted: "#e8e4db",
          dark: "#bfbbb3",
        },
        brandMuted: {
          DEFAULT: "#8a8680",
          dark: "#5a5750",
          deep: "#3a3834",
        },
        brandBorder: {
          light: "rgba(255, 255, 255, 0.07)",
          medium: "rgba(255, 255, 255, 0.12)",
          gold: "rgba(78, 127, 104, 0.25)",
          olive: "rgba(78, 127, 104, 0.25)",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        }
      },
      animation: {
        "radar": "radar-sweep 8s linear infinite",
        "spin-slow": "spin-slow 90s linear infinite",
        "marquee": "marquee 28s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "float": "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
