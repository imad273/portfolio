import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
      },
    },
    extend: {
      colors: {
        'main': '#FD481D',
        'main_hover': '#E3401A',
        'second_bg': '#EDEEED',
      }
    },
  },
  plugins: [],
};
export default config;
