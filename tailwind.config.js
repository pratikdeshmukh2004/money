/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fd6f41",
        secondary: "#2f292b",
        lightbrown: "#ADA1A1",
        lightgray: "#E0E9EF",
        flashwhite: "#ECF1F4",
        third: "#cf009a",
        fourth: "#ffa004",
      },
      boxShadow: {
        card: "rgba(17,17,26,0.1) 0px 0px 16px",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
