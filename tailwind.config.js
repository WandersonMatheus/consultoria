/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('./assets/BGHOME.JPG')",
        "plans": "url('./assets/FOGUETE.JPG')"
        
      },
      backgroundColor:{
        "bg-colorprincipal": "#111111"
      }
    },
  },
  plugins: [],
}

