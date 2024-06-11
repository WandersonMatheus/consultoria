/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg-home.jpg')",
        "plans": "url('/assets/foguete.jpg')",
        "footer": "url('/assets/footer.jpg')"
        
      },
      backgroundColor:{
        "bg-colorprincipal": "#111111"
      }
    },
  },
  plugins: [],
}

