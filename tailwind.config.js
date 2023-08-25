/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "895px",
      // => @media (min-width: 768px) { ... }

      mmd: "945px",
      // => @media (min-width: 945px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
        latoo: ["var(--font-lato)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/imgs/BackgroundImage.png')",
        "bg-2": "url('/imgs/bg2.svg')",
        "pages-bg": "url('/imgs/pagesBg.svg')",
      },
      colors: {
        "primary-blue-1": "#0D417F",
        "primary-blue-2": "#6994C8",
      },
    },
  },
  plugins: [],
};
