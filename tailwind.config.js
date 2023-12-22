/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,j2}"],
  darkMode: 'class',
  theme: {
    width: {
        'gn-landscape': '11.7in'
      },
      height: {
        'gn-landscape': '8.26in'
      },
      extend: {
        colors: {
          'teagreen': {
              '50': '#cad9ae',
              '100': '#bace96',
              '200': '#aac37e',
              '300': '#9ab765',
              '400': '#89aa4f',
              '500': '#769243',
              '600': '#627938',
              '700': '#4e612d',
              '800': '#3b4921',
              '900': '#273016',
              '950': '#15260d',
            },
      },
    }
  },
  plugins: [],
}
