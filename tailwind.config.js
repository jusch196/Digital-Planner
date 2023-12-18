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
              '50': '#f2f9ec',
              '100': '#e3f2d5',
              '200': '#cce8b5',
              '300': '#a5d581',
              '400': '#85c259',
              '500': '#66a73b',
              '600': '#4e852b',
              '700': '#3d6625',
              '800': '#335222',
              '900': '#2e4621',
              '950': '#15260d',
            },
      },
    }
  },
  plugins: [],
}
