import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        wwk: {
          wood: "#936b42",
          ink: "#1f2421",
          sage: "#62786c",
          paper: "#f7f6f2"
        }
      },
      boxShadow: {
        wwk: "0 16px 44px rgba(41, 33, 24, 0.09)"
      },
      borderRadius: {
        wwk: "8px"
      }
    }
  },
  plugins: []
};

export default config;
