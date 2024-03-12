/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "82, 30, 133",
        "white-color": "#ffffff",
        "secondary-white": "#ededed",
        "black-color": "#000000",
        "black-light": " #242424",
        "secondary-black": "#343434",
        yellow: "rgb(255 178 87)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
