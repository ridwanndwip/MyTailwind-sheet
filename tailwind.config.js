
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
      colors:{
        line:'#232C3E',
        text:'#16FF00',
      },
      backgroundImage: {
            'hero-pattern':
            "linear-gradient(15deg, #d33f34 50%, #a61322 50.1%),",
          },
      },
    },
    plugins: [],
  }