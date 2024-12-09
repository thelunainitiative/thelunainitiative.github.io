import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xlg: '1280px',
        xl: '1440px',
      },
      colors: {
        'luna-blue': '#002147',
        'luna-beige': '#e8dfd6'
      },
    },
  },
  plugins: [],
} satisfies Config;
