/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg-home.jpg')"
      },
      backgroundColor:{
        "bg-colorprincipal": "#111111"
      }
    },
  },
  plugins: [],
}

