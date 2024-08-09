/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':'320px',  // extra small
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '992px', // Large screens
        'xl': '1024px', // Extra-large screens
      },
    },
    
  },
  plugins: [],
}

