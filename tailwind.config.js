/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'shimul': ['osward', 'sans-serif'],
      },
      container:{
        center:true,
        padding: {
        DEFAULT: '1rem',  // default padding
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      },
      colors:{
        'shimul':'rgba(121, 125, 252, 1)',
      }

    },
  },
  plugins: [],
}


