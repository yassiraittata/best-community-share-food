import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubic", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        primary: "#ffb534",
        secodary: "#6c3dff",
        teriary: "#fff3cc",
        "light-gray": "#a9a9a9",
        "dark-gray": "#5c5c5c",
      },
    },
  },
  plugins: [],
};
export default config;
