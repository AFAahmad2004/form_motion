/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
        bac: '#A7D7C5',
          bt:'#84C7AE',
      }
    },
  },
  plugins: [],
}