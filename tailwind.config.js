/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
   
  },
  margin:{
    lg:'2rem',
  },

      fontFamily: {
        'shimul': ['osward', 'sans-serif'],
      },
      colors:{
        'shimul':'rgba(121, 125, 252, 1)',
      }

    },
  },
  plugins: [],
}


