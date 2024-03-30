/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'reqDblue' : '#151834',
        'reqLblue' : '#40B4D2',
        'reqRed' : '#FF0000',
        'reqGreen' : '#3FED14'
      
      } 
    },
  },
  plugins: [],
}

