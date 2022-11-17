/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'some' :'rgba(199,187,186,255)',
        'products' : 'rgb(105, 93, 97)'
      },
      fontFamily: {
        sourse :"'Mukta Malar', sans-serif",
        monoton:"'Readex Pro', sans-serif"
      },
    },
  },
  plugins: [],
}

