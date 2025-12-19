// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This creates the class 'font-anton' to use the Anton font
        anton: ['Anton', 'sans-serif'], 
      },
    },
  },
   plugins: [
    require("tailwindcss-animate"),
  ],
}