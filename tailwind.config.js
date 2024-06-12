/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/BGHOME.jpg')",
        "plans": "url('/assets/foguete.jpg')"
        
      },
      backgroundColor:{
        "bg-colorprincipal": "#111111"
      }
    },
  },
  plugins: [],
}

