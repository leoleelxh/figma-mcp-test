/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      colors: {
        primary: {
          0: "#FFFFFF",
          500: "#7C5CFC",
        },
        secondary: {
          300: "#90A3BF",
          400: "#596780",
          500: "#1A202C",
        },
        error: {
          500: "#FF4423",
          600: "#DB2719",
        },
        success: {
          600: "#7FB519",
        },
        warning: {
          600: "#DBA32A",
        },
        background: {
          primary: "#F6F7F9",
          card: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
} 