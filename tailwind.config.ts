import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-bck-right":
          "slide-in-bck-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both",
        "slide-out-bck-right":
          "slide-out-bck-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "slide-in-bck-left":
          "slide-in-bck-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "slide-in-bck-right": {
          "0%": {
            transform: "translateZ(700px) translateX(400px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0) translateX(0)",
            opacity: "1",
          },
        },
        "slide-out-bck-right": {
          "0%": {
            transform: "translateZ(0) translateX(0)",
            opacity: "1",
          },
          to: {
            transform: "translateZ(-1100px) translateX(1000px)",
            opacity: "0",
          },
        },
        "slide-in-bck-left": {
          "0%": {
            transform: "translateZ(700px) translateX(-400px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0) translateX(0)",
            opacity: "1",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        oswald: "Oswald",
        noto_sans_jp: "Noto Sans JP",
      },

      screens: {
        desktop: { min: "800px" },
        mobile: { min: "300px", max: "799px" },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
