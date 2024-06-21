
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'Poppins': ['Poppins', 'sans-serif',]
        },
      borderWidth:{
        lineWidth:'1px'
      },
      letterSpacing: {
        Lspace1: '1px',
        Lspace2: '1.5px'
      },
      lineHeight: {
        LH :'18px',
      },
      colors:{
        color1:'#003C43',
        color2:'#135D66',
        color3:'#77B0AA',
        color4:'#E3FEF7',
        // lineColor:'#232C3E',
        // text:'#16FF00',
      },
      backgroundImage: {
            'hero-pattern':
            "linear-gradient(15deg, #d33f34 50%, #a61322 50.1%),",
          },
      },
    },
    plugins: [],
  }