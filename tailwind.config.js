/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0A65DB',
        'cream': '#FFF9F0',
        'cream-hover': '#FFF9F0',
        'black': '#000609'
      }
    },
  },
  plugins: [],
}
