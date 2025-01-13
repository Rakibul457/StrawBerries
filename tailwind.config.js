/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#DF2029",
        seceondry:"#BD081C",
        primaryDark:"#AF0606",
      },
      container:{
        center:true,
        padding:{
          Default: "1rem",
          sm:"2rem"
        },
      }
    },
  },
  plugins: [],
}