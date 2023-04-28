/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "#DD5D5D",
        secondary: "#BD827E",
        header: "#FFF3F1",
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
      
        'md': '768px',
        // => @media (min-width: 768px) { ... }
      
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
      
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
};
