/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html","./src/**/*.js"],
  theme: {
    fontFamily:{
      sans: ['Josefin Sans','sans-serif'],
      alata:['Alata'],
    },
    letterSpacing:{
      widest:'.3em',
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
    },
  },
  plugins: [],
}
