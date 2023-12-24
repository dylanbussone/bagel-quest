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
        "spin-slow": "spin 7s linear infinite",
      },
      colors: {
        "darkest-indigo": "#093145",
        "darkest-alice": "#107896",
        "darkest-kelly": "#829356",
        "darkest-orange": "#BA5C12",
      },
    },
  },
  plugins: [],
};
export default config;
