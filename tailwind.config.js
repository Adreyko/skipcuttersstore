/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    clipPath :{
      mypolygon :"polygon(100% 0, 0 0, 0 100%)",
    },
    extend: {
      colors:{
        'some' :'rgba(199,187,186,255)',
        'products' : 'rgb(105, 93, 97)',
        'modal' : 'rgb(181,173,148)',
        'lightblue' : 'rgba(14,134,212,255)',
        'lightbrown' : 'rgba(246,240,238,255)'
      },
      fontFamily: {
        sourse :"'Mukta Malar', sans-serif",
        monoton:"'Readex Pro', sans-serif"
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

